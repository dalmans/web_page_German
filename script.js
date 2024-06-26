
// Create a "close" button and append it to each list item
/*var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var deleteBtn = document.createElement("BUTTON");
  var txt = document.createTextNode("\u00D7");
  deleteBtn.className = "close";
  deleteBtn.appendChild("Delet");
  myNodelist[i].appendChild(deleteBtn);
}
*/
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var divWord = document.createElement("div");
  var divTranslation = document.createElement('div');
  divTranslation.className= "word_div";

  li.className = "list_of_words"; // добавила класс элементу li

  var myInputWord = document.getElementById("myInputWord").value;
  var textFromInputWord = document.createTextNode(myInputWord);
  li.appendChild(textFromInputWord);
  if (myInputWord === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list_of_words").appendChild(li);
  }
  document.getElementById("myInputWord").value = ""; ////очищает поле ввода 
  divWord.appendChild(textFromInputWord);
  divWord.className = "word_div";
  li.appendChild(divWord);
  li.appendChild(divTranslation);

  var myInputTranslation = document.getElementById("myInputTranslation").value;
  var translationText = document.createTextNode(myInputTranslation);
  divTranslation.appendChild(translationText); //добавляет текст из поля ввода в div divTranslation

 

//Create a div with Example and additional information

var divExample = document.createElement("div");
divExample.className = "example_div";
var myInputExample = document.getElementById("myInputExtraInform").value;

var paragraphs = myInputExample.split('\n');
 // Loop through each paragraph and add it to the container
 paragraphs.forEach(function(paragraph) {
  if (paragraph.trim() !== '') {  // Ignore empty paragraphs
    var p = document.createElement("p");
    p.textContent = paragraph;
    divExample.appendChild(p);
  }
});


//var txtExample = document.createTextNode(myInputExample);
//divExample.appendChild(txtExample);
li.appendChild(divExample);
document.getElementById("myInputExtraInform").value="";

// Create a button "Remove"
 var buttonRemove = document.createElement("button");
  var txt = document.createTextNode("Remove word");
  buttonRemove.className = "close";
  buttonRemove.appendChild(txt);
  li.appendChild(buttonRemove);
  document.getElementById("myInputTranslation").value = ""; //очищает поле ввода 





  // Назначается обработчик события onclick для всех кнопок с классом close, который скрывает родительский элемент кнопки при нажатии
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}
