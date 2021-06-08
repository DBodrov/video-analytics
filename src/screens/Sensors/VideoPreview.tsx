import React from 'react';
import { v4 as uuidv4} from 'uuid';
import {HOST} from '@/utils';
import {TVideoPreviewProps, statusColor} from './types';
import {Tag} from './styles';


export function VideoPreview({companyId, sensorId, status}: TVideoPreviewProps) {

  const previewUrl = `http://${uuidv4()}.video.${HOST}/api/video/companies/${companyId}/sensors/${sensorId}`;
  return (
    <div css={{width: 338, height: 208, position: 'relative'}}>
      <img src={previewUrl} alt="" width="100%" height="100%" />
      <Tag css={{position: 'absolute', bottom: 10, left: 10, backgroundColor: statusColor[status.code]}}>
        {status.name}
      </Tag>
    </div>
  );
}
