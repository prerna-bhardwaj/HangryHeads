import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const dimensions = Dimensions.get("window");


export default function RoomsHeader({title, navigation, ...props}) {
    return (       
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("AppStack", {screen: "Rooms"})} >
                <Image style={{ width: wp('10%'), height: wp('10%')}} source={require('../assets/images/back.png')} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>           
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: dimensions.width,
        flexDirection: "row",
        paddingTop: 18,
        paddingBottom: 30,
        paddingHorizontal: 20,
        marginBottom: 15,
        alignItems: 'center',
    },
    headerText: {
        color: '#000000',
        fontWeight: "normal",
        fontSize: 24,
        lineHeight: 36,
        alignSelf: 'center',
        marginLeft: wp('10%'),
        fontFamily: 'poppins-regular',
    },
});