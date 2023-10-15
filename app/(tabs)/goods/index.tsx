import { StyleSheet, View, Text, LayoutChangeEvent, Modal } from 'react-native';
import { Stack } from "expo-router";
import store from '../../../src/store/index'
import { Button, Portal, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';

const GoodsView = observer(() => {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const addNewItem = () => {
    if (text) {
      store.setNewItem(text);
    } else console.log('no text');
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: "Goods" }} />
      <Portal>
        <Modal visible={visible} onDismiss={hideModal}>
        <TextInput
          mode="outlined"
          label="Outlined input"
          placeholder="Type something"
          onChangeText={newText => setText(newText)}
        />
        <Button
          onPress={addNewItem}
          mode="contained">
          Add Item
        </Button>
        </Modal>
      </Portal>
      <View>
        {
          store.allItems.map((item, id) => <Text key={id}>{item}</Text>)
        }
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-around',
    width: '100%',
    margin: 10
  },
  modalStyle: {

  }
});
export default GoodsView;