import { Avatar } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ApiImage } from '../stats-types';

interface Props {
  image: ApiImage | null;
}

export const StatsAvatar: React.FC<Props> = observer(({ image }) => {
  return (
    <Avatar
      shape="square"
      size="large"
      src={
        image
          ? `data:image/${image.compression};charset=utf-8;base64, ${image.content}`
          : undefined
      }
    />
  );
});
