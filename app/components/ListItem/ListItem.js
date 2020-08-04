import React from 'react'
import { Text, Image, View, TouchableHighlight } from 'react-native'

import styles from './styles'
import AppText from '../AppText'
import colors from '../../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable'

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}> {title} </AppText>
            {subTitle && (
              <AppText style={styles.subTitle}> {subTitle} </AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

export default ListItem
