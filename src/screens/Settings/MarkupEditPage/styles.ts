import styled from '@emotion/styled';

export const MarkupSection = styled.section`
  width: 100%;
  max-width: 960px;
  height: 455px;
  outline: 2px #2EA1F8 solid;
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
