import React from 'react';
import { CustomerIcon, HomeIcon } from '@/assets/icons';
import { NavList } from './styles';
import { MenuLink } from './MenuLink';

export function NavMenu() {
  return (
    <div css={{ paddingTop: '25px', width: '100%', height: '100%' }}>
      <span css={{ fontSize: 12, color: 'var(--color-text-secondary)', paddingLeft: 30 }}>МЕНЮ</span>
      <NavList>
        <MenuLink exact to="/" activeClassName="isActive">
          <HomeIcon />
          <span css={{ paddingLeft: 18 }}>Дашборд</span>
        </MenuLink>
        <MenuLink to="/events" activeClassName="isActive" css={{ marginBottom: '10px' }}>
          <CustomerIcon fill="currentColor" />
          <span css={{ paddingLeft: 18 }}>События</span>
        </MenuLink>
        <ul
          css={{
            color: 'var(--color-text-secondary)',
            fontSize: 12,
            lineHeight: '26px',
            marginTop: 0,
            paddingLeft: 75,
          }}
        >
          <li>Люди</li>
          <li>Транспортные средства</li>
          <li>Контроль</li>
        </ul>
      </NavList>
    </div>
  );
}
