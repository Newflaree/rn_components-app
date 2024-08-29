// React
import {
  useContext,
  useState
} from 'react';
// React Native
import {
  Modal,
  Platform,
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


export const ModalScreen = () => {
  const { colors } = useContext( ThemeContext );
  const [ isVisible, setIsVisible ] = useState( false );

  return (
    <CustomView margin>
      <Title text='Modal' safe />

      <Button
        text='Abrir Modal'
        onPress={ () => setIsVisible( true ) }
      />

      <Modal
        visible={ isVisible }
        animationType='slide'
      >
        <View
          style={{
            flex: 1,
            backgroundColor: colors.cardBackground
          }}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <Title text='Modal Content' safe />
          </View>


          <View style={{ flex: 1 }} />

          <Button
            text='Cerrar Modal'
            onPress={ () => setIsVisible( false ) }
            styles={{
              height: Platform.OS === 'android' ? 40 : 60,
              borderRadius: 0
            }}
          />
        </View>
      </Modal>
    </CustomView>
  );
}
