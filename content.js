// Inform the background page that 
// this tab should have a page-action
chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction'
});

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  // First, validate the message's structure
  if ((msg.from === 'popup') && (msg.subject === 'headers')) {
    var info = {
        
      StrictTransportSecurity: 0,//StrictTransportSecurity,
      ContentSecurityPolicy: 0,//ContentSecurityPolicy,
      XFrameOptions: 0,//XFrameOptions,
      XXSSProtection: 0,//headerUpdate(),
      XContentTypeOptions: 0,//XContentTypeOptions,
      ReferrerPolicy: 0,
      FeaturePolicy: 0,
      PublicKeyPins: 0
      
    };
    // Directly respond to the sender (popup), 
     
    response(info);
  }
});
//---------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', headerUpdate);
});

//---------------------------------------------

function headerUpdate(){
    //run all of the other functions for security here to update an array
    //then update the headers present column on the popup with the array values
    
    var url = document.URL;
    var request = new XMLHttpRequest();
    request.open("GET", "url", true);
    request.send();
    document.getElementById("StrictTransportSecurity").textcontext = 'blah';
    return "blah";
    request.onreadystatechange = function() {
        if(this.readyState == this.HEADERS_RECEIVED) {

        // Get the raw header string
        var headers = request.getAllResponseHeaders();

        // Convert the header string into an array
        // of individual headers
        var arr = headers.trim().split(/[\r\n]+/);
        }
        
    }
 var XContentTypeOptions = headerMap["x-content-type-options"];
 var StrictTransportSecurity = headerMap["strict-transport-security"];
 var ContentSecurityPolicy = headerMap["content-type"];
 var XFrameOptions = headerMap["x-frame-options"];
 var ReferrerPolicy = headerMap[""];
 
 var StrictTransportSecurity = headerMap[""];
 var ContentSecurityPolicy = headerMap[""];
 var XFrameOptions = headerMap[""];
}

