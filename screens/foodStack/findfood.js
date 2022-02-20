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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import foodStyles from "../../styles/foodStyles";
import { Ionicons } from '@expo/vector-icons'; 
import { ScrollView } from "react-native-gesture-handler";
import BigFoodCard from "../../components/bigFoodCard";

export default function FindFood({ navigation }) {
  const [search, setSearch] = useState("Pizza");
  const [displayList, setDisplayList] = useState(true);
  const [itemList, setItemList] = useState([]);
  const foodItems = [
    {
      name: "Choco Crisp Donut",
      description: "A classic vanilla and chocolate striped donut.",
      price: "$2.99",
      image: require('../../assets/images/item1.png'),
    },
    {
        name: "Galzed Donut",
        description: "Donut with sugar icing !.",
        price: "$2.99",
        image: require('../../assets/images/item1.png'),
    },
    {
        name: "Strawberry Donut",
        description: "Fresh Strawberry bits & cream cheese frosting",
        price: "$2.99",
        image: require('../../assets/images/item1.png'),
    },
    {
        name: "Croissant",
        description: "Traditional French Croissant",
        price: "$1.99",
        image: require('../../assets/images/item1.png'),
    },
    {
        name: "Apple Pie",
        description: "Two double crusted classic Apple Pies - contains cashewnuts",
        price: "$4.99",
        image: require('../../assets/images/item1.png'),
    },
    {
      name: "Spinach Omelette", 
      description: "Double egg omelette with vegies & spices, served with bread",
      price: "$3.99",
      image: require('../../assets/images/item1.png'),
    },
    {
        name: "Chicken Omelette Sandwich", 
        description: "Egg omelette sandwich in loaded chicken",
        price: "$3.99",
        image: require('../../assets/images/item1.png'),
    },
    {
        name: "Wheat Pasta Salad", 
        description: "Whole wheat pasta salad with Exotic vegies & chicken",
        price: "$3.99",
        image: require('../../assets/images/item1.png'),
    },
    {
      name: "Margherita Pizza", 
      description: "Regular pizza topped with red sauce and mozzarella cheese",
      price: "$5.99",
      image: require('../../assets/images/item1.png'),
    },
    {
        name: "Mediterranean Pizza", 
        description: "Pizza topped with zucchini, olives, sun dried tomatoes and jalapenos",
        price: "$6.99",
        image: require('../../assets/images/item1.png'),
    },
    {
        name: "Exotic Pizza", 
        description: "Herb marinated veggies and paneer, topped with mozzarella",
        price: "$4.99",
        image: require('../../assets/images/item1.png'),
    },
    {
        name: "Spicy Chicken Pizza", 
        description: "Top with mozzarella + red/yellow capsicum & spicy chicken",
        price: "$5.99",
        image: require('../../assets/images/item1.png'),
    },
    {
      name: "Schezwan Chowmein", 
      description: "Artificial color free schezwan nooodles served with sauce.",
      price: "$5.99",
      image: require('../../assets/images/item1.png'),
  },
  {
      name: "Hakka Noodles", 
      description: "Veg Hakka Noodles with Chicken Chilly gravy on top !",
      price: "$3.99",
      image: require('../../assets/images/item1.png'),
  },
  {
      name: "Fried Cheese Momos", 
      description: "Fried momos with spice corn served with momo chutney !",
      price: "$2.99",
      image: require('../../assets/images/item1.png'),
  },
  {
      name: "Chicken Dumpling Soup", 
      description: "Chicken Dumplings in rich broth made from vegetables.",
      price: "$2.99",
      image: require('../../assets/images/item1.png'),
  }
  ]

  const getItemList = () => {
    var searchValue = search.toLowerCase();
    var tempList = foodItems.filter(item => item.name.toLowerCase().includes(searchValue) || 
      item.description.toLowerCase().includes(searchValue)                                       
    )
    return tempList;
  }

  const displaySearchResults = () => {
    var tempList = getItemList();

    var itemsView = []
    for(var i = 0; i < tempList.length; i++) {
      var curr = tempList[i];
      console.log(curr.name);
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
