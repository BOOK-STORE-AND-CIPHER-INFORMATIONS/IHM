import { ColumnDef } from '@tanstack/react-table';
import { Log } from '../schemas/Log';
import { Json } from '../schemas/Json';

export const columns: ColumnDef<Log>[] = [
  {
    accessorKey: 'account',
    header: 'Compte',
    cell: ({ getValue }) => getValue<string>()?.split('/').pop() ?? '—',
  },
  {
    accessorKey: 'createdAt',
    header: 'Date',
    cell: ({ getValue }) => new Date(getValue<string>()).toLocaleString(),
  },
  {
    accessorKey: 'type',
    header: 'Méthode + Endpoint',
  },
  {
    accessorKey: 'data',
    header: 'Données',
    cell: ({ getValue }) => (
      <pre className='whitespace-pre-wrap text-sm'>
        {JSON.stringify(getValue<Json>(), null, 2)}
      </pre>
    ),
  },
];
