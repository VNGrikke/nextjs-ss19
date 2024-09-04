'use client';

import { useUser } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
    const { user, isLoaded } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (isLoaded && !user) {
            router.push('/sign-in');
        }
    }, [isLoaded, user, router]);

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return null;
    }

    return (
        <div>
            <h1>Thông tin cá nhân</h1>
            <p>Họ và tên: {user.fullName || user.firstName + ' ' + user.lastName}</p>
            <p>Email: {user.emailAddresses[0].emailAddress}</p>
        </div>
    );
};


