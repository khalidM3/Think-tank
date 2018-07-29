import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'



class ProblemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
    <View style={{backgroundColor: 'white', height:'100%', paddingTop: 10}}>
      <FormLabel> Problem title </FormLabel>
      <FormInput onChangeText={(text) => this.setState({title: text})}/>
      
      <View style={{ borderColor:'grey', borderBottomWidth:1, margin:20, padding:10, minHeight:200}}>
        <Text style={{fontWeight:'bold', color: 'grey'}}>
         Problem description </Text>
        <TextInput multiline={true}/>
      </View>
      
      <View style={{margin: 20}}>
        <Button title="submit" backgroundColor="dodgerblue"/>
      </View>
    </View>
    )
  }
}

export default ProblemForm
