import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Searchbar, List } from 'react-native-paper';
import { Row, Col } from 'react-native-responsive-grid-system';
import Scheduler from '../components/Scheduler';

const Schedule = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#AD62FB' }}>
      <Scheduler date='2 Desember 2021' time='09.00 PM' image1={require('../assets/Logo/sentinels.png')} image2={require('../assets/Logo/kru.png')} team1='Sentinels' team2='KRU' category='BEST OF 3' />
      {/* <View style={{ flexDirection: 'row', marginTop: 30, marginHorizontal: 25 }}>

      </View>
      <View style={{ marginTop: 16, backgroundColor: '#EFE0FE', marginHorizontal: 25, borderRadius: 5, flexDirection: 'row', paddingVertical: 15, justifyContent: 'center' }}>
        <Image style={{ width: 40, height: 40 }} source={require('../assets/Logo/sentinels.png')}></Image>
        <Text
          style={{
            fontSize: 15, fontWeight: '400', fontFamily: 'kanit', color: '#000000',
          }}>
          Sentinels
        </Text>
        <Text style={{
          fontSize: 15, fontWeight: '400', fontFamily: 'kanit', color: '#000'
        }}>VS</Text>
        <Image style={{ width: 40, height: 40 }} source={require('../assets/Logo/kru.png')}></Image>
        <Text
          style={{
            fontSize: 15, fontWeight: '400', fontFamily: 'kanit', color: '#000000',
          }}>
          Kru
        </Text>
      </View>
      <View style={{ marginTop: 16, backgroundColor: '#EFE0FE', marginHorizontal: 25, borderRadius: 5, flexDirection: 'row', paddingVertical: 15 }}>

      </View>
      <View style={{ marginTop: 16, backgroundColor: '#EFE0FE', marginHorizontal: 25, borderRadius: 5, flexDirection: 'row', paddingVertical: 15 }}>

      </View>
      <View style={{ marginTop: 16, backgroundColor: '#EFE0FE', marginHorizontal: 25, borderRadius: 5, flexDirection: 'row', paddingVertical: 15 }}>

        </View> */}
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({});

