import { observable, makeObservable} from "mobx";
import { createContext } from "react";
import { makePersistable } from 'mobx-persist-store';

class cartStore {
  @observable products = [];
  constructor() {
    makeObservable(this);
    makePersistable(this, {name: 'cartStore', properties: ['products'], storage: window.localStorage})
  }
}

export const cartStoreContext = createContext(new cartStore());
