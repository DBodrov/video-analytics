import React from 'react';
import {Button, H6, Span} from 'neutrino-ui';
import {AppLayout} from '../../Layouts';
import {Section, SectionBlock, SectionHeader} from '../styles';
import {EmptySensorsList} from './styles';

export function AddSensorsPage() {
  return (
    <AppLayout
      pageTitle={
        <span css={{color: '#B4C2D7', fontSize: 18}}>
          Настройки: <span css={{fontWeight: 'bold', color: '#fff'}}>Бизнес-шаблоны</span>
        </span>
      }
    >
      <Section>
        <SectionBlock>
          <SectionHeader css={{flexFlow: 'row nowrap'}}>
            <div css={{display: 'flex', flexFlow: 'column nowrap'}}>
              <H6 css={{fontSize: 18, fontWeight: 400}}>Выбор камер</H6>
              <Span css={{fontSize: 12, color: 'var(--color-text-secondary)', paddingTop: 5}}>
                Перед выбором камер, надо их добавить и настроить
              </Span>
            </div>
            <div css={{display: 'flex', flexFlow: 'row nowrap', marginLeft: 'auto'}}>
              <Button
                flat
                variant="primary"
                css={{
                  height: '2.5rem',
                  minHeight: '2.5rem',
                  marginRight: 10,
                  backgroundColor: '#39B54A',
                  borderColor: '#39B54A',
                  '&:hover': {backgroundColor: '#39B54A', borderColor: '#39B54A'},
                }}
              >
                <Span css={{fontSize: '0.875rem'}}>Добавить камеры</Span>
              </Button>
            </div>
          </SectionHeader>
          <EmptySensorsList />
        </SectionBlock>
      </Section>
    </AppLayout>
  );
}
