import 'react-native-gesture-handler';
// React
import { PropsWithChildren } from 'react';
// Reactt Navigation
import { NavigationContainer } from '@react-navigation/native';
// Navigators
import { StackNavigator } from './presentation/navigator';
// Context
import { ThemeProvider } from './presentation/context';


const AppState = ({ children }: PropsWithChildren) => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        { children }
      </ThemeProvider>
    </NavigationContainer>
  );
}

export const ComponentsApp = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
}
