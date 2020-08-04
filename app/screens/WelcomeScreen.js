import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import colors from '../config/colors'
import { AppButton } from '../components'

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
      blurRadius={2}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.redLogo}
          source={require('../assets/logo-red.png')}
        />
        <Text style={styles.welcomeText}> Sell what you don't need </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title='Login' />
        <AppButton title='Register' buttonColor='secondary' />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: 150,
    alignItems: 'center',
  },

  redLogo: {
    width: 100,
    height: 100,
  },

  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
})

export default WelcomeScreen
