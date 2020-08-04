import React, { useState } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { ListItem, Screen, ListItemSeparator, Icon } from '../components'
import colors from '../config/colors'

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      iconName: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      iconName: 'email',
      backgroundColor: colors.secondary,
    },
  },
]

function MyAccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Arthur Luis'
          subTitle='alfa@cin.ufpe.br'
          image={require('../assets/arthur.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  iconName={item.icon.iconName}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.logOutContainer}>
        <ListItem
          title='Log Out'
          IconComponent={
            <Icon iconName='logout' backgroundColor={colors.yellow} />
          }
        />
      </View>
    </Screen>
  )
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  logOutContainer: {
    backgroundColor: colors.white,
  },
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
})

export default MyAccountScreen
