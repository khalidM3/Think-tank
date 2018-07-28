import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import SolutionTile from '../components/solution-tile'
import kDB from '../config/data/index'
import {fetchSolutions} from '../config/data/index'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      solutions: [],
    }
  }

  componentDidMount = () => {
    console.log('___COMPONENT_DID_MOUNT__',  kDB.fetchPosts(10))
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