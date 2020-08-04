import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import colors from '../../config/colors'

import styles from './styles'

function AppButton({ title, onPress, buttonColor = 'primary' }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[buttonColor] }]}
      onPress={onPress}
    >
      <Text style={styles.title}> {title} </Text>
    </TouchableOpacity>
  )
}

export default AppButton
