import styled from '@emotion/styled';

export const EventContent = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 350px;
  width: 100%;
  height: 100%;
`;

export const EventBox = styled.div`
  display: grid;
  grid-template: 1fr / 880px 1fr;
  width: 100%;
  min-height: 500px;
`;

export const RectSwitch = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 5px;
  right: 14px;
  width: 130px;
  height: 20px;
  background: rgba(49, 61, 79, 0.8);
  z-index: 1;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
`;
