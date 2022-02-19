import React from "react";
import { View, Text, Image } from "react-native";
import { Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import getAllSettingsStyle from "../styles/settings";


export default function ProfileCard({colors, username, permission, ...props}) {

    const settingStyles = getAllSettingsStyle(colors);

    return (       
        <View style={settingStyles.settingsCard}>
            <View style={settingStyles.settingsItem}>
                <Image style={{width: wp('15%'), height: wp('15%'), marginLeft: 10}} source={require('../assets/images/profile.png')} />
                <View>
                    <Text style={settingStyles.usernameText}>{username}</Text>
                    <Text style={settingStyles.permissionText}>{permission}</Text>
                </View>                    
                <Image style={{width: wp('10%'), height: wp('10%'), position: 'absolute', right: 10}} source={require('../assets/images/forward.png')} />
            </View>
        </View>
    )
}
