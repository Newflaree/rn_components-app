// React Native
import {
  Alert,
  View
} from 'react-native';
// Adapters
import { showPrompt } from '../../../config';
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

  const onShowPrompt = () => {
    showPrompt({
      title: 'Test Title',
      subTitle: 'jfdlja jkdaj jkdja lfjasljf kdl',
      buttons: [
        { text: 'Ok', onPress: () => console.log( 'ok' ) },
        { text: 'Cancel', onPress: () => console.log( 'cancel' ), style: 'cancel' },
      ],
      placeholder: 'Placeholder'
    });

    /*     
    // ! Codigo Nativo
    Alert.prompt(
      'Correo Electrónico',
      'Texto de pruebas para el prompt presente',
      ( value: string ) => console.log({ value }),
      'secure-text',
      'Soy el valor por defecto',
      'number-pad'
    );
     * */
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
        onPress={ onShowPrompt }
      />
    </CustomView>
  );
}
