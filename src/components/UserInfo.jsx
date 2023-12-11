'use client';

import { useSession, signOut } from 'next-auth/react';
import SignInBtn from './SignInBtn';
import Image from 'next/image';
import { Button } from '@nextui-org/react';

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
        <Button
          onClick={() => signOut()}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign Out
        </Button>
      </div>
    );
  } else {
    return <SignInBtn />;
  }
}
