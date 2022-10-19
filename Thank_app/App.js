import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import First from "./first_scr";
import Second from "./responsive_scr";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 50,
  },
  image: {
    height: "25%",
    width: 250,
    marginBottom: 50,
  },

  TextInput: {
    backgroundColor: "white",
    width: 300,
    height: 40,
    borderRadius: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
