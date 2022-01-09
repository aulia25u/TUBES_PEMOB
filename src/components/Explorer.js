import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Explorer = (props) => {
    return (
        <View style={{ backgroundColor: '#EFE0FE', padding: 10, borderRadius: 5 }}>
            {props.image &&
                <Image style={{ width: '100%', resizeMode: 'cover' }} source={props.image} />
            }
            <View>
                <Text style={{ color: '#000000', fontSize: 14 }}>
                    {props.date}
                </Text>
                <Text style={{ color: '#000000', fontSize: 18 }}>
                    {props.title}
                </Text>
                <TouchableOpacity onPress={props.onPress}>
                    <Text style={{ color: '#AD62FB', fontSize: 14, fontWeight: '400', fontFamily: 'kanit' }}>READ MORE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Explorer

const styles = StyleSheet.create({})

