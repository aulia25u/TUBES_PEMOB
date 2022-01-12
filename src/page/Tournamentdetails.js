import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

const Tournamentdetails = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#AD62FB'}}>
      {/* Detail Tournament */}
      <View style={{marginHorizontal: 25}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '600',
            fontFamily: 'kanit',
            color: '#fff',
            marginTop: 30,
            marginBottom: 25,
          }}>
          Valorant CHAMPIONS 2021
        </Text>
        <Image
          style={{
            alignSelf: 'center',
            backgroundColor: '#fff',
            resizeMode: 'contain',
            height: 100,
            width: 100,
          }}
          source={require('../assets/Tournament/champions.png')}
        />
        <Text
          style={{
            marginTop: 20,
            fontSize: 16,
            fontWeight: '400',
            fontFamily: 'kanit',
            color: '#fff',
          }}>
          League Information
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            fontFamily: 'kanit',
            color: '#fff',
          }}>
          Organizer : Riot Games
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            fontFamily: 'kanit',
            color: '#fff',
          }}>
          Location : Berlin
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            fontFamily: 'kanit',
            color: '#fff',
          }}>
          Prize Pool : $1,000,000 USD{' '}
        </Text>
      </View>
      {/* Ranking Table */}
      <View style={{marginHorizontal: 41, marginTop: 15}}>
        <Text
          style={{
            marginBottom: 5,
            fontSize: 15,
            fontWeight: '400',
            fontFamily: 'kanit',
            color: '#fff',
          }}>
          Price Pool
        </Text>
        <Table>
          <Row
            textStyle={{
              color: '#3F3D56',
              fontSize: 15,
              fontWeight: '400',
              fontFamily: 'kanit',
            }}
            style={{backgroundColor: '#E4E4E4'}}
            data={['Place', '$ USD', 'Team']}
          />
          <Rows
            style={{backgroundColor: '#E4E4E4'}}
            textStyle={{
              color: '#3F3D56',
              fontSize: 15,
              fontWeight: '400',
              fontFamily: 'kanit',
            }}
            data={[
              ['1st', '$ 450,000', 'TBD'],
              ['2nd', '$ 250,000', 'TBD'],
              ['3rd', '$ 175,000', 'TBD'],
              ['4th', '$ 75,000', 'TBD'],
              ['5th', '$ 50,000', 'TBD'],
            ]}
          />
        </Table>
      </View>
      {/* Teams Participants */}
      <View
        style={{backgroundColor: '#231432', marginTop: 20, paddingBottom: 10}}>
        <Text
          style={{
            marginTop: 16,
            marginLeft: 30,
            marginBottom: 10,
            fontSize: 15,
            fontWeight: '400',
            fontFamily: 'kanit',
            color: '#fff',
          }}>
          Participants
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 50,
          }}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('Categorydetails');
            }}>
            <Image source={require('../assets/Logo/sentinels.png')} />
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                fontFamily: 'kanit',
                color: '#fff',
              }}>
              Sentinels
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('Teamfullsense');
            }}>
            <Image source={require('../assets/Logo/fullsense.png')} />
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                fontFamily: 'kanit',
                color: '#fff',
              }}>
              FullSense
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('Teamfuria');
            }}>
            <Image source={require('../assets/Logo/furia.png')} />
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                fontFamily: 'kanit',
                color: '#fff',
              }}>
              Furia
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('Teamliquid');
            }}>
            <Image source={require('../assets/Logo/liquid.png')} />
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                fontFamily: 'kanit',
                color: '#fff',
              }}>
              Team Liquid
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('Teamvs');
            }}>
            <Image source={require('../assets/Logo/vs.png')} />
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                fontFamily: 'kanit',
                color: '#fff',
              }}>
              Vision Stiker
            </Text>
          </TouchableOpacity>                    
        </View>
      </View>
      {/* Group Stage */}
      <View style={{marginHorizontal: 41, marginTop: 15}}>
        <Text
          style={{
            marginBottom: 5,
            fontSize: 15,
            fontWeight: '400',
            fontFamily: 'kanit',
            color: '#fff',
          }}>
          Group Stage
        </Text>
        <Table>
          <Row
            textStyle={{
              color: '#3F3D56',
              fontSize: 15,
              fontWeight: '400',
              fontFamily: 'kanit',
            }}
            style={{backgroundColor: '#E4E4E4'}}
            data={['Teams', 'Win', 'Lose', 'Draw']}
          />
          <Rows
            style={{backgroundColor: '#E4E4E4'}}
            textStyle={{
              color: '#3F3D56',
              fontSize: 15,
              fontWeight: '400',
              fontFamily: 'kanit',
            }}
            data={[
              ['Sentinels', '0', '0', '0'],
              ['Team Liquid', '0', '0', '0'],
              ['Vision Stiker', '0', '0', '0'],
              ['FullSense', '0', '0', '0'],
              ['Furia', '0', '0', '0'],
            ]}
          />
        </Table>
      </View>
      {/* Playoffs */}
      <View
        style={{backgroundColor: '#231432', marginTop: 20, paddingBottom: 10}}>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 25,
            paddingBottom: 10,
            fontSize: 15,
            fontWeight: '400',
            fontFamily: 'kanit',
            color: '#fff',
          }}>
          Playoffs
        </Text>
        <View></View>
      </View>
    </ScrollView>
  );
};

export default Tournamentdetails;

const styles = StyleSheet.create({});
