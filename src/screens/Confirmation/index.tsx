import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import {
  Container,
  Content,
  Title,
  Message,
  Footer
} from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';
import { useNavigation, useRoute } from '@react-navigation/native';

import BrandSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    title,
    message,
    nextScreenRoute
  } = route.params as Params;

  function handleSheduling() {
    navigation.navigate(nextScreenRoute);
  }

  const { width } = useWindowDimensions();
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <BrandSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>

      <Footer>
        <ConfirmButton
          title='Ok'
          onPress={handleSheduling}
        />
      </Footer>

    </Container>
  );
}