import React from 'react';
import {css} from '@emotion/react';
import {Switch, Span, Checkbox} from 'neutrino-ui';
import {Badge} from '@/components';
import {useCompany} from '@/context';
import {TSensor} from '@/context/Company/types';
import {SensorsTableRow, SensorsTableCell} from '../styles';

type Props = {
  sensorInfo?: TSensor;
  onUpdate: (sensorId: number, isEnabled: boolean) => void;
  onSelect: (sensorId: number, isSelected: boolean) => void;
  isSelected: boolean;

};

const statusColor: Record<string, string> = {
  in_use: '#36AF47',
  inactive: '#F7981C',
  error: '#F95359',
  unknown: 'transparent'
};

export function Sensor({sensorInfo, onSelect, isSelected, onUpdate}: Props) {
  const {getLocationById} = useCompany();
  const isEnabled = sensorInfo?.status.code === 'in_use';
  const locationName = sensorInfo && getLocationById(sensorInfo.ref.locationId)?.name;

  const handleEnableSensor = React.useCallback(() => {
    if (sensorInfo) {
      onUpdate(sensorInfo?.ref.id, !isEnabled);
    }
  }, [isEnabled, onUpdate, sensorInfo]);

  const handleSelect = React.useCallback((isSelected: boolean) => {
    if (sensorInfo) {
      onSelect(sensorInfo.ref.id, isSelected);
    }
  }, [onSelect, sensorInfo]);

  return (
    <SensorsTableRow>
      <SensorsTableCell css={{padding: '0 10px'}}>
        <Switch
          on={isEnabled}
          onToggle={handleEnableSensor}
          trackCss={css({marginLeft: 'auto', width: '48px', height: '24px', padding: 4})}
          buttonCss={css({width: 16, height: 16})}
        />
      </SensorsTableCell>
      <SensorsTableCell>
        <Span css={{fontSize: 14}}>{sensorInfo?.ref.name}</Span>
      </SensorsTableCell>
      <SensorsTableCell>

      </SensorsTableCell>
      <SensorsTableCell>
        <Badge css={{backgroundColor: statusColor[sensorInfo!.status.code]}}>
          {sensorInfo?.status.name}
        </Badge>
      </SensorsTableCell>
      <SensorsTableCell>
        <Span css={{fontSize: 14, color: 'var(--color-text-secondary)'}}>
          {locationName}
        </Span>
      </SensorsTableCell>
      <SensorsTableCell>
      <Checkbox
          onChangeHandler={handleSelect}
          width="16px"
          height="16px"
          boxStyles={{backgroundColor: isSelected ? 'var(--color-box)' : 'var(--color-content)'}}
          checked={isSelected}
          variant="primary"
        />
      </SensorsTableCell>
    </SensorsTableRow>
  );
}
