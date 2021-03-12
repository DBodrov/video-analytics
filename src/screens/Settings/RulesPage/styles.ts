import styled from '@emotion/styled';

export const RulesTableRow = styled.div`
  display: grid;
  grid-template-columns: 7rem minmax(20rem, 1fr) 10rem 10rem 10rem 5rem;
  grid-template-rows: 3.5rem;
  width: 100%;
`;

export const RulesTableCell = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonLink = styled.button`
  cursor: pointer;
  border: 0;
  outline: 0;
  background-color: transparent;
  font-size: 0.875rem;
`;
