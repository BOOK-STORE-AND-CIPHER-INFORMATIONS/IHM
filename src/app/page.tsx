'use client';

import React, { useEffect, useState } from 'react';
import { LoginForm } from './_features/form/_components/LoginForm';

export default function Home() {
  const [canLogin, setCanLogin] = useState(false);

  useEffect(() => {
    // Délai de sécurité de 2 secondes
    const timeout = setTimeout(() => {
      setCanLogin(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {canLogin ? (
        <LoginForm />
      ) : (
        <div className="text-gray-500 text-lg">Veuillez patienter...</div>
      )}
    </div>
  );
}
