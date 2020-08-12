import React from 'react';
import styled from '@emotion/styled';
import {H5, Span} from 'neutrino-ui';
import { LoginForm } from './LoginForm';
import cameraImgPath from '@/assets/img/camera-green-circle.svg';
import AuthBGImage from '../../assets/img/auth-background.png';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--color-content);
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 340px 480px;
  grid-template-rows: 390px;
  @media (max-width: 800px) {
    display: flex;
    flex-flow: column nowrap;
  }
`;



const WelcomeSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background: url(${AuthBGImage}) no-repeat ;
  background-size: cover;
`;

const WelcomeBlock = () => (
  <div css={{width: '100%', height: 140, padding: '20px 30px'}}>
    <H5 css={{marginBottom: '8px'}}>Добро пожаловать</H5>
    <Span>
      Введите свои учётные данные, чтобы получить доступ к аналитической видео системе.
    </Span>
  </div>
);

export function LoginPage() {
  return (
    <Container>
      <Main>
          <div css={{position: 'relative', }}>
            <LoginForm />
            <img
              src={cameraImgPath}
              alt="camera"
              aria-hidden
              css={{ position: 'absolute', top: '-25px', left: '30px' }}
            />
          </div>
        <WelcomeSection>
          <WelcomeBlock />
        </WelcomeSection>
      </Main>
    </Container>
  );
}
