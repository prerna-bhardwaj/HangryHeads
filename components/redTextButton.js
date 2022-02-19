import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import getAllSettingsStyle from "../styles/settings";

export default function RedTextButton({ text, onPressHandler, ...props }) {
  const { colors } = useTheme();
  const settingsStyle = getAllSettingsStyle(colors);
  return (
    <View style={settingsStyle.settingsCard}>
      <TouchableOpacity onPress={onPressHandler}>
        <Text style={styles.signOutText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  signOutText: {
    color: "#FE3D2F",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.33,
    fontWeight: "500",
    fontFamily: "poppins-medium",
    textAlign: "center",
    marginVertical: 7,
  },
});
