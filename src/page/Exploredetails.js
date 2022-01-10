import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Explorer from '../components/Explorer';
import {Row, Col} from 'react-native-responsive-grid-system';

const Exploredetails = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#AD62FB'}}>
      <View style={{width: '100%'}}>
        <Image
          style={{width: '100%', resizeMode: 'cover'}}
          source={require('../assets/Image/high.png')}
        />
        <View style={{zIndex: 100, position: 'relative', top: -80}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '500',
              fontFamily: 'kanit',
            }}>
            CHAMPIONS ITEMS AND DROPS ARE COMING!
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '100',
              fontFamily: 'kanit',
            }}>
            Get the full details on the in-game celebration of VCT Champions!
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 25,
          marginTop: -60,
        }}>
        <Image
          style={{width: 40, height: 40}}
          source={require('../assets/Game/valorant.png')}
        />
        <View
          style={{
            alignContent: 'center',
            alignSelf: 'center',
            marginLeft: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'kanit',
              color: '#fff',
            }}>
            RILEY YURK
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'kanit',
              color: '#fff',
            }}>
            VALORANT Esports
          </Text>
        </View>
      </View>
      <View style={{marginHorizontal: 25}}>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              fontFamily: 'kanit',
              textAlign: 'justify',
              color: '#fff',
            }}>
            CHAMPIONS DROPS AND IN-GAME ITEMS ARE COMING!
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'kanit',
              textAlign: 'justify',
              color: '#fff',
            }}>
            Champions 2021 will take place between December 1st-12th (see the
            full schedule at valorantesports.com/schedule) and we’ll be making
            sure that VALORANT players all over the world will be able to
            celebrate the event. Starting November 24th, players will be able to
            purchase in-game items, earn drops, and receive a free commemorative
            player card as part of the event! Let’s take a look at all the ways
            Champions will be celebrated within the VALORANT game.
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              fontFamily: 'kanit',
              color: '#fff',
              marginTop: 15,
              marginBottom: 5,
            }}>
            CHAMPIONS COLLECTION
          </Text>
          <Image source={require('../assets/Image/vct1.png')} />
          <Text
            style={{
              marginTop: 15,
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'kanit',
              textAlign: 'justify',
              color: '#fff',
              marginBottom: 5,
            }}>
            Support your favorite VALORANT team with the limited edition
            Champions bundle and celebrate Champions 2021 with this limited
            edition bundle. 50% of the revenue from the Champions bundle will be
            split equally between all Champions qualified teams. From November
            24th - December 12th, the Champions bundle consisting of the
            Champions Vandal, three player cards inspired by the Champions music
            video “Die For You”, the Champion title, and the first authentic
            VALORANT karambit will be exclusively available in the VALORANT
            in-game store. Note, these items won't return to the Store or
            Night.Market, so make sure you grab them while you can!
          </Text>
          <Image source={require('../assets/Image/vct2.png')} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Exploredetails;

const styles = StyleSheet.create({});
