
import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Card, Button, Avatar } from 'react-native-elements'

class SolutionComment extends Component {

  render() {
    let {comment} = this.props
    return(
      <Card>
        <View 
          style={{ height: 50, width: '100%', flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'lightgrey'}}>
          <Avatar 
            small
            rounded
            activeOpacity={0.7}
            source={{uri: comment.owner.avatar}}
            onPress={() => this.props.onProfileInfo()}
          />
          <View>
            <Text> {comment.owner.name} </Text>
            <Text style={{color:'dimgrey'}}> {comment.owner.title} </Text>
          </View>
        </View>

        <Text style={{margin: 5}}>
          { comment.content}
        </Text>

        <View
          style={{ flex:1, flexDirection:'row',justifyContent:'flex-start',alignItems: 'center', backgroundColor:'white'}}>
          <Button  title="upvote"color="dodgerblue" buttonStyle={{borderRadius:3, borderWidth:1, backgroundColor:'white', padding:5, borderColor:'dodgerblue'}}/>
          <Button title="downvote" color="dodgerblue" buttonStyle={{borderRadius:3, borderWidth:1, backgroundColor:'white', padding:5, borderColor:'dodgerblue'}}/>
          <Button title="comment" color="dodgerblue" buttonStyle={{borderRadius:3, borderWidth:1, backgroundColor:'white', padding:5, borderColor:'dodgerblue'}}/>
         </View>
      </Card>
    )
  }
}

export default SolutionComment