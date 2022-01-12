import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Searchbar, List } from 'react-native-paper';
import { Row, Col } from 'react-native-responsive-grid-system';
import Scheduler from '../components/Scheduler';

const array = [0, 1, 2, 3, 4, 5]
const data = [
  {
    date: '3 Desember 2021', time: '11.00 PM', team1: 'Sentinels', team2: 'KRU', category: 'BEST OF 3'
  }
]
const Schedule = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#AD62FB' }}>
      {data.map((item, index) => {
        return (<View key={index} style={{ marginVertical: 10 }} >
          <Scheduler onPress={() => { navigation.navigate('Detailsmatch') }} date={item.date} time={item.time} image1={require('../assets/Logo/sentinels.png')} image2={require('../assets/Logo/kru.png')} team1={item.team1} team2={item.team2} category={item.category} />
        </View>)
      })}
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({});

