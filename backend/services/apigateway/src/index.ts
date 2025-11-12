    
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import prisma from './config/prisma.js'; 

import authRoutes from './api/routes/authRoutes.js';
import endpointRoutes from './api/routes/enpoint.routes.js';
const app = express();
const PORT = process.env.API_GATEWAY_PORT || 3001;

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
}));
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'API Gateway is healthy' });
});

app.use('/api/auth', authRoutes);
app.use('/api/endpoints', endpointRoutes); 

const startServer = async () => {
    try {
        await prisma.$connect();
        console.log('[API Gateway] Successfully connected to the database.');

        app.listen(PORT, () => {
            console.log(`[API Gateway] Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('[API Gateway] Failed to connect to the database.', error);
        process.exit(1);
    }
};

startServer();