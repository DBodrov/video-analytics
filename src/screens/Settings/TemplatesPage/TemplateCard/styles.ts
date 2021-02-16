import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 214px;
  background-color: var(--color-form);
  border: 1px var(--color-border) solid;
  border-radius: 4px;
`;

export const TemplateDescription = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: 232px;
  padding: 20px 20px 10px 20px;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 63px;
`;
