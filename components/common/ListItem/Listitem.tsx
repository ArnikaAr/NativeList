import React, { FC, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { List, IconButton } from 'react-native-paper';
import DeleteModal from '../../modals/DeleteModal/DeleteModal';
import store from '../../../src/store';
import { observer } from 'mobx-react-lite';
import { List as ListItemType } from '../../../src/models';
import ChangeListModal from '../../modals/ChangeListModal/ChangeListModal';
import { Link } from 'expo-router';

export interface IListItem {
    id: number,
    item: ListItemType,
}

const ListItem: FC<IListItem> = ({
    id, item
}) => {
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [visibleChangeModal, setVisibleChangeModal] = useState(false);
    const showChangeModal = () => setVisibleChangeModal(true);
    const hideChangeModal = () => setVisibleChangeModal(false);


    return (
        <View style={styles.list} key={item.id}>
            <Link href={`/list/${item.id}`} asChild>
                <Pressable>
                    <List.Item
                        title={item.listName}
                        description={item.listDetails || ' '}
                        left={props => <List.Icon {...props} icon="format-list-bulleted" />}
                        right={props => <>
                            <IconButton
                                icon="circle-edit-outline"
                                onPress={() => showChangeModal()}
                            />
                            <IconButton
                                icon="delete"
                                onPress={() => showModal()}
                            />
                        </>}
                        style={styles.listItem}
                    />
                </Pressable>
            </Link>
            <ChangeListModal visible={visibleChangeModal} hideModal={hideChangeModal} item={item} />
            <DeleteModal visible={visible} hideModal={hideModal} modalHandler={() => { store.removeListItem(item) }} />
        </View>
    );
};

export default observer(ListItem);
const styles = StyleSheet.create({
    list: {
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