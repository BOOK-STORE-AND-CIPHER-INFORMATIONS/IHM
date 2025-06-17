import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { RentUser } from '../schemas/RentUser';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ColumnDef, flexRender, Table } from '@tanstack/react-table';

type TableResultsProps = {
  table: Table<RentUser>;
  router: AppRouterInstance;
  columns: ColumnDef<RentUser>[];
};

export default function TableResults({
  table,
  router,
  columns,
}: TableResultsProps) {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
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
          <TableCell colSpan={columns.length} className='h-24 text-center'>
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}
