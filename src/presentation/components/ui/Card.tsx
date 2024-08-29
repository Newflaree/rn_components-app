// React
import {
  PropsWithChildren,
  useContext
} from 'react';
// React Native
import {
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
// Context
import { ThemeContext } from '../../context';


interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
};

export const Card = ({
  style,
  children
}: Props) => {
  const { colors }  = useContext( ThemeContext );

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
