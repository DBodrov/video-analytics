import React from 'react';
import {H6, Span, Button} from 'neutrino-ui';
import {Section, SectionBlock, SectionHeader} from '../styles';

export function SensorsPage() {
  return (
    <Section>
      <SectionBlock>
        <SectionHeader css={{flexFlow: 'row nowrap'}}>
          <div css={{display: 'flex', flexFlow: 'column nowrap'}}>
            <H6 css={{fontSize: 18, fontWeight: 400}}>Выберите камеры</H6>
            <Span css={{fontSize: 12, color: 'var(--color-text-secondary)', paddingTop: 5}}>
              Подключите камеры для правил и сохраните настройки
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
            <Button flat variant="primary" css={{height: '2.5rem', minHeight: '2.5rem'}}>
              <Span css={{fontSize: '0.875rem'}}>Сохранить</Span>
            </Button>
          </div>
        </SectionHeader>
      </SectionBlock>
    </Section>
  );
}
