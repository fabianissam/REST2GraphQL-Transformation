// Endpunkte geben eine Liste von Elementen zurück

//var endpoints = document.getElementById("Endpoints").nodeValue.split(",");
//var read;
//var write;

const aliendatabase = [
  { id: 1, name: "hi", points: 40 },
  { id: 2, name: "baum", points: 60 },
  { id: 3, name: "ali", points: 420 },
  { id: 4, name: "peter", points: 404 },
  { id: 5, name: "manfred", points: 404 },
  { id: 6, name: "uschi", points: 4066 },
  { id: 7, name: "fabian", points: 40656 },
  { id: 8, name: "finley", points: 4032 },
  { id: 9, name: "kilian", points: 403432 },
  { id: 10, name: "troll", points: 402434 },
  { id: 11, name: "hihihihi", points: 404234234 },
];

var data = JSON.stringify({ aliens: aliendatabase });
var resource = JSON.parse(data);

function Schemaparser() {
  this.read;
  this.write;
  this.update;
  this.delete;
  this.run = function run() {
    endpoints.array.forEach((endpoint) => {
      var data = fetch(endpoint)
        .then((response) => {
          return response.json;
        })
        .then((data) => {
          getAllKeysFromJSON(data);
        });
    });
    return true;
  };
  /* this.getAllKeysFromJSON = function getAllKeysFromJSON(obj) {
    var keys = "";
    if (typeof obj === "object" && obj !== null) {
      keys += " { ";
      for (key in obj) {
        keys += " " + key + " " + getAllKeysFromJSON(obj[key]);
      }
      keys += " } ";
    }
    return keys;
  };*/
  this.getAllKeysFromJSON = function getAllKeysFromJSON(obj) {
    var keys = [];
    if (typeof obj === "object" && obj !== null) {
      for (key in obj) {
        keys.push(key);
        if (typeof obj[key] === "object" && obj[key] !== null) {
          keys.push(getAllKeysFromJSON(obj[key]));
        }
      }
    }
    return keys;
  };
  /*this.removeEmpty = function removeEmpty(arr) {
    arr.forEach((element) => {
      if (element !== []) {
        removeEmpty(arr[element]);
      }
      else {
        arr.pop()
      }
    });
  };*/
  this.findPattern = function findPattern(keys) {
    var object = {
      object: null,
      counter: 0,
    };
    var allObjects = [];


    keys.forEach((element) => {
      if (Array.isArray(element)) {
        if (
          allObjects.find((el) => {
            return el.object === element;
          })
        ) {
          element.counter++;
        } else {
          var newObject = object;
          newObject.object = element;
          newObject.counter = 0;
          allObjects.push(newObject);
        }
      }
    });

    allObjects.push(keys);

    return true;
  };
}

var schemaparser = new Schemaparser();
console.log(schemaparser.getAllKeysFromJSON(resource));
// console.log(keys);
/*getAllKeysFromJSON(resource);
console.log(allKeys);*/
