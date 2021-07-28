const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection) => {
        if (collection instanceof Array){
        return collection.slice()
        } else {
        return Object.values(collection)
        }
      }
      let iterateOver = newCollection(collection)
      
      for (const element of iterateOver){
        callback((element));
      }
	    return collection
    },

    map: function(collection, callback) {
      let returnCollection = []
      const newCollection = (collection) => {
        if (collection instanceof Array){
        return collection.slice()
        } else {
        return Object.values(collection)
        }
      }
      for (const element of newCollection(collection)){
        returnCollection.push(callback((element)));
      }
	    return returnCollection
    },

    reduce: function(collection, callback, acc) {
      let newCollection = (collection) => {
        if (collection instanceof Array){
        return collection.slice()
        } else {
        return Object.values(collection)
        }
      }
      let storeCollection = newCollection(collection)
      
      if (!acc){
        acc = storeCollection[0]
        storeCollection = storeCollection.slice(1)
      }
      
      for (const val of storeCollection){
        acc = callback(acc, val, newCollection)
      }
      return acc;
  },

  find: function(collection, predicate) {
    let newCollection = (collection) => {
      if (collection instanceof Array){
      return collection.slice()
      } else {
      return Object.values(collection)
      }
    }
    

    for (const element of newCollection(collection)){
      //console.log(element)
      if (predicate(element) === true){
        return element
      };
    }
  }, 

  filter: function(collection, predicate) {
    let returnArray = []
    let newCollection = (collection) => {
      if (collection instanceof Array){
      return collection.slice()
      } else {
      return Object.values(collection)
      }
    }

    for (const element of newCollection(collection)){
      //console.log(element)
      if (predicate(element) === true){
        returnArray.push(element)
      };
    }
    return returnArray
  },

  size: function(collection) {
    let returnArray = []
    let newCollection = (collection) => {
      if (collection instanceof Array){
      return collection.slice()
      } else {
      return Object.keys(collection)
      }
    }
    let i = 0
    for (const element of newCollection(collection)){
      if (element){
        i++
      } 
    };
    return i
  },

  first: function(collection, n= false) {
    if (!n) {
      return collection[0]
    } else {
      return collection.slice(0, n)
    }
  },

  last: function(collection, n= false) {
    if (!n) {
      return collection[collection.length-1]
    } else {
      return collection.slice(-n)
    }
  },

  compact: function(collection) {
    let returnArray = []
    for (const element of collection){
      if (element) {
        returnArray.push(element)
      } 
    }
    return returnArray 
  },

  sortBy: function(collection, callback) {
    const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
  },
  uniqSorted: function(collection, iteratee) {
    const sorted = [collection[0]]
    for (let idx = 1; idx < collection.length; idx++) {
      if (sorted[idx-1] !== collection[idx])
        sorted.push(collection[idx])
    }
    return sorted
  },

  uniq: function(collection, sorted=false, iteratee=false) {
    if (sorted) {
      return fi.uniqSorted(collection, iteratee)
    } else if (!iteratee) {
      return Array.from(new Set(collection))
    } else {
      const modifiedVals = new Set()
      const uniqVals = new Set()
      for (let val of collection) {
        const moddedVal = iteratee(val)
        if (!modifiedVals.has(moddedVal)) {
          modifiedVals.add(moddedVal)
          uniqVals.add(val)
        }
      }
      return Array.from(uniqVals)
    }
  },

  keys: function(object) {
    let keys = []
    for (let key in object){
      keys.push(key)
    }
    return keys
  },

  values: function(object) {
    let values = []
    for (let key in object){
      values.push(object[key])
    }
    return values
  },

  functions: function(obj) {
    const functionNames = []

    for (let key in obj) {
      if (typeof obj[key] === "function"){
        functionNames.push(key)
      }
    }

    return functionNames.sort()
  },


  }
})()

fi.libraryMethod()