import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import { removeData, getData } from '../utils/localstorage';

const Profilepassword = ({navigation}) => {
  const [oldpass, setOldpass] = React.useState('');
  const [newpass, setNewpass] = React.useState('');
  const [confirmpass, setConfirmpass] = React.useState('');

  const handlePassword = () => {
    getData('token').then(token => {
      fetch('http://20.205.61.111/api/profile/change-password', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token.value,
        },
        body: JSON.stringify({
          old_password: oldpass,
          new_password: newpass,
          confirm_password: confirmpass,
        }),
      })
        .then(json => json.json())
        .then(res => {
          if (res.status) {
            removeData('token').finally(()=>{
              navigation.reset({
                index: 0,
                routes: [{name:'Splash'}]
              })
            })              
          }           
        })
        .catch(err => {
          console.log(err);
        });
      })
  };

  return (
    <View style={{flex: 1, backgroundColor: '#AD62FB'}}>
      <View style={{marginTop: 30, paddingHorizontal: 37, marginTop: 90}}>
        <TextInput
          style={{backgroundColor: '#AD62FB', marginVertical: 10}}
          mode="outlined"
          activeOutlineColor="#ffffff"
          outlineColor="#ffffff"
          label="Old Password"
          value={oldpass}
          onChangeText={oldpass => setOldpass(oldpass)}
        />
        <TextInput
          style={{backgroundColor: '#AD62FB', marginVertical: 10}}
          mode="outlined"
          activeOutlineColor="#ffffff"
          outlineColor="#ffffff"
          label="New Password"
          value={newpass}
          onChangeText={newpass => setNewpass(newpass)}
        />
        <TextInput
          style={{backgroundColor: '#AD62FB', marginVertical: 10}}
          mode="outlined"
          activeOutlineColor="#ffffff"
          outlineColor="#ffffff"
          label="Confirm New Password"
          value={confirmpass}
          onChangeText={confirmpass => setConfirmpass(confirmpass)}
        />
      </View>
      <View style={{paddingHorizontal: 40, marginTop: 200}}>
        <TouchableOpacity
          onPress={() => handlePassword()}
          style={{
            backgroundColor: '#452764',
            paddingVertical: 13,
            borderRadius: 50,
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 24,
              fontWeight: '400',
              fontFamily: 'kanit',
              textAlign: 'center',
            }}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profilepassword;

const styles = StyleSheet.create({});
