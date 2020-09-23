import styled from '@emotion/styled';

export const SensorsTileList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;

export const Tile = styled.div`
  width: 338px;
  height: 348px;
  background-color: var(--color-form);
  margin-right: 30px;
  margin-top: 30px;
  &::last-of-type {
    margin-right: 0;
  }
`;
