import { StyleSheet } from "react-native";

export const deleteModalStyles = StyleSheet.create({
  delete_text: {
    color:'#dd0000',
    borderWidth:1,
    borderColor:'#aa0000',
    borderRadius:3,
    padding:5
  },

  delete_card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
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