import  React  from 'react';
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
      </Body>
      <Right />
    </Header>
    );
  }

  export default AppHeader