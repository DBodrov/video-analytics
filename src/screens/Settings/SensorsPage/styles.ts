import styled from '@emotion/styled';

export const SensorsTableRow = styled.div`
  display: grid;
  grid-template-columns: 4.5rem minmax(20rem, 1fr) 10rem 10rem 10rem 5rem;
  grid-template-rows: 3.5rem;
  width: 100%;
`;

export const SensorsTableCell = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const EmptySensorsList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 250px;
  padding: 16px 0;
  background-color: #222C3C;
`;
