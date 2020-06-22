import backgroundImagePath from '@/assets/img/auth-background.png';
import cameraImgPath from '@/assets/img/camera-green-circle.svg';
import { useInject } from '@/store/use-inject';
import { Spin } from 'antd';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { AuthStore } from './auth-store';
import { LoginForm } from './components/LoginForm';
import css from './LoginPage.less';

interface Props {
  className?: string;
}

const WelcomeBlock = () => (
  <div className="absolute bottom-0 py-5 px-10" style={{ height: 140 }}>
    <div className="text-2xl mb-1">Добро пожаловать</div>
    <div className="text-base">
      Введите свои учётные данные, чтобы получить доступ к аналитической видео
      системе.
    </div>
  </div>
);

export const LoginPage: React.FC<Props> = observer(props => {
  const [auth] = useInject(AuthStore);

  return (
    <div
      className={cn(
        'h-screen flex flex-col justify-center items-center',
        css.container,
        props.className,
      )}
    >
      <div className={css.main}>
        <Spin spinning={auth.loading}>
          <div className={cn('relative', css.formContainer)}>
            <LoginForm />
            <img
              src={cameraImgPath}
              className="absolute top-0"
              style={{ transform: 'translate(0, -50%)' }}
            />
          </div>
        </Spin>
        <div className="relative">
          <img src={backgroundImagePath} />
          <WelcomeBlock />
        </div>
      </div>
      <div className={cn('w-full', css.spacer)} />
    </div>
  );
});
