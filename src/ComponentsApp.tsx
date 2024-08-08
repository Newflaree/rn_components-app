import 'react-native-gesture-handler';
// Reactt Navigation
import { NavigationContainer } from '@react-navigation/native';
// Navigators
import { StackNavigator } from './presentation/navigator';


export const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
