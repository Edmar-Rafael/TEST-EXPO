import React, { useState } from "react"
import { Text, View } from "react-native"
import { moviesStyles } from "./styles"
import { Button, DeleteModal, Row, UpdateModal } from "../../../components"
import { faPencil, faTrashAlt } from "@fortawesome/free-solid-svg-icons"


function Movies({item, setIsClicked, isClicked}) {
  const [updateModal, setUpdateModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  return (
    <View style={moviesStyles.box}>
      <Row movies_background>
        <Text style={moviesStyles.text}>
          Movie Name:
        </Text>

        <Text style={moviesStyles.text}>
          {item.movie_name}
        </Text>
      </Row>

      <Row movies_background>
        <Text style={moviesStyles.text}>
          Movie Review:
        </Text>

        <Text style={moviesStyles.text}>
          {item.movie_review}
        </Text>
      </Row>

      <Row>
        <Button 
          onPress={() => setUpdateModal(!updateModal)}
          text={'Update '}
          faIcon={faPencil}
          movies
        />

        <Button 
          onPress={() => setDeleteModal(!deleteModal)}
          text={'Delete '}
          faIcon={faTrashAlt}
          movies
        />
      </Row>

      <UpdateModal
        item={item}
        updateModal={updateModal}
        setUpdateModal={setUpdateModal}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />

      <DeleteModal 
        item={item}
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
    </View>
  )
}

export default Movies