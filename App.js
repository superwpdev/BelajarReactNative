/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import {
   StyleSheet,
   TextInput,
   Text,
   View,
   Button,
   Alert,
 } from 'react-native';
 
 
 const App = () => {
   const [text, setText] = useState('');
   const HeaderText = "PEMBALIK KATA";
   const Footer = "Copyright By Kelompok 3"

   return (
     <View style={styles.container}>
    <Text style={{fontSize: 35, textAlign: 'center',color: '#322715',fontFamily: 'arial black', marginBottom: 10}}>
       {HeaderText}
     </Text>
     <TextInput
       style={{height: 40, backgroundColor: '#e0e1dc',marginBottom: 10}}
       placeholder="Masukkan Kata"
       onChangeText={newText => setText(newText)}
       defaultValue={text}
     />
     <Button
     title="Press Me"
     color="#063970"
     onPress={() => Alert.alert(text.split('').reverse('').join(''))} />
     <Text style={{fontSize: 18, textAlign: 'center',color: '#322715',fontFamily: 'arial black',marginTop:360}}>
       {Footer}
     </Text>
   </View>
   
   );
   
 };
 const styles = StyleSheet.create({
  container: {
    paddingTop: 220,
    padding: 20,
    backgroundColor: '#edba91',
    
  },
  
  
});

 export default App;
