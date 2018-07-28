import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { fetchProblems } from '../config/data/index'
class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      problems:[],
    }
  }
  componentDidMount = () => {
    console.log('__COMPONENT_DID_MOUNT__')
    fetchProblems(10)
    .then( problems => {
      console.log(problems)
      this.setState({problems})
    })
  }

  onLearnMore = (problem) => {
    this.props.navigation.navigate('Problem', { ...problem });
  }

  render() {
    let {problems} = this.state
    return (
      <ScrollView>
        <List>
          {problems.map( problem  => (
            <ListItem
              key={problem.id}
              title={problem.name}
              subtitle={problem.desc}
              onPress={() => this.onLearnMore(problem)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Feed;
