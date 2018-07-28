
import React, {Component} from 'react'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'

class SolutionTile extends Component {

  render() {
    let {solution} = this.props
    return(
      <Card
        title={solution.title}
        image={{uri: solution.banner}}
        >
        <Text style={{marginBottom: 10}}>
          { solution.content}
        </Text>
        <Button
          // backgroundColor='#03A9F4'
          // buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          onPress={() => this.props.onReadMore(solution)}
          title='Read more' />
      </Card>
    )
  }
}

export default SolutionTile