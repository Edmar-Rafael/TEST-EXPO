import React, { useEffect, useState } from "react";
import { Animated, TextInput, View } from "react-native";
import { InputStyles } from "./style";
import { Colors } from "../../utils";


function Input(rest) {
  const [isFocused, setIsFocused] = useState(false)
  const [animatedIsFocused] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: (isFocused || rest.value !== '') ? 1 : 0,
      duration: 300,
      useNativeDriver: false
    }).start()
  }, [isFocused])

  function handleAnimate(val1, val2) {
    return (
      animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [val1, val2],
        extrapolate: 'identity'
      })
    )
  }

  return (
    <Animated.View 
      style={{
        ...InputStyles.container,
        borderColor: handleAnimate(
          `${Colors.border.grey}`, isFocused ? `${Colors.aqua}` : `${Colors.border.grey}`
        ),
        shadowColor: handleAnimate(
          `${Colors.white}`, isFocused ? `${Colors.aqua}` : `${Colors.white}`
        ),
        elevation: handleAnimate(5, isFocused ? 9 : 5),
      }}
    >
      <TextInput 
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor={`${Colors.placeholder}`} 
        placeholder={isFocused ? rest.placeHolder || 'type here' : ''}
        style={InputStyles.input}
        ref={rest.inputRef}
        autoCorrect={false}
        autoCapitalize="none"
        {...rest}
      />

      <Animated.View 
        style={{
          ...InputStyles.textLabel,
          transform: [{translateY: handleAnimate(0, -22)}, {translateX: handleAnimate(0, -9)}],
        }}
      >
        <Animated.Text 
          style={{
            color: handleAnimate(`#ffffffbb`, `${Colors.aqua}`),
            fontSize: handleAnimate(16, 12),
            fontWeight: handleAnimate('400', '800')
          }}
        >
          {rest.label}
        </Animated.Text>
      </Animated.View>
    </Animated.View>
  )
}

export default Input