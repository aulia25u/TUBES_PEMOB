import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Row, Col } from 'react-native-responsive-grid-system';

const Categoryvalorant = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#AD62FB' }}>
      <View style={{ flexDirection: 'row', marginTop: 30, marginHorizontal: 25 }}>
        <Image source={require('../assets/Icons/valorant.png')} />
        <Text
          style={{
            flex: 1,
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
          marginTop: 16,
          backgroundColor: '#EFE0FE',
          marginHorizontal: 25,
          borderRadius: 5,
          flexDirection: 'row',
          paddingVertical: 15,
        }}>
        <Row>
          <Col sm={4} md={4} lg={4} xs={4}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Categorydetails');
              }}
              style={{ alignSelf: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/Logo/sentinels.png')} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  fontFamily: 'kanit',
                  color: '#000000',
                }}>
                Sentinels
              </Text>
            </TouchableOpacity>
          </Col>
          <Col sm={4} md={4} lg={4} xs={4}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Categorydetails');
              }}
              style={{ alignSelf: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/Logo/fullsense.png')} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  fontFamily: 'kanit',
                  color: '#000000',
                }}>
                FullSense
              </Text>
            </TouchableOpacity>
          </Col>
          <Col sm={4} md={4} lg={4} xs={4}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Categorydetails');
              }}
              style={{ alignSelf: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/Logo/kru.png')} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  fontFamily: 'kanit',
                  color: '#000000',
                }}>
                KRU Esports
              </Text>
            </TouchableOpacity>
          </Col>
          <Col sm={4} md={4} lg={4} xs={4}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Categorydetails');
              }}
              style={{ alignSelf: 'center', alignItems: 'center', marginTop:20 }}>
              <Image source={require('../assets/Logo/liquid.png')} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  fontFamily: 'kanit',
                  color: '#000000',
                }}>
                Team Liquid
              </Text>
            </TouchableOpacity>
          </Col>
          <Col sm={4} md={4} lg={4} xs={4}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Categorydetails');
              }}
              style={{ alignSelf: 'center', alignItems: 'center', marginTop:20 }}>
              <Image source={require('../assets/Logo/furia.png')} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  fontFamily: 'kanit',
                  color: '#000000',
                }}>
                Furia
              </Text>
            </TouchableOpacity>
          </Col>
          <Col sm={4} md={4} lg={4} xs={4}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Categorydetails');
              }}
              style={{ alignSelf: 'center', alignItems: 'center', marginTop:20}}>
              <Image source={require('../assets/Logo/vs.png')} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  fontFamily: 'kanit',
                  color: '#000000',
                }}>
                Vision Striker
              </Text>
            </TouchableOpacity>
          </Col>
        </Row>
      </View>
    </View>
  );
};

export default Categoryvalorant;

const styles = StyleSheet.create({});
