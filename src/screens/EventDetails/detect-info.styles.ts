import styled from '@emotion/styled';
import CheckMark from '@/assets/icons/checkMark.svg';

export const InfoHeader = styled.p`
  font-weight: 600;
  font-size: 14px;
  font-style: normal;
`

export const InfoList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  margin: 0;
  padding: 5px 36px 0 40px;
  border: 1px var(--color-border) solid;
`;

export const InfoItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
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

export const RulesHeader = styled.p`
  padding-left: 41px;
  font-weight: 600;
  font-size: 14px;
  font-style: normal;
`

export const InfoRules = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  margin: 0;
  padding: 10px 36px 0 40px;
`;


export const Rule = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  color: #fff;
  margin-left: 25px;
`;

export const RuleCaption = styled.span`
  font-size: 14px;
  color: #fff;
  min-width: 120px;
  line-height: 21px;
  position: relative;

  &::before {
    content: url(${CheckMark});
    top: -1px;
    left: -27px;
    position: absolute;
    width: 16px;
    height: 16px;
  }
`;