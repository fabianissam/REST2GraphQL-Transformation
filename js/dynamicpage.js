var counter = 1;

function addEndpoint() {
  // do something
  var tmp = document.getElementsByTagName("template")[0];
  var content = tmp.content.cloneNode(true);
  // counter für jeden endpunkt eigene id und namen zu eindeutigen identifizierung 
  var form = document.getElementsByTagName("form")[0];
  form.appendChild(content);
  counter++;
}

// when button with id addEndpoint get clicked it will run the function addEndpoint
document.getElementById("addEndpoint").onclick = addEndpoint;
