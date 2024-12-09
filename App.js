import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "./Components";
import NextScreen from "./Components/NextScreen";
import Home from "./Components/Home";
import Newproducts from "./Components/Newproducts";
import HomeBody from "./Components/HomeBody";
import ProductsDetails from "./Components/ProductsDetails";
import BottomNav from "./Components/BottomNav";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    outfit: require("./assets/font/AvenirNextLTPro-Bold.otf"),
    "outfit-Medium": require("./assets/font/AvenirNextLTPro-It.otf"),
    "outfit-Regular": require("./assets/font/AvenirNextLTPro-Regular.otf"),
  });

  if (!fontsLoaded) {
    return null; // Or a loading indicator
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="NextScreen" component={NextScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Newproducts" component={Newproducts} />
          <Stack.Screen name="HomeBody" component={HomeBody} />
          <Stack.Screen name="ProductDetails" component={ProductsDetails} />
          <Stack.Screen name="BottomNav" component={BottomNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
