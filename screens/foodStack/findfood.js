import React, { useEffect, useState } from "react";
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import foodStyles from "../../styles/foodStyles";
import { Ionicons } from '@expo/vector-icons'; 
import { ScrollView } from "react-native-gesture-handler";
import BigFoodCard from "../../components/bigFoodCard";
import { useDispatch, useSelector } from "react-redux";

export default function FindFood({ navigation }) {
  const [search, setSearch] = useState("Pizza");
  const [displayList, setDisplayList] = useState(true);
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.outlets.itemList);

  const getItemList = () => {
    var tempList = itemList.filter((ele) => ele.name.toLowerCase().includes(search.toLowerCase()))
    return tempList;
  }

  const displaySearchResults = () => {
    var tempList = getItemList();

    var itemsView = []
    for(var i = 0; i < tempList.length; i++) {
      var curr = tempList[i];
      itemsView.push(
        <View key={i}>
          <BigFoodCard name={curr.name} description={curr.description} 
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
              <View style={foodStyles.searchBox}>
                <TextInput
                  style={foodStyles.searchInput}
                  placeholder="e.g. Pizza"
                  placeholderTextColor="#B2B2B2"
                  value={search}
                  onChangeText={(val) => {
                    setSearch(val);
                    // setDisplayList(false);
                  }}
                />
                <TouchableOpacity
                  style={{ backgroundColor: '#fff', borderRadius: 5, paddingHorizontal: 6, paddingVertical: 3 }}
                  onPress={() => {
                    setDisplayList(true);
                    displaySearchResults()
                  }}
                >
                  <Ionicons name="ios-search" size={30} color="black" />
                </TouchableOpacity>

              </View>

                { displayList === true ? 
                    displaySearchResults() :
                    <View></View> 
                }
          </View>         
      </ScrollView>
  )
}
