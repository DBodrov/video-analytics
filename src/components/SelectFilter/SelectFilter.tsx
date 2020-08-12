import React, {useState, useCallback} from 'react';
import {css} from '@emotion/core';
import {Select, SelectOptions, Span} from 'neutrino-ui';
import {FilterOptionsList, FilterOption, activeItem} from './styles';

type TFilterItem = {
  id: number;
  title: string;
};

type TFilterOptions = TFilterItem[];

type SelectFilterProps = {
  options: TFilterOptions;
  onSelect: (id: number) => void;
  className?: string;
  prefix?: string;
  defaultValue?: number;
};

export function SelectFilter({onSelect, options, className, prefix, defaultValue = -1}: SelectFilterProps) {
  const [itemId, setItemId] = useState(defaultValue);
  const getTitle = () => options.find(option => option.id === itemId)?.title ?? `${prefix} ${itemId}`;
  const selectItem = useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      const id = Number(event.currentTarget.value);
      setItemId(id);
      onSelect(id);
    },
    [onSelect],
  );

  return (
    <Select
      className={className}
      css={css`
        svg {
          width: 10px;
          height: 10px;
        }
        border: 1px var(--color-border) solid;
        &:hover {
          border-color: var(--color-primary);
        }
        padding: 0 5px 0 16px;
        border-radius: 4px;
        cursor: pointer;
      `}
    >
      <Span css={{fontSize: 14}}>
        <Span css={{color: 'var(--color-text-secondary)', fontSize: 14}}>{prefix}: </Span>
        {getTitle()}
      </Span>
      <SelectOptions>
        <FilterOptionsList>
          {options.map(option => {
            return (
              <FilterOption
                key={option.id}
                value={option.id}
                onClick={selectItem}
                css={css`
                  ${option.id === itemId ? activeItem : ''}
                `}
              >
                {option.title}
              </FilterOption>
            );
          })}
        </FilterOptionsList>
      </SelectOptions>
    </Select>
  );
}
