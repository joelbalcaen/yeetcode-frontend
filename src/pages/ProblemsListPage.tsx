import {
  ColumnDef,
  Header,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { getAllProblems } from "../apis/problems/problems-api";
import { Problem } from "../apis/problems/problems-models";
import { useEffect, useState } from "react";

const columnHelper = createColumnHelper<Problem>();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("title", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("description", {
    cell: (info) => info.getValue(),
  }),
  // type cast is necessary here because https://github.com/TanStack/table/issues/4241
] as ColumnDef<Problem, unknown>[];

export default function ProblemsListPage() {
  const [data, setData] = useState<Array<Problem>>([]);

  useEffect(() => {
    getAllProblems().then((problems) => setData(problems));
  }, []);

  const table = useReactTable<Problem>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const renderHeader = (header: Header<Problem, unknown>) => {
    return (
      <th key={header.id}>
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}
      </th>
    );
  }

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>{headerGroup.headers.map(renderHeader)}</tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
