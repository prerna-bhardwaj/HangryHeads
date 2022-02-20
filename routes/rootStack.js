import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
} from "@react-navigation/native";
import AuthStack from "../routes/authStack";
import FoodStack from "../routes/foodStack";
import AddItem from "../screens/addItem";

const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer
      independent={true}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="AuthStack"
      >
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen
          name="FoodStack"
          component={FoodStack}
        />
        <Stack.Screen name="AddItem" component={AddItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
