import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
} from "react-native";
import foodStyles from "../../styles/foodStyles";
import SmallFoodCard from "../../components/smallFoodCard";
import { useSelector } from "react-redux";

export default function TopPicks({navigation}) {
    const data = useSelector((state) => state.outlets.outlets);

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
                <Text key={"name_" + i} style={foodStyles.outletName}>{ curr.name }</Text>
            )
            itemList.push(
                <ScrollView key={i}
                    style={{ flex: 1, paddingBottom: 10}}
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