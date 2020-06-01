import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin-top: 16px;
`;

export const ForgotPasswordButtonText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';
  color: #67647e;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 16px 0;
  background-color: #fff;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CreateAccountButtonText = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Bold';
  color: #67647e;
  margin-left: 16px;
`;
