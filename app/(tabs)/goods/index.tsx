import { StyleSheet, View } from 'react-native';
import { Stack } from "expo-router";
import store from '../../../src/store/index'
import { Chip, IconButton } from 'react-native-paper';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import AddGoodsModal from '../../../components/AddGoodsModal/AddGoodsModal';

const GoodsView = observer(() => {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

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
      <AddGoodsModal visible={visible}
        hideModal={hideModal}
        setText={setText}
        addNewItem={addNewItem}
      />
      <View style={styles.chipsStyles}>
        {
          store.allItems.map((item, id) => (<View key={id} style={styles.chipStyles}><Chip>{item}</Chip></View>))
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