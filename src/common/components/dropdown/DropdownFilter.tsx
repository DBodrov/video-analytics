import { ALL_VALUES_ID } from '@/common/common-constants';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Typography } from 'antd';
import { DropDownProps } from 'antd/lib/dropdown';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Except } from 'type-fest';
import { DropdownFilterItem } from './dropdown-types';
const { Text } = Typography;

const DELIMITER = '-----';
const DELIMITER_ITEM: DropdownFilterItem = { key: DELIMITER, title: DELIMITER };

export interface DropdownFilterProps {
  title: React.ReactNode;
  currentTitle: React.ReactNode;
  items: DropdownFilterItem[];
  currentKey: string;
  onClick(clickParam: { key: string }): void | Promise<void>;
}

type Props = Except<DropDownProps, 'overlay'> & DropdownFilterProps;

function insertDelimiter(items: DropdownFilterItem[]): DropdownFilterItem[] {
  if (items[0]?.key === String(ALL_VALUES_ID)) {
    return [items[0], DELIMITER_ITEM, ...items.slice(1)];
  }
  return items;
}

export const DropdownFilter: React.FC<Props> = observer(
  ({
    title,
    currentTitle,
    items,
    currentKey,
    onClick,
    className,
    ...dropdownProps
  }) => {
    const renderItem = (item: DropdownFilterItem, i: number) =>
      item.title === DELIMITER ? (
        <Menu.Divider key={DELIMITER + i} />
      ) : (
        <Menu.Item key={item.key} disabled={item.key === currentKey}>
          {item.title}
        </Menu.Item>
      );

    const menu = (
      <Menu selectedKeys={[currentKey]} onClick={onClick}>
        {insertDelimiter(items).map(renderItem)}
      </Menu>
    );

    return (
      <Dropdown trigger={['click']} {...dropdownProps} overlay={menu}>
        <Button className={className}>
          <Text type="secondary" className="whitespace-pre">
            {title}
            {': '}
          </Text>
          <span className="mr-4">{currentTitle}</span>
          <DownOutlined />
        </Button>
      </Dropdown>
    );
  },
);
