import { StyleSheet } from "react-native";
import { Colors } from "../../utils";

export const buttonStyles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 25,
    borderRadius: 19,
    backgroundColor: `${Colors.aqua}`,
    shadowColor: `${Colors.black}`,
    elevation: 9
  },
  movies: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    height: 20,
    borderRadius: 19,
    backgroundColor: `${Colors.aqua}`,
    shadowColor: `${Colors.black}`,
    elevation: 9
  },
  navibar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    height: 20,
    borderRadius: 19,
    backgroundColor: `${Colors.aqua}`,
    shadowColor: `${Colors.white}`,
    elevation: 9
  },

  text: {
    fontWeight: '700'
  },
  text_movies: {
    fontWeight:'500'
  }
})