# SimpleAsyncLoaderJS

DE - Führe einfach die Funktionen von `async` geladenen JavaScript Dateien aus  

---

EN - Just execute the functions of `async` loaded JavaScript files

---

**Example html**
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

**Example `asyncFunctions` array**
```javascript
if (typeof asyncFunctions === "undefined") {
   var asyncFunctions = [];
}
asyncFunctions.push(function() {
    console.log('called')
});
```

---

**Example `data-script-function.js`**
```javascript
function dataScriptFunction() {
    console.log('example-data-script called', document.getElementById('element'));
}
```
```html
<script src="data-script-function.js" async data-script-function="dataScriptFunction"></script>
```

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
> @Support: support@1601.com
