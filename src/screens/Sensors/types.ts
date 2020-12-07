import {CompanySensorGetResponse200Status} from '@/backend/main';

export type TVideoPreviewProps = {
  companyId: number;
  sensorId: number;
  status: CompanySensorGetResponse200Status;
};

export const statusColor: Record<string, string> = {
  in_use: '#36AF47',
  inactive: '#F7981C',
  error: '#F95359',
  unknown: 'transparent'
};
