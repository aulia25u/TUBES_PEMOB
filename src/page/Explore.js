import React, {useEffect, useState} from 'react';
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
import {HOST, STORAGE} from '../config/';
import {getData} from '../utils/localstorage';

const Explore = ({navigation}) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState();
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  useEffect(() => {
    getData('token').then(token => {
      fetch(`${HOST}news`, {
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
    <ScrollView style={{backgroundColor: '#AD62FB'}}>
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
      <View>{/* <Category setFilter={setFilter} /> */}</View>
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
        {data.map((el, idx) => {
          return (
            <Col sm={6} md={6} lg={6} xs={6} key={idx}>
              <View style={{padding: 10}}>
                <Explorer
                  onPress={() => {
                    navigation.navigate('Exploredetails', {
                      title: el.title,
                      body: el.body,
                      image: el.image_path,
                    });
                  }}
                  date="November, 26 2021"
                  title={el.title}
                  image={require('../assets/Image/high.png')}
                />
              </View>
            </Col>
          );
        })}
      </Row>
    </ScrollView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
