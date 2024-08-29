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
  const { setTheme } = useContext( ThemeContext )

  return (
    <CustomView margin>
      <Title text='Cambiar tema' safe />

      <Button
        text='Light'
        onPress={ () => setTheme( 'light' ) }
      />

      <View style={{ height: 10 }} />

      <Button
        text='Dark'
        onPress={ () => setTheme( 'dark' ) }
      />
    </CustomView>
  );
}
