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
  let body = document.body;
  
  
  function moving(body){
    
    if(body.classList !== undefined && body.classList.contains(className)){
      results.push(body);
    } 
    
    if(body.childNodes !== undefined){
      for(let i = 0; i < body.childNodes.length ; i++){
        results.concat(moving(body.childNodes[i]))
      }
    }
  }
  moving(body);
  
  return results;
};

//className = foo
//<body>
//  <div class="foo">
//    <div class="foo"></div>
//  </div>
//  <div class="nothing"></div>
//</body>