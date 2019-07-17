import React, {useContext} from 'react'
import { observer } from "mobx-react"
import Picker from 'react-native'
import PickerValue from './PickerValue'


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

import AppHeader from './Layout/AppHeader'

import converterStore from '../mobx/converterStore'


const Converter = () => {

    // const {values, /*onValueChange, onTextCange*/} = useContext(converterStore);

    let inputCount = [0, 1, 2];
    let inputs = inputCount.map(inputNumber => (
        <PickerValue
            key={inputNumber}
            //value = {values[inputNumber]}
            index={inputNumber}
            // onValueChange={onValueChange}
            // onTextCange={onTextCange}
        ></PickerValue>
    ));


    return (
        <Container>
        <AppHeader></AppHeader>
        
        <Content>
            {inputs}
        </Content>
        
        </Container>
    )
}

export default Converter
