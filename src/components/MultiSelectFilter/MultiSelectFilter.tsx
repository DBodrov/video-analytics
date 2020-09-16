import React from 'react';
import {css} from '@emotion/core';
import {Select, SelectOptions, Span, ISelectState, SelectChangeTypes, Checkbox, Button} from 'neutrino-ui';
import {LinkButton} from '@/components';
import {FilterOptionsList, FilterOption, Panel, activeItem} from './styles';

type TFilterItem = {
  id?: number;
  title?: string;
};

type TFilterOptions = Record<string, TFilterItem[]>;

type MultiSelectFilterProps = {
  options: TFilterOptions;
  onSelect: (ids: number[]) => void;
  className?: string;
  prefix?: string;
  defaultValue?: number;
};

const filterReducer = (state: ISelectState, changes: ISelectState): ISelectState => {
  switch (changes.type) {
    case SelectChangeTypes.selectClick:
      return {
        ...state,
        isOpen: true,
      };
    case SelectChangeTypes.clickOutside:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return {
        ...state,
        ...changes,
      };
  }
};

export function MultiSelectFilter(props: MultiSelectFilterProps) {
  const [selectedChecks, setCheck] = React.useState<number[]>([]);
  const {options, prefix, onSelect, className} = props;

  const handleSelectItem = React.useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      const {value} = event.currentTarget;
      if (selectedChecks.includes(value)) {
        const updatedChecks = selectedChecks.filter(c => c !== value);
        setCheck(updatedChecks);
      } else {
        setCheck(prev => [...prev, value]);
      }
    },
    [selectedChecks],
  );

  const handleSelectAll = React.useCallback(() => {
    Object.keys(options).forEach(category => {
      options[category].forEach(item => {
        if (selectedChecks.includes(item.id!)) {
          return;
        }
        setCheck(prev => [...prev, item.id!]);
      });
    });
  }, [options, selectedChecks]);

  const applyFilter = React.useCallback(() => {
    onSelect(selectedChecks);
  }, [onSelect, selectedChecks]);

  const isSelected = React.useCallback((checkId: number = -1) => selectedChecks.includes(checkId), [
    selectedChecks,
  ]);

  const checkboxStyles = (checkId: number = -1): React.CSSProperties => ({
    width: '16px',
    height: '16px',
    backgroundColor: isSelected(checkId) ? '#29B311' : 'transparent',
  });

  const renderOptions = () => {
    return (
      options &&
      Object.keys(options).map(category => {
        return (
          <React.Fragment key={category}>
            <FilterOption
              css={{
                backgroundColor: 'var(--color-content)',
                opacity: '0.5',
                '&:hover': {backgroundColor: 'var(--color-content)', cursor: 'default'},
              }}
            >
              {category}
            </FilterOption>
            {options[category].map(item => {
              return (
                <FilterOption
                  key={item.id}
                  value={item.id}
                  onClick={handleSelectItem}
                  css={{
                    backgroundColor: isSelected(item.id) ? 'rgba(49, 61, 79, 0.5)' : 'transparent',
                    fontWeight: isSelected(item.id) ? 600 : 'normal',
                  }}
                >
                  <Checkbox
                    onChangeHandler={() => {}}
                    checked={isSelected(item.id)}
                    boxStyles={checkboxStyles(item.id)}
                  >
                    {item.title}
                  </Checkbox>
                </FilterOption>
              );
            })}
          </React.Fragment>
        );
      })
    );
  };

  return (
    <Select
      stateReducer={filterReducer}
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
        {selectedChecks.length > 0 ? `(${selectedChecks.length})` : 'Любые'}
      </Span>
      <SelectOptions>
        <div css={{height: 300, border: '1px var(--color-border) solid'}}>
          <FilterOptionsList>{renderOptions()}</FilterOptionsList>
          <Panel>
            <LinkButton css={{color: 'var(--color-text-secondary)'}} onClick={handleSelectAll}>
              Выбрать все
            </LinkButton>
            <span css={{margin: '0 8px'}}>|</span>
            <LinkButton onClick={() => setCheck([])} css={{color: 'var(--color-text-secondary)'}}>
              Очистить
            </LinkButton>
            <Button
              css={{
                backgroundColor: '#29B311',
                minWidth: 68,
                minHeight: 18,
                width: 68,
                height: 18,
                fontSize: 11,
                marginLeft: 'auto',
                '&:hover': {backgroundColor: '#29B311'},
              }}
              variant="primary"
              flat
              onClick={applyFilter}
            >
              Применить
            </Button>
          </Panel>
        </div>
      </SelectOptions>
    </Select>
  );
}
