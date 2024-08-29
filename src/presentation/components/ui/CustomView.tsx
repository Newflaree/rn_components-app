// React
import {
  ReactNode,
  useContext
} from 'react';
// React Native
import {
  StyleProp,
  View,
  ViewStyle
} from 'react-native';
// Context
import { ThemeContext } from '../../context';
// Styles 
import { globalStyles } from '../../../config';


interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  margin?: boolean;
}

export const CustomView = ({
  style,
  children,
  margin = false
}: Props) => {
  const { colors } = useContext( ThemeContext );

  return (
    <View
      style={[
        globalStyles.mainContainer,
        margin ? globalStyles.globalMargin : null,
        { backgroundColor: colors.background },
        style
      ]}
    >
      { children }
    </View>
  );
}
