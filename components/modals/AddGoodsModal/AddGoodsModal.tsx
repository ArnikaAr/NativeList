import React, { FC } from 'react';
import { StyleSheet, View, Modal, TouchableWithoutFeedback, Text } from 'react-native';
import { TextInput, IconButton, Button } from 'react-native-paper';
import { useFormik } from 'formik';

import { itemFormSchema } from '../schemas/index';
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
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      item: ''
    },
    validationSchema: itemFormSchema,
    onSubmit: (values: { item: string }) => {
      console.log(errors)
      addNewItem(values.item);
    },

  });
  return (
    <Modal visible={visible} onDismiss={hideModal} transparent={true} >
      <TouchableWithoutFeedback onPress={() => hideModal()}>
        <View style={styles.modalStyle}>
          <TouchableWithoutFeedback>
            <View style={styles.modalInner}>
              <View style={styles.modalHeaderStyles}>
                <Text>Add new item to list: </Text>
                <IconButton
                  icon="close"
                  size={20}
                  mode='contained'
                  onPress={() => hideModal()}
                />
              </View>
              <TextInput
                mode="outlined"
                label="Add item"
                style={{ width: '90%' }}
                value={values.item}
                onChangeText={handleChange('item')}
                onBlur={handleBlur('item')}
              />
              {
                errors ?
                  <View>
                    <Text style={styles.error}>{errors.item}</Text>
                  </View> : null
              }
              <Button
                style={{ width: '60%' }}
                mode="contained"
                onPress={handleSubmit}
              >
                <Text>Add Item</Text>
              </Button>
            </View>
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
  },
  error: {
    color: 'red'
  }
});