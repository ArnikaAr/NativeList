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
  set(prop: string, value: any) {
    const newList = this.allItems;
    newList.push(value);
    this.allItems = newList;
  },
},
  {
    lists: observable,
    list: observable,
    allItems: observable,
    set: action,

  },
  { autoBind: true }
);

// makePersistable(
//   store,
//   {
//     storage: AsyncStorage,
//     name: 'ListStore',
//     properties: ['lists', 'list', 'items',]
//   }
// )

export default store;