import styled from '@emotion/styled';

export const MarkupSection = styled.section`
  width: 100%;
  /* position: relative; */
  max-width: 960px;
  height: 455px;
  border: 2px #2EA1F8 solid;
`;

export const Toolbar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px 30px;
  width: 100%;
  height: 60px;
  border: 1px var(--color-border) solid;
  border-radius: 4px 4px 0px 0px;
`;

export const ToolbarButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 15px;
  background-color: #222C3C;
  border: 1px var(--color-border) solid;
  border-radius: 4px;
  cursor: pointer;
  outline: 0;
  &:hover {
    border-color: var(--color-primary);
  }
`;

export const Tooltip = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 65px;
  padding: 20px 30px;
  border: 1px var(--color-border) solid;
  border-radius: 0px 0px 4px 4px;
`;
