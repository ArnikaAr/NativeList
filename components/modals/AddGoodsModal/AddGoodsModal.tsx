import React, { FC } from 'react';
import { StyleSheet, View, Modal, TouchableWithoutFeedback, Text } from 'react-native';
import { TextInput, Button, IconButton } from 'react-native-paper';
import { Formik } from 'formik';

import store from '../../../src/store/index';

export interface IAddGoodsModal {
  visible: boolean,
  hideModal: any
}

const AddGoodsModal: FC<IAddGoodsModal> = ({
  visible, hideModal,
}) => {
  const addNewItem = (value: string): void => {
    if (value) {
      store.setNewItem(value);
    } else console.log('no text');

    hideModal();
  }
  return (
    <Modal visible={visible} onDismiss={hideModal} transparent={true} >
      <TouchableWithoutFeedback onPress={() => hideModal()}>
        <View style={styles.modalStyle}>
          <TouchableWithoutFeedback>
            <Formik
              initialValues={{ item: '' }}
              onSubmit={value => addNewItem(value.item)}
            >
              {({ handleSubmit, values }) => (
                <View style={styles.modalInner}>
                  <View style={styles.modalHeaderStyles}>
                    <Text>Add new item to list: </Text>
                    <IconButton
                      icon="close"
                      size={20}
                      mode='contained'
                      onPress={() => hideModal()}
                      style={styles.closeRightStyles}
                    />
                  </View>
                  <TextInput
                    mode="outlined"
                    label="Add item"
                    style={{ width: '90%' }}
                    value={values.item}
                  />
                  <Button
                    mode="contained"
                    style={{ width: '60%' }}
                    onPress={() => handleSubmit()}
                  >
                    Add Item
                  </Button>
                </View>
              )
              }
            </Formik>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AddGoodsModal;
const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalInner: {
    height: 250,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  closeRightStyles: {
    alignSelf: 'flex-end'
  },
  modalHeaderStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  }
});