import React from 'react';
import ReactPaginate from 'react-paginate';
import { ArrowRightIcon, ArrowLeftIcon } from 'shared-components';
import { useResponsive } from 'contexts/ResponsiveContext';
import { useStateQueryString } from 'hooks';
import { PaginationWrapStyled } from './Pagination.styled';

type PaginationPropsT = {
  itemsCount?: number;
  onChange: (offset: number) => void;
};

const ITEMS_PER_PAGE = 10;

const Pagination: React.FC<PaginationPropsT> = ({
  itemsCount = 0,
  onChange,
}) => {
  const { isMobile } = useResponsive();
  const { update, queryParams } = useStateQueryString();

  const pageCount = Math.ceil(itemsCount / ITEMS_PER_PAGE);
  const pageRangeDisplayed = isMobile ? 2 : 5;
  const marginPagesDisplayed = isMobile ? 1 : 5;
  const initialPage = Number(queryParams.offset) / ITEMS_PER_PAGE || 0;

  if (pageCount < 2) {
    return null;
  }

  const handlePageChange = (selectedPageIndex: number) => {
    onChange(selectedPageIndex * ITEMS_PER_PAGE);
    update({
      offset: selectedPageIndex * ITEMS_PER_PAGE,
      limit: ITEMS_PER_PAGE,
    });
  };

  return (
    <PaginationWrapStyled>
      <ReactPaginate
        onPageChange={({ selected }) => handlePageChange(selected)}
        forcePage={initialPage}
        pageCount={pageCount}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
        nextLabel={<ArrowRightIcon />}
        previousLabel={<ArrowLeftIcon />}
      />
    </PaginationWrapStyled>
  );
};

export default Pagination;
