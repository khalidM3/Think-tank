export const looper = (num) => (cb) => {
  for(var i=0; i <num; i++) {
    cb()
  }
}

export const promisify = (fn) => (...args) => 
  new Promise((resolve, reject) => 
    fn(...args, (err, data) => err ? reject(err) : resolve(data)))
