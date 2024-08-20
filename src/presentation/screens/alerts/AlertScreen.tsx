// React Native
import {
  Alert,
  View
} from 'react-native';
// Components
import {
  Button,
  Title,
  CustomView
} from '../../components';
// Styles
import { globalStyles } from '../../../config';


export const AlertScreen = () => {
  const createTwoButtonAlert = () => {
    Alert.alert( 'Alert Title', 'My alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log( 'Cancel Pressed' ),
        style: 'destructive'
      },
      {
        text: 'OK',
        onPress: () => console.log( 'OK Pressed' )
      }
    ]);
  }

  const createThreeButtonAlert = () => {
    Alert.alert( 'Alert Title', 'My alert Msg', [
      {
        text: 'OK',
        onPress: () => console.log( 'OK Pressed' )
      },
      {
        text: 'Ask me later',
        onPress: () => console.log( 'Ask me later Pressed' )
      },
      {
        text: 'Cancel',
        onPress: () => console.log( 'Cancel Pressed' ),
        style: 'destructive'
      },
    ], {
      cancelable: true,
      onDismiss() {
        console.log( 'onDismiss' );
      }
    });
  }

  const showPrompt = () => {
    Alert.prompt(
      'Correo Electrónico',
      'Texto de pruebas para el prompt presente',
      ( value: string ) => console.log({ value }),
      'secure-text',
      'Soy el valor por defecto',
      'number-pad'
    );
  }

  return (
    <CustomView style={ globalStyles.globalMargin }>
      <Title
        safe
        text='Alertas'
      />

      <Button
        text='Alerta - 2 botones'
        onPress={ createTwoButtonAlert }
      />

      <View style={{ height: 10 }} />

      <Button
        text='Alerta - 3 botones'
        onPress={ createThreeButtonAlert }
      />

      <View style={{ height: 10 }} />

      <Button
        text='Prompt - Input'
        onPress={ showPrompt }
      />
    </CustomView>
  );
}
