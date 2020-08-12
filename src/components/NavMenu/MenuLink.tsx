import React from 'react';
import {StyledNavLink, activeNavLinkStyle} from './styles';

export function MenuLink(props: any) {
  const { children, activeClassName, ...restProps } = props;
  return (
    <StyledNavLink activeClassName="isActive" activeStyle={activeNavLinkStyle} {...restProps}>
      <style>
        {`.isActive span {
          color: #fff;
        }`}
      </style>
      {children}
    </StyledNavLink>
  );
}
