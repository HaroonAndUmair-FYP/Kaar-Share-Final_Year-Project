import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';
import { ThemeProps } from '../../theme';
interface InputProps extends ThemeProps {
  focused?: boolean;
}
export const Container = styled.View`
  flex: 1;
`;


export const HeaderContainer = styled.View`
  position: absolute;
  z-index: 999;
`;
export const Input = styled.TextInput<InputProps>`
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.color.primary};
  padding: 8px 0;
  margin-Left:30%;
  
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, focused }) =>
    focused ? theme.color.secondary : theme.color.gray};
  margin-bottom: 20px;
`;
export const TimePicker = styled.View`
flex-direction: row;
align-items: center;
width: 100%;

box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);

`;
export const Label = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 14px;
  position: absolute;
  flex-direction: row;
  margin-Left:10%;
  color: ${({ theme }) => theme.color.primary};
`;
export const TLabel = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 14px;
  position: absolute;
  flex-direction: row;
  margin-Left:50%;
  color: ${({ theme }) => theme.color.primary};
`;
export const ToContainer = styled.View`
flex-direction: row;
align-items: center;
width: 100%;
height: 20%;
background-color:	transparent;
box-shadow: 0px 2px 1px rgba(0, 0, 0, 0);
padding-top:5%;
`;
export const To = styled.View`
  padding: 15% 10% 30px 10%;
  font-size: 18px;
  width: 50%;
  color: ${({ theme }) => theme.color.primary}`;

export const Map = styled(MapView)`
  flex: 1;
`;

export const Bottom = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10% 10% 30px 10%;
`;

export const Options = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CreditCardInfo = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CreditCardImage = styled.Image`
  margin-right: 5px;
`;

export const CreditCardText = styled.Text<ThemeProps>`
  align-items: center;
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.color.primary};
`;
