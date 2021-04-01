import React, {useReducer, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {inputStyle, optionsListStyle, optionStyle, LogoutMenu, UserName} from './styles';
import {optionsList, initialStateValue} from './consts';
import {SimpleSelect} from 'neutrino-ui';
import {useAuth} from '@/context/Auth';
import {USERNAME_KEY} from '@/utils/constants';
import {IStateValue, IAction, EnumActions} from './types';

const storedLogin = localStorage.getItem(USERNAME_KEY) ?? '';

export const DropDownLogoutMenu: React.FC = () => {
  const {logout, user_name } = useAuth();
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
  const [userName, setUserName] = useState<string | undefined>(storedLogin)

  useEffect(()=>{
    if (user_name)
      setUserName(user_name)
  },[user_name])

  const handleItemClick = React.useCallback(
    (event: React.PointerEvent<HTMLLIElement> | undefined) => {
      const {value} = event!.currentTarget;
      dispatch({type: value});
    },
    [dispatch],
  );

  return (
    <LogoutMenu>
      <UserName>{userName}</UserName>
      <SimpleSelect
        options={optionsList}
        css={{display: 'flex', width: 50}}
        value={stateValue}
        onSelect={handleItemClick}
        selectInputStyles={inputStyle}
        optionsListStyles={optionsListStyle}
        optionStyles={optionStyle}
      />
    </LogoutMenu>
  );
};
