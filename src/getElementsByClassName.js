// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // You should use document.body, element.childNodes, and element.classList
  
  /*
    Create an empty array and push the element that has the className
      Have body as document.body.childNodes then if className === className, push document.body.childNodes.className;
      recurse into deeper childNodes
  */
  
  let results = [];
  let bodyChildren = document.body.childNodes;
  
  function moving(className, bodyChildren){
    for(let i = 0; i < bodyChildren.length ; i++){
      if(bodyChildren[i].className === className && bodyChildren[i] !== undefined){
        results.push(bodyChildren[i]);
      } else {
        return results.concat(moving(className, bodyChildren[i]));
      }
    }
  }
  
  moving(className, bodyChildren);
  
  return results;
};
