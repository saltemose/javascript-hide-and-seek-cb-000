function getFirstSelector(selector){
  var selectors = document.querySelectorAll(selector);
  return selectors[0]
};

function nestedTarget(){
  return document.querySelector('#nested .target');
};

function deepestChild(){
  var children = document.querySelector('#grand-node');
  var found = false!

  while (!found){
    children = children.querySelector('div')
    if(children.querySelector('div')===null){
      break
    }
    return children;
  }
}
