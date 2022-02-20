import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from "react-native-responsive-screen";


export default function CustomFoodCard({name, description, price, image, ...props}) {

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
        shadowColor: '#171717',
        shadowOffset: {width: 10, height: 10},
        flexDirection: 'row',
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 3,
        backgroundColor: '#fff',
        width: widthPercentageToDP('89%'),
        height: 120,
        marginBottom: 15,
        marginRight: 15,
        borderRadius: 10,

    },
    itemWrapper: {
        padding: 10,
    },
    foodImage: {
        width: 150,
        height: 120,
        borderRadius: 5
    },
    itemName: {
        fontFamily: 'poppins-semibold',
        fontSize: 17,
    },
    itemDescription: {
        fontFamily: 'ubuntu-regular',
        width: wp('45%'),
        fontSize: 14,
        color: '#6B6B6B'
    },
    itemPrice: {
        position: 'absolute',
        bottom: 6,
        fontFamily: 'poppins-semibold',
        fontSize: 17,
        right: 6,
        color: '#4A80F0'
    },
    itemQuantity: {

    }
});
  
  