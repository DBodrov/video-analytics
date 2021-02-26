import React from 'react';
import {useCompany} from '@/context';
import {useSettings} from '../SettingsContext';
import {TemplateCard} from './TemplateCard';
import {Section} from '../styles';

export function TemplatesPage() {
  // const {pipelines} = useCompany();
  const {pipelines} = useSettings();
  return (
    <Section>
      {pipelines &&
        pipelines.map(pipeline => {
          return <TemplateCard key={pipeline.id} id={pipeline.id} enabled={pipeline.enabled} />;
        })}
    </Section>
  );
}
