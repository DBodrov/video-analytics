import React from 'react';
import {Span, InputNumber} from 'neutrino-ui';
import {Threshold, Form, Select} from './styles';

export function ThresholdForm() {
  const [threshold, setThreshold] = React.useState(15);
  const [times, setTimes] = React.useState('минуты');
  const handleSetThreshold = (value: string | number) => {
    setThreshold(Number(value));
  };
  const handleSetTimes = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {value} = e.currentTarget;
    setTimes(value);
  };
  return (
    <Form>
      <Span>Настройте логику срабатывания инцидентов</Span>
      <label
        htmlFor="threshold"
        css={{fontSize: 14, color: 'var(--color-text-secondary)', margin: '26px 0 0 16px'}}
      >
        Сотрудник находится без каски более
      </label>
      <Threshold>
        <InputNumber
          value={threshold}
          onChangeHandler={handleSetThreshold}
          name="threshold"
          id="threshold"
          css={{width: 70, height: 36, borderRadius: '4px 0px 0px 4px'}}
        />
        <Select
          name="times"
          id=""
          onChange={handleSetTimes}
          value={times}
          css={{borderRadius: '0px 4px 4px 0px'}}
        >
          <option value="минуты">Минут</option>
          <option value="часы">Часов</option>
          <option value="секунды">Секунд</option>
        </Select>
      </Threshold>
    </Form>
  );
}
