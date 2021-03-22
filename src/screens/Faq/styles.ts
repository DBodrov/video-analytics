import styled from '@emotion/styled';
import {css} from '@emotion/react';

export const FaqLayout = styled.div`
  margin: 27px;
  margin-right: 10%;

  & h2,
  h3 {
    font-weight: 500;
  }

  & h4 {
    font-weight: 400;
  }

  & li {
    margin-bottom: 4px;
  }

  & p {
    line-height: 1.5;
    text-indent: 25px;
    text-align: justify;
  }

  & b {
    color: #f9e304;
  }
`;

export const headerStyle = css`
  color: #d6741c;
`;
