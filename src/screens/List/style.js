import { StyleSheet } from "react-native";

export const listStyles = StyleSheet.create({
  list_content: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '95%',
    gap: 9,
  },

  scroll: {
    display: 'flex',
    alignSelf: 'center',
    width: '95%',
    height: 120,
    padding: 2,
    borderColor: 'blue',
    borderWidth: 1,
  },

  modal: {
    alignItems:'center',
    justifyContent:'center',
    height:'100%',
    backgroundColor:'#00000099',
    shadowColor:'#000',
    elevation:9,
    
  }
})