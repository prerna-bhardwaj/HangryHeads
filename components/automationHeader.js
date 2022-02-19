import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const dimensions = Dimensions.get("window");


export default function AutomationHeader({title, navigation, ...props}) {

    const { colors } = useTheme();
    const styles = getLocalStyles(colors);

    return (       
        <View style={styles.container}>
            <TouchableOpacity style={{alignItems: 'flex-end', marginRight: 10,}} onPress={() => navigation.navigate("AppStack", {screen: "Automation"})} >
                <Image style={{ width: wp('7%'), height: wp('7%')}} source={require('../assets/images/cancel.png')} />
            </TouchableOpacity>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("AppStack", {screen: "Automation"})} >
                    <Image style={{ marginLeft:20, width: wp('10%'), height: wp('10%')}} source={require('../assets/images/back.png')} />
                </TouchableOpacity>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const getLocalStyles = (colors) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 10,
            paddingHorizontal: 20,
            marginBottom: 20,
            backgroundColor: colors.background
        },
        header: {
            width: dimensions.width,
            flex: 1,
            marginVertical: 10,
            flexDirection: "row",
            alignItems: 'center',
            // backgroundColor: 'yellow'
        },
        headerText: {
            color: colors.text,
            fontWeight: "normal",
            fontSize: 24,
            lineHeight: 36,
            marginLeft: wp('15%'),
            fontFamily: 'poppins-semibold',
        },
    });

    return styles;
}