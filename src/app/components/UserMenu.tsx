import { AuthStore } from '@/auth/auth-store';
import { useInject } from '@/store/use-inject';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';

interface Props {
  className?: string;
}

export const UserMenu: React.FC<Props> = observer(props => {
  const [auth] = useInject(AuthStore);

  const menu = (
    <Menu>
      <Menu.Item onClick={auth.logout}>Выход</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button
        shape="round"
        icon={<UserOutlined className="text-xl relative" style={{ top: 2 }} />}
        size="large"
        className={props.className}
      >
        <DownOutlined />
      </Button>
    </Dropdown>
  );
});
