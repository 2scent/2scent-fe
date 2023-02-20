import React from 'react';

import styled from 'styled-components';

import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

import { arrayRange } from '../../utils';

import usePagination from '../../hooks/use-pagination';

type PaginationProps = {
  currentPage: number;
  totalItemsCount: number;
  pageSize: number;
  setPage: (page: number) => void;
};

const Pagination = ({ currentPage, totalItemsCount, pageSize, setPage }: PaginationProps) => {
  const {
    firstPage,
    lastPage,
    prevEnabled,
    nextEnabled,
  } = usePagination({ currentPage, totalItemsCount, pageSize });

  return (
    <Container>
      <Button
        disabled={!prevEnabled}
        onClick={() => setPage(firstPage - 1)}
      >
        <VscChevronLeft />
      </Button>
      <PageWrapper>
        {arrayRange(firstPage, lastPage)
          .map((page) => (
            <Page 
              key={page}
              selected={page === currentPage}
              disabled={page === currentPage}
              onClick={() => setPage(page)}
            >
              {page}
            </Page>
        ))}
      </PageWrapper>
      <Button
        disabled={!nextEnabled}
        onClick={() => setPage(lastPage + 1)}
      >
        <VscChevronRight />
      </Button>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-top: 40px;
  margin-left: -20px;
`;

const Button = styled.button`
  cursor: pointer;

  &:disabled {
    color: #e2e2ea;
    cursor: default;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  margin: 0 16px;
`;

type PageType = {
  selected: boolean;
};

const Page = styled.button<PageType>`
  padding: 4px 6px;
  background-color: ${({ selected }) => (selected ? '#000' : 'transparent')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  font-size: 20px;
  cursor: pointer;

  & + & {
    margin-left: 4px;
  }

  &:disabled {
    cursor: default;
  }
`;
