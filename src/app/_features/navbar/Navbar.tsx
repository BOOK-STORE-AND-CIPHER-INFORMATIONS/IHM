'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

function parseJwt(token: string) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {
    return null;
  }
}

export default function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        const payload = parseJwt(token);
        const roles: string[] = payload?.roles || [];
        setIsAdmin(roles.includes('ROLE_ADMIN'));
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAdmin(false);
    router.push('/');
  };

  if (!mounted) return null;

  return (
    <nav className='bg-gray-800 text-white p-4 flex justify-between items-center'>
      <div className='flex items-center space-x-2'>
        <img
          src='/images/logo_ihm.jpg'
          alt='Logo'
          className='w-10 h-10 rounded-full'
        />
        <Link href='/' className='text-xl font-bold'>
          IHM
        </Link>
      </div>

      <div className='space-x-4 flex items-center'>
        {/* Affiche le bouton uniquement sur /logs ET si admin */}
        {pathname === '/logs' && isAdmin && (
          <button
            onClick={handleLogout}
            className='bg-red-600 hover:bg-red-700 px-3 py-1 rounded'
          >
            Se déconnecter
          </button>
        )}
      </div>
    </nav>
  );
}
