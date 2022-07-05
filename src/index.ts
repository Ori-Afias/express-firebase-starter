import { server } from './config';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.SERVER_PORT;

(async () => {
	server
		.listen(port)
		.on('error', (error: any) => {
			console.log('✖ Server error', error);
		})
		.on('listening', () => {
			console.log(`✔ Server started on port ${port}`);
		});
})();
