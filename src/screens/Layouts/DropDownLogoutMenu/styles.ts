import {css} from '@emotion/react';
import styled from '@emotion/styled';
import ProfileImage from '@/assets/img/profile.png';

export const UserName = styled.p`
  margin-right: 15px;
  margin-left: 10px;
`

export const LogoutMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: right;
  justify-content: flex-end;
  margin-right: 30px;
`;

export const inputStyle = css`
  position: relative;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 0px;
  background: url(${ProfileImage});
  background-size: contain;

  & > svg {
    position: absolute;
    left: 43px;
    width: 8px;
  }
`;

export const optionsListStyle = css`
  border-radius: 2px;
  margin-top: 7px;
  margin-left: -23px;
  font-weight: 600;
  font-style: normal;
  width: 78px;
  overflow: 'auto';
`;

export const optionStyle = css`
  color: #ffffff;
  border-bottom-color: #273142;
  height: 37px;
  &:hover {
    color: #2ea2f8;
    background: #313d4f;
  }
`;
