
var malteseWords = document.getElementsByClassName("maltese");
toggled = [];

window.addEventListener('load', function() {
  for (let i = 0; i < malteseWords.length; i++) {
    malteseWords[i].style.backgroundColor = "black";
    toggled[i] = 0;
  }
  for (var i = 0; i < malteseWords.length; i++) {
    handleElement(i);
  }
});

function handleElement(i) {
  malteseWords[i].onclick = function (){
    revealWord(i);
  }
}

function revealWord(elem) {
  if (toggled[elem] == 0) {
    malteseWords[elem].style.backgroundColor = "inherit";
  }
  else {
    malteseWords[elem].style.backgroundColor = "black";
  }
  toggled[elem] = 1 - toggled[elem];
}
