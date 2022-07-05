import express from 'express';
import { json } from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import { setRoutes } from './routes';
import compression from 'compression';

export const server = express();

const corsOptions = {
	origin: ['*'],
	methods: ['GET', 'POST', 'DELETE', 'PUT'],
	credentials: true,
};

server.use(cors(corsOptions));
server.use(helmet());
server.use(json({ limit: '10000kb' }));
server.use(compression());

setRoutes(server);
