import { action, makeObservable, observable, } from "mobx";
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';



import { List } from '../models';

const defaultState: {
  lists: List[],
  list: List,
  allItems: string[]
} = {
  list: {
    id: '',
    name: '',
    description: '',
    items: []
  },
  lists: [],
  allItems: []
}

const store = makeObservable({
  ...defaultState,
  setNewItem(value: string) {
    if (!this.allItems.includes(value)) {
      this.allItems = [...this.allItems, value];
    } else {
      console.log('This element already exists')
    }
  },
  removeListItem(value: string){
    this.allItems = this.allItems.filter(item => item !== value)
  }
},
  {
    lists: observable,
    list: observable,
    allItems: observable,
    setNewItem: action,
    removeListItem: action

  },
  { autoBind: true }
);

// makePersistable(
//   store,
//   {
//     storage: AsyncStorage,
//     name: 'ListStore',
//     properties: ['lists', 'list', 'allItems',]
//   }
// )

export default store;