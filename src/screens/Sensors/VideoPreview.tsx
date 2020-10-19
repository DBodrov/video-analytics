import React from 'react';
import { v4 as uuidv4} from 'uuid';
import {CompanySensorGetResponse200Status} from '@/backend/main';
import {TEST_HOST} from '@/utils';
import {Tag} from './styles';

type TVideoPreviewProps = {
  companyId: number;
  sensorId: number;
  status: CompanySensorGetResponse200Status;
};

const statusColor: Record<string, string> = {
  in_use: '#36AF47',
  inactive: '#F7981C',
  error: '#F95359',
};

export function VideoPreview({companyId, sensorId, status}: TVideoPreviewProps) {
  const isTestHost = window.location.host === TEST_HOST;

  const url = isTestHost
    ? `http://${uuidv4()}.video.dev-va-0002.msk.mts.ru/api/video/companies/${companyId}/sensors/${sensorId}`
    : `/api/video/companies/${companyId}/sensors/${sensorId}`;
  return (
    <div css={{width: 338, height: 208, position: 'relative'}}>
      <img src={url} alt="" width="100%" height="100%" />
      <Tag css={{position: 'absolute', bottom: 10, left: 10, backgroundColor: statusColor[status.code]}}>
        {status.name}
      </Tag>
    </div>
  );
}
