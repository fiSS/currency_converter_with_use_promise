# Конвертер валют ajax, JSON.
#### HTML
```html
<label for="rub">RUB</label>
<input id='rub' type="text">
<label for="usd">USD</label>
<input id='usd' type="text">
```
#### JS
##### Получил элементы страницы с которыми буду работать:
```javascript
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');
```
##### повесил обработчик событий на рубли, т.к. они будут конвертироваться:
```javascript
inputRub.addEventListener('input', () => {
     let request = new XMLHttpRequest();
```
##### Сразу после создания объекта XMLHttpRequest идёт метод open это настройка ajax запроса:
```javascript
request.open('GET', 'current.json');
```
##### заголовок запроса, сейчас будут json файл:
```javascript
request.setRequestHeader('content-type', 'application/json; charset=utf-8');
```
##### метод send открывает соединение и отправляет запрос на сервер, в нашем случае body не передается, т.к. файл json хранится в этой же папке локально:
```javascript
request.send();
```
##### повесил обработчик событий на request, он будет отслеживать состояния нашего запроса при помощи readystatechange:
```javascript
request.addEventListener('readystatechange', function()
```
##### если операция полностью завершена И:
```javascript
request.readyState === 4
```
##### ответ от сервера всё ОК:
```javascript
request.status == 200
```
##### в данном случае получаем из локально JSON файла и при помощи метода parse переводим в обычный объект JS:
```javascript
let date = JSON.parse(request.response)
```
##### далее простая математика, записываем в inputUsd деление введенные в инпут рублевый на date из JSON:
```javascript
inputUsd.value = inputRub.value / date.usd;
```
