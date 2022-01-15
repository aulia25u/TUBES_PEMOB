import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Searchbar, List} from 'react-native-paper';
import Explorer from '../components/Explorer';
import {Row, Col} from 'react-native-responsive-grid-system';
import Category from '../components/Category';

const Explore = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <ScrollView style={{backgroundColor: '#AD62FB'}}>
      <View>
        <Searchbar
          style={{
            backgroundColor: 'transparent',
            shadowColor: 'transparent'
          }}
          iconColor="#DEC0FE"
          placeholder="Search"
          placeholderTextColor={'#DEC0FE'}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View>
        <Category />
      </View>
      <View style={{width: '100%'}}>
        <Image
          style={{width: '100%', resizeMode: 'cover'}}
          source={require('../assets/Image/high.png')}
        />
        <View style={{zIndex: 100, position: 'relative', top: -70}}>
          <Text style={{color: 'white', fontSize: 14}}>November, 27 2021</Text>
          <Text style={{color: 'white', fontSize: 18}}>
            CHAMPIONS ITEMS AND DROPS ARE COMING!
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Exploredetails');
            }}>
            <Text
              style={{
                color: '#AD62FB',
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'kanit',
              }}>
              READ MORE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Row>
        <Col sm={6} md={6} lg={6} xs={6}>
          <View style={{padding: 10}}>
            <Explorer
              onPress={() => {
                navigation.navigate('Exploredetails');
              }}
              date="November, 26 2021"
              title="DIE FOR YOU - CHAMPIONS MUSIC VIDEO"
              image={require('../assets/Image/news1.png')}
            />
          </View>
        </Col>
        <Col sm={6} md={6} lg={6} xs={6}>
          <View style={{padding: 10}}>
            <Explorer
              onPress={() => {
                navigation.navigate('Exploredetails');
              }}
              date="November, 26 2021"
              title="NA LAST CHANCE QUALIFIER -- STARTS OCTOBER 12"
              image={require('../assets/Image/news2.png')}
            />
          </View>
        </Col>
        <Col sm={6} md={6} lg={6} xs={6}>
          <View style={{padding: 10}}>
            <Explorer
              onPress={() => {
                navigation.navigate('Exploredetails');
              }}
              date="November, 26 2021"
              title="VALORANT CHAMPIONS: EVERYTHING YOU  - "
              image={require('../assets/Image/news3.png')}
            />
          </View>
        </Col>
        <Col sm={6} md={6} lg={6} xs={6}>
          <View style={{padding: 10}}>
            <Explorer
              onPress={() => {
                navigation.navigate('Exploredetails');
              }}
              date="November, 26 2021"
              title="DIE FOR YOU - CHAMPIONS MUSIC VIDEO"
              image={require('../assets/Image/news1.png')}
            />
          </View>
        </Col>
      </Row>
    </ScrollView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
