var xhr = new XMLHttpRequest();
var url;
var data = new Array(8);
var data2 = new Array(8);
//document.getElementById("result").innerHTML = xhr.responseText;
// Update the relevant fields with the new data
function setDOMInfo(info) {

  url = info.URL;
  myFunction();
}

function sendData() {
  //turn variables into json
  var variables = {
    "URL"                       : url,
    "strict-transport-security" : data[0],
    "Content-Security-Policy"   : data[1],
    "x-frame-options"           : data[2],
    "x-xss-protection"          : data[3],
    "x-content-type-options"    : data[4],
    "referrerpolicy"            : data[5],
    "Feature-Policy"            : data[6],
    "Public-Key-Pins"           : data[7]
  };

  xhr.open("POST", "http://129.82.174.202:1025/",0);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(variables));
}

function myFunction() {
  xhr.open("GET", url ,0);
  
  xhr.setRequestHeader('Access-Control-Expose-Headers', 'Content-Type, Location');
  xhr.send(200);
  

  data[0] = xhr.getResponseHeader("strict-transport-security");
  data[1] = xhr.getResponseHeader("Content-Security-Policy");
  data[2] = xhr.getResponseHeader("x-frame-options");
  data[3] = xhr.getResponseHeader("x-xss-protection");
  data[4] = xhr.getResponseHeader("x-content-type-options");
  data[5] = xhr.getResponseHeader("Referrer-Policy");
  data[6] = xhr.getResponseHeader("Feature-Policy");
  
  sendData();
  for(var i = 0; i < data.length; i++){
    data2[i] = ((data[i] === "undefined") || (data[i] === null)? "Missing" : "Present")
  }
  
  document.getElementById("StrictTransportSecurity").innerHTML = data2[0];
  document.getElementById("ContentSecurityPolicy").innerHTML = data2[1];
  document.getElementById("XFrameOptions").innerHTML = data2[2];
  document.getElementById("XXSSProtection").innerHTML = data2[3];
  document.getElementById("XContentTypeOptions").innerHTML = data2[4];
  document.getElementById("ReferrerPolicy").innerHTML = data2[5];
  document.getElementById("FeaturePolicy").innerHTML = data2[6];
}

function advanced(){
  document.getElementById("StrictTransportSecurity").innerHTML = data[0];
  document.getElementById("ContentSecurityPolicy").innerHTML = data[1];
  document.getElementById("XFrameOptions").innerHTML = data[2];
  document.getElementById("XXSSProtection").innerHTML = data[3];
  document.getElementById("XContentTypeOptions").innerHTML = data[4];
  document.getElementById("ReferrerPolicy").innerHTML = data[5];
  document.getElementById("FeaturePolicy").innerHTML = data[6];
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
