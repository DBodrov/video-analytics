import styled from '@emotion/styled';

export const WorkLayout = styled.div`
  display: grid;
  grid-template: 60px 1fr / 1fr 310px;
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
