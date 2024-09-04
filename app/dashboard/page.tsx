'use client';

import { useAuth } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
    const { isSignedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isSignedIn) {
            router.push('/sign-in');
        }
    }, [isSignedIn, router]);

    if (!isSignedIn) {
        return null;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>đăng nhập thành công!</p>
        </div>
    );
};


