import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from "react-native-responsive-screen";


export default function BigFoodCard({name, description, price, image, ...props}) {

    console.log(image)
    return (       
        <View style={styles.itemCard}>
            <Image style={styles.foodImage} source={image} />
            <View style={styles.itemWrapper}>
                <Text style={styles.itemName}>{name}</Text>
                <Text style={styles.itemDescription}>{description}</Text>
            </View>
            <Text style={styles.itemPrice}>{price}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    itemCard: {
        shadowColor: '#000',
        shadowOffset: {width: 4, height: 5},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: widthPercentageToDP('89%'),
        height: 200,
        marginBottom: 15,
        marginRight: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#b2b2b2'
    },
    itemWrapper: {
        padding: 10,
    },
    foodImage: {
        width: widthPercentageToDP('89%'),
        height: 100,
        borderRadius: 10
    },
    itemName: {
        fontFamily: 'poppins-semibold',
        fontSize: 20,
    },
    itemDescription: {
        fontFamily: 'ubuntu-regular',
        fontSize: 15,
        color: '#6B6B6B'
    },
    itemPrice: {
        position: 'absolute',
        bottom: 6,
        fontFamily: 'poppins-semibold',
        fontSize: 20,
        right: 10,
        color: '#4A80F0'
    }
});
  
  