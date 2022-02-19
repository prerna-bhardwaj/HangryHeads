import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function FlatButton({ text, onPressHandler }) {
    return (
        <TouchableOpacity onPress={onPressHandler} >
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        borderRadius: 18,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#4A80F0',
        margin: 10,
        width: wp('50%'),
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 27,
        fontWeight: '500',
        fontFamily: 'poppins-medium'
    }
})