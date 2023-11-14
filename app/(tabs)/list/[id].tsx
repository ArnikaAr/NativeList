import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import store from '../../../src/store';
import { Item, List } from '../../../src/models';
import { IconButton } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import DropDownPicker from 'react-native-dropdown-picker';
import ItemBlock from '../../../components/common/ItemBlock/ItemBlock';
import { observer } from 'mobx-react-lite';

export interface IDropPickerItem {
    value: string,
    label: string,
}

function ListDetailsView() {
    const { t } = useTranslation();

    const { id } = useLocalSearchParams<{ id: string }>();
    const listItem = store.lists.find((item: List) => item.id === id);
    const [open, setOpen] = useState(false);
    const [values, setValue] = useState([]);
    const [items, setItems] = useState<IDropPickerItem[]>([]);
   

    useEffect(() => {
        let arr: IDropPickerItem[] = store.allItems.map((el) => {
            const obj: IDropPickerItem = { value: el.id, label: el.name };
            return obj;
        }
        )
        setItems(arr);
    },[id,store.allItems]);
   
    return (

        <View style={styles.container}>

            <Stack.Screen options={{
                headerShown: true, title: t("ListDetails"), headerRight: () => (
                    <IconButton
                        icon="plus"
                        size={20}
                    // onPress={() => showModal()}
                    />
                ),
            }} />


            <ItemBlock item={listItem} />
            <DropDownPicker
                itemKey='value'
                open={open}
                value={values}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}

                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
                multiple={true}
                mode="BADGE"
                showBadgeDot={false}
                badgeColors={['#eaddff']}
            />
        </View>
    );
}

export default observer(ListDetailsView);

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    dropdownContainer: {
        marginTop: 5,
        alignSelf: 'center',
    },
    dropdown: {
        borderColor: '#d0d0d0',
        borderWidth: 2
    }
});
