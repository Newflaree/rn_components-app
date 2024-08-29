// React
import {
  createContext,
  PropsWithChildren,
  useEffect,
  useState
} from 'react';
// React Native
import {
  Appearance,
  AppState,
  useColorScheme
} from 'react-native';
// Styles
import {
  darkColors,
  lightColors,
  ThemeColors
} from '../../config';


type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;
  setTheme: ( theme: ThemeColor ) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  //const colorScheme = useColorScheme();
  const [ currentTheme, setCurrentTheme ] = useState<ThemeColor>( 'light' );

  /*
  useEffect( () => {
    if ( colorScheme === 'dark' ) {
      setCurrentTheme( 'dark' )
    } else {
      setCurrentTheme( 'light' )
    }
  }, [ colorScheme ] );
   * */

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      const colorScheme = Appearance.getColorScheme();
      setCurrentTheme( colorScheme === 'dark' ? 'dark' : 'light' );
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const setTheme = ( theme: ThemeColor ) => {
    setCurrentTheme( theme )
  }

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: currentTheme,
        isDark: currentTheme !== 'light',
        colors: currentTheme === 'light' ? lightColors : darkColors,
        setTheme: setTheme 
      }}
    >
      { children }
    </ThemeContext.Provider>
  );
}
