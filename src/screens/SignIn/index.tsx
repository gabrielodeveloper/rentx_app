import React, { useState } from 'react';
import { PasswordInput } from '../../components/PasswordInput';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/auth';

import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import * as Yup from 'yup';
import {
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  Footer,
} from './styles';

export function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useTheme();
  const { signIn } = useAuth();

  async function handleSignIn() {
    try {
      const shema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail é obrigatório!')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('Senha é obrigatório!')
      });

      await shema.validate({ email, password });
      signIn({ email, password });
      
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message);
      } else {
        Alert.alert('Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique as Credenciais'
        )
      }
    }
  }

  function handleNewAccount() {
    navigation.navigate('SignUpFirstStep');
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Header>
            <Title>
              Estamos{'\n'}
              quase lá.
            </Title>
            <SubTitle>
              Faça seu login para começar{'\n'}
              uma experiência incrível.
            </SubTitle>
          </Header>

          <Form>
            <Input
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={setEmail}
              value={email}
            />
            <PasswordInput
              iconName='lock'
              keyboardType='name-phone-pad'
              placeholder='Senha'
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button
              title='Login'
              onPress={handleSignIn}
              enabled
              loading={false}
            />
            <Button
              title='Criar conta gratuita'
              onPress={handleNewAccount}
              color={theme.colors.background_secondary}
              light
            />
          </Footer>

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}