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
    return children[-1]
  }
}
