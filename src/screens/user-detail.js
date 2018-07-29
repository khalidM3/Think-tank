import React, { Component } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import ProblemTile from '../components/problem-tile'
import SolutionTile from '../components/solution-tile'

import {fetchSolutions, fetchProblems} from '../config/data/index'

class UserDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      solutions:[],
      problems: [],
    }
  }

  componentDidMount = () => {
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
  
  onLearnMore = (problem) => {
    this.props.navigation.navigate('Problem', { ...problem })
  }
  onReadMore = (solution) => {
    this.props.navigation.navigate('Solution', { ...solution })
  }

  render() {
    const { avatar, name, email, bio, title} = this.props.navigation.state.params;
    const profile = {...this.props.navigation.state.params}
    const { solutions, problems, showView} = this.state
    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: avatar}}
          featured
          title={name}
          caption={title}
        />
        <View style={{padding:20, backgroundColor: 'white'}}>
          <Text> {bio } </Text>
        </View>

        <View 
          style={{ flex:1,flexDirection:'row',justifyContent:'space-around',alignItems: 'center', backgroundColor:'white', padding:10}}>
          <Button title="Solutions" onPress={this.onPressSolutions}/>
          <Button title="Following" onPress={this.onPressFollowing}/>
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
