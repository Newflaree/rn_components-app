// React
import { ReactNode } from 'react';
// React Native
import {
  StyleProp,
  Text,
  View,
  ViewStyle
} from 'react-native';
// Styles 
import { globalStyles } from '../../../config';


interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

export const CustomView = ({
  style,
  children
}: Props) => {
  return (
    <View style={[ globalStyles.mainContainer, style ]}>
      { children }
    </View>
  );
}
