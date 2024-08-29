// React
import {
  useContext,
  useState
} from 'react';
// React Native
import {
  RefreshControl,
  ScrollView
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Components
import {
  Title
} from '../../components';
// Context
import { ThemeContext } from '../../context';
// Styles
import {
  globalStyles
} from '../../../config';


export const PullToRefreshScreen = () => {
  const { colors } = useContext( ThemeContext );
  const [ isRefreshing, setIsRefreshing ] = useState( false );
  const { top } = useSafeAreaInsets();

  const onRefresh = () => {
    setIsRefreshing( true );

    setTimeout( () => {
      setIsRefreshing( false );
    }, 4000 );
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={ isRefreshing }
          progressViewOffset={ top }
          colors={[ colors.primary, 'red', 'green' ]}
          onRefresh={ onRefresh }
        />
      }
      style={[ globalStyles.mainContainer, globalStyles.globalMargin, { backgroundColor: colors.cardBackground } ]}
    >
      <Title text='Pull to refresh' safe />
    </ScrollView>
  );
}
