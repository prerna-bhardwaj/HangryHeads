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
  ScrollView,
} from "react-native";
import foodStyles from "../../styles/foodStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SmallFoodCard from "../../components/smallFoodCard";


export default function TopPicks({navigation}) {

    const data = [
        {
            key: 1,
            name: "Dunkin Donuts",
            items: [
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
                }

            ],
        },
        {
            key: 2,
            name: "Eat-O-Keto",
            items: [
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
            ]
        },
        {
            key: 3,
            name: "The Pizza Box",
            items: [
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
                
            ]
        },
        {
            key: 4,
            name: "The Chinese Hub",
            items: [
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
        }

    ]

    const getItemList = (key) => {
        var filteredList = data.filter(ele => ele.key === key)
        var items = filteredList[0].items
        console.log(items)
        var tempView = []
        for(let j = 0; j < items.length; j++) {
            var item = items[j];
            tempView.push(
                <View key={j}>  
                    <SmallFoodCard name={item.name} description={item.description}
                            price={item.price} image={item.image} />
                </View>
            );
        }
        return tempView;
    }

    const displayFoodData = () => {
        var itemList = [];
        for (let i = 0; i < data.length; i++) {
            var curr = data[i];
            itemList.push(
                <Text style={foodStyles.outletName}>{ curr.name }</Text>
            )
            itemList.push(
                <ScrollView key={i}
                    style={{ flex: 1, paddingBottom: 20}}
                    horizontal={true}
                    showHorizontalScrollIndicator={false}
                >
                    {getItemList(curr.key)}
                </ScrollView>
            )
        }
        return itemList;
    }

    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
            <View style={foodStyles.container}>
                <Text style={foodStyles.headerText}>OUR TOP PICKS</Text>
                { displayFoodData() }
            </View>
        </ScrollView>
    )
}