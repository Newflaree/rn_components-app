// React
import { useState } from 'react';
// React Native
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View
} from 'react-native';
// Components
import {
  Card,
  CustomView,
  Title,
} from '../../components';
// Styles
import { globalStyles } from '../../../config';


export const TextInputScreen = () => {
  const [ form, setForm ] = useState({
    name: '',
    email: '',
    phone: ''
  });

  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding' : undefined }
    >
      <ScrollView>
        <CustomView margin>
          <Title
            safe
            text='Text Inputs'
          />

          <Card>
            <TextInput
              style={ globalStyles.input }
              placeholder='Nombre Completo'
              autoCapitalize={ 'words' }
              autoCorrect={ false }
              onChangeText={ value => setForm({ ...form, name: value }) }
            />

            <TextInput
              style={ globalStyles.input }
              placeholder='Correo Electrónico'
              keyboardType='email-address'
              autoCapitalize={ 'none' }
              autoCorrect={ false }
              onChangeText={ value => setForm({ ...form, email: value }) }
            />

            <TextInput
              style={ globalStyles.input }
              placeholder='Teléfono'
              keyboardType='phone-pad'
              onChangeText={ value => setForm({ ...form, phone: value }) }
            />
          </Card>

          <View style={{ height: 10 }} />

          <Card>
            <Text>
              { JSON.stringify( form, null, 2 ) }
            </Text>
            <Text>
              { JSON.stringify( form, null, 2 ) }
            </Text>
            <Text>
              { JSON.stringify( form, null, 2 ) }
            </Text>
            <Text>
              { JSON.stringify( form, null, 2 ) }
            </Text>
            <Text>
              { JSON.stringify( form, null, 2 ) }
            </Text>
            <Text>
              { JSON.stringify( form, null, 2 ) }
            </Text>
            <Text>
              { JSON.stringify( form, null, 2 ) }
            </Text>
          </Card>

          <View style={{ height: 20 }} />

          <Card>
            <TextInput
              style={ globalStyles.input }
              placeholder='Teléfono'
              keyboardType='phone-pad'
              onChangeText={ value => setForm({ ...form, phone: value }) }
            />
          </Card>
        </CustomView>

        <View style={{ height: 20 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
