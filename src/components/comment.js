
import React, {Component} from 'react'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Avatar } from 'react-native-elements'

class SolutionComment extends Component {


  render() {
    let {comment} = this.props
    return(
      <Card
        >
         <View style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
            // justifyContent: 'space-between',
          }}>
              <Avatar 
                small
                rounded
                activeOpacity={0.7}
                source={{uri: comment.owner.avatar}}
                onPress={() => this.props.onProfileInfo()}
              />
            <View>
              <Text> @{comment.owner.name} </Text>
            </View>
            <View>
              {/* <Text> ... </Text> */}
            </View>
        </View>

        <Text style={{marginBottom: 10}}>
          { comment.content}
        </Text>
        <View style={{ 
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          }}>
          <Text> upvote </Text>  
          <Text> downvote </Text>  
          <Text> reply </Text>  
        </View>
      </Card>
    )
  }
}

export default SolutionComment