import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Create, List } from "../screens";
import { Container, Navibar } from "../components";


const Stack = createNativeStackNavigator()

const commonOptions = {headerShown: false}

function WithAuth() {

  return (  
    <Stack.Navigator initialRouteName={'List'} screenOptions={commonOptions}>
      <Stack.Screen name={'List'} component={List}/>
      <Stack.Screen name={'Create'} component={Create}/>
    </Stack.Navigator>
  )
}

export default WithAuth