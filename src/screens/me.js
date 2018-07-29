import React, { Component } from 'react'
import { ScrollView, Text, View, Button } from 'react-native'
import { Tile, List, ListItem} from 'react-native-elements'
import SolutionTile from '../components/solution-tile'
import ProblemTile from '../components/problem-tile'
import {fetchMe, fetchSolutions, fetchProblems} from '../config/data/index'

class UserDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: {},
      solutions:[],
      problems: [],
    }
  }

  componentDidMount = () => {
    fetchMe()
    .then( profile => this.setState({profile}))
    this.onPressSolutions()
  }


  onPressSolutions = () => {
    fetchSolutions(20)
    .then( solutions => this.setState({solutions, showView:'solutions'}))
  }

  onPressFollowing = () => {
    fetchProblems(20)
    .then( problems => this.setState({problems, showView:'following'}))
  }

  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  }

  onLearnMore = (problem) => {
    this.props.navigation.navigate('Problem', { ...problem })
  }
  onReadMore = (solution) => {
    this.props.navigation.navigate('Solution', { ...solution })
  }


  render() {
    const { profile, solutions, problems, showView } = this.state

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: profile.avatar}}
          featured
          title={profile.name}
          caption={profile.title}
        />
        <View style={{padding:20, backgroundColor: 'white'}}>
          <Text> { profile.bio } </Text>
        </View>

        <View 
          style={{ flex:1,flexDirection:'row',justifyContent:'space-around',alignItems: 'center', backgroundColor:'white', padding:20}}>
          <Button title="Solutions" onPress={this.onPressSolutions}/>
          <Button title="Following" onPress={this.onPressFollowing}/>
          <Button title="Settings"  onPress={this.handleSettingsPress}/>
        </View>
        <View>

          { showView !== 'solutions' ? undefined : solutions.map( solution =>  
          <SolutionTile
            key={solution.id}
            solution={{...solution, ...{owner: profile}} }
            onReadMore={() => this.onReadMore(solution)}
          /> )}


        { showView !== 'following' ? undefined : problems.map( problem => (
            <ProblemTile
              key={problem.id}
              problem={problem}
              onLearnMore={() => this.onLearnMore(problem)}
            />
          ))}

          
        </View>

      </ScrollView>
    );
  }
}

export default UserDetail;
