'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoginForm } from './_features/form/_components/LoginForm';

export default function Home() {
  const [canLogin, setCanLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    // ✅ Si l'utilisateur est déjà connecté → redirection
    if (token) {
      router.push('/logs');
      return;
    }

    // ⏳ Sinon, afficher le formulaire après 2 secondes
    const timeout = setTimeout(() => {
      setCanLogin(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className='flex items-center justify-center min-h-screen'>
      {canLogin ? (
        <LoginForm />
      ) : (
        <div className='text-gray-500 text-lg'>Veuillez patienter...</div>
      )}
    </div>
  );
}
