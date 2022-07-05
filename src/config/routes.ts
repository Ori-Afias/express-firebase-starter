import { Express } from 'express';
import { api } from '../router';

export const setRoutes = (app: Express) => {
	app.get('/', (req, res) => {
		res.send('Pong');
	});

	app.use('/api', api);

	app.use('/*', (req, res) => {
		res.status(404).json({ error: true, message: 'Requested path does not exist.' });
	});
};
