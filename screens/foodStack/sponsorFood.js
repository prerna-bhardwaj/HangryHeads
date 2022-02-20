import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import foodStyles from "../../styles/foodStyles";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo } from '@expo/vector-icons'; 
import CustomFoodCard from "../../components/customFoodCard";
import { useDispatch, useSelector } from "react-redux";

export default function SponsorFood({ navigation }) {
  const username = useSelector((state) => state.users.username);
  const [choice, setChoice] = useState(-1);

  var itemsList = useSelector((state) => {
    return state.outlets.outlets.filter((ele) => ele.username === username)
  })

  const getItemList = () => {
    console.log(itemsList);
    return itemsList[0].items;
  }

  const deleteItem = (index) => {
    console.log(index);
  }

  const deleteItemDialog = (name) => {
    console.log(choice +  " " + name);
    Alert.alert(
      "Delete Item",
      `Do you want to delete ${name} ${choice}?`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "DELETE", onPress: () => deleteItem(index) }
      ]
    );
  }

  const displayFoodItems = () => {
    var tempList = getItemList();
    console.log(tempList)

    var itemsView = []
    for(var i = 0; i < tempList.length; i++) {
      var curr = tempList[i];
      console.log(tempList[i].name + " " + curr.name);
      itemsView.push(
        <View key={i}>
          <CustomFoodCard name={curr.name} description={curr.description} 
                price={curr.price} image={curr.image} />
        </View>
      )
    }
    return itemsView;
  }
  
  return (
      <ScrollView 
          style={{backgroundColor: '#fff'}}
          showsVerticalScrollIndicator={false}
        >
            <View style={foodStyles.container}>
              <Text style={foodStyles.headerText}>FOOD RESCUE</Text>
              <View style={{ marginTop: 20 }}>
              { displayFoodItems() }
              </View>
              
              <TouchableOpacity 
                onPress={() => navigation.navigate("AddItem")}>
                <View style={styles.addItemBox}>
                  <Entypo name="circle-with-plus" size={24} color="#4A80F0" />
                  <Text style={styles.addItemText}>Add Item</Text>
                </View>
              </TouchableOpacity>
            </View>
      </ScrollView>
  )
}


const styles = StyleSheet.create({
  addItemBox: { 
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 15,
    shadowColor: '#171717',
    shadowOffset: {width: 3, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#b2b2b2'
  },
  addItemText: {  
    fontFamily: 'poppins-regular',
    fontSize: 20,
    marginLeft: 14
  }

});