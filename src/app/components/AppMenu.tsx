import React from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';
import { Typography } from 'antd';
import { SvgVehicleCount, SvgHome, CustomerIcon } from '@/assets/icons';
import { ROUTE_NAMES } from '@/router/router-constants';
import css from './AppMenu.less';
import { AppMenuItem } from './AppMenuItem';

const { Text } = Typography;

interface Props {
  className?: string;
}

export const AppMenu: React.FC<Props> = observer(props => {
  return (
    <div className={cn(css.container, props.className)}>
      <Text type="secondary" className="text-xs block px-8 mb-6" strong>
        МЕНЮ
      </Text>
      <div className={css.items}>
        <AppMenuItem routeName={ROUTE_NAMES.dashboard} icon={<SvgHome />} />
        <AppMenuItem routeName={ROUTE_NAMES.stats} icon={<SvgVehicleCount />} />
        <AppMenuItem routeName={ROUTE_NAMES.events} icon={<CustomerIcon />} />
      </div>
    </div>
  );
});
