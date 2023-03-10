let textField = document.querySelector('#consoleLog');
textField.onclick = function() { 
alert('Метод для вывода информации в веб-консоль');
}
let ChangeLog = document.querySelector('#consoleLog1');
ChangeLog.textContent = ('Пример использования команды console.log');

let textField1 = document.querySelector('#alert');
textField1.onclick = function() { 
alert('Метод для вывода контектного окна с предупреждением');
}
let ChangeAlert = document.querySelector('#alert1');
ChangeAlert.textContent = ('Пример использования команды alert');

let textField2 = document.querySelector('#prompt');
textField2.onclick = function() { 
alert('Метод для вывода контектного окна с овзможностью ввода ответа пользователем');
}
let ChangePrompt = document.querySelector('#prompt1');
ChangePrompt.textContent = ('Пример использования команды prompt');