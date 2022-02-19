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

export default function VerifyOTP({ navigation }) {
  const [otp, setOtp] = useState("");
  
  const verifyOtp = () => {
    navigation.navigate("FoodStack")
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={authStyles.formContainer}>
        <TouchableOpacity
          style={{ position: "absolute", left: 15, top: 40 }}
          onPress={() => navigation.navigate("Register")}
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

        <Text style={{textAlign:'center', color: '#090909', fontSize: 18, fontFamily: 'poppins-regular',
                      marginBottom: 20, paddingHorizontal: 30}}>
          An OTP has been sent to your registered phone number.
        </Text>

        <View style={authStyles.inputContainer}>
          <Text style={authStyles.inputText}>OTP</Text>
          <TextInput
            style={authStyles.formInput}
            placeholder="Enter OTP"
            placeholderTextColor="#B2B2B2"
            keyboardType="numeric"
            value={otp}
            onChangeText={setOtp}
          />
        </View>

       
        <FlatButton text="Verify OTP" onPressHandler={verifyOtp} />
      </View>
    </TouchableWithoutFeedback>
  );
}
