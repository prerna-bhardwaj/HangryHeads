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
import { ScrollView } from "react-native-gesture-handler";

export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    console.log(username, name, password, contact);
    console.log("Registering User");
    navigation.navigate("VerifyOTP");
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
              style={{ width: wp("70%"), height: wp("60%") }}
              source={require("../../assets/images/coffee.png")}
          />

        <View style={authStyles.inputContainer}>
          <Text style={authStyles.inputText}>Username</Text>
          <TextInput
            style={authStyles.formInput}
            placeholder="Enter Username"
            placeholderTextColor="#B2B2B2"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={authStyles.inputContainer}>
          <Text style={authStyles.inputText}>Name</Text>
          <TextInput
            style={authStyles.formInput}
            placeholder="Enter Name"
            placeholderTextColor="#B2B2B2"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={authStyles.inputContainer}>
          <Text style={authStyles.inputText}>Contact</Text>
          <TextInput
            style={authStyles.formInput}
            placeholder="Enter Phone No."
            placeholderTextColor="#B2B2B2"
            autoComplete="email"
            keyboardType="numeric"
            value={contact}
            onChangeText={setContact}
          />
        </View>

        <View style={authStyles.inputContainer}>
          <Text style={authStyles.inputText}>Password</Text>
          <TextInput
            style={authStyles.formInput}
            placeholder="Enter Password"
            placeholderTextColor="#B2B2B2"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <FlatButton text="Register" onPressHandler={registerUser} />

        <View style={authStyles.bodyTextWrapper}>
          <Text style={authStyles.bodyText}>Already have an account ?</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AuthStack", { screen: "Login" })
            }
          >
            <Text style={[authStyles.bodyText, { color: "#6292F5" }]}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
