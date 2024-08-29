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
  backgroundColor?: string;
}

export const SubTitle = ({
  text,
  safe = false,
}: Props) => {
  const { colors } = useContext( ThemeContext );
  const { top } = useSafeAreaInsets();

  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        backgroundColor: colors.cardBackground,
        color: colors.text
      }}
    >
      { text }
    </Text>
  );
}
