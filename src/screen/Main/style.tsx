import {StyleSheet} from 'react-native';
import {colors} from '../../utils';
import {dimension} from '../../utils';
const {vw, vh} = dimension;
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  upperContainer: {
    width: vw(360),
    height: vh(250),
    borderWidth: 2,
  },
});
export default style;
