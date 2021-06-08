import styled from '@emotion/styled';

export const Panel = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const StepList = styled.ul`
  margin: 0;
  padding: 24px 0px 0px;
  list-style: none;

`;

export const StepItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const StepContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 15px;
`;
