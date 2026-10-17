import { useState, useMemo } from "react";

export interface PaginationOptions {
  totalItems: number;
  pageSize?: number;
  initialPage?: number;
}

export function usePagination({
  totalItems,
  pageSize = 9,
  initialPage = 1,
}: PaginationOptions) {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(totalItems / pageSize));
  }, [totalItems, pageSize]);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const goToPage = (page: number) => {
    const validPage = Math.max(1, Math.min(totalPages, page));
    setCurrentPage(validPage);
  };

  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    canGoNext: currentPage < totalPages,
    canGoPrev: currentPage > 1,
  };
}
