import { SvgHome } from '@/assets/icons/SvgHome';
import { SvgVehicleCount } from '@/assets/icons/SvgVehicleCount';
import { ROUTE_NAMES } from '@/router/router-constants';
import { Typography } from 'antd';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
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
      </div>
    </div>
  );
});
