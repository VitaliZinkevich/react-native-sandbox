import React from 'react';
import { View, Text, Picker, StyleSheet, TextInput } from 'react-native'



const PickerValue = (props) =>  {
 
   return (
      <View style={styles.container}>

            <TextInput 
               style={styles.text} 
               // value={props.value}
               />

            <Picker  style={styles.select} 
                  // selectedValue = {props.value.curency} 
                  // onValueChange = {props.onValueChange( value, index )}
                  // onTextCange={props.onTextCange(value, index)}
                  >
            <Picker.Item label = "Steve" value = "steve" />
            <Picker.Item label = "Ellen" value = "ellen" />
            <Picker.Item label = "Maria" value = "maria" />
         </Picker>

      </View>
   )

}
export default PickerValue

const styles = StyleSheet.create({
   text:{
        flex: 2,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: 'blue'
    },
   select:{
        flex: 1.5,
    },
   container:{
       flex: 1,
       flexDirection: 'row',
       margin: 10
       

   },
})