import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";
import getHeaderStyles from "../styles/settingsHeaderStyles";

export default function HomeHeader({ title, navigation, screen, ...props }) {
  const { colors } = useTheme();
  // console.log(colors);

  const styles = getHeaderStyles(colors);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate(screen)}>
        <Image
          style={{ width: wp("10%"), height: wp("10%") }}
          source={require("../assets/images/back.png")}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}
