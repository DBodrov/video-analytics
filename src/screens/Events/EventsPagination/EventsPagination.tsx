import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {PaginationWrapper, useStylePagination} from './styles';
import {useEvents, TEventsQuery} from '@/context';

export const EventPagination: React.FC = () => {
  const classes = useStylePagination();
  const {setQueryParams, status , page, count_event, page_size} = useEvents();
  const isSuccess = status === 'resolved';

  const getPageCount = () => {
    let pageCount = 1
    if (count_event && page_size)
        pageCount = Math.round(count_event / page_size)
        if (pageCount === 0)
          pageCount = 1
    else
        pageCount = 1
    return pageCount
  } 

  const handleChange = React.useCallback((event: React.ChangeEvent<unknown>, pageNumber: number) => {
    setQueryParams((q: TEventsQuery): TEventsQuery => ({...q, page: pageNumber}));
  }, [setQueryParams]);

  if (isSuccess) {
    return (
      <PaginationWrapper>
        <Pagination
          classes={{ul: classes.ul}}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          count={getPageCount()}
          size="large"
          color="primary"
          page={page}
        />
      </PaginationWrapper>
    );
  } else return <></>;
};
