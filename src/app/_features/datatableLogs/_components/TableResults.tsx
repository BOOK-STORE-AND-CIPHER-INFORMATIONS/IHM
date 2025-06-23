import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Log } from '../schemas/Log';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { flexRender, Table } from '@tanstack/react-table';

interface TableResultsProps {
  table: Table<Log>;
  router: AppRouterInstance;
}

export default function TableResults({ table }: TableResultsProps) {
  const rows = table.getRowModel().rows;

  return (
    <TableBody>
      {rows.length ? (
        rows.map((row) => (
          <TableRow
            key={row.id}
            data-state={row.getIsSelected() && 'selected'}
            className='cursor-pointer hover:bg-muted transition'
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell
            colSpan={table.getAllColumns().length}
            className='h-24 text-center'
          >
            Aucun log trouvé.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}
