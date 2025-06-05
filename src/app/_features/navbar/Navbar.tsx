import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-gray-800 text-white p-4 flex justify-between items-center'>
      <div className='flex items-center space-x-2'>
        <img
          src='/images/logo_ihm.jpg'
          alt='Logo'
          className='w-10 h-10 rounded-full'
        />
        <Link href='/clients' className='text-xl font-bold'>
          IHM
        </Link>
      </div>

      <div className='space-x-4'>
        <Link href='/clients' className='hover:underline'>
          Clients
        </Link>
        <Link href='/profiles' className='hover:underline'>
          Transactions
        </Link>
        <Link href='/create-profile' className='hover:underline'>
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
