//document.getElementById("result").innerHTML = xhr.responseText;
// Update the relevant fields with the new data
function setDOMInfo(info) {
  document.getElementById('StrictTransportSecurity').textContent = info.StrictTransportSecurity;
  document.getElementById('ContentSecurityPolicy').textContent = info.ContentSecurityPolicy;
  document.getElementById('XFrameOptions').textContent = info.XFrameOptions;
  document.getElementById('XXSSProtection').textContent = info.XXSSProtection;
  document.getElementById('XContentTypeOptions').textContent = info.XContentTypeOptions;
  document.getElementById('ReferrerPolicy').textContent = info.ReferrerPolicy;
  document.getElementById('FeaturePolicy').textContent = info.FeaturePolicy;
  document.getElementById('PublicKeyPins').textContent = info.PublicKeyPins;
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
        {from: 'popup', subject: 'headers'},
        // ...also specifying a callback to be called 
        //    from the receiving end (content script)
        setDOMInfo);
  });
});
