import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";
import getHeaderStyles from "../styles/settingsHeaderStyles";
const dimensions = Dimensions.get("window");

export default function SettingsHeader({title, navigation, ...props}) {
    const { colors } = useTheme();
    // console.log(colors);

    const styles = getHeaderStyles(colors);

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("AppStack", {screen: "Settings"})} >
                <Image style={{ width: wp('10%'), height: wp('10%')}} source={require('../assets/images/back.png')} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>           
        </View>
    )
}