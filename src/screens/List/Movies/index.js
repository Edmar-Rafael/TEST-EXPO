import React, { useState } from "react"
import { Text, View } from "react-native"
import { moviesStyles } from "./styles"
import { Button, DeleteModal, Row, UpdateModal } from "../../../components"


function Movies({item, setIsClicked, isClicked}) {
  const [updateModal, setUpdateModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  return (
    <View style={moviesStyles.box}>
      <Row>
        <View style={{width:'50%'}}>
          <Text style={moviesStyles.text}> 
            Movie Name:
          </Text>
        </View>
        
        <View style={{width:'50%'}}>
          <Text style={moviesStyles.text}>
            {item.movie_name}
          </Text>
        </View>
      </Row>

      <Row>
        <View style={{width:'50%'}}>
          <Text style={moviesStyles.text}>
            Movie Review:
          </Text>
        </View>
        
        <View style={{width:'50%'}}>
          <Text style={moviesStyles.text}>
            {item.movie_review}
          </Text>
        </View>
      </Row>

      <Row>
        <Button 
          onPress={() => setUpdateModal(!updateModal)}
          text={'Update'}
          movies
        />

        <Button 
          onPress={() => setDeleteModal(!deleteModal)}
          text={'Delete'}
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
        setIsClicked={setIsClicked}/>
    </View>
  )
}

export default Movies