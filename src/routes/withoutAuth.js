import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens";

const Stack = createNativeStackNavigator()

function WithoutAuth() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name={'Home'} component={Home}/>
    </Stack.Navigator>
  )
}

export default WithoutAuth