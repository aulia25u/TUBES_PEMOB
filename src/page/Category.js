import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Searchbar, List} from 'react-native-paper';
import {Row, Col} from 'react-native-responsive-grid-system';

const Category = ({navigation}) => {
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
                <Col sm={3} md={3} lg={3} xs={3}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Categoryvalorant');
                    }}>
                    <View style={{margin: 10, alignItems: 'center'}}>
                      <Image
                        style={{width: 50, height: 50}}
                        resizeMode="contain"
                        source={require('../assets/Game/valorant.png')}
                      />
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          fontFamily: 'kanit',
                          color: '#000000',
                        }}>
                        Valorant
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Col>
                <Col sm={3} md={3} lg={3} xs={3}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Categoryvalorant');
                    }}>
                    <View style={{margin: 10, alignItems: 'center'}}>
                      <Image
                        style={{width: 50, height: 50}}
                        resizeMode="contain"
                        source={require('../assets/Game/CSGO.png')}
                      />
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          fontFamily: 'kanit',
                          color: '#000000',
                        }}>
                        CSGO
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

export default Category;

const styles = StyleSheet.create({});
