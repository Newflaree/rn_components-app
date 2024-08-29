// React
import { useContext } from 'react';
// React Native
import {
  StyleProp,
  View,
  ViewStyle
} from 'react-native';
// Context
import { ThemeContext } from '../../context';


interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({ style }: Props) => {
  const { colors } = useContext( ThemeContext );

  return (
    <View style={{ backgroundColor: colors.cardBackground }}>
      <View
        style={[
          {
            alignSelf: 'center',
            width: '90%',
            height: 1,
            backgroundColor: colors.text,
            opacity: 0.1,
            marginVertical: 8
          },
          style
        ]}
      />
    </View>
  );
}
