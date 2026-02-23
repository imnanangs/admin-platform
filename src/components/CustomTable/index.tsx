import { useEffect, useState } from "react";
import { Pagination, Button } from "@heroui/react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { TableOptions } from "@tanstack/react-table";

import { FaFaceFrownOpen, FaCircleExclamation } from "react-icons/fa6";
import { FaSpinner } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const TableSkeleton = ({ colSpan }: { colSpan: number }) => (
  <tr>
    <td
      colSpan={colSpan}
      className="px-6 py-20 text-center bg-gray-100 animate-pulse"
    >
      <div className="flex flex-col items-center justify-center gap-4 text-gray-500">
        <FaSpinner size={48} className="text-primary animate-spin" />
        <p className="text-xl font-bold text-gray-700">Sedang Memuat Data...</p>
        <p className="text-base text-gray-500">
          Mohon tunggu sebentar, data sedang diproses.
        </p>
      </div>
    </td>
  </tr>
);

interface Props<T> {
  data: T[];
  columns: TableOptions<T>["columns"];
  pageSize: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
  isLoading: boolean;
  isError?: boolean;
  errorMessage?: string;
  totalData: number;
  pageCount: number;
  hidePagination?: boolean;
}

const CustomTable = <T,>({
  data,
  columns,
  pageSize,
  currentPage,
  isLoading,
  isError = false,
  errorMessage = "Terjadi kesalahan saat memuat data.",
  totalData,
  pageCount,
  handlePageChange,
  hidePagination = false,
}: Props<T>) => {
  const table = useReactTable<T>({
    data,
    columns,
    rowCount: totalData,
    pageCount: pageCount,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: { pageIndex: currentPage - 1, pageSize },
    },
    globalFilterFn: "includesString",
    manualPagination: true,
  });

  const [startIdx, setStartIdx] = useState(1);
  const [endIdx, setEndIndex] = useState(1);

  useEffect(() => {
    if (pageCount > 0 && currentPage > pageCount) {
      handlePageChange(1);
    }
  }, [currentPage, pageCount, handlePageChange]);

  useEffect(() => {
    table.setPageIndex(currentPage - 1);
    table.setPageSize(pageSize);
  }, [currentPage, pageSize, table]);

  useEffect(() => {
    setStartIdx((currentPage - 1) * pageSize + 1);
    setEndIndex(Math.min(currentPage * pageSize, totalData));
  }, [currentPage, pageSize, totalData]);

  return (
    <div className="overflow-hidden bg-white rounded-lg">
      <div className="w-full overflow-x-auto">
        <table className="w-full mb-1 text-sm border border-gray-300 rounded-xl">
          <thead className="text-black border-b-2 border-gray-300 border-dashed bg-accent-primary">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-4 font-semibold tracking-wider text-center text-black"
                  >
                    <div className="flex items-center justify-center gap-2">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="divide-y-2 divide-gray-200/70">
            {isError ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-20 text-center bg-red-50/20"
                >
                  <div className="flex flex-col items-center justify-center gap-4">
                    <FaCircleExclamation
                      size={48}
                      className="text-danger/70 animate-pulse"
                    />
                    <p className="text-xl font-bold text-danger/70">
                      Ups! Ada Masalah
                    </p>
                    <p className="text-base text-gray-600 max-w-md mx-auto">
                      {errorMessage}
                    </p>
                  </div>
                </td>
              </tr>
            ) : isLoading ? (
              <TableSkeleton colSpan={columns.length} />
            ) : data.length < 1 ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-20 text-center">
                  <div className="flex flex-col items-center justify-center gap-4 text-gray-500">
                    <FaFaceFrownOpen size={48} className="text-gray-400" />
                    <p className="text-xl font-bold text-gray-700">
                      Ups, Tidak Ada Data
                    </p>
                    <p className="text-base text-gray-500">
                      Belum ada informasi yang bisa ditampilkan saat ini.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              <AnimatePresence mode="wait">
                {table.getRowModel().rows.map((row) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="hover:bg-primary/5"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-6 py-4 text-sm text-center text-gray-700 whitespace-nowrap"
                      >
                        <div className="flex items-center justify-center">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </div>
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </AnimatePresence>
            )}
          </tbody>
        </table>
      </div>

      {!hidePagination && !isError && data.length > 0 && (
        <div className="flex flex-col items-center justify-center gap-4 p-4 mt-1 bg-white border border-gray-200 rounded-b-lg lg:flex-row lg:justify-between">
          <span className="text-sm text-gray-700 text-center lg:text-left">
            Menampilkan{" "}
            <span className="font-extrabold text-black">{startIdx}</span>-
            <span className="font-extrabold text-black">{endIdx}</span> dari{" "}
            <span className="font-extrabold text-black">{totalData}</span> Item
          </span>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
              variant="flat"
              className="font-semibold text-white bg-secondary min-w-[80px]"
              size="sm"
              isDisabled={!table.getCanPreviousPage() || isLoading}
              onPress={() => handlePageChange(currentPage - 1)}
            >
              Sebelumnya
            </Button>

            <div className="hidden sm:block">
              <Pagination
                color="primary"
                total={table.getPageCount()}
                onChange={handlePageChange}
                page={currentPage}
                isDisabled={isLoading}
                classNames={{
                  item: "bg-white border border-gray-300 text-gray-700",
                  cursor: "bg-secondary text-white",
                }}
              />
            </div>

            <Button
              variant="flat"
              className="font-semibold text-white bg-secondary min-w-[80px]"
              size="sm"
              isDisabled={!table.getCanNextPage() || isLoading}
              onPress={() => handlePageChange(currentPage + 1)}
            >
              Selanjutnya
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomTable;
