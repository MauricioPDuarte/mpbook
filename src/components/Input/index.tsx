import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="#A6A4A4" />

      <TextInput
        keyboardAppearance="light"
        placeholderTextColor="#A6A4A4"
        {...rest}
      />
    </Container>
  );
};

export default Input;
