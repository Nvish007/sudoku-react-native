/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  gridContainer: {
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cell: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    textAlign: 'center',
  },
});

export default styles;
