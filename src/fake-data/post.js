import faker from 'faker'
import User from './user'
import {looper, promisify} from './util'

class Post {
  constructor(owner) {
    this.owner = owner ? owner : User.fetchFakeUsers()[0]
    this.title = faker.name.title()
    this.desc = faker.lorem.paragraph()
    this.imageURI = faker.random.image()
  }
}


Post.fetchFakePosts = (num = 1, cb) => {
  try {
  let arr = []
  looper(num)( () => {
    return arr.push(new Post())
  })
  return cb(null, arr) 
  } catch(err) {
    return cb(err, null) 
  }
}

Post.fetchFakeUserPosts = (num = 1, owner, cb) => {
  try {
    let arr = []
    looper(num)( () => {
      return arr.push(new Post(owner))
    })
    return  cb(null, arr) 
  } catch(err) {
      return cb(err, null)
  }
}

export default Post


