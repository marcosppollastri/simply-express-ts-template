import 'dotenv/config';
import * as moduleAlias from 'module-alias';
moduleAlias.addAlias('@src', __dirname);
import * as express from 'express';
import { Express } from 'express';
import { AppRouter } from '@src/routes';
import { genericErrorHandler } from '@src/middlewares/errorHandler';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use('/', AppRouter);

app.use(genericErrorHandler);

const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

export {app, server};

