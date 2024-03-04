import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Button, Container, Loading, Navibar, Refresh, Separator } from "../../components";
import { logOut } from "../../store/ducks/login";
import { useDispatch, useSelector } from "react-redux";
import { listStyles } from "./style";
import Movies from "./Movies";
import { requestMovies } from "../../store/ducks/moviesList";
import { SafeAreaView } from "react-native-safe-area-context";

function List({ navigation }) {
  const [isClicked, setIsClicked] = useState(false)

  const { data: moviesData, loading } = useSelector(({moviesListState}) => moviesListState)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestMovies())
  }, [dispatch, isClicked])

  return (
    <Container >
      <Navibar >
        <Button 
          onPress={() => navigation.navigate('Create')}
          text={'To Create'}
          navi_bar
        />

        <Button 
          onPress={() => dispatch(logOut())}
          text={'Exit'}
          navi_bar
        />
      </Navibar>

      <View style={listStyles.list_content}>
        <SafeAreaView style={listStyles.scroll}>
        { loading ? (
          <Loading />
        ) : (
          <FlatList 
            data={moviesData}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
                <Movies
                  item={item}
                  isClicked={isClicked}
                  setIsClicked={setIsClicked}
                />
              )
            }}
            ItemSeparatorComponent={() => <Separator y={10}/>}
          />
        )}
        </SafeAreaView>
      </View>
      
      <Refresh 
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
    </Container>
  )
}

export default List