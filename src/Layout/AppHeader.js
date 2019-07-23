import  React  from 'react';
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


  const AppHeader = () => {
    return (
      <Header>
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
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