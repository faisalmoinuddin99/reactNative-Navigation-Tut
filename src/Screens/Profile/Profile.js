import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./Style";
import navigationString from "../../constants/navigationString";

const Profile = ({ navigation, route }) => {
  console.log("routes", route);
  const { name } = route.params;

  const goToAbout = () => {
    navigation.navigate(navigationString.ABOUT);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is Profile Screen</Text>
      <Text>{name}</Text>
      <Text>{route.params.age}</Text>
      <Button
        title="Go to previous screen"
        onPress={() => navigation.goBack()}
      />
      <View style={{ marginTop: 20 }}>
        <Button title="Go to About" onPress={goToAbout} />
      </View>
    </View>
  );
};

export default Profile;
