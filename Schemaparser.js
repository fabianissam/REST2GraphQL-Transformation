/*var endpoints = document.getElementById('Endpoints').nodeValue.split(",");
var read; 
var write;



function Schemaparser(endpoints,read,write){
  this.endpoints = endpoints;
  this.read = read;
  this.write = write;
  this.run = function(){
    this.endpoints.array.forEach(endpoint => {
      var data = fetch(endpoint).then(response => {
        return response.json;
      });
      var resource = JSON.parse(data,function(key,value){
        return key;
      });
      const datatypes = [];
      for(var element in data){
        resource = element;
        for(var datatypes in resource)
        datatypes
      }

    });
  }
  
  }
*/
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
console.log(data);
var resource = JSON.parse(data);
var datatypes = Object.keys(resource);

console.log(datatypes);
