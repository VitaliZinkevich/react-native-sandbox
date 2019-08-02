import  React, { useContext }  from 'react';
import {Actions} from 'react-native-router-flux';
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
  import navigationStore from '../../mobx/navagionStore'

  // let store =navigationStore;

  const AppHeader = () => {
    
    console.log(navigationStore)

    return (
      <Header>
      <Left>
        <TouchableOpacity
          onPress={navigationS.sideBarOpen()}
        >
          <Icon name='menu' />
        </TouchableOpacity>
      </Left>
      <Body>
        <Title>CalcApp</Title>
        <Button 
          
          onPress={Actions.cacl}>
          <Text>to calc</Text>
        </Button>
      </Body>
      <Right />
    </Header>
    );
  }

  // Actions

  export default AppHeader