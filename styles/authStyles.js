import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const authStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  inputContainer: {
    width: wp("85%"),
    borderRadius: 12,
    backgroundColor: "#EEEEEF",
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingVertical: 13,
    marginBottom: 15,
    alignItems: "center",
  },
  inputText: {
    fontWeight: "400",
    fontFamily: "ubuntu-regular",
    fontSize: 16,
    lineHeight: 25,
    letterSpacing: -0.33,
    color: "#000",
  },
  formInput: {
    fontWeight: "400",
    fontFamily: "ubuntu-regular",
    fontSize: 16,
    lineHeight: 25,
    letterSpacing: -0.33,
    color: "#000",
    width: wp("60%"),
    marginLeft: 10,
  },
  bodyTextWrapper: {
    flexDirection: "row",
    marginTop: 20,
  },
  bodyText: {
    fontFamily: "poppins-medium",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: -0.33,
    paddingHorizontal: 3,
    color: "#000",
  },
});

export default authStyles;
