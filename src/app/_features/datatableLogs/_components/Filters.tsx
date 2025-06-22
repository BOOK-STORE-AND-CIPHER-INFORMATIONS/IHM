import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Table } from '@tanstack/react-table';
import { Log } from '../schemas/Log';

type FiltersProps = {
  table: Table<Log>;
};

export default function Filters({ table }: FiltersProps) {
  return (
    <div className='flex items-center py-4 space-x-4'>
      {/* Filter by endpoint/type */}
      <Input
        placeholder='Filter by endpoint'
        value={(table.getColumn('type')?.getFilterValue() as string) ?? ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          table.getColumn('type')?.setFilterValue(e.target.value)
        }
        className='max-w-sm'
      />

      {/* Filter by creation date */}
      <Input
        type='date'
        placeholder='Filter by date'
        value={(table.getColumn('createdAt')?.getFilterValue() as string) ?? ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          table.getColumn('createdAt')?.setFilterValue(e.target.value)
        }
        className='max-w-sm'
      />

      {/* Column visibility menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' className='ml-auto'>
            Columns <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => (
              <DropdownMenuCheckboxItem
                key={column.id}
                className='capitalize'
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
