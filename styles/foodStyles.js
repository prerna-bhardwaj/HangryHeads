import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const foodStyles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 20
    },
    headerText: {
        fontFamily: 'poppins-semibold',
        fontSize: 30,
        marginHorizontal: 20,
        textAlign: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        paddingBottom: 15,
        marginBottom: 10,
    },
    outletName: {
        fontFamily: 'ubuntu-regular',
        fontSize: 25,
        paddingTop: 20,
        paddingBottom: 10,
    },
    searchBox: {
        flexDirection: 'row',
        backgroundColor: '#F8EBEB',
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'space-between',
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 25
    },
    searchInput: {
        width: widthPercentageToDP('67%'),
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        fontFamily: 'poppins-semibold',
        fontSize: 20
    }
});

export default foodStyles;
