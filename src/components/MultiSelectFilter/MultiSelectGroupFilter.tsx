import React from 'react';
import {css} from '@emotion/react';
import {useTheme, Span, Dropdown, Checkbox, Button, ToggleProvider, useToggle} from 'neutrino-ui';
import {LinkButton} from '@/components';
import {SelectBox} from './SelectBox';
import {FilterOption, FilterOptionsList, Panel} from './styles';
import {TMultiSelectProps} from './types';


function Select({options, value = [], onSelect, className, prefix}: TMultiSelectProps) {
  const [selectedChecks, setCheck] = React.useState<number[]>(value);
  const [selectRect, setSelectRect] = React.useState<DOMRect | undefined>(undefined);
  const theme = useTheme();
  const mSelectRef = React.useRef<HTMLDivElement>(null);
  const optionsRef = React.useRef<HTMLDivElement>(null);
  const {isOpen, handleClose} = useToggle();

  const listBaseCss = css({
    margin: 0,
    padding: 0,
    listStyle: 'none',
    border: `1px ${theme?.colors?.pageElementsColors?.border} solid`,
    boxSizing: 'border-box',
    backgroundColor: theme?.colors?.pageElementsColors?.formElements,
    width: '300px',
    height: 350,
    overflow: 'auto',
  });

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
    options && Object.keys(options).forEach(category => {
      options[category].forEach(item => {
        if (selectedChecks.includes(Number(item.id))) {
          return;
        }
        setCheck(prev => [...prev, Number(item.id)]);
      });
    });
  }, [options, selectedChecks]);

  const applyFilter = React.useCallback(() => {
    onSelect(selectedChecks);
    handleClose();
  }, [handleClose, onSelect, selectedChecks]);

  const isSelected = React.useCallback(
    (checkId: number | undefined = -1) => selectedChecks.includes(checkId),
    [selectedChecks],
  );

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
                    backgroundColor: isSelected(Number(item.id)) ? 'rgba(49, 61, 79, 0.5)' : 'transparent',
                    fontWeight: isSelected(Number(item.id)) ? 600 : 'normal',
                  }}
                >
                  <Checkbox
                    onChangeHandler={() => {}}
                    checked={isSelected(Number(item.id))}
                    boxStyles={checkboxStyles(Number(item.id))}
                  >
                    {item.value}
                  </Checkbox>
                </FilterOption>
              );
            })}
          </React.Fragment>
        );
      })
    );
  };

  React.useEffect(() => {
    const handleClickOutside = (e: PointerEvent | MouseEvent) => {
      if (e.target instanceof HTMLElement && isOpen) {
        const optionsList = optionsRef?.current;
        const selectInput = mSelectRef?.current;
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
      const selectEl = mSelectRef?.current;
      setSelectRect(selectEl?.getBoundingClientRect());
      document.addEventListener('click', handleClickOutside);
      window.addEventListener('scroll', handleScroll, true);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleClose, isOpen]);

  return (
    <div css={{position: 'relative'}} className={className} ref={mSelectRef}>
      <SelectBox>
        <Span css={{color: 'var(--color-text-secondary)', fontSize: 14}}>{prefix}:  </Span>
        <Span css={{fontSize: 14, paddingLeft: 4}}>{selectedChecks.length > 0 ? `(${selectedChecks.length})` : ' Любые'}</Span>
      </SelectBox>
      <Dropdown isOpen={isOpen} ref={optionsRef} parentBound={isOpen ? selectRect : undefined}>
        <div css={listBaseCss}>
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
                marginLeft: '50px',
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
      </Dropdown>
    </div>
  );
}

export function MultiSelectGroupFilter(props: TMultiSelectProps) {
  return (
    <ToggleProvider>
      <Select {...props} />
    </ToggleProvider>
  );
}
