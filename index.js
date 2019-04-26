function getFirstSelector(selector){
  var selectors = document.querySelectorAll(selector);
  return selectors[0]
};

function nestedTarget(){
  return document.querySelector('#nested .target')


}
