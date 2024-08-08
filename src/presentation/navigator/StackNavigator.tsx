import { createStackNavigator } from '@react-navigation/stack';
// Screens
import { HomeScreen } from '../screens';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={ HomeScreen }
      />
    </Stack.Navigator>
  )
}
