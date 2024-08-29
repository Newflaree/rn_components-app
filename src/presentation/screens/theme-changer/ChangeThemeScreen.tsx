// React
import { useContext } from 'react';
// React Native
import {
  Text,
  View
} from 'react-native';
// Components
import {
  Button,
  CustomView,
  Title
} from '../../components';
// Context
import { ThemeContext } from '../../context';


export const ChangeThemeScreen = () => {
  const { setTheme, currentTheme, colors } = useContext( ThemeContext )

  return (
    <CustomView margin>
      <Title text={ `Cambiar tema: ${ currentTheme }` } safe />

      <Button
        text='Light'
        onPress={ () => setTheme( 'light' ) }
      />

      <View style={{ height: 10 }} />

      <Button
        text='Dark'
        onPress={ () => setTheme( 'dark' ) }
      />

      <View style={{ height: 10 }} />

      <Text style={{ color: colors.text }}>
        {
          JSON.stringify( colors, null, 2 )
        }
      </Text>
    </CustomView>
  );
}
