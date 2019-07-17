import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Calculator from './src/Calculator';
import Converter from './src/Converter';
    
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
         initial 
         hideNavBar={true} />

      </Scene>
   </Router>
)
export default Routes