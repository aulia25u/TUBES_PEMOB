import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Searchbar, List} from 'react-native-paper';
import {Row, Col} from 'react-native-responsive-grid-system';

const Tournament = ({navigation}) => {
  //Search
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  //List
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <View style={{flex: 1, backgroundColor: '#AD62FB'}}>
      <View>
        <Searchbar
          style={{
            backgroundColor: '#AD62FB',
            borderBottomWidth: 1,
            borderColor: '#ffffff',
          }}
          iconColor="#ffffff"
          placeholder="Search"
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
          color: '#ffffff',
        }}>
        Tournament Information
      </Text>
      <View style={{marginHorizontal: 25, marginTop: 20}}>
        <List.Section>
          <List.Accordion
            titleStyle={{color: '#302D33'}}
            style={{backgroundColor: '#EFE0FE'}}
            title="Valorant">
            <View
              style={{
                backgroundColor: '#EFE0FE',
                width: '100%',
                alignItems: 'flex-start',
              }}>
              <Row>
                <Col sm={4} md={4} lg={4} xs={4}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Tournamentdetails');
                    }}>
                    <View style={{margin: 10, alignItems: 'center'}}>
                      <Image
                        style={{width: 80, height: 80}}
                        resizeMode="contain"
                        source={require('../assets/Tournament/champions.png')}
                      />
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          fontFamily: 'kanit',
                          color: '#000000',
                          textAlign: 'center',
                        }}>
                        Champions 2021
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Col>
                <Col sm={4} md={4} lg={4} xs={4}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Tournamentdetails');
                    }}>
                    <View style={{margin: 10, alignItems: 'center'}}>
                      <Image
                        style={{width: 80, height: 80}}
                        resizeMode="contain"
                        source={require('../assets/Tournament/2021tour.png')}
                      />
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          fontFamily: 'kanit',
                          color: '#000000',
                          textAlign: 'center',
                        }}>
                        Champions Tour 2021
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Col>
              </Row>
            </View>
          </List.Accordion>
        </List.Section>
        <View style={{height: 1, backgroundColor: '#EFE0FE', marginTop: 10}} />
      </View>
    </View>
  );
};

export default Tournament;

const styles = StyleSheet.create({});
