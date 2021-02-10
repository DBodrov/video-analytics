import React from 'react';
import {useLocation} from 'react-router-dom';
import {useUI} from '@/context/UIContext';

export function PageTitle() {
  const {title} = useUI();
  const location = useLocation();
  if (location.pathname === '/settings') {
    return (
      <span css={{color: '#B4C2D7', fontSize: 18, paddingLeft: 30}}>
        Настройки: <span css={{fontWeight: 'bold', color: '#fff'}}>Бизнес-шаблоны</span>
      </span>
    );
  }
  return <span css={{color: '#B4C2D7', fontSize: 18, paddingLeft: 30}}>{title}</span>;
}
