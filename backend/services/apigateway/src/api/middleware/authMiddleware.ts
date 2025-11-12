import { Request, Response, NextFunction } from 'express';
import { authService } from '../../service/authservice.js';

// Extend the Express Request type for better type safety
export interface AuthenticatedRequest extends Request {
    user?: {
        id: number;
    };
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.cookies?.authToken || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided.' });
    }

    const userPayload = authService.verifyToken(token);

    if (!userPayload) {
        return res.status(401).json({ error: 'Unauthorized: Invalid or expired token.' });
    }

    // Attach user to the request object for downstream use
    req.user = { id: userPayload.userId };
    next();
};