// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
console.log("firebase   ");
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
	databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
	projectId: "recipe-app-ip",
	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};
// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);

export default app;

// env syntax
