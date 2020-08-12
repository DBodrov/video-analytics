import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: var(--color-form);
  border-radius: 4px;
`;

export const Event = styled.li`
  display: grid;
  grid-template: 1fr / 82px minmax(400px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr) 1fr;
  column-gap: 30px;
  width: 100%;
  height: 80px;
  padding: 14px;
  border-bottom: 1px var(--color-border) solid;
  cursor: pointer;
`;
