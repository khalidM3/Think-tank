import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Tile, List, ListItem } from 'react-native-elements'
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
    this.onPressFollowing()
  }

  onPressSolutions = () => {
    fetchSolutions(20)
    .then( solutions => this.setState({solutions, showSolutions:true}))
  }

  onPressFollowing = () => {
    fetchProblems(20)
    .then( problems => this.setState({problems, showProblems:true}))
  }

  render() {
    const { avatar, name, email, title, bio} = this.props.navigation.state.params;
    const { solutions, problems } = this.state
    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: avatar}}
          featured
          title={name}
          caption={title}
        />
        <Text> { bio } </Text>
        <View style={{ 
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          }}>
          <Text> Solutions </Text>
          <Text> Following </Text>
        </View>

        <View>

          { solutions.map( solution =>  
            <SolutionTile
              key={solution.id}
              solution={{...solution, avatar, name, email}}
              onReadMore={() => this.onReadMore(solution)}
            /> )}
            
          <List>
          {problems.map( problem => (
            <ListItem
              key={problem.id}
              title={problem.name}
              subtitle={problem.desc}
              onPress={() => this.onLearnMore(problem)}
            />
          ))}
        </List>
        
        </View>

      </ScrollView>
    );
  }
}

export default UserDetail;
