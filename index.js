function getFirstSelector(selector){
  var selectors = document.querySelectorAll(selector);
  return selectors[0]
};

function nestedTarget(){
  var nested = document.getElementById('nested');
  nested.removeChild('target')
  
}
