'use client';

import { DatatableLogs } from '../_features/datatableLogs/datatableLogs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Rents() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const localToken = localStorage.getItem('token');

    if (!localToken) {
      router.replace('/');
    } else {
      setToken(localToken);
      setCheckingAuth(false);
    }
  }, [router]);

  if (checkingAuth) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p className='text-gray-500 text-lg'>
          Vérification de l’authentification…
        </p>
      </div>
    );
  }

  return (
    <div className='py-8 px-24 flex flex-col items-center justify-center'>
      <DatatableLogs />
    </div>
  );
}
