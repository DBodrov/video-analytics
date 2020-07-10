import {TEvents} from '../../types';
import thumb from './event_thumb.jpg';

export const events: Partial<TEvents['events']> = [
  {
    thumbnail: {
      categoryId: 1,
      content: thumb,
      compression: 'jpg',
      id: 23,
      imageId: 32,
    },
    eventCode: '45',
    eventTimestamp: '2020-07-06 23:37:15',
    locationId: 1,
    sensorId: 1,
    statusId: 1,
    tocId: 1,
    trackCode: '23232',
    checkId: 101
  },
];
