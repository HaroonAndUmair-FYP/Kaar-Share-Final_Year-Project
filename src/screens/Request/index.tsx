import React, { useState } from 'react';
import { Text,StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Polyline, Marker, Callout } from 'react-native-maps';
import DateTimePicker from '@react-native-community/datetimepicker';
import homeMarker from '../../assets/home_marker.png';
import destMarker from '../../assets/dest_marker.png';
import visa from '../../assets/visa.png';
import customMapStyle from '../../mapstyle.json';
import Header from '../../components/Header';
import CarButton from '../../components/CarButton';
import Button from '../../components/Button';
import theme from '../../theme';
import * as S from './styles';
import DatePicker from 'react-native-datepicker';
import TimePicker from 'react-native-simple-time-picker';

const Request: React.FC = () => {
  const [selected, setSelected] = useState('economy');
  const [seats, setNumberseats] = useState('');
  const [time, setTime] = useState('');
 
  const navigation = useNavigation();
  const [date, setDate] = useState('09-10-2020');
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  return (
    <S.Container>
      <S.HeaderContainer>
        <Header transparentButton={false} />
      </S.HeaderContainer>
      <S.ToContainer>
      <S.Label>Select Date</S.Label>
      <DatePicker
          value={date}
          onChangeText={setDate}
          style={{width: '40%',marginTop: '10%',paddingLeft:'10%'}}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2025"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 15,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
          
        />
         <S.TLabel>Select Time</S.TLabel>
        <S.To>
         <TimePicker
          value={time}
          onChangeText={setTime}
          style={{width: '5%',paddingLeft:'70%',marginBottom: '10%',}}
          selectedHours={selectedHours}
          //initial Hourse value
          selectedMinutes={selectedMinutes}
          //initial Minutes value
          onChange={(hours, minutes) => {
            setSelectedHours(hours);
            setSelectedMinutes(minutes);
          }}/>
         
           <S.Input
          placeholder="No Of seats"
          keyboardType="number-pad"
          value={seats}
          onChangeText={setNumberseats}
          autoCorrect={false}
          autoCaptalize={false}
        />
          </S.To>
          </S.ToContainer>
      
  
      <S.Map
        region={{
          latitude: -19.920183,
          longitude: -43.936825,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        }}
        loadingEnabled
        showsCompass={false}
        showsPointsOfInterest={false}
        showsBuildings={false}
        customMapStyle={customMapStyle}
      >
        <Polyline
          coordinates={[
            { longitude: -43.935129, latitude: -19.916483 },
            { longitude: -43.935322, latitude: -19.917199 },
            { longitude: -43.935452, latitude: -19.917306 },
            { longitude: -43.935597, latitude: -19.917413 },
            { longitude: -43.936989, latitude: -19.918178 },
            { longitude: -43.938683, latitude: -19.919081 },
            { longitude: -43.937698, latitude: -19.920745 },
            { longitude: -43.938009, latitude: -19.921849 },
            { longitude: -43.938881, latitude: -19.921655 },
          ]}
          strokeColor={theme.color.secondary} // fallback for when `strokeColors` is not supported by the map-provider
          strokeWidth={3}
        />
        <Marker
          image={homeMarker}
          coordinate={{ latitude: -19.916483, longitude: -43.935129 }}
        >
          <Callout>
            <Text>Praça da Estação</Text>
          </Callout>
        </Marker>
        <Marker
          image={destMarker}
          coordinate={{ latitude: -19.921655, longitude: -43.938881 }}
        >
          <Callout>
            <Text>Igreja de São José</Text>
          </Callout>
        </Marker>
      </S.Map>

      <S.Bottom>
        <LinearGradient
          colors={['rgba(255,255,255, 0.2)', 'rgba(255,255,255, 0.9)', '#fff']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
        />
        <S.Options>
          {/* <CarButton
            text="Economy"
            onPress={() => setSelected('economy')}
            active={selected === 'economy'}
          />
          <CarButton
            text="Luxury"
            onPress={() => setSelected('luxury')}
            active={selected === 'luxury'}
          />
          <CarButton
            text="Family"
            onPress={() => setSelected('family')}
            active={selected === 'family'}
          /> */}
        </S.Options>
        {/* <S.CreditCardInfo>
          <S.CreditCardImage source={visa} />
          <S.CreditCardText>•••• 0990</S.CreditCardText>
        </S.CreditCardInfo> */}
        <Button onPress={() => navigation.navigate('YourRide')}>
          Post Ride
        </Button>
      </S.Bottom>
    </S.Container>
  );
};

export default Request;
