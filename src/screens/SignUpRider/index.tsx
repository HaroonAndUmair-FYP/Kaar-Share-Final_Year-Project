import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


import camera from '../../assets/camera.png';

import Header from '../../components/Header';
import Button from '../../components/Button';

import * as S from './styles';

const AddRider: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const navigation  = useNavigation();
  //console.log("name:", name, "email:", email, "number:", number, "address:", address, "password:", password);

  
//   const createRider = () => {
//     console.log(name, number, exp);
//     const rider = {
//       name,
//       email: exp,
//       password: number,
//       address: cvv
//     };
//     axios
//           .post("http://localhost:4000/rider", rider)
//           .then((res) => {
//             alert("User Successfully Added Go to login page Now");
//           })
//           .catch((error) => {
//             alert(error);
//             console.log(error)
//           });
// }
  return (
    <S.Container>
      <Header title="Sign Up" boldPosition={1} />
      <S.Inner>
        
        <S.Input
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          autoCorrect={false}
          autoCaptalize={false}
        />
        
        <S.Input
          placeholder="Email"
              value={email}
              onChangeText={setEmail}
              //maxLength={9}
              autoCorrect={false}
              autoCaptalize={false}
        />
        {/* <S.Label>Phone Number</S.Label> */}
        <S.Input
          placeholder="Phone Number"
            keyboardType="number-pad"
            value={number}
            onChangeText={setNumber}
          maxLength={12}
          autoCorrect={false}
          autoCaptalize={false}
          />
            
        {/* <S.Label>Address</S.Label> */}
        <S.Input
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
          autoCorrect={false}
          autoCaptalize={false}
        
        />
        <S.Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCaptalize={false}
        />
        <Button onPress={() => navigation.navigate ('CurrentLocation') }>Add Card</Button>
      </S.Inner>
    </S.Container>
  );
};

export default AddRider;
