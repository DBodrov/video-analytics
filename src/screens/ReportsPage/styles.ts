import styled from '@emotion/styled';

export const ReportCard = styled.div`
  display: grid;
  grid-template: 60px 100px 70px / 1fr;
`;

export const ReportCardTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
  background-color: var(--color-border);
`;

export const ReportFilters = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
  background-color: var(--color-form);
`;
