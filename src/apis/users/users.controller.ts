import { Request, Response } from 'express';
import { getHelloWorldData, getHelloWorldMessage } from './users.utils';

export const helloWorld = async (req: Request, res: Response) => {
	return res.status(200).json({ success: true, message: getHelloWorldMessage(), data: getHelloWorldData(), status: 200 });
};
