import React, { useState } from "react";
import { View } from "react-native";
import { Button, Container, Input, Separator } from "../../components";
import { homeStyles } from "./style";
import { JWT, NAME, PASSWORD } from "../../config";
import { useDispatch } from "react-redux";
import { requestLogIn } from "../../store/ducks/login";


function Home() {
  const [user, setUser] = useState({
    token: JWT,
    id: 1,
    name: '',
    password: ''
  })

  const dispatch = useDispatch()

  function handleOnChangeText(name, password) {
    setUser({
      name: name,
      password: password
    })
  }

  function handleSubmit() {
    if(user.name === NAME && user.password === PASSWORD) {
      dispatch(requestLogIn(user))
    } else {
      alert('Oops! Name or Password invalid')
    }
  }

  return (
    <Container>
      <View style={homeStyles.home}>
        <Input
          onChangeText={(value) => handleOnChangeText(value, user.password)} 
          placeHolder={'test'}
          value={user.name}
        />
        
        <Input 
          onChangeText={(value) => handleOnChangeText(user.name, value)}
          placeHolder={'test'}
          value={user.password}
        />

        <Separator />

        <Button 
          onPress={handleSubmit}
          text={'SUBMIT'}/>
      </View>
    </Container>
  )
}

export default Home