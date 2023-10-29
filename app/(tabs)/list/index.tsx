import { StyleSheet, View, Text } from 'react-native';
import { List, IconButton } from 'react-native-paper';
import { Stack } from "expo-router";
import React, { useState } from 'react';
import AddListItemModel from '../../../components/modals/AddListItemModal/AddListItemModal';
import store from '../../../src/store/index'

export default function ListView() {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        headerShown: true, title: "List", headerRight: () => (
          <IconButton
            icon="plus"
            size={20}
            onPress={() => showModal()}
          />
        ),
      }} />
      {store.lists.length ?
        <View style={styles.listContainer}>
          {
            store.lists.map((item, id) => (
              <View key={id}>
                <List.Item
                  title={item.listName}
                  description={item.listDetails || ' '}
                  left={props => <List.Icon {...props} icon="format-list-bulleted" />}
                  style = {styles.listItem}
                />
              </View>))
          }
        </View> :
        <View style={styles.emptyTextStyles}>
          <Text>The list of products is still empty </Text>
        </View>}
      <AddListItemModel visible={visible}
        hideModal={hideModal}></AddListItemModel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTextStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    borderTopWidth: 1,
    borderColor: '#6b4faa',
    height: '100%',
    width: '100%',
  },
  listItem: {
    backgroundColor: '#f4edf9',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#6b4faa',
    display: 'flex',
    alignItems: 'flex-start'
  }
});
