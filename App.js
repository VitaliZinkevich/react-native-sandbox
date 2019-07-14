import React, { useContext } from 'react';
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

import appStore from './mobx/store'

import {
  StyleSheet,
} from 'react-native';

import { observer } from "mobx-react"

import AppFooter from './src/Layout/AppFooter'
import AppHeader from './src/Layout/AppHeader'
import History from './src/CalcApp/History';

let rows = [0,1,2,3,4];

  
let buttons = ["C","<-","MC","MR",
"1","2","3","+",
"4","5","6","-",
"7","8","9","*",
".","0","+/-","="];


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
  const App = observer (()=>{

  const store = useContext(appStore);
  
  let buttonsCopy = [...buttons];

  let prepButtons = (row)=>{
    let result = [];
    for (let i = 0; i <= 3; i++) {
      result.push(<Button 
                      rounded
                      large
                      key={buttonsCopy[i]}
                      style={styles.button}
                      info 
                      onPress={()=>{
                        store.addOperation(row, i)}}>
                    <Text style={styles.textButton}>{buttonsCopy[i]}</Text>
                  </Button>);
    }
    buttonsCopy.splice (0,4);
    return result;
  }
  let rowsView = rows.map((row, index)=>{
    return  <View key={row+row+""} style={styles.row}>  
              {prepButtons(row)}
            </View>
  });

  return (
      <Container>
      <AppHeader></AppHeader>

      {store.currentScren === 'calc' ? (<Content contentContainerStyle={styles.container}>
      <View style={styles.actionView}>
        <Text style={{fontSize: 15, /*fontWeight: 400*/}}>
          {store.action}
        </Text>
        <Text style={{fontSize: 15, color: 'red'}}>
          {store.answer}
        </Text>
      </View>
      <Text>
        {/* kanye west quote:{store.quote.quote}  */}
        {JSON.stringify (store)}
      </Text>
      <View style={styles.buttonsView}>
        {rowsView}
      </View>
      </Content>) : (<Content contentContainerStyle={styles.container}>
        <History></History>
      </Content>)}
      
      <AppFooter></AppFooter>

      

      </Container>
   
   );
});

export default App;