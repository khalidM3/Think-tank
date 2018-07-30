import React, { Component } from 'react'
import {ScrollView} from 'react-native'
import { Button } from 'react-native-elements'
import ProblemTile from '../components/problem-tile'
import { fetchProblems } from '../fake-data'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      problems:[],
    }
  }
  componentDidMount = () => {
    fetchProblems(10)
    .then( problems => {
      this.setState({problems})
    })
  }

  onLearnMore = (problem) => 
    this.props.navigation.navigate('Problem', { ...problem })

  showProblemForm = () => 
    this.props.navigation.navigate('ProblemForm')

  render() {
    let {problems} = this.state

    return (
      <ScrollView>
        <Button title="Post Problem" backgroundColor="dodgerblue" onPress={this.showProblemForm}/>

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

export default Home