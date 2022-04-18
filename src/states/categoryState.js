import { observable } from "mobx";
import { createContext } from "react";

class categoryStore {
  @observable categories = [];
  @observable products = [];
}

export const categoryStoreContext = createContext(new categoryStore());
