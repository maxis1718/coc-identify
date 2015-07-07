// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {
    file: 'extract.js'
  });
});

// Set up event handlers and inject send_links.js into all frames in the active tab.
window.onload = function() {
    var names = [].slice.apply(document.querySelectorAll('span._2akq')).map(function(element){
        return element.textContent;
    });
}
