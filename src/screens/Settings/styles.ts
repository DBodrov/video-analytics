import styled from '@emotion/styled';

export const SettingsLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 310px;
  width: 100%;
  height: 100%;
`;

export const HelperPanel = styled.aside`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: var(--color-form);
  padding: 20px 30px;
`;

export const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  padding: 30px;
`;

/**PAGES */

export const SectionBlock = styled.article`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  background-color: var(--color-form);
`;

export const SectionHeader = styled.header`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 80px;
  background-color: var(--color-border);
  padding: 20px 30px;
`;
