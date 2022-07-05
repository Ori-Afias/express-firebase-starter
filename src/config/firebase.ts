import { initializeApp } from 'firebase/app';
import * as STORE from 'firebase/firestore/lite';
import * as AUTH from 'firebase/auth';
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
	apiKey: process.env.FIRESTORE_API_KEY,
	authDomain: process.env.FIRESTORE_AUTH_DOMAIN,
	projectId: process.env.FIRESTORE_PROJECT_ID,
	storageBucket: process.env.FIRSTRORE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIRESTORE_MESSAGING_SENDER_ID,
	appId: process.env.FIRESTORE_APP_ID,
	measurementId: process.env.FIRESTORE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const FIRESTORE_INSTANCE = STORE.getFirestore(app);
export const db = STORE;

export const AUTH_INSTANCE = AUTH.getAuth(app);
export const auth = AUTH;

export interface Response<T> {
	success: boolean;
	data: T;
	type: string;
	message: string;
	status: number;
}
