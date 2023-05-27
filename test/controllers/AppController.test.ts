import { AppController } from '@src/controllers';
import * as AppServices from '@src/services';
import { HttpError } from '@supercharge/http-errors/dist';

jest.mock('@src/services');

describe('AppController', () => {
    let req: any;
    let res: any;
    let next: jest.Mock<any, any>;

    beforeEach(() => {
        req = {
            query: {
                message: 'Test message'
            }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        next = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should call AppService with the provided data', async () => {
        const mockAppService = jest.spyOn(AppServices, 'AppService');
        const responseData = { response: 'Hello world! Your data is {"message":"Test message"}' };
        mockAppService.mockResolvedValue(responseData);

        await AppController(req, res, next);

        expect(mockAppService).toHaveBeenCalledWith(req.query);
    });

    test('should send the response with the correct status code and data', async () => {
        const mockAppService = jest.spyOn(AppServices, 'AppService');
        const responseData = { response: 'Hello world! Your data is {"message":"Test message"}' };
        mockAppService.mockResolvedValue(responseData);

        await AppController(req, res, next);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(responseData);
    });

    test('should call the next function with an HttpError on error', async () => {
        const mockAppService = jest.spyOn(AppServices, 'AppService');
        const errorMessage = 'Example error';
        const error = new Error(errorMessage);
        mockAppService.mockRejectedValue(error);

        await AppController(req, res, next);

        expect(next).toHaveBeenCalledWith(
            expect.objectContaining({
                message: errorMessage,
                code: 'INTERNAL_SERVER_ERROR',
                status: 500
            })
        );
    });
});
