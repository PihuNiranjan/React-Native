import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function First({ navigation }) {
  const [name, setname] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thanking For Downloading My App</Text>
      <Image style={styles.image} source={require("./assets/img1.png")} />
      <TextInput
        style={styles.TextInput}
        placeholder="Enter Your Name"
        placeholderTextColor="#003f5c"
        onChangeText={(name) => setname(name)}
      />
      {console.log(name)}
      <TouchableOpacity
        onPress={() => navigation.navigate("Second", { name: name })}
      >
        <Text style={styles.newuser}>Press Here </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
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
  newuser: {
    // marginVertical: 10,
    height: 30,
    backgroundColor: "blue",

    marginTop: 18,
    fontWeight: "bold",
    color: "white",
    width: 300,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    borderRadius: 10,
  },
});
