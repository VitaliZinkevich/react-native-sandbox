/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import {observable} from 'mobx'

// const state = observable ({
//     action:[1, 2]
//   });
  

AppRegistry.registerComponent(appName, () => App);
