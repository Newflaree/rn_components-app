// React
import { useContext } from 'react';
// React Native
import {
  Text,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Context
import { ThemeContext } from '../../context';
// Styles
import {
  globalStyles
} from '../../../config';


interface Props {
  text: string;
  safe?: boolean;
  white?: boolean;
}

export const Title = ({
  text,
  safe,
  white
}: Props) => {
  const { colors } = useContext( ThemeContext );
  const { top } = useSafeAreaInsets();

  return (
    <View>
      <Text style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        color: white ? 'white' : colors.text
      }}>
        { text }
      </Text>
    </View>
  );
}
