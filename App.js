import React from 'react';
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

import {
  StyleSheet,
} from 'react-native';

import { observer } from "mobx-react"
import appStore from './mobx/store'

let rows = [0,1,2,3,4];
let buttons = ["C","<-","MC","MR",
                "1","2","3","+",
                "4","5","6","-",
                "7","8","9","*",
                ".","0","+/-","="];

 import AppFooter from './src/Layout/AppFooter'
 import AppHeader from './src/Layout/AppHeader'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    alignContent: 'center', 
    alignItems: 'center' 
  },
  footer:{
    flex: 0
  },
  actionView: {
    flex: 0.2,
    backgroundColor: '#add8e6'
  },
  buttonsView:{
    flex: 1,
    justifyContent:'space-around'
  },
  textButton: {
      width: 70,
      height: 70,
      textAlign: 'center',
      alignContent: 'center',
      textAlignVertical :'center' 
  }
});

let prepButtons = (row)=>{
  let result = [];
  for (let i = 0; i <= 3; i++) {
    result.push(<Button 
                    rounded
                    large
                    key={buttons[i]}
                    style={styles.button}
                    info 
                    onPress={()=>{
                      appStore.addOperation(row, i)}}>
                  <Text style={styles.textButton}>{buttons[i]}</Text>
                </Button>);
  }
  buttons.splice (0,4);
  return result;
}
let rowsView = rows.map((row, index)=>{
  return  <View key={row+row+""} style={styles.row}>  
            {prepButtons(row)}
          </View>
});

 const App = observer (()=>{
       
  return (
    <Container>

      <AppHeader></AppHeader>
     
      <Content contentContainerStyle={styles.container}>
      
      <View style={styles.actionView}>
        <Text style={{fontSize: 15, /*fontWeight: 400*/}}>
          {appStore.action}
        </Text>
        <Text style={{fontSize: 15, color: 'red'}}>
          {appStore.answer}
        </Text>
      </View>
      <Text>
      kanye west quote:{appStore.quote.quote} 
      </Text>
      <View style={styles.buttonsView}>
        {rowsView}
      </View>

      <AppFooter></AppFooter>
      </Content>

    </Container>
  );
});

export default App;