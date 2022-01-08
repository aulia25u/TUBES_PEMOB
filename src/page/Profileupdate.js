import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

const Profileupdate = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [number, setNumber] = React.useState('');
  return (
    <View style={{flex: 1, backgroundColor: '#AD62FB'}}>
      <View style={{marginTop: 30, paddingHorizontal: 37, marginTop: 90}}>
        <TextInput
          style={{backgroundColor: '#AD62FB', marginVertical: 10}}
          mode="outlined"
          activeOutlineColor="#ffffff"
          outlineColor="#ffffff"
          label="Name"
          value={name}
          onChangeText={name => setName(name)}
        />
        <TextInput
          style={{backgroundColor: '#AD62FB', marginVertical: 10}}
          mode="outlined"
          activeOutlineColor="#ffffff"
          outlineColor="#ffffff"
          label="Email"
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={{backgroundColor: '#AD62FB', marginVertical: 10}}
          mode="outlined"
          activeOutlineColor="#ffffff"
          outlineColor="#ffffff"
          label="Number"
          value={number}
          onChangeText={number => setNumber(number)}
        />
      </View>
      <View style={{paddingHorizontal: 40, marginTop: 200}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={{
            backgroundColor: '#452764',
            paddingVertical: 13,
            borderRadius: 50,
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 24,
              fontWeight: '400',
              fontFamily: 'kanit',
              textAlign: 'center',
            }}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profileupdate;

const styles = StyleSheet.create({});
