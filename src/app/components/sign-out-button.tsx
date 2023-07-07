'use client';

import { signOut } from 'next-auth/react';
import { FunctionComponent } from 'react';

export const SignOutButton: FunctionComponent = () => {
  return (
    <button onClick={() => signOut()} className="rounded-lg bg-blue-500 px-4 py-2">
      Sign Out
    </button>
  );
};
