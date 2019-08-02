import { createContext } from 'react'
import { observable, action, observer} from 'mobx'
import { task } from 'mobx-task'

import {AsyncStorage} from 'react-native';

import {configure} from "mobx"
//configure({enforceActions: 'always'})
//configure({ enforceActions: "observed" })


class NavigationStore  {

  @observable open = false

  @action sideBarOpen  = ()=>{
      this.open = !this.open;
  }
}

let navigationStore = new NavigationStore();

//AsyncStorage.clear()

export default navigationStore;