import {css} from '@emotion/react';

export const inputStyle = css`
  position: relative;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 0px;
  background: url('https://cdn.icon-icons.com/icons2/38/PNG/512/maleuser_4945.png');
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
    background: #313D4F;
  }
`;
