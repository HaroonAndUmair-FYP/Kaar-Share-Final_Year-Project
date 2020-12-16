import React from 'react';
import { ImageURISource, TextInput ,View,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import * as S from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AutoComplete from '../../components/AutoCompletePlaces/AutoCompleteSearchBar';
const SelectDestination: React.FC = () => {
  const navigation = useNavigation();

  let destinationId;
    let destinationText;
    let deslongitudee;
  let deslatitudee;

  let srcId;
    let srcText;
    let srclongitudee;
  let srclatitudee;
  
  return (
    <View style={styles.Container}>
      
      {/* <S.TopContainer> */}
        
      {/* <S.FromTo> */}
      {/* console.log("start"); */}
     
        <GooglePlacesAutocomplete
                 styles={{
                    textInput: {
                    height: 30,
                    color: '#323232',
                     fontSize: 18,
                     top: 250
                    
                    
                    },
                }}
                    placeholder = "Pickup Location"
                    // autoFocus={true}
                    returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                    keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                    listViewDisplayed='auto'    // true/false/undefined
                    fetchDetails={true}
                    renderDescription={row =>  row.description } // custom description render
                    onPress={(data, details) => { // 'details' is provided when fetchDetails = true
                        
                        srclongitudee = details.geometry.location.lng;
                        srclatitudee = details.geometry.location.lat;
                        srcId = data.place_id;
                      srcText = details.formatted_address;
                      console.log(srclongitudee,srclatitudee,srcId,srcText)
                    }}
                    
                    onKeyPress = {(e) => {
                        if(e.nativeEvent.key == "done"){
                        }
                    }}
                    query={{
                        key:'AIzaSyAkbGuYYI3uPgssjli44egmT6mu1d0fKCM',
                        language: 'en', // language of the results
                    }}

                    // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                    // currentLocationLabel="Current location"
                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    GoogleReverseGeocodingQuery={{
                        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                    }}
                    GooglePlacesSearchQuery={{
                        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                        rankby: 'distance',
                        type: 'cafe'
                    }}
                    
                    GooglePlacesDetailsQuery={{
                        // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                        fields: ['formatted_address'],
                    }}

                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                    // predefinedPlaces={[homePlace, workPlace]}
                    enablePoweredByContainer={false}
                    debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                   
                />
        {/* </S.FromTo> */}
      {/* </S.TopContainer> */}
       {/* console.log("mid") */}

      <S.Timeline>
          <S.Dot />
          <S.Dash />
          <S.Dot secondary />
      </S.Timeline>
      


      <GooglePlacesAutocomplete
                 styles={{
                    textInput: {
                    height: 30,
                    color: '#323232',
                     fontSize: 18,
                     top: 50
                    
                    
                    },
                }}
                    placeholder = "Dropoff Location"
                    // autoFocus={true}
                    returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                    keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                    listViewDisplayed='auto'    // true/false/undefined
                    fetchDetails={true}
                    renderDescription={row =>  row.description } // custom description render
                    onPress={(data, details) => { // 'details' is provided when fetchDetails = true
                        
                    deslongitudee = details.geometry.location.lng;
                        deslatitudee = details.geometry.location.lat;
                        destinationId = data.place_id;
                      destinationText = details.formatted_address;
                    
                      console.log(deslatitudee,deslongitudee,destinationId,destinationText,"\n -------------- \n")
                    }}
                    
                    onKeyPress = {(e) => {
                        if(e.nativeEvent.key == "done"){
                        }
                    }}
                    query={{
                        key:'AIzaSyAkbGuYYI3uPgssjli44egmT6mu1d0fKCM',
                        language: 'en', // language of the results
                    }}

                    // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                    // currentLocationLabel="Current location"
                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    GoogleReverseGeocodingQuery={{
                        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                    }}
                    GooglePlacesSearchQuery={{
                        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                        rankby: 'distance',
                        type: 'cafe'
                    }}
                    
                    GooglePlacesDetailsQuery={{
                        // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                        fields: ['formatted_address'],
                    }}

                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                    // predefinedPlaces={[homePlace, workPlace]}
                    enablePoweredByContainer={false}
                    debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                   
                />
      {/* <S.Shadow /> */}
      {/* console.log("end") */}
      <S.BottomContainer>
        <Button onPress={() => navigation.navigate('Request', {
          paramKey:{deslatitudee,deslongitudee,srclatitudee,srclongitudee}
        })}>Done</Button>

      </S.BottomContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  Container:
  {
    flex:1,
  }
  
})



export default SelectDestination;
