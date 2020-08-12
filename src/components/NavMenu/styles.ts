import styled from '@emotion/styled';
import {NavLink} from 'react-router-dom';

export const NavList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 25px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  color: #8492B4;
  font-size: 14px;
  text-decoration: none;
  width: 100%;
  height: 24px;
  padding-left: 30px;
  margin-bottom: 20px;
  border-left: 2px transparent solid;
`;

export const activeNavLinkStyle: React.CSSProperties = {
  color: '#269BF3',
  borderLeftColor: '#269BF3',
}
