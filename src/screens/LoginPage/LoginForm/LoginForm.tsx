import React, {useState, useCallback} from 'react';
import {H5, Input} from 'neutrino-ui';
import {LoginFormData, useAuth} from '@/context/Auth';
import {isEmptyString} from '@/utils/string.utils';
import {Form, Label, SubmitButton, ErrorText} from './styles';

export function LoginForm() {
  const [loginData, setLoginData] = useState<LoginFormData>({userName: '', password: ''});
  const [errorState, setErrorState] = useState<LoginFormData>({userName: '', password: ''});
  const {login} = useAuth();
  const handleChange = useCallback((value: string, event?: React.ChangeEvent<HTMLInputElement>) => {
    const field = event?.currentTarget.name;
    if (field) {
      setLoginData(s => ({...s, [field]: value}));
      setErrorState(s => ({...s, [field]: ''}));
    }
  }, []);

  const fieldRequireValidate = useCallback(
    (field: keyof LoginFormData) => {
      const isValid = !isEmptyString(loginData[field]);
      if (!isValid) {
        setErrorState(s => ({...s, [field]: 'Обязательное поле'}));
      } else {
        setErrorState(s => ({...s, [field]: ''}));
      }
    },
    [loginData],
  );

  const validateAllFields = useCallback(() => {
    fieldRequireValidate('userName');
    fieldRequireValidate('password');
  }, [fieldRequireValidate]);

  const handleBlur = useCallback(
    (value: string, e?: React.FocusEvent<HTMLInputElement>) => {
      const field = e?.currentTarget.name;
      fieldRequireValidate(field as keyof LoginFormData);
    },
    [fieldRequireValidate],
  );

  const handleLogin = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formIsValid = !isEmptyString(loginData.userName) && !isEmptyString(loginData.password);
      if (formIsValid) {
        login(loginData);
      } else {
        validateAllFields();
      }
    },
    [login, loginData, validateAllFields],
  );

  return (
    <Form onSubmit={handleLogin}>
      <H5>Авторизация</H5>

      <Label htmlFor="userName">Email</Label>
      <Input
        name="userName"
        autoComplete="username"
        onChangeHandler={handleChange}
        onBlurHandler={handleBlur}
        value={loginData.userName}
        hasError={Boolean(errorState.userName)}
        css={{height: 36, marginBottom: 16}}
      />
      {errorState.userName && <ErrorText>{errorState.userName}</ErrorText>}
      <Label htmlFor="password">Пароль</Label>
      <Input
        name="password"
        onChangeHandler={handleChange}
        onBlurHandler={handleBlur}
        value={loginData.password}
        hasError={Boolean(errorState.password)}
        type="password"
        autoComplete="current-password"
        css={{height: 36, marginBottom: 20}}
      />
      {errorState.password && <ErrorText>{errorState.password}</ErrorText>}
      <SubmitButton type="submit" flat>
        Войти
      </SubmitButton>
    </Form>
  );
}

// <Form.Item
//   label="Email"
//   required={false}
//   name="userName"
//   rules={[{ required: true, message: 'Введите e-mail' }]}
// >
//   <Input />
// </Form.Item>

// <Form.Item
//   label="Пароль"
//   required={false}
//   name="password"
//   rules={[{ required: true, message: 'Введите пароль' }]}
// >
//   <Input.Password />
// </Form.Item>

// <Form.Item>
//   <ButtonSuccess type="submit">Войти</ButtonSuccess>
// </Form.Item>

// <Divider />

// <Form.Item>
//   <Button className="w-full">Создать аккаунт</Button>
// </Form.Item>
