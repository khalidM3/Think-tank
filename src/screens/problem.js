import React, { Component } from 'react'
import { ScrollView, View, Text, FlatList } from 'react-native'
import { Card, Tile, List, ListItem } from 'react-native-elements'
import SolutionTile from '../components/solution-tile'
import {fetchSolutions, fetchUsers, fetchProblems} from '../config/data/index'


class Problem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      solutions: [],
      followers: [],
      subProblems: [],
    }
  }

  componentDidMount = () => {
    this.onPressSolutions()
  }

  onPressSolutions = () => {
    fetchSolutions(10)
    .then( solutions => this.setState({solutions, showSolutions: true}))
  }

  onPressSubProblems = () => {
    console.log('FEtched followers ====> \n')
    fetchProblems(10)
    .then( subProblems => this.setState({subProblems, showSubProblem: true}) )
  }

  onPressFollowers = () => {
    console.log('FEtched followers ====> \n')
    fetchUsers(10)
    .then( followers => this.setState({followers, showFollowers: true}) )
  }

  onLearnMore = (problem) => {
    this.props.navigation.navigate('Problem', { ...problem });
  }
  onReadMore = (solution) => {
    this.props.navigation.navigate('Solution', { ...solution });
  }

  render() {
    let { name, desc } = this.props.navigation.state.params
    let { solutions, followers, subProblems } = this.state
    return (
      <ScrollView>
        <View>
          <Text 
          style={{alignSelf: 'center', padding:5, fontSize: 30, fontWeight:'bold'}}>
           {name} </Text>  
          <Text 
          style={{color: 'dimgrey', padding:10}}
          > {desc} </Text>  
        </View>
        <View style={{ 
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          }}>
          <Text> Solutions </Text>  
          <Text> Sub Problems </Text>  
          <Text> Followers </Text>  
        </View>

        <View>


        { solutions.map( solution =>  
          <SolutionTile
            key={solution.id}
            solution={solution}
            onReadMore={() => this.onReadMore(solution)}
          /> )}

        <List>
          {subProblems.map( subProblem => (
            <ListItem
              key={subProblem.id}
              title={subProblem.name}
              subtitle={subProblem.desc}
              onPress={() => this.onLearnMore(subProblem)}
            />
          ))}
        </List>

        <List>
        { followers.map( user => 
          <ListItem
            key={user.id}
            roundAvatar
            avatar={{ uri: user.avatar }}
            title={user.name}
            // subtitle={user.email}
            onPress={() => this.onLearnMore(user)}
          />
        )}
        </List>

        </View>


      </ScrollView>
    );
  }
}

export default Problem;
