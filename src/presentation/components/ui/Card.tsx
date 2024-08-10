// React
import { PropsWithChildren } from 'react';
// React Native
import {
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
// Styles
import { colors } from '../../../config';


interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
};

export const Card = ({
  style,
  children
}: Props) => {
  return (
    <View style={[
      {
        backgroundColor: colors.cardBackground,
        borderRadius: 10,
        padding: 10,
      },
      style
    ]}>
      { children }
    </View>
  );
}
