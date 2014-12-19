(function(){
    var addScript = function(){
        var path = chrome.extension.getURL('./script1.js');
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = path;
        // Use any selector
        document.head.appendChild(s);
    }

    addScript();
})()