import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const FilterOptionsList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: var(--color-form);
  width: 100%;
`;

export const activeItem = css`
  background-color: rgba(49, 61, 79, 0.5);
  mix-blend-mode: normal;
  box-shadow: inset 0px -1px 0px var(--color-border);
`;

export const FilterOption = styled.li`
  display: flex;
  flex-flow: row nowrap;
  height: 37px;
  font-size: 14px;
  padding: 10px 14px;
  border-bottom: 1px var(--color-border) solid;
  &:hover {
    ${activeItem};
    cursor: pointer;
  }
`;
