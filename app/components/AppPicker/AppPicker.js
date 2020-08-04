import React, { useState } from 'react'
import { View, Modal, TouchableWithoutFeedback, FlatList } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import colors from '../../config/colors'
import defaultStyles from '../../config/styles'
import { AppText, AppButton, Screen, PickerItem } from '../index'

function AppPicker({ icon, placeholder, items, onSelectedItem, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <AppButton title='Close' onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false)
                  onSelectedItem(item)
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  )
}

export default AppPicker
