// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   console.log('Turning ' + tab.url + ' red!');
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//   });
// });

// Add links to allLinks and visibleLinks, sort and show them.  send_links.js is
// injected into all frames of the active tab, so this listener may be called
// multiple times.
// chrome.extension.onRequest.addListener(function(names) {
//     alert('XD');
//   // alert(names);
// });

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {
    file: 'extract.js'
  });
});

// Set up event handlers and inject send_links.js into all frames in the active
// tab.
window.onload = function() {
    var names = [].slice.apply(document.querySelectorAll('span._2akq')).map(function(element){
        return element.textContent;
    });
}
