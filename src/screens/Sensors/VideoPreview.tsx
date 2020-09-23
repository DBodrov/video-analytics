import React from 'react';

type TVideoPreviewProps = {
  companyId: number;
  sensorId: number;
};
export function VideoPreview({companyId, sensorId}: TVideoPreviewProps) {
  return (
    <div css={{width: 338, height: 208}}>
      <img src={`/api/video/companies/${companyId}/sensors/${sensorId}`} alt="" width="100%" height="100%" />
    </div>
  );
}
