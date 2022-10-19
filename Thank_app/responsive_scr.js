import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Second = ({ route, navigation }) => {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thank You </Text>
      <Text style={styles.text}>{name}</Text>

      <Text style={{ color: "#FFFF00", fontWeight: "bold", fontSize: 20 }}>
        from Piyush niranjan 😉
      </Text>
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 50,
  },
});
