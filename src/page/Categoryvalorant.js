import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Categoryvalorant = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#AD62FB'}}>
      <View style={{flexDirection: 'row', marginTop: 30, marginHorizontal: 25}}>
        <Image source={require('../assets/Icons/valorant.png')} />
        <Text
          style={{
            alignSelf: 'center',
            marginLeft: 5,
            fontSize: 25,
            fontFamily: 'kanit',
            fontWeight: '700',
            color: '#ffffff',
          }}>
          Valorant - Teams Information
        </Text>
      </View>
      <View
        style={{
          height: 250,
          marginTop: 16,
          backgroundColor: '#EFE0FE',
          marginHorizontal: 25,
          borderRadius: 5,
          flexDirection: 'row',
        }}>
        <View>
          <TouchableOpacity>
            <Image source={require('../assets/Logo/sentinels.png')} />
            <Text>Sentinels</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={require('../assets/Logo/fullsense.png')} />
            <Text>FullSense</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={require('../assets/Logo/kru.png')} />
            <Text>KRU Esports</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Categoryvalorant;

const styles = StyleSheet.create({});
