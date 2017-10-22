chrome.browserAction.onClicked.addListener(function(tab) {
    var url = "http://techtabor.agondolkodasorome.hu";
    chrome.tabs.create({url: url});
});