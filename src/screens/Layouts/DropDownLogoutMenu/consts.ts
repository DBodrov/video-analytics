import {EnumActions, IOptionalList, IStateValue} from './types';

export const optionsList: IOptionalList = [
  {id: EnumActions.FAQ_ACTION as number, value: 'FAQ'},
  {id: EnumActions.EXIT_ACTION as number, value: 'Выход'},
];

export const initialStateValue: IStateValue = undefined;
