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
  cursor: pointer;
`;

export const Tag = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 20px;
  font-size: 10px;
  color: var(--color-text);
  font-weight: 700;
  border-radius: 3px;
  padding: 0 4px;
  text-transform: uppercase;
`;
