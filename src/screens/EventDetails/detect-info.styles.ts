import styled from '@emotion/styled';

export const InfoList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  margin: 0;
  padding: 20px 36px 0 40px;
`;

export const InfoItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

export const Caption = styled.span`
  font-size: 14px;
  color: var(--color-text-secondary);
  min-width: 120px;
`;
export const Value = styled(Caption)`
  color: #fff;
  padding-left: 8px;
`;
