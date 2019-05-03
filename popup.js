var xhr = new XMLHttpRequest();
var data = new Array(8);
var data2 = new Array(8);
//document.getElementById("result").innerHTML = xhr.responseText;
// Update the relevant fields with the new data
function setDOMInfo(info) {

  document.getElementById('URL').textContent = info.URL;
  myFunction();
}
function convertBoolean(value){
  
  return (value ? 1: -1);
}
function myFunction() {
  xhr.open("GET", document.getElementById('URL').textContent ,0);
  
  xhr.setRequestHeader('Access-Control-Expose-Headers', 'Content-Type, Location');
  xhr.send(200);
  
  var headers = xhr.getAllResponseHeaders();
  var arr = headers.trim().split(/[\r\n]+/);
  
  // Create a map of header names to values
  var headerMap = {};
  arr.forEach(function (line) {
    var parts = line.split(': ');
    var header = parts.shift();
    var value = parts.join(': ');
    headerMap[header] = value;
  });
  data[0] = headerMap["strict-transport-security"];
  data[1] = xhr.getResponseHeader("Content-Security-Policy");
  data[2] = headerMap["x-frame-options"];
  data[3] = headerMap["x-xss-protection"];
  data[4] = headerMap["x-content-type-options"];
  data[5] = xhr.getResponseHeader("referrerpolicy");
  data[6] = xhr.getResponseHeader("Feature-Policy");
  data[7] = xhr.getResponseHeader("Public-Key-Pins");
  
  for(var i = 0; i < data.length; i++){
    data2[i] = ((data[i] === "undefined") || (data[i] === '')? "Bad" : "Good")
  }
  document.getElementById("StrictTransportSecurity").innerHTML = data2[0];
  document.getElementById("ContentSecurityPolicy").innerHTML = data2[1];
  document.getElementById("XFrameOptions").innerHTML = data2[2];
  document.getElementById("XXSSProtection").innerHTML = data2[3];
  document.getElementById("XContentTypeOptions").innerHTML = data2[4];
  document.getElementById("ReferrerPolicy").innerHTML = data2[5];
  document.getElementById("FeaturePolicy").innerHTML = data2[6];
  document.getElementById("PublicKeyPins").innerHTML = data2[7];
}

function advanced(){
  document.getElementById("StrictTransportSecurity").innerHTML = data[0];
  document.getElementById("ContentSecurityPolicy").innerHTML = data[1];
  document.getElementById("XFrameOptions").innerHTML = data[2];
  document.getElementById("XXSSProtection").innerHTML = data[3];
  document.getElementById("XContentTypeOptions").innerHTML = data[4];
  document.getElementById("ReferrerPolicy").innerHTML = data[5];
  document.getElementById("FeaturePolicy").innerHTML = data[6];
  document.getElementById("PublicKeyPins").innerHTML = data[7];
}
window.addEventListener('DOMContentLoaded', function () {
  // ...query for the active tab...
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
      tabs[0].id,
      {from: 'popup', subject: 'headerInfo'},
      // ...also specifying a callback to be called 
      //    from the receiving end (content script)
      setDOMInfo);
  });
});
//add an event listener for the button being pushed
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', advanced);
});
