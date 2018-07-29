
import React, {Component} from 'react'
import { Text, Button } from 'react-native'
import { Card } from 'react-native-elements'

class SolutionTile extends Component {

  render() {
    let {solution} = this.props
    return(
      <Card title={solution.title} image={{uri: solution.banner}}>
        <Text style={{marginBottom: 10}}>
          { solution.content}
        </Text>
        <Button
          title='Read more'
          onPress={() => this.props.onReadMore(solution)}
        />
      </Card>
    )
  }
}

export default SolutionTile