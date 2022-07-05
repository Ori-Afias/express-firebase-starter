import express from 'express';
import { helloWorld } from './users.controller';

const router = express.Router();

router.get('/', helloWorld);

export const usersRoute = router;
