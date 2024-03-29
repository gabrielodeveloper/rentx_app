import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
 width: 100%;
 height: 126px;

 background-color: ${({ theme }) => theme.colors.background_secondary};

 flex-direction: row;
 justify-content: space-between;
 align-items: center;

 padding: 24px;
 margin-bottom: 16px;
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};

  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const About = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  margin-top: 16px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.main};

  margin-right: 24px;
  text-transform: uppercase;
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
  width: 169px;
  height: 87px;
`;