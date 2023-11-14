'use client'
import Table from "@/components/Table";
import data from "../data/MOCK_DATA.json";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import { columns } from "@/data/infoColum";

export default function Home() {

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="flex justify-center py-4 pb-20">
      <Table 
        columns={columns}
        table={table}
        flexRender={flexRender}
        sorting={sorting}
        filtering={filtering}
        setFiltering={setFiltering}
      />
    </div>
  )
}
