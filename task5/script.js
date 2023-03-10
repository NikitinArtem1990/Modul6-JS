let DupTextField = document.querySelector('#duplicateField');
let InputText = document.querySelector('#InputText')
InputText.addEventListener('keyup', (event) => {

DupTextField.textContent = event.target.value;

})

let Buttom = document.querySelector('#Buttom')
Buttom.addEventListener('click', ()  => {

console.log(InputText.value);
DupTextField.textContent = ('');

document.getElementById('InputText').value = "";

})




