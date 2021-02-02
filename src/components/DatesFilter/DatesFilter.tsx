import React from 'react';
import {css} from '@emotion/react';
import {DateRangePicker} from 'neutrino-ui/lib/sealed';

type TDateRange = [startDate: string, endDate: string];

type TDatesFilterProps = {
  name: string;
  onSelect: (dates: TDateRange) => void;
  dates?: TDateRange;
};

export function DatesFilter(props: TDatesFilterProps) {
  const {name, onSelect, dates} = props;
  const handleSelectDates = React.useCallback((dates?: [string?, string?]) => {
    if (dates && dates[0] && dates[1]) {
      const selectedDates: TDateRange = [dates[0], dates[1]];
      onSelect(selectedDates);
    }
  }, []);
  return (
    <DateRangePicker
      name={name}
      onChangeHandler={handleSelectDates}
      value={dates}
      inputCss={css({borderRadius: 4, width: 250})}
    />
  );
}
