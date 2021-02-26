import React from 'react';
import {Span} from 'neutrino-ui';
import {TStep, TStepStatus} from '../types';
import {StepItem, StepContent} from './styles';

type TStepMarkerProps = {
  status: TStepStatus;
};
function StepMarker({status = 'inactive'}: TStepMarkerProps) {
  if (status === 'inactive') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 15C4.1342 15 1 11.8666 1 8C1 4.13428 4.13428 1 8 1C11.8657 1 15 4.13428 15 8C15 11.8666 11.8658 15 8 15Z"
          fill="#273142"
          stroke="#464F5E"
          strokeWidth="2"
        />
      </svg>
    );
  }
  if (status === 'active') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 15C4.1342 15 1 11.8666 1 8C1 4.13428 4.13428 1 8 1C11.8657 1 15 4.13428 15 8C15 11.8666 11.8658 15 8 15Z"
          fill="#273142"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    );
  }
  if (status === 'done') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="16" rx="8" fill="url(#paint0_linear)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.3135 5.29325C11.9225 4.90225 11.2895 4.90225 10.8995 5.29325L7.5355 8.65725L6.7065 7.82925C6.3165 7.43825 5.6835 7.43825 5.2925 7.82925C4.9025 8.21925 4.9025 8.85225 5.2925 9.24325L6.8285 10.7783C7.2185 11.1693 7.8515 11.1693 8.2425 10.7783L12.3135 6.70725C12.7045 6.31725 12.7045 5.68425 12.3135 5.29325Z"
          fill="white"
        />
        <defs>
          <linearGradient id="paint0_linear" x1="16" y1="16" x2="16" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#29B311" />
            <stop offset="1" stopColor="#57D841" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  return null;
}

type TStepProps = {
  step: TStep;
  title: string;
  status: TStepStatus;
  description: string;
};

export function Step(props: TStepProps) {
  const {title, description, status} = props;
  return (
    <StepItem>
      <StepMarker status={status} />
      <StepContent>
        <Span
          css={{
            fontSize: 14,
            color: status === 'active' ? 'var(--color-text)' : 'var(--color-text-secondary)',
          }}
        >
          {title}
        </Span>
        <Span css={{fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 5}}>{description}</Span>
      </StepContent>
    </StepItem>
  );
}
