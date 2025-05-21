import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { Nav } from "./Nav";
import { useState } from "react";
import { Search } from "lucide-react";

const Table = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const [Filter, setFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleKeyDown = () => {
    // if (e.key === "Enter") {
      const text = searchText.trim().toLowerCase();
      setFilter(text);
    //   if (e.key === "") {
    //     setFilter("");
    //   } else {
        // setFilter([
        //   {
        //     id: "first_name",
        //     value:text ,
        //   },
          
        // ]);
      // }
    // }
  };

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter: Filter,
      sorting,
    },
    initialState: {
      pagination: {
        pageSize: 15,
      },
    },
    globalFilterFn:(row, columnId, text) =>{
      const first=row.getValue('first_name').toLowerCase();
      const last=row.getValue('last_name').toLowerCase();
      return first.includes(text)|| last.includes(text);
    },
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    
  });

  return (
    <div className=" bg-gray-300 justify-items-center">
      <div className="flex w-full justify-start pl-9">
         <div className="relative">
        <Search className="absolute left-3 mt-6 text-gray-500" size={16} />
        {/* <input
          type="text"
          placeholder="Search..."
          value={Filter}
          onChange={(e) => setSearchText(e.target.value)}
          className="m-4 pl-6 p-2 border-2 border-green-500 rounded-2xl w-64 focus:outline-none focus:ring-2 focus:ring-green-700"
        /> */}
        <input
          className="p-2 pl-7 border-green-700 border-l-2 border-t-2 rounded text-black mb-4  mt-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-700"
          placeholder="Search First or Last Name (press Enter)"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          // onKeyDown={handleKeyDown}
        />
        <button className="border-gray-100 border-l-2 border-t-2 ml-2 mt-3 rounded-2xl bg-green-700 p-2 active:bg-green-400 text-white hover:bg-green-600" onClick={handleKeyDown}>Search</button>
      </div>
      </div>
     

      <div className="overflow-x-auto border rounded shadow w-full">
        <div className=" overflow-y-auto">
          <table className="min-w-full table-auto border-separate">
            <thead className="sticky top-0 z-10 bg-green-700 text-white">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className="p-3 cursor-pointer text-left"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted()] ?? ""}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="even:bg-gray-100 hover:bg-gray-200 transition"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-2 border-t border-r border-gray-200 whitespace-nowrap"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination Controls */}
          <div className="mt-4  gap-4 flex justify-center">
            {/* Rows per page */}
            {/* <div className="flex items-center gap-2">
          <label htmlFor="pageSize">Rows per page:</label>
          <select
            id="pageSize"
            className="border rounded px-2 py-1"
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            {[5, 15, 20, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div> */}

            
            <div className="flex gap-2 items-center">
              <button
                className="px-3 py-1 bg-green-600 text-white rounded disabled:opacity-50"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                First
              </button>
              <button
                className="px-3 py-1 bg-green-600 text-white rounded disabled:opacity-50"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </button>
              <div className="px-3 py-1 text-white">
                Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
              </div>
              <button
                className="px-3 py-1 bg-green-600 text-white rounded disabled:opacity-50"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </button>
              <button
                className="px-3 py-1 bg-green-600 text-white rounded disabled:opacity-50"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                Last
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Table;
