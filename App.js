import React, { Component } from 'react';
import { View, Button, Text, TextInput} from 'react-native';

export default class App extends Component {
  state = {
    teks : '',
    submitteks : '',
  }

  formsChange = (event) => {
    const { text } = event;
    let processedData = text;
    console.log(processedData);
    this.setState({
      teks : processedData
    })
    console.log("karakter = " + this.state.teks);
  }
                
  submitForms = () => {
    let data = this.state.teks;
    this.setState({
      submitteks : data.split('').reverse('').join('')
    })
  }

  render() {
    return(
      <View>
      <Text style={{fontSize:40}}>Program Membalikkan Kata</Text>
        <View style={{padding :  10}}>          
          <Text>Input :</Text>
          <View style={{marginBottom : 10}}>
            <TextInput
              style={{ borderColor: 'gray', borderWidth: 1, padding : 5 }}
              onChangeText={text => this.formsChange({ text })}
              value={this.state.teks}
            />
          </View>
          <View>
            <Button title='submit' onPress={()=> this.submitForms()}></Button>
          </View>
          
       </View>
        <View style={{ padding: 10, marginTop : 20 }}>
         <Text>Result :</Text>
          <View style={{ borderColor: 'gray', borderWidth: 1, height : 200, padding : 5 }}>
           <Text>{this.state.submitteks}</Text>
         </View>
       </View>
      </View>
        )
        }
}