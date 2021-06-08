import React, { useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {PaginationWrapper, useStylePagination} from './styles';
import {useEvents, TEventsQuery} from '@/context';

export const EventPagination: React.FC = () => {
  const classes = useStylePagination();
  const {setQueryParams, status , page, count_event, page_size} = useEvents();
  const isSuccess = status === 'resolved';

  const [pageCount, setPageCount] = useState<number>(1) 

  const getPageCount = React.useCallback(() => {
    let _pageCount = 1
    if (count_event && page_size)
    {
      _pageCount = Math.round(count_event / page_size)
      if (_pageCount === 0)
        _pageCount = 1
    }
    setPageCount(_pageCount)
  } ,[count_event,page_size,setPageCount])

  useEffect(()=> {    
    getPageCount()
  },[count_event,page_size,pageCount,getPageCount])


  const handleChange = React.useCallback((event: React.ChangeEvent<unknown>, pageNumber: number) => {
    setQueryParams((q: TEventsQuery): TEventsQuery => ({...q, page: pageNumber}));
  }, [setQueryParams]);

  if (isSuccess && count_event) {
    return (
      <PaginationWrapper>
        <Pagination
          classes={{ul: classes.ul}}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          count={pageCount}
          size="large"
          color="primary"
          page={page}
        />
      </PaginationWrapper>
    );
  } else return <></>;
};
