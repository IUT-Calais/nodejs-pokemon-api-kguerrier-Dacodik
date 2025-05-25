import { Router } from 'express';
import { Request, Response, NextFunction } from 'express';
import { getUser, postUser, postUserLogin } from './users.controller';

export const userRouter = Router ();

userRouter.post('/', postUser);
userRouter.post('/login', postUserLogin);