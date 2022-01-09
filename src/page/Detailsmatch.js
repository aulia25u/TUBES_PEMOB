import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {
    Table,
    TableWrapper,
    Row,
    Rows,
    Col,
    Cols,
    Cell,
} from 'react-native-table-component';
import Scheduler from '../components/Scheduler';

const Detailsmatch = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#AD62FB' }}>
            <View style={{ marginVertical: 20 }} >
                <Scheduler onPress={() => { navigation.navigate('Detailsmatch') }} date='Rabu, 2 Desember 2021' time='09.00 PM' image1={require('../assets/Logo/sentinels.png')} image2={require('../assets/Logo/kru.png')} team1='Sentinels' team2='KRU' category='BEST OF 3' /></View>
            <View style={{ marginHorizontal: 41, marginTop: 15 }}>
                <Text style={{
                    marginBottom: 5,
                    fontSize: 18,
                    fontWeight: '400',
                    fontFamily: 'kanit',
                    color: '#fff',
                }}>PLAYER INFO</Text>
                <Text
                    style={{
                        marginBottom: 5,
                        fontSize: 15,
                        fontWeight: '400',
                        fontFamily: 'kanit',
                        color: '#fff',
                    }}>
                    Sentinels - North America
                </Text>
                <Table>
                    <Row
                        textStyle={{
                            color: '#3F3D56',
                            fontSize: 15,
                            fontWeight: '400',
                            fontFamily: 'kanit',
                        }}
                        style={{ backgroundColor: '#E4E4E4' }}
                        data={['ID', 'Name']}
                    />
                    <Rows
                        style={{ backgroundColor: '#E4E4E4' }}
                        textStyle={{
                            color: '#3F3D56',
                            fontSize: 15,
                            fontWeight: '400',
                            fontFamily: 'kanit',
                        }}
                        data={[
                            ['ShahZam', 'Shahzeb Khan'],
                            ['Sick', 'Hunter Mims'],
                            ['zombs', 'Jared Gitlin'],
                            ['dapr', 'Michael Gulino'],
                            ['TenZ', 'Tyson Ngo'],
                        ]}
                    />
                </Table>
            </View>
            <View style={{ marginHorizontal: 41, marginTop: 15 }}>
                <Text
                    style={{
                        marginBottom: 5,
                        fontSize: 15,
                        fontWeight: '400',
                        fontFamily: 'kanit',
                        color: '#fff',
                    }}>
                    KRU - Latin America
                </Text>
                <Table>
                    <Row
                        textStyle={{
                            color: '#3F3D56',
                            fontSize: 15,
                            fontWeight: '400',
                            fontFamily: 'kanit',
                        }}
                        style={{ backgroundColor: '#E4E4E4' }}
                        data={['ID', 'Name']}
                    />
                    <Rows
                        style={{ backgroundColor: '#E4E4E4' }}
                        textStyle={{
                            color: '#3F3D56',
                            fontSize: 15,
                            fontWeight: '400',
                            fontFamily: 'kanit',
                        }}
                        data={[
                            ['ShahZam', 'Shahzeb Khan'],
                            ['Sick', 'Hunter Mims'],
                            ['zombs', 'Jared Gitlin'],
                            ['dapr', 'Michael Gulino'],
                            ['TenZ', 'Tyson Ngo'],
                        ]}
                    />
                </Table>
            </View>
            <View
                style={{
                    backgroundColor: '#EFE0FE',
                    marginTop: 20,
                    marginHorizontal: 41,
                    borderRadius: 7,
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
                    Head to Head
                </Text>
                <Table>
                    <Rows
                        textStyle={{
                            color: '#3F3D56',
                            fontSize: 15,
                            fontWeight: '400',
                            fontFamily: 'kanit',
                            textAlign: 'center',
                        }}
                        data={[
                            ['Sentinels', 'VS', 'KRU', '3:1'],
                            ['Sentinels', 'VS', 'Fullsense', '3:0'],
                        ]}
                    />
                </Table>
            </View>
        </View >
    );
};

export default Detailsmatch

const styles = StyleSheet.create({})
