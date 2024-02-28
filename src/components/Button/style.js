import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 25,
    borderRadius: 19,
    backgroundColor: 'aqua',
    shadowColor: 'black',
    elevation: 9
  },
  movies: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    height: 20,
    borderRadius: 19,
    backgroundColor: 'aqua',
    shadowColor: 'black',
    elevation: 9
  },
  navibar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    height: 20,
    borderRadius: 19,
    backgroundColor: 'aqua',
    shadowColor: 'black',
    elevation: 9
  },

  text: {
    fontWeight: '700'
  },
  text_movies: {
    fontWeight:'500'
  }
})