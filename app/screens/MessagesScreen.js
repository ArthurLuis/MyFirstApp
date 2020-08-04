import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import {
  ListItem,
  Screen,
  ListItemSeparator,
  ListItemDeleteAction,
} from '../components'

const initialMessages = [
  {
    id: 1,
    title: 'Arthur Luis',
    description: 'Olá',
    image: require('../assets/arthur.jpg'),
  },
  {
    id: 2,
    title: 'Mosh',
    description: 'Boa tarde!',
    image: require('../assets/mosh.jpg'),
  },
]

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message) => {
    //delete the message from messages
    setMessages(messages.filter((msg) => msg.id !== message.id))
  }
  //call the server

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('OI GERARDO', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: 'Arthur Luis',
              description: 'Vamo jogar?',
              image: require('../assets/arthur.jpg'),
            },
            {
              id: 2,
              title: 'Mosh',
              description: 'Já ouviu falar da iniciativa...',
              image: require('../assets/mosh.jpg'),
            },
          ])
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})

export default MessagesScreen
