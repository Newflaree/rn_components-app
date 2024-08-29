import 'react-native-gesture-handler';
// React
import {
  PropsWithChildren,
  useContext
} from 'react';
// Reactt Navigation
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native';
// Navigators
import { StackNavigator } from './presentation/navigator';
// Context
import {
  ThemeContext,
  ThemeProvider
} from './presentation/context';


const AppNavigation = ({ children }: PropsWithChildren) => {
  const { isDark } = useContext( ThemeContext );

  return (
    <NavigationContainer theme={ isDark ? DarkTheme : DefaultTheme }>
      { children }
    </NavigationContainer>
  );
}

const AppTheme = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppNavigation>
        { children }
      </AppNavigation>
    </ThemeProvider>
  );
}

export const ComponentsApp = () => {
  return (
    <AppTheme>
      <StackNavigator />
    </AppTheme>
  );
}
