// React Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import {
  Animation101Screen,
  HomeScreen
} from '../screens';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='HomeScreen'
        component={ HomeScreen }
      />
      <Stack.Screen
        name='Animation101Screen'
        component={ Animation101Screen }
      />
    </Stack.Navigator>
  )
}
