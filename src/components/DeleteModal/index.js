import React from "react"
import { Modal, Text, View } from "react-native"
import { modalStyles } from "../UpdateModal/styles"
import { Button, Row } from "../../components"
import { useDispatch, useSelector } from "react-redux"
import { requestDeleteMovie } from "../../store/ducks/delete"
import { deleteModalStyles } from "./styles"
import Loading from "../Loading"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

function DeleteModal({item, deleteModal, setDeleteModal, isClicked, setIsClicked}) {

  const { loading } = useSelector(({deleteMovieState}) => deleteMovieState)

  const dispatch = useDispatch()

  async function handleDelete(id) {
    try {
      await dispatch(requestDeleteMovie(id))
      setIsClicked(!isClicked)
      setDeleteModal(false)
    } catch(error) {
      alert(`${error}`)
    }
  }

  return (
    <Modal
      animationType={"slide"}
      transparent={true}
      visible={deleteModal}
      onRequestClose={() => setDeleteModal(!deleteModal)}
    >
      <View style={modalStyles.centered_view}>
        <View style={deleteModalStyles.delete_card}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Text style={deleteModalStyles.delete_text}>
              This will delete the movie permanently!
            </Text>

            <Row>
              <Button 
                onPress={() => handleDelete(item.id)}
                text={'Delete'}
                movies
              />
              
              <Button
                onPress={() => setDeleteModal(!deleteModal)} 
                text={'Close '}
                faIcon={faTimes}
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

export default DeleteModal