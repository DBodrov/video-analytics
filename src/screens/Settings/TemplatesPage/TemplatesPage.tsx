import React from 'react';
import {useCompany} from '@/context';
import {TemplateCard} from './TemplateCard';
import {Section} from '../styles';

export function TemplatesPage() {
  const {pipelines} = useCompany();
  return (
    <Section>
      {pipelines &&
        pipelines.map(pipeline => {
          return <TemplateCard key={pipeline.id} id={pipeline.id} enabled={false} />;
        })}
    </Section>
  );
}
