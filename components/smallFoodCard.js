import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


export default function SmallFoodCard({name, description, price, image, ...props}) {

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
        shadowOffset: {width: 3, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: 200,
        height: 150,
        marginBottom: 15,
        marginRight: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#b2b2b2'

    },
    itemWrapper: {
        padding: 5,
    },
    foodImage: {
        width: 200,
        height: 80,
        borderRadius: 5
    },
    itemName: {
        fontFamily: 'poppins-semibold',
        fontSize: 13,
    },
    itemDescription: {
        fontFamily: 'ubuntu-regular',
        fontSize: 11,
        color: '#6B6B6B'
    },
    itemPrice: {
        position: 'absolute',
        bottom: 6,
        fontFamily: 'poppins-semibold',
        fontSize: 12,
        right: 6,
        color: '#4A80F0'
    }
});
  
  