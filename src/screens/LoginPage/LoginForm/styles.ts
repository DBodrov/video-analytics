import styled from '@emotion/styled';
import {Button, Span} from 'neutrino-ui'

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  padding: 44px 30px 30px 30px;
  background-color: var(--color-form);
`;

export const Label = styled.label`
  color: var(--color-text-secondary);
  margin-bottom: 6px;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  background-color: #39b54a;
  &:hover {
    background-color: #5fdb70;
  }
  &:active {
    box-shadow: none;
    background-color: #30ac41;
  }
`;

export const ErrorText = styled(Span)`
  color: var(--color-mts);
  font-size: 12px;
  margin: -16px 0 3px;
`;
