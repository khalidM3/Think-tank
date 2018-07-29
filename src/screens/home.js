import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { fetchProblems } from '../fake-data'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      problems:[],
    }
  }
  componentDidMount = () => {
    fetchProblems(10)
    .then( problems => this.setState({problems}) )
  }

  onLearnMore = (problem) => 
    this.props.navigation.navigate('Problem', { ...problem })

  render() {
    let {problems} = this.state
    return (
      <ScrollView>
        <List>
          {problems.map( problem  =>
            <ListItem
              key={problem.id}
              title={problem.name}
              subtitle={problem.desc}
              onPress={() => this.onLearnMore(problem)}
            />
          )}
        </List>
      </ScrollView>
    );
  }
}

export default Feed;
