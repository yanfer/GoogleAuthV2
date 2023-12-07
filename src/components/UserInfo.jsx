'use client';

import { useSession } from 'next-auth/react';
import SignInBtn from './SignInBtn';
import Image from 'next/image';

export default function UserInfo() {
  const { status, data: session } = useSession();

  if (status === 'authenticated') {
    return (
      <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-yellow-200">
        <Image
          className="rounded-full"
          src={session?.user?.image}
          width={60}
          height={60}
          alt="user-image"
          referrerPolicy="no-referrer"
        />
        <div>
          {' '}
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          {' '}
          Name: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <div></div>
      </div>
    );
  } else {
    return <SignInBtn />;
  }
}
