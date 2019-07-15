// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  
  //if boolean -> return '' + boolean
  //if number -> return '' + number
    //if number is Infinity and NaN or null -> return null
  //if string -> return '"' + string + '"'
  //if undefined -> return undefined

  //if undefined, function, or symbol
    //if in object -> return ommitted
    //if in array -> return null
    
    
  if(typeof obj === 'boolean' || typeof obj === 'number'){
    if(obj === Infinity || obj === NaN || obj === null){
      return null
    }
    
    return '' + obj 
  }
  
  if(typeof obj === 'string'){
    return '"' + obj + '"'
  }
  
  if(typeof obj === 'undefined'){
    return undefined
  }
  
  
};
