import {React, useState} from "react";
import { Image, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons'; 
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
// import GetLocation from 'react-native-get-location'
// import Geolocation from '@react-native-community/geolocation';


const OnboardingScreen = ({navigation}) => {
  const [currSlide, setCurrSlide] = useState(1);
  const data = [
    {
      title: "Some title1",
      subTitle: "Some subtitle related to the app abc def ghi jk; mno pqr",
      img: require("../../assets/images/splash.png"),
    },
    {
      title: "Some title2",
      subTitle: "Some subtitle related to the app abc def ghi jk; mno pqr",
      img: require("../../assets/images/splash.png"),
    },
    {
      title: "Some title3",
      subTitle: "Some subtitle related to the app abc def ghi jk; mno pqr",
      img: require("../../assets/images/splash.png"),
    },
    {
      title: "Some title4",
      subTitle: "Some subtitle related to the app abc def ghi jk; mno pqr",
      img: require("../../assets/images/splash.png"),
    },
  ]
  const [currData, setCurrData] = useState(data[0])

  const nextSlide = () => {
    if(currSlide == 5)
      navigation.navigate("Login")
    else {
      setCurrSlide(currSlide+1);
      setCurrData(data[currSlide-1]);
    }
    // Geolocation.setRNConfiguration(config);
    // Geolocation.getCurrentPosition(info => console.log(info));

    // GetLocation.getCurrentPosition({
    //       enableHighAccuracy: true,
    //       timeout: 15000,
    //   })
    //   .then(location => {
    //       console.log(location);
    //   })
    //   .catch(error => {
    //       const { code, message } = error;
    //       console.warn(code, message);
    //   })
  }

  const previousSlide = () => {
    if(currSlide > 1) {
      setCurrSlide(currSlide-1);
      setCurrData(data[currSlide-1]);
    }
  }

  const skip = () => {
    navigation.navigate("Login")
  }

  return (
    <View style={{flex: 1, backgroundColor:'#fff'}}>
      <View style={styles.container}>
        <View style={styles.btnCont}>
          <TouchableOpacity onPress={skip}>
            <Text style={{ color: "#4A80F0", fontFamily: "poppins-medium" }}>
              SKIP
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imgCont}>
          <Image style={{width: widthPercentageToDP('90%'), height: widthPercentageToDP('100%')}} source={currData.img} />
        </View>
        <View style={styles.infoCont}>
          <Text
            style={{
              fontSize: 30,
              color: "#4A80F0",
              fontFamily: "poppins-semibold",
            }}
          >
            {currData.title}
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 15,
              fontFamily: "poppins-medium",
            }}
          >
            {currData.subTitle}
          </Text>
        </View>

        <TouchableOpacity containerStyle={styles.prevBtn} onPress={previousSlide}>
          <Ionicons name="chevron-back-circle" size={55} color="#4A80F0" />
        </TouchableOpacity>
        
        <TouchableOpacity containerStyle={styles.nextBtn} onPress={nextSlide}>
          <Ionicons name="chevron-forward-circle" size={55} color="#4A80F0" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  btnCont: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: "10%",
    paddingTop: 30,
    // paddingVertical: "2%",
    color: "#4A80F0",
  },
  imgCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  infoCont: {
    padding: "3%",
    marginTop: "5%",
    color: '#000',
  },
  nextBtn: {
    bottom: 30,
    right: 20,
    position: "absolute",
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  prevBtn: {
    bottom: 30,
    left: 20,
    position: "absolute",
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingScreen;
