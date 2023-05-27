import { genericErrorHandler } from '@src/middlewares/errorHandler';
import { HttpError } from '@supercharge/http-errors/dist/http-error';

describe('genericErrorHandler', () => {
    let error: HttpError;
    let req: any;
    let res: any;
    let next: jest.Mock<any, any>;
    const consoleLogSpy = jest.spyOn(console, 'log');

    beforeEach(() => {
        error = new HttpError('Error message').withStatus(500);
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        next = jest.fn();
        
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should log the error message', () => {
        genericErrorHandler(error, req, res, next);

        expect(consoleLogSpy).toHaveBeenCalled();
    });

    test('should send the error response', () => {
        genericErrorHandler(error, req, res, next);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Error message',
            status: 500
        });
    });

    test('should set the error code to INTERNAL_SERVER_ERROR if not provided', () => {
        delete error.code;
        genericErrorHandler(error, req, res, next);

        expect(res.json).toHaveBeenCalledWith({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Error message',
            status: 500
        });
    });

    test('should set the default error message if not provided', () => {
        error.message = undefined;
        genericErrorHandler(error, req, res, next);

        expect(res.json).toHaveBeenCalledWith({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Internal server error',
            status: 500
        });
    });

});
