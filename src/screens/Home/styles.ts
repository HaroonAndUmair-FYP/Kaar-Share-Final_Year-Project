import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { ThemeProps } from '../../theme';


export const InputContainer = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 45px;
  padding: 0 24px;
  margin-bottom: 24px;
`;

export const Code = styled.Text<ThemeProps>`
  font-size: 18px;
  color: ${({ theme }) => theme.color.primary};
  margin-right: 19px;
`;

export const Input = styled.TextInput<ThemeProps>`
  font-size: 18px;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.gray};
`;



export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-bottom: 60px;
`;

export const TopArea = styled.View<ThemeProps>`
  align-items: center;
  top: -10%;
  width: 100%;
  height: 50%;
  background: ${({ theme }) => theme.color.primary};
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
`;

export const CabImg = styled.Image`
  bottom: -35%;
  height: ${hp('50%')}px;
`;

export const BottomArea = styled.View`
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 50%;
  padding: ${`${hp('10%')}px ${wp('10%')}px  ${hp('1%')}px ${wp('10%')}px`};
`;

export const Title = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 30px;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 42px;
`;

export const TitleBold = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 30px;
  color: ${({ theme }) => theme.color.primary};
`;
