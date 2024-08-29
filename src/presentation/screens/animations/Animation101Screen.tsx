// React
import { useContext } from 'react';
// React Native
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
// Components
import { CustomView } from '../../components';
// Context
import { ThemeContext } from '../../context';
// Custom Hook
import { useAnimation } from '../../hooks';


export const Animation101Screen = () => {
  const { colors } = useContext( ThemeContext );
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition
  } = useAnimation();

  return (
    <CustomView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
      <Animated.View style={[
        {
          backgroundColor: colors.primary,
          opacity: animatedOpacity,
          width: 150,
          height: 150,
          transform: [{
            translateY: animatedTop
          }]
        }
      ]} />

      <Pressable
        style={{ marginTop: 10 }}
        onPress={ () => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.elastic( 1 ) ,
            duration: 750
          });
        }}
      >
        <Text style={{ color: colors.text }}>FadeIn</Text>
      </Pressable>

      <Pressable
        style={{ marginTop: 10 }}
        onPress={ () => fadeOut({}) }
      >
        <Text style={{ color: colors.text }}>FadeOut</Text>
      </Pressable>
    </CustomView>
  );
}
