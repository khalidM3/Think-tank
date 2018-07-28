import faker from 'faker'
import User from './user'
import {looper} from './util'

class SolutionComment {
  constructor(owner) {
    this.id = faker.random.uuid()
    this.owner = owner ? owner : new User()
    this.content = faker.lorem.paragraph()
    this.upvotes = []
    this.downvotes = []
  }
}

SolutionComment.fetchFakeSolutionComments = (num = 1, cb) => {
  try {
  let arr = []
  looper(num)( () => {
    return arr.push(new SolutionComment())
  })
  return cb(null, arr) 
  } catch(err) {
    return cb(err, null) 
  }
}

SolutionComment.fetchFakeUserSolutionComments = (num = 1, owner, cb) => {
  try {
    let arr = []
    looper(num)( () => {
      return arr.push(new SolutionComment(owner))
    })
    return  cb(null, arr) 
  } catch(err) {
      return cb(err, null)
  }
}

export default SolutionComment


