// React
import { useRef } from 'react';
// React Native
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
// Theme
import { colors } from '../../../config';

export const Animation101Screen = () => {
  const animationOpacity = useRef( new Animated.Value( 0 ) ).current;

  const fadeIn = () => {
    Animated.timing( animationOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start( () => console.log( 'Animation ended' ) )
  }

  const fadeOut = () => {
    Animated.timing( animationOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start( () => console.log( 'Animation ended' ) )
  }

  return (
    <View style={ styles.container }>
      <Animated.View style={[
        styles.purpleBox,
        {
          opacity: animationOpacity
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
