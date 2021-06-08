import styled from '@emotion/styled';
import {makeStyles} from '@material-ui/core/styles';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const useStylePagination = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: '#fff',
    },
    '& > li': {
      margin: '0px 6px'
    },
  },
}));
