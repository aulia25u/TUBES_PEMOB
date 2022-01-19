import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Searchbar, List} from 'react-native-paper';
import {Row, Col} from 'react-native-responsive-grid-system';
import {HOST, STORAGE} from '../config/';
import {getData} from '../utils/localstorage';

const Category = ({navigation}) => {
  //Search
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  //List
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  const [data, setData] = useState([]);

  useEffect(() => {
    getData('token').then(token => {
      fetch(`${HOST}game`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token.value,
        },
      })
        .then(json => json.json())
        .then(res => {
          setData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#AD62FB'}}>
      <View>
        <Searchbar
          style={{
            backgroundColor: 'transparent',
            shadowColor: 'transparent',
          }}
          iconColor="#DEC0FE"
          placeholder="Search"
          placeholderTextColor={'#DEC0FE'}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <Text
        style={{
          fontSize: 25,
          fontFamily: 'kanit',
          fontWeight: '700',
          marginTop: 30,
          marginHorizontal: 25,
          color: '#DEC0FE',
        }}>
        Game Category & Team Information
      </Text>
      <View style={{marginHorizontal: 25, marginTop: 20}}>
        {/* FPS */}
        <List.Section>
          <List.Accordion
            titleStyle={{color: '#302D33'}}
            style={{backgroundColor: '#EFE0FE'}}
            title="First Person Shooter - FPS">
            <View style={{backgroundColor: '#EFE0FE', width: '100%'}}>
              <Row>
                {data.map((el, idx) => {
                  if (el.category === 'fps') {
                    return (
                      <Col sm={3} md={3} lg={3} xs={3} key={idx}>
                        <TouchableOpacity
                          onPress={() => {
                            // navigation.navigate('Categoryvalorant');
                            alert('sedang dibuat');
                          }}>
                          <View style={{margin: 10, alignItems: 'center'}}>
                            <Image
                              style={{width: 50, height: 50}}
                              resizeMode="contain"
                              // source={require('../assets/Game/valorant.png')}
                              source={{uri: `${STORAGE}${el.image_path}`}}
                            />
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                fontFamily: 'kanit',
                                color: '#000000',
                              }}>
                              {el.name}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </Col>
                    );
                  }
                })}
              </Row>
            </View>
          </List.Accordion>
        </List.Section>
        <View style={{height: 1, backgroundColor: '#EFE0FE', marginTop: 10}} />
        {/* MOBA */}
        <List.Section>
          <List.Accordion
            titleStyle={{color: '#302D33'}}
            style={{backgroundColor: '#EFE0FE'}}
            title="Multiplayer Online Battle Arena - MOBA">
            <View style={{backgroundColor: '#EFE0FE', width: '100%'}}>
              <Row>
                {data.map((el, idx) => {
                  if (el.category === 'moba') {
                    return (
                      <Col sm={3} md={3} lg={3} xs={3} key={idx}>
                        <TouchableOpacity
                          onPress={() => {
                            // navigation.navigate('Categoryvalorant');
                            alert('sedang dibuat');
                          }}>
                          <View style={{margin: 10, alignItems: 'center'}}>
                            <Image
                              style={{width: 50, height: 50}}
                              resizeMode="contain"
                              // source={require('../assets/Game/valorant.png')}
                              source={{uri: `${STORAGE}${el.image_path}`}}
                            />
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                fontFamily: 'kanit',
                                color: '#000000',
                              }}>
                              {el.name}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </Col>
                    );
                  }
                })}
              </Row>
            </View>
          </List.Accordion>
        </List.Section>
        <View style={{height: 1, backgroundColor: '#EFE0FE', marginTop: 10}} />
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
