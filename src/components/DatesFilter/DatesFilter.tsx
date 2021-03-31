import React, {useState} from 'react';
import {css} from '@emotion/react';
import {DateRangePicker} from 'neutrino-ui/lib/sealed';

export type TDateRange = [startDate: string, endDate: string];

type TDatesFilterProps = {
  name: string;
  onSelect: (dates: TDateRange) => void;
  dates?: TDateRange;
};

export function DatesFilter(props: TDatesFilterProps) {
  const {name, onSelect, dates} = props;

  const [dateRange, setDateRange] = useState<TDateRange | undefined>(dates);

  const handleSelectDates = React.useCallback(
    (dates?: [string?, string?]) => {
      if (dates && dates[0] && dates[1]) {
        const selectedDates: TDateRange = [dates[0], dates[1]];
        onSelect(selectedDates);
        setDateRange(selectedDates);
      }
    },
    [onSelect, setDateRange],
  );

  return (
    <DateRangePicker
      name={name}
      onChangeHandler={handleSelectDates}
      value={dateRange}
      inputCss={css({borderRadius: 4, width: 250})}
    />
  );
}
