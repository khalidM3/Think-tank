
import React, {Component} from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Card } from 'react-native-elements'

class ProblemTile extends Component {

  render() {
    let {problem} = this.props
    return(
      <TouchableHighlight onPress={() => this.props.onLearnMore(problem)}>
        <View>
          <Card title={problem.name} titleStyle={{color: 'dodgerblue'}}>
            <Text style={{marginBottom: 10, color: 'dimgrey'}}>
              { problem.desc}
            </Text>
            <View
              style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
              <View>
                <Text> Solutions </Text>
                <Text> {problem.solutions} </Text>
              </View>
              <View style={{justifyContent:'center'}}>
                <Text> Followers </Text>
                <Text> {problem.followers} </Text>
              </View>
              <View>
                <Text> SubProblems </Text>
                <Text> { problem.subProblems } </Text>
              </View>
            </View>
          </Card>
        </View>
      </TouchableHighlight>
    )
  }
}

export default ProblemTile