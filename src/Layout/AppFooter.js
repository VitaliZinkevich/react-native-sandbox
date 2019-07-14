import React from 'react'
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

// import {StyleSheet} from 'react-native'

//   const styles = StyleSheet.create({
//     footer: {
//       backgroundColor: 'red'
//     },
//   });
  
const AppFooter = () => {
    return (
      <Footer >
      <FooterTab style={{backgroundColor	:'#CCFFFF'}}>
        <Button vertical>
          <Text style={{color	:'black'}}>Calculator</Text>
        </Button>
        <Button vertical>
          <Text style={{color	:'black'}}>History</Text>
        </Button>
      </FooterTab>
    </Footer>
    )
}

export default AppFooter
