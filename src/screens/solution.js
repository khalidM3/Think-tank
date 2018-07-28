import React, { Component } from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { Card, Tile, List, ListItem, Avatar } from 'react-native-elements'
import SolutionTile from '../components/solution-tile'
import SolutionComment from '../components/comment'
import {fetchSolutionComments, fetchSolution, fetchProblems} from '../config/data/index'


class Solution extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      solution: {
       owner: {},
      },
    }
  }

  componentDidMount = () => {
    fetchSolution()
    .then( solution => {
      this.setState({solution, showSolution: true})
    })
    this.onPressComments()
  }

  onPressUpvote = () => {}

  onPressDownvote = () => {}

  onPressComments = () => {
    fetchSolutionComments(10)
    .then( comments => this.setState({comments, showComments: true}))
  }

  onProfileInfo = (user) => {
    this.props.navigation.navigate('Details', { ...user })
  };

  onLearnMore = (problem) => {
    this.props.navigation.navigate('Problem', { ...problem });
  }

  render() {
    let { title, content, owner, id } = this.props.navigation.state.params
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
              // justifyContent: 'space-between',
            }}>
                <Avatar 
                  small
                  rounded
                  activeOpacity={0.7}
                  source={{uri: solution.owner.avatar}}
                  onPress={() => this.onProfileInfo(solution.owner)}
                />
              <View>
                <Text> @{solution.owner.name} </Text>
              </View>
              <View>
              </View>
          </View>
          <Text style={{alignSelf: 'center', padding:5, fontSize: 20, fontWeight:'bold'}}>
           {title}
          </Text>  
          <Image 
            style={{width: '100%', height: 100}}
            source={{uri: solution.banner}} />
        
          <Text 
          style={{color: 'dimgrey', padding:10}}
          > {content} </Text>  
         <View style={{ 
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',

            }}>
            <Text> upvote </Text>  
            <Text> downvote </Text>  
            <Text> comments </Text>  
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
    );
  }
}

export default Solution;
