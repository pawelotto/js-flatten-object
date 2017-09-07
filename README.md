# js-flatten-object
JavaScript `flattenObject` function that traverses and flattens any object 

## How it works
This recursive function accepts two arguments: `objectToFlat` and `flatObject` and returns `flatObject` containing key/value pairs from `objectToFlat` flattened to a single level object. This function traverses nested objects to the lowest level until there are no more nested objects within object.

## Caveats
* Parent key/value objects will be lost if there's any following child object with the same key name. Remember? We can't have object with duplicate key names!
* Key names from parent objects will be lost forever. There's nowhere to go!
* Nested objects containing arrays will be lost

## Result example
Let's process this multi-level object and get it flattened:

```
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
```

with the result being: 
```
{
  "title": "Terminator 2",
  "year": 1991,
  "aired": true,
  "Arnold Schwarzenegger": "The Terminator",
  "Linda Hamilton": "Sarah Connor",
  "Ron Young": "Pool Cue Biker",
  "Mike Muscat": "Moshier",
  "Abdul Salaam El Razzac": "Gibbons"
}
```

## Usage example
```
const flattenObject = require('./js-flatten-object)

let flatObject = flattenObject(objectToFlat, {})
```

## Syntax
```
flattenObject(objectToFlat, flatObject)
```

### Parameters
__`objectToFlat`__ - object to flat

__`flatObject`__ - object where flattened key/value pairs will be stored 

### Return value
__`flatObject`__ containing flattened __`objectToFlat`__ object 
