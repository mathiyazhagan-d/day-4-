// question no 1
// JSON

var obj1 = { name: "person", age: 5 };
var obj2 = { age: 5, name: "person" };
let compare = (obj1, obj2) => {
  for (let key in obj1) {
    for (let key1 in obj2) {
      if (key == key1 && obj1[key] == obj2[key1]) {
        return "The given two JSON have same value and  properties";
      }
    }
  }
};
console.log(compare(obj1, obj2));
