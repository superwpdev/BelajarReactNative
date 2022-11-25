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
   //Button,
   Alert,
 } from 'react-native';
 import { 
  Button,
  Header
 } from '@rneui/themed';
 import { 
  SafeAreaProvider  
 } from 'react-native-safe-area-context';
 import { 
  LinearGradient
 } from 'react-native-linear-gradient';
 
 const App = () => {
   const [text, setText] = useState('');
   const HeaderText = "PEMBALIK KATA";

   return (
    <View style={styles.container}>
    <Text style={{fontSize: 35, textAlign: 'center',color: '#782f40'}}>
       {HeaderText}
     </Text>
     <TextInput
       style={{height: 40, backgroundColor: '#f0f0f0'}}
       placeholder="Ketik disini Untuk Membalik Kata"
       onChangeText={newText => setText(newText)}
       defaultValue={text}
     />
     <Button
     title="Pencet Untuk Membalik Kata"
     color="#782f40"
     type='outline'
     onPress={() => Alert.alert(text.split('').reverse('').join(''))} />
   </View>
   );
 };
 const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

 export default App;
