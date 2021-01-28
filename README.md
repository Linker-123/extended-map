# extended-js-map
More functions/methods for a normal map.

## Quick Note
If you want to use the functions on a normal Map, instead of requiring extended-map. Use the following:
```js
require("extended-js-map").assignProps();
```

## <ExtendedMap>.first()
Returns the first value of the map.
```js
const ExtendedMap = require("extended-js-map").Map;
const myMap = new ExtendedMap();
myMap.set("key", "value");
console.log(myMap.first()); // "value"
```

## <ExtendedMap>.last()
Returns the last value of the map.
```js
const ExtendedMap = require("extended-js-map").Map;
const myMap = new ExtendedMap();
myMap.set("first key", "first value");
myMap.set("last key", "last value")
console.log(myMap.last()); // "last value"
```

## <ExtendedMap>.toArray()
Returns array of map's values.
```js
const ExtendedMap = require("extended-js-map").Map;
const myMap = new ExtendedMap();
for (let i = 0; i < 10; i++) {
    myMap.set(i, i + 1);
}
console.log(myMap.toArray()); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
```

## <ExtendedMap>.toObject()
Returns the map in a object with key value for example: `{ "map's key": "map's value" }`.
```js
const ExtendedMap = require("extended-js-map").Map;
const myMap = new ExtendedMap();
for (let i = 0; i < 10; i++) {
    myMap.set(i, i + 1);
}
console.log(myMap.toObject()); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7, '7': 8, '8': 9, '9': 10 } 
```

## <ExtendedMap>.random()
Returns a random value of the map.
```js
const ExtendedMap = require("extended-js-map").Map;
const myMap = new ExtendedMap();
for (let i = 0; i < 5; i++) {
    myMap.set(i, i + 1);
}
console.log(myMap.random()); // 2
```

## <ExtendedMap>.equals(Map2)
Compares the keys of both maps and returns a boolean.
```js
const ExtendedMap = require("extended-js-map").Map; 
const map1 = new ExtendedMap(); 
const map2 = new ExtendedMap(); 
map1.set(1, 1); 
map2.set(1, 1); 
map1.equals(map2); // true
```

## <ExtendedMap>.difference(Map2)
Returns keys and values that exist in the map and don't exist in the second map. 
```js
const ExtendedMap = require("extended-js-map").Map; 
const map1 = new ExtendedMap(); 
const map2 = new ExtendedMap(); 
map1.set(123, 456); 
map2.set("test", "empty string"); 
map1.difference(map2); // ExtendedMap [Map] { 123 => 456, _valArray: [] }
```

## <ExtendedMap>.duplicates(Map2) 
Compares keys and values of both maps, and returns a map of the duplicated keys and values.
```js
const ExtendedMap = require("extended-js-map").Map; 
const map1 = new ExtendedMap(); 
const map2 = new ExtendedMap(); 
map1.set("map 1 key", "map 1 value"); 
map2.set("map 1 key", "map 1 value"); 
map1.duplicates(map2); // ExtendedMap [Map] { "map 1 key" => "map 1 value" 6, _valArray: [] }
```

## <ExtendedMap>.getSome()
Get a specific amount of values from a map.
```js
const ExtendedMap = require("extended-js-map").Map;
const myMap = new ExtendedMap();
for (let i = 0; i < 50; i++) {
    myMap.set(i, i + 1);
}
console.log(myMap.getSome(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
```

## <ExtendedMap>.filter()
Filter out map's values with a function.
```js
const ExtendedMap = require("extended-js-map").Map;
const myMap = new ExtendedMap();

myMap.set("name1", "John");
myMap.set("name2", "Alex");
myMap.set("name3", "Max");

console.log(myMap.filter(x => x === "Alex")); // ["Alex"]
```

## <ExtendedMap>.find() 
Find a specific value with a function.
```js
const ExtendedMap = require("extended-js-map").Map;
const myMap = new ExtendedMap();

myMap.set("name1", "John");
myMap.set("name2", "Alex");
myMap.set("name3", "Max");

console.log(myMap.find(x => x === "Alex")); // "Alex"
```

## <ExtendedMap>.map()
Map the extended map.
```js
const ExtendedMap = require("extended-js-map").Map;
const languages = new ExtendedMap();
languages.set("Javascript", { name: "Javascript", index: 0 });
languages.set("Java", { name: "Java", index: 1 });
languages.set("C++", { name: "C++", index: 2 });
languages.set("C", { name: "C", index: 3 });

languages.map(x => `${x.name} - ${x.index + 1}`).join("\n");
// Javascript - 1
// Java - 2
// C++ - 3
// C - 4 
```