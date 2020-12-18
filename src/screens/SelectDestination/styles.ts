import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { IItemProps } from './index';
import { ThemeProps } from '../../theme';

interface IItemText extends ThemeProps {
  small?: boolean;
}
interface IDot extends ThemeProps {
  secondary?: boolean;
}
interface InputProps extends ThemeProps {
  focused?: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${Constants.statusBarHeight + 225}px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  padding-top: ${Constants.statusBarHeight + 25}px;
`;

export const Shadow = styled(LinearGradient).attrs({
  colors: ['rgba(0,0,0, 0.1)', 'rgba(0,0,0, 0.01)'],
})`
  width: 100%;
  height: 6px;
`;

export const Timeline = styled.View`
  align-items: center;
  width: 12px;
  height: 200px;
  padding: 8% 0;
  margin-left: 10%;
`;

export const Dot = styled.View<IDot>`
  width: 12px;
  height: 15px;
  border-radius: 8px;
  background: ${({ secondary, theme }) =>
    secondary ? theme.color.secondary : '#000'};
`;

export const Dash = styled.View`
  width: 1px;
  height: 50px;
  border-left-width: 1px;
  border-left-color: #000;
`;

export const FromTo = styled.View`
  width: 100%;
  padding-right: 15%;
  padding-left: 10%;
`;

export const From = styled.View`
flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.primary};
 
  
  margin-bottom: 20px;
`;

export const To = styled.View`
 
flex-direction: row;
justify-content: space-between;
align-items: center;
color: ${({ theme }) => theme.color.primary};


margin-bottom: 20px;
`;

export const HistoryList = styled(FlatList as new () => FlatList<IItemProps>)`
  width: 100%;
  height: 80%;
  padding: 10%;
`;

export const HistoryItem = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.color.gray};
`;

export const ItemIcon = styled.Image`
  margin-right: 14px;
`;

export const ItemText = styled.Text<IItemText>`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ small }) => (small ? '10px' : '18px')};
  margin-left: ${({ small }) => (small ? '14px' : '0px')};
  color: ${({ theme }) => theme.color.primary};
`;

export const BottomContainer = styled.View`
  width: 100%;
  padding: 10%;
`;
