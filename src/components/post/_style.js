import {StyleSheet} from 'react-native'

const styles = {
  post: {
    backgroundColor: 'white',
    // height: ,
    width: '100%',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'black',
    // margin: 10,
  },

  header : {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    justifyContent: 'space-between',
  },

  img: {
    width: '100%',
    height: 300,
  },

  optionBtn: {
    // alignItems: 'center',
    // alignSelf: 'flex-end',
    fontSize: 30,
    // borderWidth: 1,
    // borderColor: 'red',
  },

  title: {
    fontSize: 30,
  },

  desc: {
    fontSize: 20,
    padding: 10,
  },

  btnsBar: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  btn: {
    margin: 10,
  },

}

export default StyleSheet.create(styles)
