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
import FlatButton from '../components/button';
import authStyles from "../styles/authStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { addFoodItem } from "../redux/outlet/outletAction";

export default function AddItem({ navigation }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const username = useSelector((state) => state.users.username);

  const dispatch = useDispatch();

  const addItemToStore = async () => {
    if(validateField(name) && validateField(description) && validateField(price)) {
      console.log(name, description, price);
      var item = {
        name: name,
        description: description,
        price: "$" + price,
        image: require('../assets/images/item1.png')
      }
      dispatch(addFoodItem(item, username));
      navigation.navigate("FoodStack", {screen: "SponsorFood"});  
    }
    else {
      Alert.alert("Invalid details", "Please fill in all the fields");
    }
  };

  const validateField = (field) => {
    return field.length > 0;
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
            source={require("../assets/images/back.png")}
          />
        </TouchableOpacity>

        <Image
            style={{ width: wp("70%"), height: wp("90%") }}
            source={require("../assets/images/addItem.png")}
        />

        <View style={authStyles.inputContainer}>
          <Text style={authStyles.inputText}>Name</Text>
          <TextInput
            style={authStyles.formInput}
            placeholder="e.g. Cheese Sandwich"
            placeholderTextColor="#B2B2B2"
            autoComplete="email"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={authStyles.inputContainer}>
          <Text style={authStyles.inputText}>Description</Text>
          <TextInput
            style={[authStyles.formInput, {width: 200}]}
            multiline
            placeholder="e.g. Grilled Sandwich with veggies"
            placeholderTextColor="#B2B2B2"
            value={description}
            onChangeText={setDescription}
          />
        </View>

        <View style={authStyles.inputContainer}>
          <Text style={authStyles.inputText}>Price</Text>
          <TextInput
            style={authStyles.formInput}
            placeholder="Enter Price"
            placeholderTextColor="#B2B2B2"
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
          />
        </View>

        <FlatButton text="Add Item" onPressHandler={addItemToStore} />

      </View>
    </TouchableWithoutFeedback>
  );
}
