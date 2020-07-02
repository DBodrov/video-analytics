/**@jsx jsx */
import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';

const EventsSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 26px 0;
`;

const EventsList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 24px 0;
`;

const Event = styled.li`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 35px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 22px;
`;

export const Events = observer(() => {
  return (
    <EventsSection>
      <div
        css={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <span>Последние события</span>
        <span css={{ fontSize: 12, color: '#7F8FA4' }}>Посмотреть все</span>
      </div>
      <EventsList>
        <Event>
          <div css={{width: 50, height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.3)', marginRight: 15}}>

          </div>
          <div css={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'flex-start', alignItems: 'flex-start', height: '100%'}}>
            <span css={{fontSize: 14, lineHeight: '18px'}}>Ручная проверка</span>
            <span css={{fontSize: 12, color: '#D35847'}}>2 срабатывания по блеклисту</span>
          </div>
        </Event>
        <Event>
          <div css={{width: 50, height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.3)', marginRight: 15}}>

          </div>
          <div css={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'flex-start', alignItems: 'flex-start', height: '100%'}}>
            <span css={{fontSize: 14, lineHeight: '18px'}}>Инцидент: кража</span>
            <span css={{fontSize: 12, color: '#D35847'}}>Сохраните видеофрагмент</span>
          </div>
        </Event>
        <Event>
          <div css={{width: 50, height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.3)', marginRight: 15}}>

          </div>
          <div css={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'flex-start', alignItems: 'flex-start', height: '100%'}}>
            <span css={{fontSize: 14, lineHeight: '18px'}}>Перегрузка АЗС в 17:15</span>
            <span css={{fontSize: 12, color: '#D35847'}}>Просмотрите отчёт по загрузке</span>
          </div>
        </Event>
      </EventsList>
    </EventsSection>
  );
});
