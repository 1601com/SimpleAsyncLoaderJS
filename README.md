# SimpleAsyncLoaderJS

DE - Führe einfach die Funktionen von `async` geladenen JavaScript Dateien aus  

---

EN - Just execute the functions of `async` loaded JavaScript files

---

### Example html

```html
<!doctype html>
<html lang="en">
<head>
    <title>SimpleAsyncLoaderJS</title>
    <script src="SimpleAsyncLoaderJS.js" async></script>
    <script src="my-script.js" async></script>
</head>
<body>
</body>
</html>
```

---

### Example `asyncFunctions` array

```javascript
if (typeof asyncFunctions === "undefined") {
   var asyncFunctions = [];
}
asyncFunctions.push(function() {
    console.log('called')
});
```

---

### Example `data-script-function.js`

```javascript
function dataScriptFunction() {
    console.log('example-data-script called', document.getElementById('element'));
}
```
```html
<script src="data-script-function.js" async data-script-function="dataScriptFunction"></script>
```

---

### Usage CMS Contao >4.9

https://contao.org/

1. Install `agentur1601com/file-lazy-loader`

```
$ composer require agentur1601com/file-lazy-loader
```

2. Go to Themes -> Page layout -> FileLazyLoader - JS

3. Load your JavaScript files `async`

---

> @Author: Lukas Beck 
>   
> @Email: lb@1601.com   
> 
> @Link: https://github.com/LBeckX
> 
> @Copyright 1601.communication gmbh  
> 
> @Link: https://www.1601.com  
> 
> @Link: https://github.com/1601com
> 
> @Support: support@1601.com
