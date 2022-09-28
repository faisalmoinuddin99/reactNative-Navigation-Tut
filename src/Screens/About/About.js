import { View, Text, Button } from "react-native";
import React from "react";
import styles from "./Style";

const About = ({ navigation }) => {
  const gotToScreen = () => {
    navigation.popToTop();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>About</Text>
      <Button title="go to home" onPress={gotToScreen} />
    </View>
  );
};

export default About;
