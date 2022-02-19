import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function CancelSave({ text, onPressHandler }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressHandler}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    button: {
        width: wp('50%'),
        height: hp('7%'),
        backgroundColor: "#fff"
    },
    buttonText: {
        color: 'black',
        fontWeight: "normal",
        textAlign: 'center',
        fontSize: 20,
        letterSpacing: -0.333,
        fontFamily: 'poppins-medium'
    }
})