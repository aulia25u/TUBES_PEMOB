import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Exploredetails = ({route, navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#AD62FB'}}>
      <View style={{width: '100%'}}>
        <Image
          style={{width: '100%', resizeMode: 'cover'}}
          source={require('../assets/Image/high.png')}
        />
        <View style={{zIndex: 100, position: 'relative', top: -80}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '500',
              fontFamily: 'kanit',
            }}>
            {route.params.title}
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '100',
              fontFamily: 'kanit',
            }}>
            Get the full details on the in-game celebration of VCT Champions!
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 25,
          marginTop: -60,
        }}></View>
      <View style={{marginHorizontal: 25}}>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              marginTop: 5,
              fontSize: 20,
              fontWeight: '400',
              fontFamily: 'kanit',
              textAlign: 'justify',
              color: '#fff',
            }}>
            {route.params.body}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Exploredetails;

const styles = StyleSheet.create({});
