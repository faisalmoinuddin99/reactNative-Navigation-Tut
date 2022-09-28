import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./Style";

const Profile = (props) => {
  console.log("routes", props.route);
  const { name } = props.route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Profile</Text>
      <Text>{name}</Text>
      <Text>{props.route.params.age}</Text>
    </View>
  );
};

export default Profile;
