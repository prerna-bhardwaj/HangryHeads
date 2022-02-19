import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import FlatButton from "../../components/button";
import authStyles from "../../styles/authStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateUser = async () => {
    console.log(username, password);
    navigation.navigate("FoodStack");
    // if (validateField(username) && validateField(password)) {
    //   await logUserIn(username, password, dispatch, navigation);
    // } else {
    //   console.log("Error");
    //   Alert.alert("Invalid Credentials", "Please fill in all the fields.");
    // }
  };

  const validateField = (field) => {
    return field.length > 0;
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={authStyles.formContainer}>
        <TouchableOpacity
          style={{ position: "absolute", left: 15, top: 40 }}
          onPress={() => navigation.navigate("Onboarding")}
        >
          <Image
            style={{ width: wp("10%"), height: wp("10%") }}
            source={require("../../assets/images/back.png")}
          />
        </TouchableOpacity>

        <Image
            style={{ width: wp("70%"), height: wp("90%") }}
            source={require("../../assets/images/coffee.png")}
        />

        <View style={authStyles.inputContainer}>
          <Text style={authStyles.inputText}>Username</Text>
          <TextInput
            style={authStyles.formInput}
            placeholder="Enter Username"
            placeholderTextColor="#B2B2B2"
            autoComplete="email"
            value={username}
            onChangeText={(val) => {
              setUsername(val);
            }}
          />
        </View>

        <View style={authStyles.inputContainer}>
          <Text style={authStyles.inputText}>Password</Text>
          <TextInput
            style={authStyles.formInput}
            placeholder="Enter your Password"
            placeholderTextColor="#B2B2B2"
            secureTextEntry={true}
            value={password}
            onChangeText={(val) => {
              setPassword(val);
            }}
          />
        </View>

        <FlatButton text="Login" onPressHandler={validateUser} />

        <View style={authStyles.bodyTextWrapper}>
          <Text style={authStyles.bodyText}>Don't have an account ?</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AuthStack", { screen: "Register" })
            }
          >
            <Text style={[authStyles.bodyText, { color: "#6292F5" }]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
