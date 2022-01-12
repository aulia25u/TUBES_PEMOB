import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

const Teamliquid = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#AD62FB'}}>
      <View style={{flexDirection: 'row', marginHorizontal: 25, marginTop: 30}}>
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
          Valorant - Teams Liquid
        </Text>
      </View>
      {/* Teams Details */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#EFE0FE',
          padding: 10,
          marginHorizontal: 25,
          borderRadius: 8,
          marginTop: 20,
        }}>
        <Image
          style={{width: 80, height: 80}}
          source={require('../assets/Logo/liquid.png')}
        />
        <View style={{marginLeft: 15, justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '400',
              fontFamily: 'kanit',
              color: '#000',
            }}>
            Location : Netherlands
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '400',
              fontFamily: 'kanit',
              color: '#000',
            }}>
            Region : Europe
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '400',
              fontFamily: 'kanit',
              color: '#000',
            }}>
            Founded : 2020-08-07
          </Text>
        </View>
      </View>
      {/* Roaster tabel */}
      <View style={{marginHorizontal: 41, marginTop: 15}}>
        <Text
          style={{
            marginBottom: 5,
            fontSize: 15,
            fontWeight: '400',
            fontFamily: 'kanit',
            color: '#fff',
          }}>
          Player Roaster - Active
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
            data={['ID', 'Name']}
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
              ['soulcas', 'Dom Sulcas'],
              ['L1NK', 'Travis Mendoza'],
              ['ScreaM', 'Adil Benrlitom'],
              ['Jamppi', 'Elias Olkkonen'],
              ['Nivera', 'Nabil Benrlitom'],
            ]}
          />
        </Table>
      </View>
      {/* Recent Match History */}
      <View
        style={{
          backgroundColor: '#EFE0FE',
          marginTop: 20,
          marginHorizontal: 25,
          borderRadius: 10,
        }}>
        <Text
          style={{
            marginBottom: 5,
            fontSize: 15,
            fontWeight: '400',
            fontFamily: 'kanit',
            color: '#3F3D56',
            padding: 10,
          }}>
          Recent Match History
        </Text>
        <Table>
          <Row
            textStyle={{
              color: '#3F3D56',
              fontSize: 15,
              fontWeight: '400',
              fontFamily: 'kanit',
              textAlign: 'center',
            }}
            data={['Date', 'Tournament', 'Result']}
          />
          <Rows
            textStyle={{
              color: '#3F3D56',
              fontSize: 15,
              fontWeight: '400',
              fontFamily: 'kanit',
              textAlign: 'center',
            }}
            data={[
              ['2021-08-15', 'JBL Quantum Cup', '3:1'],
              ['2021-07-11', 'VCT 2021: Stage 2 Masters - Reykjavík', '3:0'],
              ['2021-05-30', 'VCT 2021: Stage 2', '3:1'],
              ['2021-05-02', 'VCT 2021: Stage 2', '3:2'],
              ['2021-04-25', 'VCT 2021: Stage 2', '3:0'],
            ]}
          />
        </Table>
      </View>
    </ScrollView>
  );
};

export default Teamliquid;

const styles = StyleSheet.create({});
