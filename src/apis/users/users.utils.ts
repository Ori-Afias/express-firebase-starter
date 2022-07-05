import { HelloWorldData } from './users.types';

export const getHelloWorldMessage = (): string => 'Hello world';

export const getHelloWorldData = (): HelloWorldData => ({ hello: 'world' });
