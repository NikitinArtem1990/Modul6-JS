let textUrl = document.querySelector('#TextUrl');
textUrl.addEventListener('click', (event) => {
textUrl.textContent = prompt('Введите новый текст ссылки');
event.preventDefault()
})