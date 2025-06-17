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
    <div className='flex items-center py-4'>
      <Input
        placeholder='Filter return Date...'
        value={
          (table.getColumn('dateExchanged')?.getFilterValue() as string) ?? ''
        }
        onChange={(event: any) =>
          table.getColumn('dateExchanged')?.setFilterValue(event.target.value)
        }
        className='max-w-sm'
      />

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
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className='capitalize'
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
