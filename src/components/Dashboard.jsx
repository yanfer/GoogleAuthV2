'use client';

import { useSession } from 'next-auth/react';
import SignInPage from '@/app/pages/login/signInPage';

import Navbar from './navbar';

export default function UserInfo() {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <div>
        <div>
          <Navbar />
        </div>
      </div>
    );
  } else {
    return <SignInPage />;
  }
}
