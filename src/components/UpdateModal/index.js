import React, { useState } from "react"
import { Modal, Text, View } from "react-native"
import { modalStyles } from "./styles"
import { Button, Input, Loading, Row, Separator } from "../../components"
import { useDispatch, useSelector } from "react-redux"
import { requestUpdateMovie } from "../../store/ducks/update"

function UpdateModal({item, updateModal, setUpdateModal, isClicked, setIsClicked}) {
  const [updatedMovie, setUpdatedMovie] = useState({
    newName: '',
    newReview: ''
  })

  const { loading } = useSelector(({updateMovieState}) => updateMovieState)

  const dispatch = useDispatch()

  function handleOnChangeText(name, review) {
    setUpdatedMovie({
      newName: name,
      newReview: review
    })
  }

  async function handleUpdatedMovie(id) {
    if(updatedMovie.newName === '' || updatedMovie.newReview === '') {
      alert('Oops! Field empty')
    } else {
      await dispatch(requestUpdateMovie({
        id,
        movie_name: `${updatedMovie.newName}`,
        movie_review: `${updatedMovie.newReview}`
      }))
      setIsClicked(!isClicked)
      setUpdateModal(false)
    }
  }

  return (
    <Modal 
      animationType={"slide"}
      transparent={true}
      visible={updateModal}
      onRequestClose={() => setUpdateModal(false)}
    >
      <View style={modalStyles.centered_view}>
        <View style={modalStyles.card}>
        { loading ? (
          <Loading />
        ) : (
          <>
            <Row>
              <Text style={{color:'white'}}>New Name: </Text>

              <Input
                onChangeText={(value) => handleOnChangeText(value, updatedMovie.newReview)} 
                placeHolder={item.movie_name}
                value={updatedMovie.newName}
              />
            </Row>

            <Row>
              <Text style={{color:'white'}}>New Review: </Text>

              <Input 
                onChangeText={(value) => handleOnChangeText(updatedMovie.newName, value)}
                placeHolder={item.movie_review}
                value={updatedMovie.newReview}
              />
            </Row>

            <Separator />

            <Row >
              <Button 
                onPress={() => handleUpdatedMovie(item.id)}
                text={'Submit'} 
                movies
              />

              <Button
                onPress={() => setUpdateModal(false)} 
                text={'Close'}
                movies
              />
            </Row>
          </>
        )}
        </View>
      </View>
    </Modal>
  )
}

export default UpdateModal