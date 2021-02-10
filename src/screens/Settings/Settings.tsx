import React from 'react';
import {useCompany} from '@/context';
import {AppLayout} from '../Layouts';
import {TemplatesPage} from './styles';

export function Settings() {
  const {pipelines} = useCompany();
  return (
    <AppLayout>
      <TemplatesPage>


      </TemplatesPage>
    </AppLayout>

  )
}
