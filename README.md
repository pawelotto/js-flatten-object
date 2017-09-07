# js-flatten-object
JavaScript function that traverses and flattens any object 

## How it works
This simple function accepts two arguments: `objectToFlat` and `flatObject` and returns `flatObject` containing key/value pairs from `objectToFlat` flattened to a single level object. This function traverses nested object to the lowest level until there are no more nested objects to within object.

## Caveats
* Parent key/value objects will be lost if there's any following child object with the same key name. Remember? We can't have object with duplicate key names!
