// React
import { useState } from 'react';
// React Native
import {
  FlatList,
  Text,
  View
} from 'react-native';
// Components
import {
  CustomView,
  Title
} from '../../components';
// Styles
import { colors } from '../../../config';


export const InfiniteScrollScreen = () => {
  const [ numbers, setNumbers ] = useState([0,1,2,3,4,5]);

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, ( _, i ) => numbers.length + i );

    setTimeout( () => {
      setNumbers([ ...numbers, ...newArray ]);
    }, 3000 );
  }

  return (
    <CustomView margin>
      <Title text='Infinite Scroll' safe />

      <FlatList
        data={ numbers }
        onEndReached={ loadMore }
        onEndReachedThreshold={ 0.6 }
        keyExtractor={ ( item ) => item.toString() }

        renderItem={ ({ item }) => 
          <Text
            style={{
              height: 300,
              backgroundColor: colors.primary,
              color: 'white',
              fontSize: 50
            }}
          >
            { item }
          </Text> 
        }
      />
    </CustomView>
  );
}
