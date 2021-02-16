import React from 'react';
import {useCompany} from '@/context';
import {TemplateCard} from './TemplateCard';
import {TemplatesSection} from './styles';

export function TemplatesPage() {
  const {pipelines} = useCompany();
  return (
    <TemplatesSection>
      {pipelines &&
        pipelines.map(pipeline => {
          return <TemplateCard key={pipeline.id} id={pipeline.id} enabled={false} />;
        })}
    </TemplatesSection>
  );
}
