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
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [displayOtp, setDisplayOtp] = useState(false);

  const registerUser = () => {
    console.log(username, password, contact);
    console.log("Registering User");
    navigation.navigate("VerifyOTP");
  };

  const verifyOtp = () => {
    console.log(otp);
  }

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

        {
          displayOtp === true ? 
          <View style={{ marginTop: 20}}>
            <View style={authStyles.inputContainer}>
              <Text style={authStyles.inputText}>OTP : </Text>
              <TextInput
                style={authStyles.formInput}
                placeholder="Enter OTP"
                placeholderTextColor="#B2B2B2"
                value={otp}
                onChangeText={setOtp}
              />
            </View>

            <View style={{ marginLeft: wp('15%') }}>
              <FlatButton text="Verify OTP" onPressHandler={verifyOtp} />
            </View>

          </View>
          :
          <View></View>
        }

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
