import React, {useContext} from 'react'
import appStore from '../../mobx/store'
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
    Body,
    Footer,
    FooterTab
  } from 'native-base';

  
const AppFooter = () => {
  let { changeCurrentScren } = useContext(appStore);
    return (
      <Footer >
      <FooterTab style={{backgroundColor	:'#CCFFFF'}} >
        <Button vertical onPress={()=>{changeCurrentScren('calc')}}>
          <Text style={{color	:'black'}}>Calculator</Text>
        </Button>
        <Button vertical onPress={()=>{changeCurrentScren('hist')}}>
          <Text style={{color	:'black'}}>History</Text>
        </Button>
      </FooterTab>
    </Footer>
    )
}

export default AppFooter
