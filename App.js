/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  TextInput,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  return (
    <View style={{padding: 10}}>
    <TextInput
      style={{height: 40, backgroundColor: '#f0f0f0'}}
      placeholder="Type here to translate!"
      onChangeText={newText => setText(newText)}
      defaultValue={text}
    />
    <TextInput
      style={{marginTop:10, height: 40, backgroundColor: '#f0f0f0'}}
      placeholder="Type here to translate!"
      onChangeText={newText => setText(newText)}
      defaultValue={text}
    />
    <Text style={{padding: 10, fontSize: 42}}>
      {text.split(' ').map((word) => word && '🍕').join(' ')}
    </Text>
  </View>
  );
};

export default App;
