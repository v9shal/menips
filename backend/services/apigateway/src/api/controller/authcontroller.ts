import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import prisma from "../../config/prisma.js";
import { authService } from "../../service/authservice.js";
import { AuthenticatedRequest } from "../middleware/authMiddleware.js"

const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    path: '/'
};

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password, name } = req.body;

        if (!email || !password || !name) {
            return res.status(400).json({ error: "Name, email, and password are required." });
        }

        const hashedPassword = await authService.hashPassword(password);

        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword
            }
        });

        // Create a default notification channel for the new user
        await prisma.notificationChannel.create({
            data: {
                type: 'EMAIL',
                target: newUser.email,
                isDefault: true,
                userId: newUser.id,
            }
        });

        const token = authService.generateToken(newUser.id);
        res.cookie('authToken', token, COOKIE_OPTIONS);

        return res.status(201).json({
            message: "User registered successfully.",
            token,
            user: { id: newUser.id, email: newUser.email, name: newUser.name }
        });

    } catch (error) {
        // Handle specific database errors for a better API experience
       
        console.error('[AuthController] Error in register:', error);
        return res.status(500).json({ error: 'An internal server error occurred.' });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required.' });
        }

        const user = await prisma.user.findUnique({ where: { email } });

        // IMPORTANT: Use a generic error message for both cases to prevent email enumeration
        if (!user || !(await authService.comparePassword(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials.' });
        }

        const token = authService.generateToken(user.id);
        res.cookie('authToken', token, COOKIE_OPTIONS);

        return res.status(200).json({
            message: 'Login successful.',
            token,
            user: { id: user.id, email: user.email, name: user.name }
        });

    } catch (error) {
        console.error('[AuthController] Error in login:', error);
        return res.status(500).json({ error: 'An internal server error occurred.' });
    }
};

export const getProfile = async (req: AuthenticatedRequest, res: Response) => {
    try {
        // No need for '!' because AuthenticatedRequest type makes 'user' potentially available
        const userId = req.user?.id;
        if (!userId) {
             return res.status(401).json({ error: 'Unauthorized.' });
        }
        
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                notificationChannels: true
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        return res.json({ user });

    } catch (error) {
        console.error('[AuthController] Error in getProfile:', error);
        return res.status(500).json({ error: 'Failed to retrieve user profile.' });
    }
};