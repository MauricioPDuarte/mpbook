import React from 'react';
import { Image, StatusBar } from 'react-native';

import { Container } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <Container>
        <Image source={logoImg} />
      </Container>
    </>
  );
};

export default SignIn;
