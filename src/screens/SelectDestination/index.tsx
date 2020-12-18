import React from 'react';
import { ImageURISource, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import homeIcon from '../../assets/home.png';
import historyIcon from '../../assets/history.png';
import AutoCompletePlaces from '../../components/AutoCompletePlaces/AutoCompleteSearchBar';
import * as S from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';




const SelectDestination: React.FC = () => {
  const navigation = useNavigation();
  
  // function renderItem({ item }: IRenderItemProps) {
  //   return (
  //     <S.HistoryItem>
  //       <S.ItemIcon source={item.icon} />
  //       <S.ItemText>{item.text}</S.ItemText>
  //       {item.subtext && <S.ItemText small>{item.subtext}</S.ItemText>}
  //     </S.HistoryItem>
  //   );
  

  return (
    <S.Container>
      <S.TopContainer>
        <S.Timeline>
          <S.Dot />
          <S.Dash />
          <S.Dot secondary />
        </S.Timeline>
        <S.FromTo>
        <S.From>
          <AutoCompletePlaces
            placehoolder="PickUp City"/></S.From>
          
        <S.To>
        <AutoCompletePlaces
            placehoolder="Drop-off City"/></S.To>
         </S.FromTo>
      </S.TopContainer>
      <S.Shadow />
      {/* <S.HistoryList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      /> */}
      <S.BottomContainer>
        <Button onPress={() => navigation.navigate('Request')}>Done</Button>
      </S.BottomContainer>
    </S.Container>
  );
};

export default SelectDestination;
