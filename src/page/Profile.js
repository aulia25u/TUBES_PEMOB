import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#AD62FB'}}>
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 125,
          width: 125,
          height: 125,
          marginTop: 85,
          marginLeft: 120,
        }}>
        <Image
          style={{flex: 1, alignSelf: 'center', width: 145}}
          source={require('../assets/Icons/profileuser.png')}
        />
      </View>
      <View
        style={{
          marginTop: 40,
          marginHorizontal: 35,
          borderBottomWidth: 1,
          borderColor: '#EFE0FE',
        }}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'kanit',
            fontWeight: '600',
            color: '#EFE0FE',
          }}>
          Good Day,
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'kanit',
            fontWeight: '600',
            color: '#EFE0FE',
            marginBottom: 20,
          }}>
          Supratman
        </Text>
      </View>
      <View style={{marginHorizontal: 35, marginTop: 30}}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => navigation.navigate('Profileupdate')}>
          <Image source={require('../assets/Icons/updateuser.png')} />
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'kanit',
              fontWeight: '600',
              color: '#EFE0FE',
              marginLeft: 15,
            }}>
            Update Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', marginVertical: 35}}
          onPress={() => navigation.navigate('Profilepassword')}>
          <Image source={require('../assets/Icons/keyuser.png')} />
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'kanit',
              fontWeight: '600',
              color: '#EFE0FE',
              marginLeft: 15,
            }}>
            Change Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => navigation.navigate('Splash')}>
          <Image source={require('../assets/Icons/logoutuser.png')} />
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'kanit',
              fontWeight: '600',
              color: '#EFE0FE',
              marginLeft: 15,
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
