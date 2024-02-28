import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
  centered_view: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#000000ab'
  },

  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: 200,
    padding: 9,
    backgroundColor: '#252525',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 19,
    shadowColor: 'black',
    elevation: 9,
    gap: 15
  }
})