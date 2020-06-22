import { useInject } from '@/store/use-inject';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { AppUiStore } from '../app-ui-store';
import css from './AppHeader.less';
import { UserMenu } from './UserMenu';

export const AppHeader: React.FC = observer(props => {
  const [ui] = useInject(AppUiStore);

  return (
    <div className="flex items-center h-full">
      <div ref={ui.setAppHeaderContainer} />
      <UserMenu className={css.userMenu} />
    </div>
  );
});
