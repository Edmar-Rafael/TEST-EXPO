import { StyleSheet } from "react-native";
import { Colors } from "../../utils";

export const rowStyles = (rest) => StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: rest.movies_background ? `${Colors.movies_background}` : '',
    borderRadius: 2
  }
})