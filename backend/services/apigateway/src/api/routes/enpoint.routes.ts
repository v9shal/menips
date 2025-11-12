import { Router } from 'express';
import { createEndpoint, getUserEndpoints, updateEndpoint, deleteEndpoint } from '../controller/endpoint.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();

router.use(authMiddleware);

router.post('/', createEndpoint);
router.get('/', getUserEndpoints);
router.put('/:id', updateEndpoint);
router.delete('/:id', deleteEndpoint);

export default router;