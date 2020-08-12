import styled from '@emotion/styled';

export const WorkLayout = styled.div`
  display: grid;
  grid-template: 4em / 75% 25% 1fr;
  width: 100%;
  height: 100%;
`;

export const FiltersPlace = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
`;

export const RightBar = styled.div`
  grid-row: 1/3;
  grid-column: 2/3;
`;

export const TablePlace = styled.div`
  grid-row: 2/3;
  grid-column: 1/2;
  padding: 30px;
`;
