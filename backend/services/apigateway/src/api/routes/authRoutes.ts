import { Router } from 'express';
import { register, login, getProfile } from "../controller/authcontroller.js";
import { authMiddleware } from "../middleware/authMiddleware.js"
import rateLimit from 'express-rate-limit';

const router = Router();

const authLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 10, // Limit each IP to 10 requests per window
	standardHeaders: true,
	legacyHeaders: false,
    message: 'Too many requests from this IP, please try again after 15 minutes'
});

router.post('/register', authLimiter, register);
router.post('/login', authLimiter, login);
router.get('/profile', authMiddleware, getProfile);

export default router;