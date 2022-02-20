import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SponsorFood from "../screens/foodStack/sponsorFood";
import FindFood from "../screens/foodStack/findfood";
import TopPicks from "../screens/foodStack/topPicks";
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 


const Tab = createMaterialBottomTabNavigator();

function FoodStack({ route }) {
  return (
    <Tab.Navigator
      activeColor="#4A80F0"
      inactiveColor="#000"
      barStyle={{ backgroundColor: '#F9F9F9' }}
      screenOptions={{
        headerShown: false,
      }}
    >

<Tab.Screen
        name="FindFood"
        component={FindFood}
        options={{
          tabBarLabel: "Find",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-search-sharp" size={24} color={color} />          
          ),
        }}
      />
      <Tab.Screen
        name="TopPicks"
        component={TopPicks}
        options={{
          tabBarLabel: "Top Picks",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="score" size={24} color={color} />          
          ),
        }}
      />
      
      
      <Tab.Screen
        name="SponsorFood"
        component={SponsorFood}
        options={{
          tabBarLabel: "Sponsor",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-fast-food-sharp" size={24} color={color} />          
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

export default FoodStack;
