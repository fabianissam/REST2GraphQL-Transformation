const graphql = require("./graphQLhelper");
const urlCheck = require("./urlCheck");
const mongoose = require("mongoose");

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
  { id: 12, name: "hihihihi", points: 404234234, object: { name: "object" } },
];

var data = JSON.stringify([
  { aliens: aliendatabase },
  { aliens2: aliendatabase },
]);
//var data = JSON.stringify(aliendatabase);
var resource = JSON.parse(data);

function Schemaparser() {
  this.entpoints = "";
  this.read = false;
  this.create = false;
  this.update = false;
  this.delete = false;
  this.schema = "";
  this.objects = [];

  this.run = function run() {
    this.endpoints.array.forEach((endpoint) => {
      var data = fetch(endpoint)
        .then((response) => {
          return response.json;
        })
        .then((data) => {
          this.etAllKeysFromJSON(data);
        });
    });
    return true;
  };
  //obj ist die json form der Daten eines Endpunktes und es werden alle objekte gefiltert name wird aus der url entnommen
  this.filterObjects = function filter0bjects(obj, name) {
    var object = {
      name: name,
      element: [],
    };
    var tmp = obj;
    // wenn liste
    if (Array.isArray(obj) && obj.length === 1) {
      var tmp = obj[0];
    }
    for (var key in tmp) {
      var attributAndType = [];
      //attribut des objekts
      attributAndType.push(key);
      attributAndType.push(this.graphQLTypeReturn(tmp[key]));
      object.element.push(attributAndType);
      //
    }
    return Object.entries(obj);
  };
  // wenn object
  //gets an Object and see which
  this.graphQLTypeReturn = function graphQLTypeReturn(obj) {
    var type;
    if (Array.isArray(obj)) {
      if (undefined) {
      }
    } else {
    }
  };
  var helperfunction = function helperfunction(obj) {
    return obj;
  };
  this.findPattern = function findPattern(obj) {
    return obj;
  };

  this.graphQLSchemaCreator = function graphQLSchemaCreator() {
    var schema = graphql.schema;
    if (this.read) {
      schema.replace("name...", "query: Query, name...");
    } else if (this.delete || this.update || this.create) {
      schema.replace("name...", "mutation: Mutation");
    } else {
      schema.replace("name...", "");
    }
    return schema;
  };
  // obj looks like [{name : "", elements: ["","",""]},{name2 : "", elements: ["","",""]}]
  // wir gehen davon aus das alles schon richtig gemact wurde
  this.graphQLTypeCreator = function graphQLTypeCreator(obj) {
    var allTypes = "";
    obj.forEach((type) => {
      var tmpType = graphql.type;
      tmpType.replace("name...", type.name);
      type.attributes.forEach((elements) => {
        // elements.
      });
      allTypes += tmpType;
    });
    return allTypes;
  };
  this.getAllKeysFromJSON = function getAllKeysFromJSON(obj) {
    var keys = [];
    if (typeof obj === "object" && obj !== null) {
      for (var key in obj) {
        keys.push(key);
        if (typeof obj[key] === "object" && obj[key] !== null) {
          keys.push(getAllKeysFromJSON(obj[key]));
        }
      }
    }
    return keys;
  };
  this.findPattern = function findPattern(keys) {
    var object = {
      name: () => {
        if (keys.length > 2) {
          return "mehrere Objekte";
        } else {
          return keys[0];
        }
      },
      object: keys,
      counter: 1,
    };
    keys.forEach((element) => {});
  };
}
var schemaparser = new Schemaparser();

//console.log(schemaparser.filterObjects(aliendatabase)[0]);
//console.log(schemaparser.filterObjects(resource));

/*  var object = {
      name: "",
      element: [],
    }
    var keys = [];
    if (typeof obj === "object" && obj !== null) {
      var tmpObject = object;
      if(obj)
      for (var key in obj) {
        keys.push(key);
        if (typeof obj[key] === "object" && obj[key] !== null) {
          keys.push(this.getAllKeysFromJSON(obj[key]));
        }
      }
    }
    return keys;*/
/* this.getAllObjects = function getAllObjects(obj){
    var object = {
      name: "",
      element: [],
    }
    var keys = [];
    if (typeof obj === "object" && obj !== null) {
      var tmpObject = object;
      if(obj)
      for (var key in obj) {
        keys.push(key);
        if (typeof obj[key] === "object" && obj[key] !== null) {
          keys.push(this.getAllKeysFromJSON(obj[key]));
        }
      }
    }
    return keys;

  }*/
/*getAllKeysFromJSON(resource);
console.log(allKeys);*/

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
/* this.findPattern = function findPattern(keys) {
    var object = {
      object: null,
      counter: 0,
    };
    var allObjects = [];
    allObjects.push(keys);
    keys.forEach((element) => {
      if (Array.isArray(element)) {
        if (
          allObjects.find((el) => {
            if (el.object === element) {
              el.counter++;
              return true;
            }
            return false;
          })
        ) {
        } else {
          var newObject = object;
          newObject.object = element;
          newObject.counter = 0;
          allObjects.push(newObject);
        }
      }
    });

    // allObjects.push(keys);

    return allObjects;
  };
}*/
