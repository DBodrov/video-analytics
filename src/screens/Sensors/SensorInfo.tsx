import React from 'react';
import styled from '@emotion/styled';
import {Span} from 'neutrino-ui';
import {TSensor, useCompany} from '@/context/Company';

const InfoBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: calc(100% - 208px);
  padding: 10px 28px;
`;

type Props = {sensor: TSensor};

export function SensorInfo({sensor}: Props) {
  const {getLocationById} = useCompany();
  const readLocation = (locationId?: number) => {
    if (locationId) {
     return getLocationById(locationId)?.name;
    }
    return '';
  }

  return (
    <InfoBlock>
      <Span>{sensor?.name}</Span>
      <Span css={{fontSize: 12, color: 'var(--color-text-secondary)'}}>
        URL: <Span css={{fontSize: 12}}>{sensor?.url}</Span>
      </Span>
      <Span css={{fontSize: 12, color: 'var(--color-text-secondary)'}}>
        Расположение: <Span css={{fontSize: 12}}>{readLocation(sensor?.locationId)}</Span>
      </Span>
    </InfoBlock>
  );
}
