import {StatusBar, useWindowDimensions} from 'react-native';

export default function Constant() {
  return {
    widthDevice: useWindowDimensions().width,
    heightDevice: useWindowDimensions().height,
    heightBottomTab: 60,
    heightStatusBar: StatusBar.currentHeight,
    mainColor: '#935cfc',
  };
}
