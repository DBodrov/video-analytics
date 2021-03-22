import React, {useReducer} from 'react';
import {useHistory} from 'react-router-dom';
import {inputStyle, optionsListStyle, optionStyle} from './styles';
import {optionsList, initialStateValue} from './consts';
import {SimpleSelect} from 'neutrino-ui';
import {useAuth} from '@/context/Auth';
import {IStateValue, IAction, EnumActions} from './types';

export const DropDownLogoutMenu: React.FC = () => {
  const {logout} = useAuth();
  const history = useHistory();

  function reducer(state: IStateValue, action: IAction) {
    switch (action.type) {
      case EnumActions.FAQ_ACTION:
        history.push('/faq');
        return state;
      case EnumActions.EXIT_ACTION:
        logout();
        return state;
      default:
        return state;
    }
  }

  const [stateValue, dispatch] = useReducer(reducer, initialStateValue);

  const handleItemClick = React.useCallback(
    (event: React.PointerEvent<HTMLLIElement> | undefined) => {
      const {value} = event!.currentTarget;
      dispatch({type: value});
    },
    [dispatch],
  );

  return (
    <SimpleSelect
      options={optionsList}
      css={{display: 'flex', width: 50}}
      value={stateValue}
      onSelect={handleItemClick}
      selectInputStyles={inputStyle}
      optionsListStyles={optionsListStyle}
      optionStyles={optionStyle}
    />
  );
};
