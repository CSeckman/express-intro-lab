const students = [
  {name: 'Cassandra', school: 'General Assembly', birthday: 'June 9'},
  {name: 'Joshua', school: 'General Assembly', birthday: 'June 16'},
  {name: 'Aria', school: 'Nest Schools', birthday: 'May 23'},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the students
    if (Object.keys(conditions).length === 0) return callback(null, students)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find 
}