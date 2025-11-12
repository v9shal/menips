import { Response } from 'express';
import { endpointService, CreateEndpointData, UpdateEndpointData } from "../../service/endpoint.service.js"
import { AuthenticatedRequest } from "../middleware/authMiddleware.js";
import { Prisma } from '@prisma/client';

// Basic URL validation
const isValidUrl = (url: string) => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

export const createEndpoint = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const { name, url, checkIntervalSec, alertOnConsecutiveFails } = req.body;

        if (!name || !url) {
            return res.status(400).json({ error: 'Name and URL are required.' });
        }
        if (!isValidUrl(url)) {
            return res.status(400).json({ error: 'Invalid URL format provided.' });
        }

        const data: CreateEndpointData = { name, url, userId, checkIntervalSec, alertOnConsecutiveFails };
        const newEndpoint = await endpointService.create(data);

        return res.status(201).json(newEndpoint);

    } catch (error) {
        console.error('[EndpointController] Error creating endpoint:', error);
        return res.status(500).json({ error: 'Failed to create endpoint.' });
    }
};

export const getUserEndpoints = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const endpoints = await endpointService.findByUserId(userId);
        return res.status(200).json(endpoints);
    } catch (error) {
        console.error('[EndpointController] Error fetching endpoints:', error);
        return res.status(500).json({ error: 'Failed to fetch endpoints.' });
    }
};

export const updateEndpoint = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const endpointId = parseInt(req.params.id, 10);
        const data: UpdateEndpointData = req.body;

        if (isNaN(endpointId)) {
            return res.status(400).json({ error: 'Invalid endpoint ID.' });
        }

        const updatedEndpoint = await endpointService.update(endpointId, userId, data);

        if (!updatedEndpoint) {
            return res.status(404).json({ error: 'Endpoint not found or you do not have permission to edit it.' });
        }

        return res.status(200).json(updatedEndpoint);
    } catch (error) {
        console.error('[EndpointController] Error updating endpoint:', error);
        return res.status(500).json({ error: 'Failed to update endpoint.' });
    }
};

export const deleteEndpoint = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.user!.id;
        const endpointId = parseInt(req.params.id, 10);

        if (isNaN(endpointId)) {
            return res.status(400).json({ error: 'Invalid endpoint ID.' });
        }

        const wasDeleted = await endpointService.delete(endpointId, userId);

        if (!wasDeleted) {
            return res.status(404).json({ error: 'Endpoint not found or you do not have permission to delete it.' });
        }

        return res.status(204).send(); // Success, no content
    } catch (error) {
        console.error('[EndpointController] Error deleting endpoint:', error);
        return res.status(500).json({ error: 'Failed to delete endpoint.' });
    }
};
