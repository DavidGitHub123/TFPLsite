import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Privacypolicy from "./Components/Privacypolicy/Privacypolicy";

const Stack = createNativeStackNavigator();

export default function NavigationLinks() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      <Stack.Screen name="Privacypolicy" component={Privacypolicy} />
    </Stack.Navigator>
  );
}
