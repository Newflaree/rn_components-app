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


export const ChangeThemeScreen = () => {
  return (
    <CustomView margin>
      <Title text='Cambiar tema' safe />

      <Button
        text='Light'
        onPress={ () => {} }
      />

      <View style={{ height: 10 }} />

      <Button
        text='Dark'
        onPress={ () => {} }
      />
    </CustomView>
  );
}
