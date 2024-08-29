import 'react-native-gesture-handler';
// Navigators
import { StackNavigator } from './presentation/navigator';
// Context
import { ThemeProvider } from './presentation/context';


export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>
  );
}
