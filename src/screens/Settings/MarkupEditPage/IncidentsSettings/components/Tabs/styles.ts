import styled from '@emotion/styled';

export const TabsSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: auto;
  justify-content: flex-start;
  align-items: flex-start;

`;

export const TabsList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  margin: 0;
  padding: 0 30px;
  width: 100%;
  height: 60px;
  border: 1px var(--color-border) solid;
`;

export const Pane = styled.button<{isActive: boolean}>`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  outline: 0;
  border: 0;
  border-bottom: ${props => props.isActive ? '2px var(--color-primary) solid' : '0'};
  background-color: transparent;
  cursor: pointer;
  height: 100%;
  color: ${props => props.isActive ? 'var(--color-text)' : 'var(--color-text-secondary)'};
  margin-right: 30px;

`;

export const TabContent = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding: 25px 30px;
  background-color: var(--color-border);
`;
