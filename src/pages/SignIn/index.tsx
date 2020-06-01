import React, { useState } from 'react';
import {
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  Keyboard.addListener('keyboardDidShow', () => {
    setKeyboardOpen(true);
  });

  Keyboard.addListener('keyboardDidHide', () => {
    setKeyboardOpen(false);
  });

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
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

            <ForgotPasswordButton
              onPress={() => {
                console.log('Deu');
              }}
            >
              <ForgotPasswordButtonText>
                Esqueci minha senha
              </ForgotPasswordButtonText>
            </ForgotPasswordButton>

            {!keyboardOpen && (
              <CreateAccountButton
                onPress={() => {
                  console.log('Deu');
                }}
              >
                <Icon name="log-in" size={16} />
                <CreateAccountButtonText>
                  Criar uma conta
                </CreateAccountButtonText>
              </CreateAccountButton>
            )}
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
