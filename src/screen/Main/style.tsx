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
  },
});
export default style;
