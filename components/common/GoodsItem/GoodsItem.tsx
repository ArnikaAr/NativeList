import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DeleteModal from '../../modals/DeleteModal/DeleteModal';
import { Chip } from 'react-native-paper';
import store from '../../../src/store/index'
import { Item } from '../../../src/models';
import { observer } from 'mobx-react-lite';
export interface IGoodsItem {
    item: Item, 
}

const GoodsItem: FC<IGoodsItem> = ({
    item, 
}) => {

    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const removeItem = (item: Item): void => {
        store.removeItem(item)
    }
    return (
        <View key={item.id} style={styles.chipStyles}>
            <Chip closeIcon="close" onClose={() => showModal()}>{item.name}</Chip>
            <DeleteModal visible={visible} hideModal={hideModal} modalHandler={() => removeItem(item)} />
        </View>
    );
};

export default observer(GoodsItem);
const styles = StyleSheet.create({
    chipStyles: {
        margin: 5
    },
});