import React, {useEffect} from 'react';
import {getData} from '../utils/localstorage';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {HOST} from '../config';

const Profileupdate = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [number, setNumber] = React.useState('');

  useEffect(() => {
    getData('token').then(token => {
      fetch(`${HOST}profile`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token.value,
        },
      })
        .then(json => json.json())
        .then(res => {
          setName(res.data.name);
          setEmail(res.data.email);
          setNumber(res.data.phone_number);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }, []);

  const handleUpdate = () => {
    getData('token').then(token => {
      fetch(`${HOST}profile/update`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token.value,
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone_number: number,
        }),
      })
        .then(json => json.json())
        .then(res => {
          if (res.status) {
            navigation.reset({
              index: 0,
              routes: [{name: 'Tab'}],
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    });
  };

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
          onPress={() => handleUpdate()}
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
