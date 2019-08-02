import React, { Component , useContext } from 'react';
import { Drawer } from 'native-base';
import {default as DrawerNative} from 'react-native-drawer';
import AppSidebar from '../Layout/AppSidebar';
import {
  View,
  Title,
  Container,
  Header,
  Content,
  Button,
  Text,
  Left,
  Icon,
  Right,
  Body
} from 'native-base';

import   {TouchableOpacity} from 'react-native'

import Converter from './../Converter';

import { observer } from "mobx-react"
import navigationStore from '../../mobx/navagionStore'



@observer
export default class SideBar extends Component { 
  
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render () {
    console.log('sidebar')
    console.log(navigationStore)
    
  //  const navigationS = useContext(navigationStore);

    const drawerStyles = {
      drawer: { shadowOpacity: 0.8, shadowRadius: 3},
      main: {paddingLeft: 3},
    }
    return (

        
        <Drawer
          type="static"
          content={<AppSidebar />}
          openDrawerOffset={100}
          styles={drawerStyles}
          tweenHandler={DrawerNative.tweenPresets.parallax}
          open ={false}
          // navigationS.open
          >


            <Converter />


        </Drawer>

  
      
      // <Drawer
      //   ref={(ref) => this._drawer = ref}
      //   content={<AppSidebar />}
      //   open ={false}
      //   >
      //   <Converter />
      // </Drawer>
    )
  }
}



// export default class DrawerExample extends Component {
  

  
//   closeDrawer = function ()  {
//     this.drawer._root.close()
//   };


//   openDrawer = function () { 
//     this.drawer._root.open() 
//   };

// render() {
//   console.log (this.drawer);
//     return ( 
//       <View>
//       < Drawer 
          
//           ref = {this.drawer}
//           content = {
//             < AppSidebar 
//               navigator = {
//               this.navigator
//               }
//             />} 
            
//             onClose={() => this.closeDrawer()} > 
//         </Drawer>
//         <Text>YoYO</Text>
//       </View>
//      ); } 
// }