import { ButtonSuccess } from '@/common/components/ButtonSuccess';
import { useInject } from '@/store/use-inject';
import { Button, Divider, Form, Input } from 'antd';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { loginFields } from '../auth-constants';
import { AuthStore } from '../auth-store';
import css from './LoginForm.less';

interface Props {
  className?: string;
}

export const LoginForm: React.FC<Props> = observer(props => {
  const [auth] = useInject(AuthStore);

  return (
    <Form
      layout="vertical"
      className={cn(css.form, props.className)}
      initialValues={auth.formInitialValues}
      onFinish={auth.postLogin as any}
      onValuesChange={auth.onFormValuesChange}
    >
      <Form.Item>
        <div className="text-2xl">Авторизация</div>
      </Form.Item>

      <Form.Item
        label="Email"
        required={false}
        name={loginFields.userName}
        rules={[{ required: true, message: 'Введите e-mail' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        required={false}
        name={loginFields.password}
        rules={[{ required: true, message: 'Введите пароль' }]}
      >
        <Input.Password className={css.passwordChromeFix} />
      </Form.Item>

      <Form.Item>
        <ButtonSuccess htmlType="submit" className="w-full">
          Войти
        </ButtonSuccess>
      </Form.Item>

      <Divider />

      <Form.Item>
        <Button className="w-full">Создать аккаунт</Button>
      </Form.Item>
    </Form>
  );
});
