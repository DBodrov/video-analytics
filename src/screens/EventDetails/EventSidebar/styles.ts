import {List} from '@/components';
import styled from '@emotion/styled';

export const EventSidebarWrapper = styled.div`
  background-color: var(--color-form);
  outline: 1px var(--color-border) solid;
  margin-right: 10px;
`

const clientHeight = document.documentElement.clientHeight

export const EventsList = styled(List)`
  height: ${clientHeight-197}px;
  overflow-y: scroll;
`

export const EventBox = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 30px;
  margin-top : 5px;
  margin-bottom: 5px;
  min-height: 80px;
  cursor: pointer;
  &:hover {
    outline: 1px var(--color-border) solid;
  }
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



