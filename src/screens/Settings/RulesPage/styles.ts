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
  grid-template-columns: 70px minmax(300px, 1fr) 100px 100px 100px 50px;
  grid-template-rows: 50px;
`;

export const RulesTableCell = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;
