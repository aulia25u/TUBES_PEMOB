import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

const Register = ({navigation}) => {
  const [nama, setNama] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('');

  const handleRegister = () => {
    if (password === confirm) {
      fetch('http://20.205.61.111/api/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nama,
          email: email,
          password: password,
          phone_number: number,
        }),
      })
        .then(json => json.json())
        .then(res => {
          if (res.status) {
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
          } else {
            alert('login gagal');
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <View style={{flex: 1, paddingTop: 30, backgroundColor: '#ffffff'}}>
      <Text
        style={{
          marginLeft: 38,
          fontSize: 20,
          fontFamily: 'kanit',
          fontWeight: 'bold',
          color: '#494859',
        }}>
        Create a eSport Acount
      </Text>
      <View style={{marginTop: 30, paddingHorizontal: 37}}>
        <TextInput
          style={{backgroundColor: '#ffffff', marginVertical: 5}}
          mode="outlined"
          outlineColor="#AD62FB"
          label="Nama Lengkap"
          value={nama}
          onChangeText={nama => setNama(nama)}
        />
        <TextInput
          style={{backgroundColor: '#ffffff', marginVertical: 5}}
          mode="outlined"
          outlineColor="#AD62FB"
          label="Email Address"
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={{backgroundColor: '#ffffff', marginVertical: 5}}
          mode="outlined"
          outlineColor="#AD62FB"
          label="Mobile Number"
          value={number}
          onChangeText={number => setNumber(number)}
        />
        <TextInput
          style={{backgroundColor: '#ffffff', marginVertical: 5}}
          mode="outlined"
          outlineColor="#AD62FB"
          label="Password"
          value={password}
          onChangeText={password => setPassword(password)}
        />
        <TextInput
          style={{backgroundColor: '#ffffff', marginVertical: 5}}
          mode="outlined"
          outlineColor="#AD62FB"
          label="Confirm Password"
          value={confirm}
          onChangeText={confirm => setConfirm(confirm)}
        />
      </View>
      <View style={{paddingHorizontal: 40, marginTop: 100}}>
        <TouchableOpacity
          onPress={() => handleRegister()}
          style={{
            backgroundColor: '#BC8CF2',
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
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
