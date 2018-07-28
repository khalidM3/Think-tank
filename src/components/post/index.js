import styles from './_style'
import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TextInput, Button} from 'react-native'
import { Icon, Avatar } from "react-native-elements"


class Post extends Component {


  render() {
    let {post} = this.props
    return(
      <View style={styles.post}>

        <View style={styles.header}>
              <Avatar 
                small
                rounded
                activeOpacity={0.7}
                source={{uri: post.owner.avatar}}
                onPress={() => this.props.onProfileInfo()}
              />
            <View>
              <Text> @{post.owner.name} </Text>
            </View>
            <View>
              <Text style={styles.optionBtn}> ... </Text>
            </View>
        </View>

        <View>
          <View>
            <Text style={styles.title}> {post.title} </Text>
          </View>

          <Image 
            style={styles.img}
            source={{uri: post.imageURI}}
          />

          <View>
            <Text style={styles.desc}> { post.desc } </Text>
          </View>
        </View>
        
        <View style={styles.btnsBar}>
          <Icon name="thumb-up" size={35} />
          <Icon name="thumb-down" size={35} />
          <Icon name="playlist-add" size={35} />
        </View>
        

      </View>
    )
  }
}

export default Post