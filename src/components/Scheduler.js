import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Scheduler = props => {
  return (
    <View
      style={{
        backgroundColor: '#E5E5E5',
        marginHorizontal: 25,
        borderRadius: 5,
        paddingHorizontal: 5,
      }}>
      <Text style={{color: '#AD62FB', marginLeft: 2}}>{props.date}</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',
              fontFamily: 'kanit',
              color: '#000000',
              textAlign: 'center',
            }}>
            {props.time}
          </Text>
        </View>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          {props.image1 && (
            <Image style={{width: 40, height: 40}} source={props.image1} />
          )}
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'kanit',
              color: '#000000',
              textAlign: 'center',
            }}>
            {props.team1}
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',
              fontFamily: 'kanit',
              color: '#000000',
            }}>
            VS
          </Text>
        </View>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          {props.image2 && (
            <Image style={{width: 40, height: 40}} source={props.image2} />
          )}
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'kanit',
              color: '#000000',
              textAlign: 'center',
            }}>
            {props.team2}
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',
              fontFamily: 'kanit',
              color: '#000000',
            }}>
            {props.category}
          </Text>
          <TouchableOpacity onPress={props.onPress}>
            <Text
              style={{
                color: '#AD62FB',
                fontSize: 12,
                fontWeight: '400',
                fontFamily: 'kanit',
              }}>
              DETAILS
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Scheduler;

const styles = StyleSheet.create({});
