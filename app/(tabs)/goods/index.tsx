import { StyleSheet, View, Text, Modal, TouchableWithoutFeedback } from 'react-native';
import { Stack } from "expo-router";
import store from '../../../src/store/index'
import { Button, Chip, IconButton, Portal, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';

const GoodsView = observer(() => {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20, alignSelf: "center" };

  const addNewItem = () => {
    if (text) {
      store.setNewItem(text);
    } else console.log('no text');
    hideModal();
  }
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true, title: "Goods", headerRight: () => (
            <IconButton
              icon="plus"
              size={20}
              onPress={() => showModal()}
            />
          ),
        }}
      />
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} transparent={true} >
          <TouchableWithoutFeedback onPress={() => hideModal()}>
            <View style={styles.modalStyle}>
              <TouchableWithoutFeedback>
                <View style={styles.modalInner}>
                  <TextInput
                    mode="outlined"
                    label="Add item"
                    style={{width: '80%'}}
                    onChangeText={newText => setText(newText)}
                  />
                  <Button
                    onPress={addNewItem}
                    mode="contained"
                    style={{width: '60%'}}
                    >
                    Add Item
                  </Button>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </Portal>
      <View style={styles.chipsStyles}>
        {
          store.allItems.map((item, id) => (<View style={styles.chipStyles}><Chip key={id}>{item}</Chip></View>))
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    margin: 10
  },
  modalStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalInner: {
    height: 220,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  chipsStyles: {
    flex: 1,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '95%',
  },
  chipStyles: {
    margin: 5
  }
});
export default GoodsView;