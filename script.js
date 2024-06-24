 console.log = "hi";

function handleSubmit(event) {
    event.preventDefault(); // Предотвратить перезагрузку страницы при отправке формы
    const textarea = document.getElementById('Input');
    const text = textarea.value;
    const pElement = document.getElementById('Inputed text');
    pElement.textContent = text;
    console.log(text); 
}
   
function getValue() {


    var input = document.getElementById("yInput");
    
    
    var value = input.value;
    
    
    console.log(value);
  }