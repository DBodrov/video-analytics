import React from 'react';
import {TCommonDetectInfo, TExtraDetectInfo} from './types';
import {Caption, InfoItem, InfoList, Value} from './detect-info.styles';

type Props = {
  commonInfo?: TCommonDetectInfo;
  extraInfo?: TExtraDetectInfo[];
};

export function DetectInfo({commonInfo, extraInfo}: Props) {
  return (
    <div css={{backgroundColor: 'var(--color-form)'}}>
      <InfoList>
        <InfoItem>
          <Caption>Камера:</Caption>
          <Value>{commonInfo?.sensor}</Value>
        </InfoItem>
        <InfoItem>
          <Caption>Бизнес шаблон:</Caption>
          <Value>{commonInfo?.checkCategory}</Value>
        </InfoItem>
        <InfoItem>
          <Caption>Правила:</Caption>
          <Value>{commonInfo?.check}</Value>
        </InfoItem>
        <InfoItem>
          <Caption>Статус</Caption>
          <Value>{commonInfo?.eventStatus}</Value>
        </InfoItem>
        <InfoItem>
          <Caption>Площадка:</Caption>
          <Value>{commonInfo?.location}</Value>
        </InfoItem>
        {extraInfo &&
          extraInfo.map(extra => {
            return (
              <InfoItem key={extra.id}>
                <Caption>{extra.name}:</Caption>
                <Value>{extra.value}</Value>
              </InfoItem>
            );
          })}
      </InfoList>
    </div>
  );
}
