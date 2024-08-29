// React Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import {
  AlertScreen,
  Animation101Screen,
  Animation102Screen,
  ChangeThemeScreen,
  CustomSectionListScreen,
  HomeScreen,
  InfiniteScrollScreen,
  ModalScreen,
  PullToRefreshScreen,
  SlidesScreen,
  SwitchScreen,
  TextInputScreen,
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
      <Stack.Screen
        name='Animation102Screen'
        component={ Animation102Screen }
      />

      <Stack.Screen
        name='SwitchScreen'
        component={ SwitchScreen }
      />
      <Stack.Screen
        name='AlertScreen'
        component={ AlertScreen }
      />
      <Stack.Screen
        name='TextInputScreen'
        component={ TextInputScreen }
      />

      <Stack.Screen
        name='PullToRefreshScreen'
        component={ PullToRefreshScreen }
      />
      <Stack.Screen
        name='CustomSectionListScreen'
        component={ CustomSectionListScreen }
      />
      <Stack.Screen
        name='ModalScreen'
        component={ ModalScreen }
      />
      <Stack.Screen
        name='InfiniteScrollScreen'
        component={ InfiniteScrollScreen }
      />

      <Stack.Screen
        name='SlidesScreen'
        component={ SlidesScreen }
      />
      <Stack.Screen
        name='ChangeThemeScreen'
        component={ ChangeThemeScreen }
      />
    </Stack.Navigator>
  )
}
