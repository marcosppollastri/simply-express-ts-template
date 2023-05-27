import { HttpError } from '@supercharge/http-errors/dist/http-error';
import { Request, Response, NextFunction} from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function genericErrorHandler(error: HttpError, req: Request, res: Response, next: NextFunction): void {
    const { status, message } = error;
    console.log(`Error: ${message}`);
    res.status(status).json({
        code: error.code || 'INTERNAL_SERVER_ERROR',
        message: message || 'Internal server error',
        status: status,
    });
}