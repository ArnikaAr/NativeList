import React, { FC } from 'react';
import { StyleSheet, View,  Modal, TouchableWithoutFeedback, Text } from 'react-native';
import { TextInput, Button, } from 'react-native-paper';

export  interface IAddGoodsModal {
visible: boolean,
hideModal: any,
setText: any,
addNewItem: any,
}

const AddGoodsModal: FC<IAddGoodsModal> = ({
    visible, hideModal, setText, addNewItem,
}) => {    
return(
    <Modal visible={visible} onDismiss={hideModal} transparent={true} >
      <TouchableWithoutFeedback onPress={() => hideModal()}>
        <View style={styles.modalStyle}>
          <TouchableWithoutFeedback>
            <View style={styles.modalInner}>
                <Text>Add new item to list: </Text>
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
    },
});