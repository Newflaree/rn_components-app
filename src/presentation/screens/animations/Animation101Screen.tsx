// React
import { useRef } from 'react';
// React Native
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
// Theme
import { colors } from '../../../config';

export const Animation101Screen = () => {
  const animatedOpacity = useRef( new Animated.Value( 0 ) ).current;
  const animatedTop = useRef( new Animated.Value( -100 ) ).current;

  const fadeIn = () => {
    Animated.timing( animatedTop, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.bounce
      //easing: Easing.elastic( 1 )
    }).start( () => console.log( 'Animation ended' ) );

    Animated.timing( animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start( () => console.log( 'Animation ended' ) );
  }

  const fadeOut = () => {
    Animated.timing( animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start( () => animatedTop.resetAnimation() );
  }

  return (
    <View style={ styles.container }>
      <Animated.View style={[
        styles.purpleBox,
        {
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop
          }]
        }
      ]} />

      <Pressable
        style={{ marginTop: 10 }}
        onPress={ fadeIn }
      >
        <Text>FadeIn</Text>
      </Pressable>

      <Pressable
        style={{ marginTop: 10 }}
        onPress={ fadeOut }
      >
        <Text>FadeOut</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150
  }
});
