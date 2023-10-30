import { action, makeObservable, observable, } from "mobx";
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';



import { Item, List } from '../models';

const defaultState: {
  lists: List[],
  allItems: Item[]
} = {
  lists: [],
  allItems: []
}

const store = makeObservable({
  ...defaultState,
  setNewItem(value: Item) {
    if (!this.allItems.includes(value)) {
      this.allItems = [...this.allItems, value];
    } else {
      console.log('This element already exists')
    }
  },
  setNewList(value: List) {
    this.lists = [...this.lists, value];
  },
  removeItem(value: Item) {
    this.allItems = this.allItems.filter(item => item.id !== value)
  }
},
  {
    lists: observable,
    allItems: observable,
    setNewItem: action,
    removeItem: action

  },
  { autoBind: true }
);

makePersistable(
  store,
  {
    storage: AsyncStorage,
    name: 'ListStore',
    properties: ['lists', 'list', 'allItems',]
  }
)

export default store;