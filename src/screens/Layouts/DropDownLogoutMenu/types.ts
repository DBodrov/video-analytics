export enum EnumActions {
  FAQ_ACTION = 1,
  EXIT_ACTION = 2,
  UNDEFINED = 'undefined',
}

export interface IOption {
  id: number;
  value: string;
}

export type IOptionalList = IOption[];

export type IStateValue = number | undefined;

export type IAction = {
  type: EnumActions;
};
