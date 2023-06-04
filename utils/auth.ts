// import { auth } from '../firebase';
// import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

export default function useUser() {
	const [user, setUser] = useState<any | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			console.log('Auth state changed!')
			if (user) {
				setUser(user);
				setLoading(false);
			} else {
				setUser(null);
				setLoading(false);
			}
		});

		return unsubscribe;
	},[]);

	return { user, loading };
}
