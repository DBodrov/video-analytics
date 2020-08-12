import styled from '@emotion/styled';

export const HourCell = styled.span`
  display: inline-flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;

export const HeaderCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px var(--color-border) solid;
  border-left: 0;
  width: 100%;
  height: 100%;
`;

export const TimelineTable = styled.div`
  display: grid;
  grid-template-rows: 30px 40px 40px 40px;
  grid-template-columns: 60px repeat(24, 1fr);
  border: 1px var(--color-border) solid;
`;

export const ImageBox = styled.div`
  display: grid;
  grid-template: 1fr / repeat(auto-fit, minmax(1px, 1fr));
  grid-auto-flow: column;
  width: 100%;
  overflow: hidden;
  border: 1px var(--color-border) solid;
  align-items: center;
`;
