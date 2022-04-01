import { observable } from "mobx";
import { createContext } from "react";

class categoryStore {
  @observable categories = [];
}

export const categoryContext = createContext(new categoryStore());
