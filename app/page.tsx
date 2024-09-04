'use client';

import { useAuth } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';
import { SignInButton, SignOutButton, useClerk } from '@clerk/clerk-react';

export default function Page() {
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/sign-in');
  };

  return (
    <div>
      <h1>Trang Chủ</h1>
      {isSignedIn ? (
        <>
          <button onClick={() => router.push('/profile')}>Xem Thông Tin Cá Nhân</button>
          <button onClick={handleSignOut}>Đăng xuất</button>
        </>
      ) : (
        <SignInButton>
          <button>Đăng nhập</button>
        </SignInButton>
      )}
    </div>
  );
};


