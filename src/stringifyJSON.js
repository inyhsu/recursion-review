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
    
    
  if(typeof obj === 'boolean' || typeof obj === 'number' || typeof obj === 'undefined' || obj === null){
    if(obj === Infinity || Number.isNaN(obj)){
      return 'null';
    }
    return '' + obj;
  }
  
  if(typeof obj === 'string'){
    return '"' + obj + '"';
  }
  
  // if(typeof obj === 'undefined'){
  //   return 'undefined';
  // }
  
  // if(obj === null){
  //   return 'null';
  // }
  
  /*
    Array
  */
  if(Array.isArray(obj)) {
    let results = '[';
    
    for(let i = 0; i < obj.length; i++){
      if(typeof obj[i] === 'function') {
        results += 'null' + ',';
      } else {
        results += stringifyJSON(obj[i]) + ',';
      }
    }
    
    if(obj.length > 0){
      results = results.slice(0, results.length-1);
    }
    
    
    return results + ']';
  }
  
  /*
    Object
  */
  
  if(typeof obj === 'object'){
    let results = '{';
    
    for (let [key, value] of Object.entries(obj)) { 
      
      if(typeof value === 'function' || typeof value === 'undefined'){
        continue;
      }else {
        results += `"${key}":` + stringifyJSON(value) + ','; 
      }
      
    }
    if(results.length > 1){
      results = results.slice(0, results.length-1);
    }
    return results + '}';
  }
  
  
};

































