import styled from '@emotion/styled';

export const RulesBlock = styled.article`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  background-color: var(--color-form);
`;

export const RulesHeader = styled.header`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 80px;
  background-color: var(--color-border);
  padding: 20px 30px;
`;

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
