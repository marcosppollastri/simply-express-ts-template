import { AppData } from '@src/interfaces';
import { AppService } from '@src/services';
import { HttpError } from '@supercharge/http-errors/dist';
import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function AppController(req: Request, res: Response, next: NextFunction) {
    const data: AppData = req.query as unknown as AppData;
    try {
        const response = await AppService(data);
        res.status(200).json(response);
    } catch (error) {
        const err = new HttpError('Example error')
            .withCode('INTERNAL_SERVER_ERROR')
            .withStatus(500);
        next(err);
    }
}