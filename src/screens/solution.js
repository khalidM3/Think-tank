import React, { Component } from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { Avatar, Button } from 'react-native-elements'
import SolutionComment from '../components/comment'
import {fetchSolutionComments, fetchSolution} from '../fake-data'


class Solution extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      solution: {
        owner: {}
      },
    }
  }

  componentDidMount = () => {
    fetchSolution()
    .then( solution => this.setState({solution, showSolution: true}) )
    this.onPressComments()
  }

  onPressUpvote = () => {}

  onPressDownvote = () => {}

  onPressComments = () => {
    fetchSolutionComments(10)
    .then( comments => this.setState({comments, showComments: true}))
  }

  onProfileInfo = (user) => 
    this.props.navigation.navigate('Details', { ...user })

  onLearnMore = (problem) => 
    this.props.navigation.navigate('Problem', { ...problem })

  render() {
    let { title, content, banner} = this.props.navigation.state.params
    let { solution, comments } = this.state
    return (
      <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <View style={{
              height: 50,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: 'lightgrey',
            }}>
              <Avatar 
                small
                rounded
                activeOpacity={0.7}
                source={{uri: solution.owner.avatar}}
                onPress={() => this.onProfileInfo(solution.owner)}
              />
              <View>
                <Text> {solution.owner.name} </Text>
                <Text style={{color:'dimgrey'}}> {solution.owner.title} </Text>
              </View>
          </View>
          <Text style={{alignSelf: 'center', padding:5, fontSize: 20, fontWeight:'bold'}}>
           {title}
          </Text>  
          <Image 
            style={{width: '100%', height: 200}}
            source={{uri: banner}} />
        
          <Text style={{color: 'dimgrey', padding:10, maxHeight: 130}}>
              {content}
           </Text>  

          <View
            style={{ flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems: 'center', backgroundColor:'white'}}>
            <Button  title="upvote"color="dodgerblue" buttonStyle={{marginBottom:10, borderRadius:3, borderWidth:1, backgroundColor:'white', padding:5, borderColor:'dodgerblue'}}
               onPress={this.onPressUpvote}/>
            <Button title="downvote" color="dodgerblue" buttonStyle={{marginBottom:10, borderRadius:3, borderWidth:1, backgroundColor:'white', padding:5, borderColor:'dodgerblue'}}
              onPress={this.onPressDownvote}/>
            <Button title="comment" color="dodgerblue" buttonStyle={{marginBottom:10, borderRadius:3, borderWidth:1, backgroundColor:'white', padding:5, borderColor:'dodgerblue'}}
            onPress={this.onPressComments}/>
          </View>
        </View>

        <View>
          { comments.map(comment => 
          <SolutionComment 
            key={comment.id}
            comment={comment}
          />
        )}
        </View>

      </ScrollView>
    )
  }
}

export default Solution
