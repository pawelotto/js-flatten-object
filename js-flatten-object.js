module.exports = function flattenObject(objectToFlat, flatObject) {
  if (arguments.length < 2) return
  if (Object.getOwnPropertyNames(objectToFlat).length < 1) return
  for (let i = 0; i < arguments.length && i < 2; i++) {
    if (!isObject(arguments[i])) return
  }

  return (function flat(objectToFlat, flatObject) {
    let key = Object.getOwnPropertyNames(objectToFlat)[0]
    if (isPrimitive(objectToFlat[key])) {
      Object.assign(flatObject, { [key]: objectToFlat[key] })
      delete objectToFlat[key]
    } else if (isObject(objectToFlat[key])) {
      let nestedObj = objectToFlat[key]
      delete objectToFlat[key]
      flat(nestedObj, flatObject)
    } else {
      delete objectToFlat[key]
    }
    return Object.getOwnPropertyNames(objectToFlat).length > 0 ? flat(objectToFlat, flatObject) : flatObject
  })(objectToFlat, flatObject)

  function isObject(a) {
    return /^\{.*\}$/.test(JSON.stringify(Object(a)))
  }

  function isPrimitive(a) {
    return a !== Object(a)
  }
}