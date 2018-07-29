import React, { Component } from 'react'
import { ScrollView} from 'react-native'
import SolutionTile from '../components/solution-tile'

import {fetchSolutions} from '../fake-data'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      solutions: [],
    }
  }

  componentDidMount = () => {
    fetchSolutions(20)
    .then( solutions => {
      this.setState({solutions})
    })
  }

  navigateToProfile = (user) => {
    this.props.navigation.navigate('Details', {...user})
  }
  onReadMore = (solution) => {
    this.props.navigation.navigate('Solution', {...solution})
  }

  render() {
    let {solutions} = this.state
    return (
      <ScrollView>
       { solutions.map( solution =>  
          <SolutionTile
            key={solution.id}
            solution={solution}
            onReadMore={() => this.onReadMore(solution)}
          /> )}
      </ScrollView>
    );
  }
}