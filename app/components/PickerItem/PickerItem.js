import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import colors from '../../config/colors'

import AppText from '../AppText'

import styles from './styles'

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}> {label} </AppText>
    </TouchableOpacity>
  )
}

export default PickerItem
