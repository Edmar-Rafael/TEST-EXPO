import { StyleSheet } from "react-native";
import { Colors } from "../../utils";

export const InputStyles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    backgroundColor: `${Colors.back_ground}`,
    borderWidth: 1,
    borderRadius: 5,
  },

  textLabel: {
    position: 'absolute',
    left: 15,
    textAlign: 'center',
    fontSize: 14,
    paddingLeft: 5,
    paddingRight: 5,
    color: 'white',
    backgroundColor: `${Colors.back_ground}`,
    pointerEvents: 'none',
    zIndex: 1
  },

  input: {
    width: '100%',
    height: 39,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 3,
    paddingLeft: 13,
    color: 'white',
  }
})