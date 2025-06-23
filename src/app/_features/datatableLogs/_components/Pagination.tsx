// src/_features/datatableLogs/_components/Pagination.tsx
import { Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import type { Log } from '../schemas/Log';

type Props = { table: Table<Log> };

export default function Pagination({ table }: Props) {
  return (
    <div className='flex items-center justify-center space-x-2 py-4'>
      <Button
        variant='outline'
        size='sm'
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Précédent
      </Button>
      <span>
        {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
      </span>
      <Button
        variant='outline'
        size='sm'
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Suivant
      </Button>
    </div>
  );
}
