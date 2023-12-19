const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alt')
console.log(data)
require('./7-interject')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
