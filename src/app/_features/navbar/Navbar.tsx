'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false); // nouveau état
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('auth');
      setIsLoggedIn(auth === 'true');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setIsLoggedIn(false);
    router.push('/');
  };

  if (!mounted) {
    // Ne rien afficher tant que ce n’est pas monté côté client (prévenir erreur de SSR)
    return null;
  }

  return (
    <nav className='bg-gray-800 text-white p-4 flex justify-between items-center'>
      <div className='flex items-center space-x-2'>
        <img
          src='/images/logo_ihm.jpg'
          alt='Logo'
          className='w-10 h-10 rounded-full'
        />
        <Link href='/users' className='text-xl font-bold'>
          IHM
        </Link>
      </div>

      <div className='space-x-4 flex items-center'>
        <Link href='/users' className='hover:underline'>
          Users
        </Link>
        <Link href='/books' className='hover:underline'>
          Books
        </Link>
        <Link href='/rents' className='hover:underline'>
          Rents
        </Link>
        <Link href='/logs' className='hover:underline'>
          Logs
        </Link>
        <Link href='/create-profile' className='hover:underline'>
          Dashboard
        </Link>

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className='ml-4 bg-red-600 hover:bg-red-700 px-3 py-1 rounded'
          >
            Se déconnecter
          </button>
        )}
      </div>
    </nav>
  );
}
