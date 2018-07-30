import faker from 'faker'
import {looper} from './util'
import { AsyncStorage} from 'react-native'

class User  {
  constructor() {
    this.id = faker.random.number()
    this.name = faker.internet.userName()
    this.title = faker.name.jobTitle()
    this.bio = faker.lorem.sentence()
    this.email = faker.internet.email()
    this.avatar = faker.image.avatar()
    this.age = faker.random.number()
    this.following = []
  }
}

User.fetchFakeMe = (cb) => {
  try {
    return cb(null, new User())
  } catch(err) { 
    return cb(err, null)
  }
}

User.fetchFakeUser = (cb) => {
  try {
    return cb(null, new User())
  } catch(err) {
    return cb(err, null)
  }
}

User.fetchFakeUsers = (num = 1, cb) => {
  try {
    let arr = []
    looper(num)( () => {
      return arr.push(new User())
    })
    return cb(null, arr) 
  } catch(err) {
    return cb(err, null) 
  }
}

export default User