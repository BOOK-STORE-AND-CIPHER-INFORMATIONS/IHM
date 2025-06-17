import { ColumnDef } from '@tanstack/react-table';
import { Log } from '../schemas/Log';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, MoreHorizontal, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const columns: ColumnDef<Log>[] = [
  {
    accessorKey: 'username',
    header: 'Username',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('username')}</div>
    ),
  },
  {
    accessorKey: 'currentDate',
    header: 'Current Date',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('currentDate')}</div>
    ),
  },
  {
    accessorKey: 'transactionType',
    header: 'Transaction Type',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('transactionType')}</div>
    ),
  },
  {
    accessorKey: 'dateExchanged',
    header: 'Date Exchanged',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('dateExchanged')}</div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const Profil = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem className='text-red-600 hover:text-white hover:bg-red-600 focus:bg-red-600 focus:text-white font-semibold'>
              Signal
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
