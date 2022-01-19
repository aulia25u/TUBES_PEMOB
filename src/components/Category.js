import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Category = () => {
  const [active, setActive] = useState('Fps');

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => {
          setActive('Fps');
          props.setFilter('fps');
        }}
        style={{flex: 1}}>
        <Text style={active === 'Fps' ? styles.active : styles.nonactive}>
          FPS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setActive('Moba');
          props.setFilter('moba');
        }}
        style={{flex: 1}}>
        <Text style={active === 'Moba' ? styles.active : styles.nonactive}>
          MOBA
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  active: {
    color: '#fff',
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'kanit',
    marginVertical: 10,
  },
  nonactive: {
    color: '#DEC0FE',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'kanit',
    marginVertical: 10,
  },
});
