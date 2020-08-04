import React from 'react'
import { Text, Image, View, TouchableHighlight } from 'react-native'

import AppText from '../AppText'
import colors from '../../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function Icon({
  iconName,
  backgroundColor = '#000',
  size = 40,
  iconColor = '#fff',
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MaterialCommunityIcons
        name={iconName}
        size={size * 0.5}
        color={iconColor}
      />
    </View>
  )
}

export default Icon
