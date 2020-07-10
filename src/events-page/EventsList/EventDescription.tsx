/**@jsx jsx */
import { observer } from 'mobx-react-lite';
import { css, jsx } from '@emotion/core';
import { useInject } from '@/store/use-inject';
import {EventsStore} from '../events-store';
import {TEvent} from '../types';

export const EventDescription = observer((props: TEvent) => {
  const [store] = useInject(EventsStore);
  const description = store.eventDescriptionData(props);

  return (
    <div css={{ display: 'flex', flexFlow: 'column nowrap' }}>
      <span css={{ fontSize: 16, fontWeight: 600, lineHeight: '20px' }}>{description.title}</span>
      <div css={{ display: 'flex', flexFlow: 'row nowrap', color: '#7F8FA4' }}>
        <span css={{ fontSize: 12 }}>{description.sensor}</span>
        <span css={{ padding: '0 4px' }}>|</span>
        <span css={{ fontSize: 12 }}>Площадка: </span>
        <span css={{ fontSize: 12, color: '#fff', textDecoration: 'underline', paddingLeft: 4 }}>
          {description.location}
        </span>
      </div>
      <div css={{ display: 'flex', flexFlow: 'row nowrap', color: '#7F8FA4' }}>
        <span css={{ fontSize: 12 }}>Шаблон: </span>
        <span css={{ fontSize: 12, color: '#fff', textDecoration: 'underline', paddingLeft: 4 }}>
          {description.category}
        </span>
      </div>
    </div>
  );
});
