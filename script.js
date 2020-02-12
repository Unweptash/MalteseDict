
var malteseWords = document.getElementsByClassName("maltese");

window.addEventListener('load', function() {
  for (let i = 0; i < malteseWords.length; i++) {
    malteseWords[i].style.backgroundColor = "black";
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
  malteseWords[elem].style.backgroundColor = "inherit";
}
