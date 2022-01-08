import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Searchbar, List} from 'react-native-paper';

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
          <List.Accordion title="First Person Shooter - FPS">
            <List.Item
              left={props => <List.Icon {...props} icon="folder" />}
              title="Valorant"
              onPress={() => navigation.navigate('Categoryvalorant')}
            />
            <List.Item
              left={props => <List.Icon {...props} icon="folder" />}
              title="CSGO"
            />
          </List.Accordion>
        </List.Section>
        {/* MOBA */}
        <List.Section>
          <List.Accordion title="Multiplayer Online Battle Arena - MOBA">
            <List.Item
              left={props => <List.Icon {...props} icon="folder" />}
              title="Dota 2"
            />
            <List.Item
              left={props => <List.Icon {...props} icon="folder" />}
              title="Mobile Legends"
            />
          </List.Accordion>
        </List.Section>
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
