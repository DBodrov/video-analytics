import React from 'react';
import {useUI} from '@/context/UIContext';

export function PageTitle() {
  const {title} = useUI();
  return <span css={{color: '#B4C2D7', fontSize: 18, paddingLeft: 30}}>{title}</span>;
}
