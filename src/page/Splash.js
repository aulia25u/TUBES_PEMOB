import React, {useEffect} from 'react';
import {getData} from '../utils/localstorage';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    getData('token').then(res => {
      console.log(res);
      if (res !== null) {
        navigation.reset({
          index: 0,
          routes: [{name: 'Tab'}],
        });
      }
    });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#AD62FB'}}>
      <Text
        style={{
          marginTop: 125,
          color: '#ffffff',
          fontSize: 25,
          fontFamily: 'kanit',
          fontWeight: '600',
          textAlign: 'center',
        }}>
        SpaceGG Apps
      </Text>
      <Image
        style={{marginTop: 60, alignSelf: 'center'}}
        source={require('../assets/Image/stars.png')}
      />
      <View
        style={{
          marginTop: 31,
        }}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 20,
            fontFamily: 'kanit',
            fontWeight: '400',
            textAlign: 'center',
          }}>
          Welcome To
        </Text>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 20,
            fontFamily: 'kanit',
            fontWeight: '400',
            textAlign: 'center',
          }}>
          The Number 1 eSport Apps
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          backgroundColor: '#BC8CF2',
          paddingVertical: 13,
          marginTop: 100,
          borderRadius: 50,
          marginHorizontal: 15,
        }}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 25,
            fontFamily: 'kanit',
            fontWeight: '600',
            textAlign: 'center',
          }}>
          Sign In
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginTop: 20, alignSelf: 'center'}}>
        <Text
          style={{
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: 16,
            fontFamily: 'kanit',
            fontWeight: '400',
            textAlign: 'center',
          }}>
          Dont have account ? Click
        </Text>
        <TouchableOpacity
          style={{justifyContent: 'center', marginLeft: 5}}
          onPress={() => navigation.navigate('Register')}>
          <Text
            style={{
              alignSelf: 'center',
              color: '#000000',
              fontSize: 16,
              fontFamily: 'kanit',
              fontWeight: '400',
              textAlign: 'center',
            }}>
            Here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({});
