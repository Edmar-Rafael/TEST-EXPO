import React, { useState } from "react";
import { View } from "react-native";
import { Button, Container, Input, Loading, Navibar, Separator } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/ducks/login";
import { createStyles } from "./style";
import { requestCreateMovie } from "../../store/ducks/creating";

function Create({ navigation }) {
  const [newMovie, setNewMovie] = useState({
    name: '',
    review: ''
  })

  const { loading } = useSelector(({createMovieState}) => createMovieState)

  const dispatch = useDispatch()

  function handleOnChangeText(movieName, movieReview) {
    setNewMovie({
      name: movieName,
      review: movieReview
    })
  }

  async function handleCreateMovie() {
    if(newMovie.name === '' || newMovie.review === '') {
      alert('Fields cant be empty!')
    } else {
      try {
        await dispatch(requestCreateMovie({
          movie_name: `${newMovie.name}`,
          movie_review: `${newMovie.review}`
        }))
        navigation.navigate('List')
      } catch(error) {
        alert(`${error}`)
      }
    }
  }

  return (
    <Container>
      <Navibar>
        <Button 
          onPress={() => navigation.popToTop()}
          text={'To List'}
          navi_bar
        />

        <Button 
          onPress={() => dispatch(logOut())}
          text={'Exit'}
          navi_bar
        />
      </Navibar>

      <View style={createStyles.create_movies}>
      { loading ? (
        <Loading />
      ) : (
        <>
          <Input 
            onChangeText={(value) => handleOnChangeText(value, newMovie.review)}
            placeHolder={'Movie Name'}
            value={newMovie.name}
          />

          <Input 
            onChangeText={(value) => handleOnChangeText(newMovie.name, value)}
            placeHolder={'Movie Review'}
            value={newMovie.review}
          />

          <Separator />
        
          <Button 
            onPress={handleCreateMovie}
            text={'CREATE'}
          />
        </>
      )}
      </View>
    </Container>
  )
}

export default Create