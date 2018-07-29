import faker from 'faker'
import User from './user'
import {looper} from './util'

class Solution {
  constructor(owner) {
    this.id = faker.random.uuid()
    this.owner = owner ? owner : new User()
    this.title = faker.name.title()
    this.content = faker.lorem.paragraph()
    this.banner = 'https'+ (faker.random.image()).slice(4)
    this.upvotes = []
    this.downvotes = []
  }
}

Solution.fetchFakeSolution = (cb) => {
  try {
  return cb(null, new Solution(new User())) 
  } catch(err) {
    return cb(err, null) 
  }
}

Solution.fetchFakeSolutions = (num = 1, cb) => {
  try {
  let arr = []
  looper(num)( () => {
    return arr.push(new Solution() )
  })
  return cb(null, arr) 
  } catch(err) {
    return cb(err, null) 
  }
}

Solution.fetchFakeUserSolutions = (num = 1, owner, cb) => {
  try {
    let arr = []
    looper(num)( () => {
      return arr.push(new Solution(owner))
    })
    return  cb(null, arr) 
  } catch(err) {
      return cb(err, null)
  }
}

export default Solution


