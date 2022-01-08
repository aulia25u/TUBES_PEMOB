import React from 'react';
import {Button} from 'react-native-paper';

const LoginButton = () => {
  return (
    <Button
      color="#AD62FB"
      mode="text"
      onPress={() => {
        console.log('LOGIN');
      }}>
      Login
    </Button>
  );
};

export default LoginButton;
