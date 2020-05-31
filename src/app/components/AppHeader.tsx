import { observer } from 'mobx-react-lite';
import React from 'react';
import css from './AppHeader.less';
import { UserMenu } from './UserMenu';

export const AppHeader: React.FC = observer(props => {
  return (
    <div className="flex items-center h-full">
      <UserMenu className={css.userMenu} />
    </div>
  );
});
