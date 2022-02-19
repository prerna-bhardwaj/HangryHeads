import { createStackNavigator } from "@react-navigation/stack";
import AddFavs from "../screens/homeStack/AddFavs";
import HomeScreen from "../screens/homeStack/homeScreen";

const Stack = createStackNavigator();

function HomeStack({ navigation, props }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeRoot"
    >
      <Stack.Screen name="HomeRoot">
        {(props) => <HomeScreen {...props} parentNavigation={navigation} />}
      </Stack.Screen>
      <Stack.Screen name="AddFavs">
        {(props) => <AddFavs {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default HomeStack;
