import express from 'express';
import { usersRoute } from '../apis/users';

const router = express.Router();

router.use('/users', usersRoute);

export const api = router;
