import { createContext } from 'react'
import { observable, action, observer} from 'mobx-react'
import { task } from 'mobx-task'

import {AsyncStorage} from 'react-native';

import {configure} from "mobx"
//configurWe({enforceActions: 'always'})
//configure({ enforceActions: "observed" })


class ConverterStore  {

  // @observable values = [
  //   {value: 100, curency: 'USD'}, 
  //   {value: 100, curency: 'USD'}, 
  //   {value: 100, curency: 'USD'}]

  // @action onValueChange = (value, index)=>{
  //     console.log(value, index)
  // }

  // @action onTextCange = (event)=>{
  //   console.log(event)
  // }
  

}

let converterStore = new ConverterStore();

//AsyncStorage.clear()

export default createContext (converterStore);