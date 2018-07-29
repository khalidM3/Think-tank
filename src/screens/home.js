import React, { Component } from 'react'
import { Text, View, ScrollView} from 'react-native'
import { Button } from 'react-native-elements'
import ProblemTile from '../components/problem-tile'
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
    this.props.navigation.navigate('Problem', { ...problem })
  }
  showProblemForm = () => {
    this.props.navigation.navigate('ProblemForm')
  }

  render() {
    let {problems} = this.state
    return (
      <ScrollView>
        <Button title="Post Sub Problem" backgroundColor="dodgerblue" onPress={this.showProblemForm}/>
        {/* <List>
          {problems.map( problem  => (
            <ListItem
              key={problem.id}
              title={problem.name}
              subtitle={problem.desc}
              onPress={() => this.onLearnMore(problem)}
            />
          ))} */}
        {/* </List> */}

        { problems.map( problem  => (
            <ProblemTile
              key={problem.id}
              problem={problem}
              onLearnMore={() => this.onLearnMore(problem)}
            />
          ))}
      </ScrollView>
    );
  }
}

export default Feed;
