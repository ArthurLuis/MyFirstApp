import React from 'react'
import { View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import colors from '../../config/colors'
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler'

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={'#802929'}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name='trash-can'
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableHighlight>
  )
}

export default ListItemDeleteAction
