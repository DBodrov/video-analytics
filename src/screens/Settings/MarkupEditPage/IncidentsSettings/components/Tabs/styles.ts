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
  border-bottom: ${props => (props.isActive ? '2px var(--color-primary) solid' : '0')};
  background-color: transparent;
  cursor: pointer;
  height: 100%;
  color: ${props => (props.isActive ? 'var(--color-text)' : 'var(--color-text-secondary)')};
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

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
`;

export const Threshold = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 160px;
  padding-top: 8px;
  margin-left: 16px;
`;

export const Select = styled.select`
  background-color: var(--color-formfield);
  color: var(--color-text);
`;

export const TabsFooter = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 16px 30px;
  background-color: var(--color-form);
`;

export const Input = styled.input`
  background: var(--color-formfield);
  border: 1px solid var(--color-border);
  box-sizing: border-box;
  border-radius: 4px;
  outline: 0;
  &:focus, &:focus-visible {
    border-color: var(--color-primary);
  }
`;
