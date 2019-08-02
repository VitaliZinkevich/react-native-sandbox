import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Calculator from './src/Calculator';
import Converter from './src/Converter';

//import SideBar from './src/Layout/SideBar'

import SideBar from './src/Layout/SideBar'

const Routes = () => (
   <Router>
      <Scene key = "root">
         
         <Scene 
         key = "cacl" 
         component = {Calculator} 
         title = "Calculator"
         hideNavBar={true} />
         
         <Scene 
         key = "conv" 
         component = {Converter} 
         
         hideNavBar={true} />
         
         <Scene 
         key = "drawer" 
         component = {SideBar} 
         initial
         hideNavBar={true} />

      </Scene>
   </Router>
)
export default Routes