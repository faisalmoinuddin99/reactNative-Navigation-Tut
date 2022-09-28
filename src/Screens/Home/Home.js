import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import styles from "./Style";
import navigationString from "../../constants/navigationString";
import { useNavigation } from "@react-navigation/native";

const Home = ({ navigation }) => {
  // const navigation = useNavigation();
  // console.log("props aviables: ", props);

  const gotToScreen = () => {
    navigation.navigate(navigationString.PROFILE, {
      name: "Faisal",
      age: 23,
    });
  };
  return (
    <View style={styles.container}>
      <Button title="Go to Profile" onPress={gotToScreen} />
    </View>
  );
};

export default Home;
