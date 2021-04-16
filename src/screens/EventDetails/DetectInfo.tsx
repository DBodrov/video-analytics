import React from 'react';
import {TCommonDetectInfo, TExtraDetectInfo} from './types';
import {
  Caption,
  InfoItem,
  InfoList,
  Value,
  RulesHeader,
  InfoRules,
  Rule,
  RuleCaption,
  InfoHeader,
} from './detect-info.styles';
import {TCheckList, TCheck} from '@/context/Refs/types';
import {useTimelines} from './TimelineContext';
import {useRefs} from '@/context';

type Props = {
  commonInfo?: TCommonDetectInfo;
  extraInfo?: TExtraDetectInfo[];
  viewType?: 'events' | 'incidents';
};

export function findRule(val: string | number, checks: TCheckList = []): TCheck {
  return checks.filter(el => el?.id === val).pop();
}

export function mappNameCheckRules(
  checks: TCheckList = [],
  checkIds: number[] | undefined,
): Array<{id?: number; name?: string}> {
  const listRules: Array<{id?: number; name?: string}> = [];
  if (checkIds) {
    checkIds.forEach(checkId => {
      if (findRule(checkId, checks)) {
        const nameRule = findRule(checkId, checks)!.name;
        const id = findRule(checkId, checks)!.id;
        listRules.push({name: nameRule, id: id});
      }
    });
  }
  return listRules;
}

export function DetectInfo({commonInfo, extraInfo, viewType}: Props) {
  const {
    queryParams: {checkIds},
  } = useTimelines();

  const {checks} = useRefs();

  const listRules = mappNameCheckRules(checks, checkIds);

  return (
    <div css={{backgroundColor: 'var(--color-form)'}}>
      <InfoList>
        {viewType === 'incidents' ? (
          <InfoHeader>Информация об инциденте</InfoHeader>
        ) : (
          <InfoHeader>Информация о событии</InfoHeader>
        )}
        <InfoItem>
          <Caption>Камера:</Caption>
          <Value>{commonInfo?.sensor}</Value>
        </InfoItem>
        <InfoItem>
          <Caption>Бизнес шаблон:</Caption>
          <Value>{commonInfo?.checkCategory}</Value>
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
      <RulesHeader>Сработавшие правила</RulesHeader>
      <InfoRules>
        {listRules &&
          listRules.map(rule => (
            <Rule key={rule.id}>
              <RuleCaption>{rule.name}</RuleCaption>
            </Rule>
          ))}
      </InfoRules>
    </div>
  );
}
