import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './Components';
import NextScreen from './Components/NextScreen';
import Home from './Components/Home';


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
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="NextScreen" component={NextScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}