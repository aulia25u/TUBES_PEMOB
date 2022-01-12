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

const Teamfuria = ({navigation}) => {
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
          Valorant - Teams Furia
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
          source={require('../assets/Logo/furia.png')}
        />
        <View style={{marginLeft: 15, justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '400',
              fontFamily: 'kanit',
              color: '#000',
            }}>
            Location : Brazil
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '400',
              fontFamily: 'kanit',
              color: '#000',
            }}>
            Region : North America
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '400',
              fontFamily: 'kanit',
              color: '#000',
            }}>
            Founded : 2017-08-08
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
              ['yuurih', 'Yuri Boian'],
              ['arT', 'Andrei Piovezan'],
              ['KSCERATO', 'Kaike Cerato'],
              ['drop', 'André Abreu'],
              ['saffee', 'Rafael Costa'],
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

export default Teamfuria;

const styles = StyleSheet.create({});
