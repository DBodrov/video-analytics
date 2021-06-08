export type OptionItem = {
  id?: string | number;
  value?: string | number;
};

export type TMultiSelectProps = {
  options?: Record<string, OptionItem[]>;
  value?: number[];
  onSelect: (values: number[]) => void;
  className?: string;
  prefix?: string;
};
