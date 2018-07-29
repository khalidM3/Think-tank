import React, { Component } from 'react'
import { ScrollView, View, Text, Button } from 'react-native'
import { Card, Tile, List, ListItem, Button as Btn } from 'react-native-elements'
import SolutionTile from '../components/solution-tile'
import ProblemTile from '../components/problem-tile'
import {fetchSolutions, fetchUsers, fetchProblems} from '../fake-data'


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
    .then( solutions => this.setState({solutions, showView: 'solutions'}))
  }

  onPressSubProblems = () => {
    fetchProblems(10)
    .then( subProblems => this.setState({subProblems, showView: 'subproblems'}) )
  }

  onPressFollowers = () => {
    fetchUsers(10)
    .then( followers => this.setState({followers, showView: 'followers'}) )
  }

  onLearnMore = (problem) => 
    this.props.navigation.navigate('Problem', { ...problem })

  onReadMore = (solution) =>
    this.props.navigation.navigate('Solution', { ...solution })
  
  onUserDetails = (user) =>
    this.props.navigation.navigate('Details', { ...user })
    
  showSolutionForm = () =>
    this.props.navigation.navigate('SolutionForm')

  showProblemForm = () =>
    this.props.navigation.navigate('ProblemForm')

  render() {
    let { name, desc } = this.props.navigation.state.params
    let { solutions, followers, subProblems, showView } = this.state
    return (
      <ScrollView>
        <View style={{backgroundColor:'white', marginTop:0}}>
          <Text style={{alignSelf: 'center', padding:5, fontSize: 30, fontWeight:'bold'}}>
          {name} </Text>  
          <Text style={{color: 'dimgrey', padding:10}}>
          {desc} </Text>  
        </View>

        <View 
          style={{ flex:1,flexDirection:'row',justifyContent:'space-around',alignItems: 'center', backgroundColor:'white', padding:10, borderTopWidth:1, borderColor:'lightgrey'}}>
          <Button title="Solutions" onPress={this.onPressSolutions}/>
          <Button title="Sub Problems" onPress={this.onPressSubProblems}/>
          <Button title="Followers" onPress={this.onPressFollowers}/>
        </View>

        <View>
          <View style={{margin: 10}}>
          { showView == 'solutions'  ?  <Btn title="Post Solution" backgroundColor="dodgerblue" onPress={this.showSolutionForm}/> : undefined }
          { showView == 'subproblems'?  <Btn title="Post Sub Problem" backgroundColor="dodgerblue" onPress={this.showProblemForm}/> : undefined }
          { showView == 'followers'?  <Btn title="Follow" backgroundColor="dodgerblue" /> : undefined }
          </View>

          { showView !== 'solutions' ? undefined : solutions.map( solution =>
            <SolutionTile
              key={solution.id}
              solution={solution}
              onReadMore={() => this.onReadMore(solution)}
            /> )}

          { showView !== 'subproblems' ? undefined : subProblems.map( subProblem => (
              <ProblemTile
                key={subProblem.id}
                problem={subProblem}
                onLearnMore={() => this.onLearnMore(subProblem)}
              />
            ))}
        
            <List>
            { showView !== 'followers' ? undefined : followers.map( user => 
              <ListItem
                key={user.id}
                roundAvatar
                avatar={{ uri: user.avatar }}
                title={user.name}
                onPress={() => this.onUserDetails(user)}
              />
            )}
          </List>
        </View>


      </ScrollView>
    )
  }
}

export default Problem
