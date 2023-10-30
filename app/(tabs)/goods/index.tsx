import { StyleSheet, View } from 'react-native';
import { Stack } from "expo-router";
import store from '../../../src/store/index'
import { Chip, IconButton, Text } from 'react-native-paper';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import AddGoodsModal from '../../../components/modals/AddGoodsModal/AddGoodsModal';
import { useTranslation } from 'react-i18next';

const GoodsView = observer(() => {
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const removeItem = (item: string): void => {
    store.removeListItem(item)
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true, title: t("Goods"), headerRight: () => (
            <IconButton
              icon="plus"
              size={20}
              onPress={() => showModal()}
            />
          ),
        }}
      />
      <AddGoodsModal
        visible={visible}
        hideModal={hideModal}
      />
      {store.allItems.length ?
        <View style={styles.chipsStyles}>
          {
            store.allItems.map((item) => (
              <View key={item.id} style={styles.chipStyles}>
                <Chip closeIcon="close" onClose={() => removeItem(item.id)}>{item.name}</Chip>
              </View>))
          }
        </View> :
        <View style={styles.emptyTextStyles}>
          <Text>The list of products is still empty </Text>
        </View>}
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
  },
  emptyTextStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default GoodsView;