import React from 'react'
import styles from './styles'
import { SafeAreaView } from 'react-native'

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
}

export default Screen
