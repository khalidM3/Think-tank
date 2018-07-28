import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Tile, List, ListItem, Button} from 'react-native-elements'
import SolutionTile from '../components/solution-tile'
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
  }


  onPressSolutions = () => {
    fetchSolutions(20)
    .then( solutions => this.setState({solutions, showSolutions:true}))
  }

  onPressFollowing = () => {
    fetchProblems(20)
    .then( problems => this.setState({problems, showProblems:true}))
  }

  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };


  render() {
    const { profile, solutions, problems } = this.state

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: profile.avatar}}
          featured
          title={profile.name}
          caption={profile.title}
        />
        <Text> { profile.bio } </Text>
        <View style={{ 
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          }}>
           <Button
          title="Settings"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSettingsPress}
        />
          <Text> Solutions </Text>
          <Text> Following </Text>
        </View>

        <View>

          { solutions.map( solution =>  
            <SolutionTile
              key={solution.id}
              solution={{...solution, ...profile}}
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
