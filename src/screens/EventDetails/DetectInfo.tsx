import React from 'react';
import styled from '@emotion/styled';
import {toCapitalize} from '@/utils';
import {TDetectInfo} from './types';

const InfoList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  margin: 0;
  padding: 20px 36px 0 40px;
`;

const InfoItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

const Caption = styled.span`
  font-size: 14px;
  color: var(--color-text-secondary);
  min-width: 120px;
`;
const Value = styled(Caption)`
  color: #fff;
  padding-left: 8px;
`;
type Props = {
  info?: TDetectInfo;
};

export function DetectInfo({info}: Props) {
  return (
    <div css={{backgroundColor: 'var(--color-form)'}}>
      <InfoList>
        <InfoItem>
          <Caption>Камера:</Caption>
          <Value>{info?.sensor}</Value>
        </InfoItem>
        <InfoItem>
          <Caption>Бизнес шаблон:</Caption>
          <Value>{info?.checkCategory}</Value>
        </InfoItem>
        <InfoItem>
          <Caption>Правила:</Caption>
          <Value>{info?.check}</Value>
        </InfoItem>
        {info?.direction ? (
          <InfoItem>
            <Caption>Направление ТС:</Caption>
            <Value>{toCapitalize(info.direction)}</Value>
          </InfoItem>
        ) : null}
        <InfoItem>
          <Caption>Площадка:</Caption>
          <Value>{info?.location}</Value>
        </InfoItem>
        <InfoItem>
          <Caption>Объект:</Caption>
          <Value>{info?.object}</Value>
        </InfoItem>
        <InfoItem>
          <Caption>Начало детекта:</Caption>
          <Value>{info?.startDetect}</Value>
        </InfoItem>
        <InfoItem>
          <Caption>Конец детекта:</Caption>
          <Value>{info?.endDetect}</Value>
        </InfoItem>
        <InfoItem>
          <Caption>Статус</Caption>
          <Value>{info?.eventStatus}</Value>
        </InfoItem>
      </InfoList>
    </div>
  );
}
