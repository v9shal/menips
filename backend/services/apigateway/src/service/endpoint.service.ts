import { pingQueue } from '../config/bullmq.js';
import prisma from '../config/prisma.js';
import type { Endpoint }from  "../../../../prisma/generated/client/client.js"

export interface CreateEndpointData {
    name: string;
    url: string;
    userId: number;
    checkIntervalSec?: number;
    alertOnConsecutiveFails?: number;
}

export interface UpdateEndpointData {
    name?: string;
    checkIntervalSec?: number;
    alertOnConsecutiveFails?: number;
}

class EndpointService {

    async create(data: CreateEndpointData): Promise<Endpoint> {
        const endpoint = await prisma.endpoint.create({
            data: {
                name: data.name,
                url: data.url,
                userId: data.userId,
                checkIntervalSec: data.checkIntervalSec || 60,
                alertOnConsecutiveFails: data.alertOnConsecutiveFails || 3,
            }
        });

        await this.schedulePingJob(endpoint);

        return endpoint;
    }
    async findByUserId(userId: number): Promise<Endpoint[]> {
        return prisma.endpoint.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });
    }
    
    async update(endpointId: number, userId: number, data: UpdateEndpointData): Promise<Endpoint | null> {
        const existingEndpoint = await this.findById(endpointId, userId);
        if (!existingEndpoint) {
            return null; // Not found or not owned by user
        }

        const updatedEndpoint = await prisma.endpoint.update({
            where: { id: endpointId },
            data: data
        });

        if (data.checkIntervalSec && updatedEndpoint.isActive) {
            await this.removePingJob(endpointId);
            await this.schedulePingJob(updatedEndpoint);
        }

        return updatedEndpoint;
    }

    async delete(endpointId: number, userId: number): Promise<boolean> {
        const result = await prisma.endpoint.deleteMany({
            where: {
                id: endpointId,
                userId: userId // Ensures user can only delete their own endpoints
            }
        });

        if (result.count > 0) {
            await this.removePingJob(endpointId);
            return true;
        }
        return false;
    }

    async findById(endpointId: number, userId: number): Promise<Endpoint | null> {
        return prisma.endpoint.findFirst({
            where: { id: endpointId, userId }
        });
    }


    private async schedulePingJob(endpoint: Endpoint) {
        const jobId = `endpoint-${endpoint.id}`;
        await pingQueue.add('ping-job', 
            { endpointId: endpoint.id },
            {
                jobId: jobId,
                repeat: {
                    every: endpoint.checkIntervalSec * 1000 // BullMQ expects milliseconds
                }
            }
        );
    }

    private async removePingJob(endpointId: number) {
        const jobId = `endpoint-${endpointId}`;
        const repeatableJobs = await pingQueue.getRepeatableJobs();
        const jobToRemove = repeatableJobs.find(job => job.id === jobId);
        
        if (jobToRemove) {
            await pingQueue.removeRepeatableByKey(jobToRemove.key);
        }
    }
}

export const endpointService = new EndpointService();