// React
import { useState } from 'react';
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
// Styles
import {
  colors,
  globalStyles
} from '../../../config';


export const PullToRefreshScreen = () => {
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
      style={[ globalStyles.mainContainer, globalStyles.globalMargin ]}
    >
      <Title text='Pull to refresh' safe />
    </ScrollView>
  );
}
