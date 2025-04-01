let st = '{"name":"John", "age":30, "city":"New York"}';

var obj = JSON.parse(st); // parse string to object
console.log(obj);

var jsonSt = JSON.stringify(obj); // obj to string
console.log(jsonSt);
