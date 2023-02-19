type UsePaginationProps = {
  currentPage: number;
  totalItemsCount: number;
  pageSize: number;
  pageSlice?: number;
};

const usePagination = ({ currentPage, totalItemsCount, pageSize, pageSlice = 5 }: UsePaginationProps) => {
  const totalPagesCount = Math.ceil(totalItemsCount / pageSize);
  
  const diff = currentPage % pageSlice === 0 ? pageSlice : currentPage % pageSlice;

  const firstPage = currentPage - diff + 1;

  const tempLastPage = currentPage - diff + pageSlice;
  const lastPage = tempLastPage > totalPagesCount ? totalPagesCount : tempLastPage;

  const prevEnabled = firstPage !== 1;
  const nextEnabled = lastPage !== totalPagesCount;

  return {
    firstPage,
    lastPage,
    prevEnabled,
    nextEnabled,
  };
};

export default usePagination;
