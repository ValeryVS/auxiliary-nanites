# Вспомогательные модули

## arrayBufferToBase64
```
base64String = arrayBufferToBase64(myArrayBuffer)
```
Преобразование ArrayBuffer (например, считанного файла) в Base64 строку.

## capitalizeFirstLetter

Преобразует первую букву строки в прописную и возвращает изменённую строку.

```
myString = capitalizeFirstLetter(myString)
```

## Declensable

Склонение слова по количеству

```
const watermelon = new Declensable({
    one: 'арбуз',
    two: 'арбуза',
    many: 'арбузов'
});
const oneWatermelon = watermelon.declense(1);
```

## objectValuesByPath

Функции `setObjectValueByPath` и `getObjectValueByPath` устанавливают и возвращают значения параметов объекта по переданному пути.

```
const obj: any = {};
setObjectValueByPath(obj, 'test.a.b', 1);
const myVal = getObjectValueByPath(obj, 'test.a.b');
```

## printText

Создаёт скрытый iframe с текстом или html и открывает диалог печати

```
printText('Тест печати');
```

## readFileFromInput

Возвращает Promise чтения файла в заданном варианте.

Варианты чтения: `text`, `ArrayBuffer`, `base64`.

```
readFileFromInput(myFile, {
    readAs: 'text'
})
.then( (result) => {
    ...
})
.catch( (error) => {
    ...
})
```

## saveTextFile

Вызов окна сохранения файла с переданным контентом.

Необходим polyfill для window.saveAs [FileSaver]

```
saveTextFile('Тестовый контент', 'test.txt', 'text/plain');
```

# Рекоммендации

## Зависимость для saveTextFile

[FileSaver] позволяет вызывать диалог сохранения файлов

## Преобразование Unicode строк в base64

Статья на developer.mozilla.org [Base64 encoding and decoding]

Скрипт преобразования [base64-js]

## Object merge

Используйте `Object.assign`


[//]: #
  [FileSaver]: <https://github.com/eligrey/FileSaver.js>
  [Base64 encoding and decoding]: <https://developer.mozilla.org/ru/docs/Web/API/WindowBase64/Base64_encoding_and_decoding>
  [base64-js]: <https://github.com/beatgammit/base64-js>
