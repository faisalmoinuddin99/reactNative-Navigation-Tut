import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Profile, About } from "../Screens";
import navigationString from "../constants/navigationString";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navigationString.HOME}>
        <Stack.Screen name={navigationString.HOME} component={Home} />
        <Stack.Screen name={navigationString.PROFILE} component={Profile} />
        <Stack.Screen name={navigationString.ABOUT} component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
