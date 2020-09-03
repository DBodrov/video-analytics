import {List} from '@/components';
import styled from '@emotion/styled';

export const EventBox = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 30px;
  min-height: 80px;
`;

export const EventInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  margin-left: 10px;
`;

export {List};
