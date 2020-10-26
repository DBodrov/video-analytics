import React from 'react';
import {css} from '@emotion/core';
import {Combobox, useCombobox, useTheme, Span, Dropdown} from 'neutrino-ui';
import {SelectBox} from '../MultiSelectFilter/SelectBox';

type TFilterItem = {
  id: number;
  value: string;
};

type TFilterOptions = TFilterItem[];

type SelectFilterProps = {
  options: TFilterOptions;
  onSelect: (id: number) => void;
  className?: string;
  prefix?: string;
  value?: number;
};

export function Select({onSelect, options, className, prefix, value = -1}: SelectFilterProps) {
  const [selectRect, setSelectRect] = React.useState<DOMRect | undefined>(undefined);
  const {handleClose, isOpen} = useCombobox();
  const {colors} = useTheme();
  const selectRef = React.useRef<HTMLDivElement>(null);
  const optionsRef = React.useRef<HTMLDivElement>(null);

  const handleItemClick = React.useCallback(
    (event: React.PointerEvent<HTMLLIElement>) => {
      onSelect(Number(event.currentTarget.value));
      handleClose();
    },
    [handleClose, onSelect],
  );

  const listBaseCss = css({
    margin: 0,
    padding: 0,
    listStyle: 'none',
    border: `1px ${colors?.pageElementsColors?.border} solid`,
    boxSizing: 'border-box',
    backgroundColor: colors?.pageElementsColors?.formElements,
    width: '100%',
  });

  const optionBaseCss = css({
    padding: '8px 16px',
    borderBottom: `1px ${colors?.pageElementsColors?.formElementsActive} solid`,
    margin: 0,
    color: colors?.textColors?.text,
    fontSize: 14,
    cursor: 'pointer',
  });

  const getDisplayValue = React.useCallback(() => {
    if (!value) {
      return '';
    }

    return options?.find(item => {
      return item?.id === value;
    })?.value;
  }, [options, value]);

  React.useEffect(() => {
    const handleClickOutside = (e: PointerEvent | MouseEvent) => {
      if (e.target instanceof HTMLElement && isOpen) {
        const optionsList = optionsRef?.current;
        const selectInput = selectRef?.current;
        if (optionsList?.contains(e.target) || selectInput?.contains(e.target)) {
          return;
        }
        handleClose();
      }
    };

    const handleScroll = (e: Event) =>
      window.requestAnimationFrame(() => {
        if (e.target instanceof HTMLElement && isOpen) {
          const optionsList = optionsRef?.current;
          if (optionsList?.contains(e.target)) {
            return;
          }
          handleClose();
        }
      });

    if (isOpen) {
      setSelectRect(selectRef?.current?.getBoundingClientRect());
      document.addEventListener('click', handleClickOutside);
      window.addEventListener('scroll', handleScroll, true);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleClose, isOpen]);

  return (
    <div css={{position: 'relative'}} className={className} ref={selectRef}>
      <SelectBox>
        <Span css={{color: 'var(--color-text-secondary)', fontSize: 14}}>{prefix}: </Span>
        <Span css={{fontSize: 14, paddingLeft: 4}}>{getDisplayValue()}</Span>
      </SelectBox>
      <Dropdown isOpen={isOpen} ref={optionsRef} parentBound={isOpen ? selectRect : undefined}>
        <ul css={[listBaseCss]}>
          {options?.map(option => {
            return (
              <li
                role="option"
                aria-selected={option.id === value ? 'true' : 'false'}
                key={option.id}
                value={option.id}
                css={[
                  optionBaseCss,
                  css({
                    backgroundColor:
                      option.id === value ? colors?.pageElementsColors?.selectedItem : 'transparent',
                  }),
                ]}
                onClick={handleItemClick}
              >
                {option.value}
              </li>
            );
          })}
        </ul>
      </Dropdown>
    </div>
  );
}

export function SelectFilter(props: SelectFilterProps) {
  return (
    <Combobox>
      <Select {...props} />
    </Combobox>
  );
}
