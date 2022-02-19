import RootStack from "./routes/rootStack";
import {
  NavigationContainer,
} from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { useState } from "react";
import FoodStack from "./routes/foodStack";

const getFonts = async () => {
  await Font.loadAsync({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "ubuntu-regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      // <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      // </Provider>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
