const flattenObject = require('./js-flatten-object')

let objectToFlat = {
  title: "Terminator 2",
  writtenBy: [
    "James Cameron", 
    "William Wisher Jr."
  ],
  year: 1991,
  aired: true,
  cast: {
    mainRoles: {
      "Arnold Schwarzenegger": "The Terminator",
      "Linda Hamilton": "Sarah Connor"
    },
    otherRoles: {
      "Ron Young": "Pool Cue Biker",
      "Mike Muscat": "Moshier",
      evenMoreRoles: {
        "Abdul Salaam El Razzac": "Gibbons"
      }
    }
  },
}

let flatObject = flattenObject(objectToFlat, {})
console.log(flatObject)