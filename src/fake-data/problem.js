import faker from 'faker'

import {looper} from './util'

class Problem {
  constructor(owner) {
    this.id = faker.random.uuid()
    this.name = faker.lorem.words()
    this.desc = faker.lorem.paragraph()
    this.followers = 10
    this.subProblems = 10
    this.solutions = 50
  }
}


Problem.fetchFakeProblems = (num = 1, cb) => {
  try {
    let arr = []
    looper(num)( () => {
      return arr.push(new Problem())
    })
    return cb(null, arr) 
  } catch(err) {
    return cb(err, null) 
  }
}

Problem.fetchFakeUserProblems = (num = 1, owner, cb) => {
  try {
    let arr = []
    looper(num)( () => {
      return arr.push(new Problem(owner))
    })
    return  cb(null, arr) 
  } catch(err) {
      return cb(err, null)
  }
}

export default Problem


