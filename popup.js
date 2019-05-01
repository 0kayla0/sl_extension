var xhr = new XMLHttpRequest();
var percent;
var https;
var copyright;
var match;
var char;
//document.getElementById("result").innerHTML = xhr.responseText;
// Update the relevant fields with the new data
function setDOMInfo(info) {

  document.getElementById('URL').textContent = info.URL;

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
  
  document.getElementById("StrictTransportSecurity").innerHTML = headerMap["strict-transport-security"];
  document.getElementById("XFrameOptions").innerHTML = headerMap["x-frame-options"];
  document.getElementById("XXSSProtection").innerHTML = headerMap["x-xss-protection"];
  document.getElementById("XContentTypeOptions").innerHTML = headerMap["x-content-type-options"];
  
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
      {from: 'popup', subject: 'phishingInfo'},
      // ...also specifying a callback to be called 
      //    from the receiving end (content script)
      setDOMInfo);
  });
});
//add an event listener for the button being pushed
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', myFunction);
});
