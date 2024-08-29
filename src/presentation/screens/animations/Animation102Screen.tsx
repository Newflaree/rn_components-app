// React
import { useRef } from 'react';
// React Native
import {
  Animated,
  PanResponder,
  StyleSheet,
  View
} from 'react-native';
// Components
import { CustomView } from '../../components';


export const Animation102Screen = () => {
  const pan = useRef( new Animated.ValueXY() ).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x,
        dy: pan.y
      }
    ], {
      useNativeDriver: false
    }),
    onPanResponderRelease: () => {
      Animated.spring( 
        pan,
        {
          toValue: {
            x: 0,
            y: 0
          },
          useNativeDriver: false
        } 
      ).start();
    }
  });

  return (
    <CustomView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Animated.View
        { ...panResponder.panHandlers }
        style={[ pan.getLayout(), styles.box ]}
      />
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: '#61DAFB',
    width: 80,
    height: 80,
    borderRadius: 4
  }
});
