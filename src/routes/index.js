import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { checkLog } from "../store/ducks/login";
import WithAuth from "./withAuth";
import WithoutAuth from "./withoutAuth";


const Stack = createNativeStackNavigator()

const commonOptions = {headerShown: false}

function Routes() {
  const { data: isAuthenticated } = useSelector(({loginState}) => loginState)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkLog())
  }, [dispatch])

  return (
    <Stack.Navigator initialRouteName={'Home'} screenOptions={commonOptions} >
      {isAuthenticated ? (
        <Stack.Group>
          <Stack.Screen name="WithAuth" component={WithAuth}/>
        </Stack.Group>
      ) : (
        <Stack.Group >
          <Stack.Screen name="WithoutAuth" component={WithoutAuth}/>
        </Stack.Group>
      )}
    </Stack.Navigator>
  )
}

export default Routes