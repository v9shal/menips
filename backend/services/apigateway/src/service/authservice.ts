import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

class AuthService {
    private readonly jwtSecret: string;
    private readonly saltRounds = 12;

    constructor() {
    const secret = process.env.JWT_SECRET;
        if (secret) {
            console.error("JWT_SECRET is not defined in environment variables.");
            process.exit(1);
        }
        this.jwtSecret=secret as string
    }

    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    }

    async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }

    generateToken(userId: number): string {
        return jwt.sign({ userId }, this.jwtSecret, { expiresIn: '7d' });
    }

    verifyToken(token: string): { userId: number } | null {
        try {
            const decoded = jwt.verify(token, this.jwtSecret) as { userId: number };
            return decoded;
        } catch (error:any) {
            console.error('[AuthService] Token verification failed:', error.message);
            return null;
        }
    }
}

export const authService = new AuthService();