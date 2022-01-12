import React, {useEffect} from 'react';
import {getData, storeData} from '../utils/localstorage';
import {TextInput, Checkbox} from 'react-native-paper';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Login = ({navigation}) => {
  //state
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  const handleLogin = () => {
    fetch('http://20.205.61.111/api/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(json => json.json())
      .then(res => {
        if (res.status) {
          storeData('token', {value: res.Token}).finally(() => {
              navigation.reset({
              index: 0,
              routes: [{name: 'Tab'}],
            });
          });          
        } else {
          alert('Silahkan Coba Kembali, Periksa Email dan Password Anda');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Image
        style={{marginTop: 65, alignSelf: 'center'}}
        source={require('../assets/Image/login.png')}
      />
      <View style={{marginTop: 40, paddingHorizontal: 40}}>
        <TextInput
          style={{backgroundColor: '#ffffff'}}
          left={() => {
            return <Image source={require('../assets/Icons/user.png')} />;
          }}
          label="Email Address"
          value={email}
          onChangeText={email => setEmail(email)}
        />
      </View>
      <View style={{marginTop: 20, paddingHorizontal: 40, marginBottom: 43}}>
        <TextInput
          style={{backgroundColor: '#ffffff'}}
          label="Password"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
          value={password}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View>
        <View style={{paddingHorizontal: 40}}>
          <TouchableOpacity
            onPress={() => handleLogin()}
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
              Log In
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 45,
            alignItems: 'center',
            justifyContent:'center',
          }}>          
          <TouchableOpacity style={{marginTop:20}} onPress={()=>{navigation.navigate('Register')}}>
            <Text
              style={{
                color: '#000000',
                opacity: 0.5,
                fontSize: 18,
                fontWeight: '400',
                fontFamily: 'kanit',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
