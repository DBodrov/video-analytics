import styled from '@emotion/styled';

export const PageLayout = styled.div`
  display: grid;
  grid-template: 70px 1fr / 1fr;
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  display: grid;
  grid-template: 1fr / 250px 1fr 250px;
  width: 100%;
  height: 100%;
  background-color: var(--color-form);
  border-bottom: 1px var(--color-border) solid;
  align-items: center;
`;

export const Aside = styled.aside`
  display: flex;
  background-color: var(--color-form);
  border-right: 1px var(--color-border) solid;
`;

export const Main = styled.main`
  display: grid;
  grid-template: 100% /250px 1fr;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Content = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: var(--color-content);
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-background);
    border: 1px var(--color-border) solid;
    border-radius: 25px;
    height: 70px;
  }
`;
