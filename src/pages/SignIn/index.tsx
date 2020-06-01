import React from 'react';
import { Image, StatusBar } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <Container>
        <Image style={{ marginBottom: 20 }} source={logoImg} />

        <Input name="email" icon="mail" placeholder="E-mail" />

        <Input name="password" icon="lock" placeholder="Senha" />

        <Button
          onPress={() => {
            console.log('Deu');
          }}
        >
          Entrar
        </Button>
      </Container>
    </>
  );
};

export default SignIn;
