// React
import {
  useContext,
  useState
} from 'react';
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
// Context
import { ThemeContext } from '../../context';
// Styles
import { globalStyles } from '../../../config';


export const TextInputScreen = () => {
  const { colors } = useContext( ThemeContext );
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
              style={[ globalStyles.input, { color: colors.text } ]}
              placeholder='Nombre Completo'
              autoCapitalize={ 'words' }
              autoCorrect={ false }
              onChangeText={ value => setForm({ ...form, name: value }) }
            />

            <TextInput
              style={[ globalStyles.input, { color: colors.text } ]}
              placeholder='Correo Electrónico'
              keyboardType='email-address'
              autoCapitalize={ 'none' }
              autoCorrect={ false }
              onChangeText={ value => setForm({ ...form, email: value }) }
            />

            <TextInput
              style={[ globalStyles.input, { color: colors.text } ]}
              placeholder='Teléfono'
              keyboardType='phone-pad'
              onChangeText={ value => setForm({ ...form, phone: value }) }
            />
          </Card>

          <View style={{ height: 10 }} />

          <Card>
            <Text style={{ color: colors.text }}>
              { JSON.stringify( form, null, 2 ) }
            </Text>
            <Text style={{ color: colors.text }}>
              { JSON.stringify( form, null, 2 ) }
            </Text>
            <Text style={{ color: colors.text }}>
              { JSON.stringify( form, null, 2 ) }
            </Text>
            <Text style={{ color: colors.text }}>
              { JSON.stringify( form, null, 2 ) }
            </Text>
            <Text style={{ color: colors.text }}>
              { JSON.stringify( form, null, 2 ) }
            </Text>
            <Text style={{ color: colors.text }}>
              { JSON.stringify( form, null, 2 ) }
            </Text>
            <Text style={{ color: colors.text }}>
              { JSON.stringify( form, null, 2 ) }
            </Text>
          </Card>

          <View style={{ height: 20 }} />

          <Card>
            <TextInput
              style={[ globalStyles.input, { color: colors.text } ]}
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
