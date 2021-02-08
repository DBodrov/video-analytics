import styled from '@emotion/styled';
import {css} from '@emotion/react';

export const FilterOptionsList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  list-style: none;
  position: relative;
  margin: 0;
  padding: 0;
  background-color: var(--color-form);
  width: 100%;
  height: calc(100% - 37px);
  overflow: auto;
  ::-webkit-scrollbar {
    width: 4px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #687994;
    border: 1px var(--color-border) solid;
    border-radius: 25px;
    height: 70px;
  }
`;

export const Panel = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 37px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: var(--color-form);
  border: 1px var(--color-border) solid;
  padding: 10px 6px;
`;

export const activeItem = css`
  background-color: rgba(49, 61, 79, 0.5);
  mix-blend-mode: normal;
  box-shadow: inset 0px -1px 0px var(--color-border);
`;

export const FilterOption = styled.li`
  display: flex;
  flex-flow: row nowrap;
  font-size: 14px;
  padding: 10px 14px;
  border-bottom: 1px var(--color-border) solid;
  &:hover {
    ${activeItem};
    cursor: pointer;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 12px 20px 12px 16px;
  font-size: 14px;
`;
