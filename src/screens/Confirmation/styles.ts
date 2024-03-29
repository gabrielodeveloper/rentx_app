import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;

 background-color: ${({ theme }) => theme.colors.header};
 padding-top: 96px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding-bottom: 60px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-top: 47px;
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
  line-height: ${RFValue(25)}px;

  margin-top: 16px;
  text-align: center;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;

  padding: 80px 0;
`;
