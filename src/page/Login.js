import React from 'react';
import {TextInput, Checkbox} from 'react-native-paper';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Login = ({navigation}) => {
  //state
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  //
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
            onPress={() => navigation.navigate('Tab')}
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
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              color="#BC8CF2"
              uncheckedColor="#BC8CF2"
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text
              style={{
                color: '#000000',
                opacity: 0.5,
                fontSize: 15,
                fontWeight: '400',
                fontFamily: 'kanit',
              }}>
              Remember Me
            </Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                color: '#000000',
                opacity: 0.5,
                fontSize: 15,
                fontWeight: '400',
                fontFamily: 'kanit',
              }}>
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
