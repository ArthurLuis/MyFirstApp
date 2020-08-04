import React, { useState } from 'react'
import { StyleSheet, FlatList, View, Image } from 'react-native'
import {
  Screen,
  ListItemSeparator,
  Card,
  AppTextInput,
  AppButton,
} from '../components'

import { Formik } from 'formik'

import colors from '../config/colors'

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='email'
              placeholder='email'
              keyboardType='email-address'
              onChangeText={handleChange('email')}
              textContentType='email-address'
            />
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              placeholder='password'
              onChangeText={handleChange('password')}
              textContentType='password'
              secureTextEntry
            />
            <AppButton title='Login' onPress={onSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
})

export default LoginScreen
