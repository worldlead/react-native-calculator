import React from 'react'
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native'

interface ButtonProps {
  onPress: () => void,
  text: string,
  size?: string,
  theme?: string,
}

type Button = {
  backgroundColor: string,
  flex: number,
  height: number,
  alignItems: string,
  justifyContent: string,
  borderRadius: number,
  margin: number,
}

type ButtonDouble = {
  width: number,
  flex: number,
  alignItems: string,
  paddingLeft: number
}

type ButtonSecondary = {
  backgroundColor: string,
} 

type ButtonAccent = {
  backgroundColor: string,
}

const screen = Dimensions.get('window')
const buttonWidth = screen.width / 4

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 25
  },
  textSecondary: {
    color: '#060606'
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6"
  },
  buttonAccent: {
    backgroundColor: "#f09a36"
  }
})

export default ({ onPress, text, size, theme }: ButtonProps) => {
  const buttonStyles: ( Button | ButtonDouble | ButtonSecondary | ButtonAccent)[] = [styles.button]
  const textStyles: ({ color: string, fontSize: number} | { color: string })[] = [styles.text]

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble)
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary)
    textStyles.push(styles.textSecondary)
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent)
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  )
}

