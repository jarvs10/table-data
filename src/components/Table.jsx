const Table = ({ table, flexRender, setFiltering, filtering }) => {
  return (
    <div className="py-4 px-4">
      <div className="mb-4">
        <label className="mr-2 text-lg font-bold">Search</label>
        <input
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          className="outline outline-1 py-2 px-2 rounded-md"
        />
      </div>

      <table className="border shadow-md">
        <thead className="bg-slate-900 text-white">
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      onClick={header.column.getToggleSortingHandler()}
                      className="py-3 px-10"
                      key={header.id}
                    >
                      <>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}

                        {
                          { asc: "🔼", desc: "🔽" }[
                            header.column.getIsSorted() ?? null
                          ]
                        }
                      </>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr className="text-center even:bg-slate-300" key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td className="px-4 py-2" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-center gap-3 mt-4">
        <button
          onClick={() => table.setPageIndex(0)}
          className="bg-slate-600 font-bold text-white py-2 px-6 rounded-md hover:bg-indigo-700"
        >
          First Page
        </button>
        <button
          onClick={() => table.previousPage()}
          className="bg-slate-600 font-bold text-white py-2 px-6 rounded-md hover:bg-indigo-700"
        >
          Prev Page
        </button>
        <button
          onClick={() => table.nextPage()}
          className="bg-slate-600 font-bold text-white py-2 px-6 rounded-md hover:bg-indigo-700"
          disabled={!table.getCanNextPage()}
        >
          Next Page
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          className="bg-slate-600 font-bold text-white py-2 px-6 rounded-md hover:bg-indigo-700"
        >
          Last Page
        </button>
      </div>

      <div className="text-center mt-6">
        <h3 className="text-xl font-bold">Current Page Size</h3>
        <select
          value={table.pageSize}
          onChange={(e) => table.setPageSize(e.target.value)}
          className="py-2 outline outline-2 rounded-md mt-2"
        >
          {[10, 25, 50].map((pageEle) => {
            return (
              <option key={pageEle} value={pageEle}>
                {pageEle}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Table;
