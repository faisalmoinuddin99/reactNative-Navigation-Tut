import { View, Text } from "react-native";
import React from "react";
import { styles } from "./GlobalStyle";
import Routes from "./src/Navigation/Routes";

const App = () => {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
};

export default App;
