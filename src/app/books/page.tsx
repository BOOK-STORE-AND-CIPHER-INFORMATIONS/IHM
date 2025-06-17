import Image from 'next/image';
import { DataTableBook } from '../_features/datatableBook/datatableBook';

export default function Home() {
  return (
    <div className='py-8 px-24 flex items-center justify-center'>
      <DataTableBook />
    </div>
  );
}
