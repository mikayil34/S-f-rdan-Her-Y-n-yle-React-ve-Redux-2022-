 

console.log("Hello word")

var slugify = require('slugify')

slugify('some string') // some-string

// if you prefer something other than '-' as separator
var title= slugify('some string iea uieuie', '_')  // some_string
console.log(title)