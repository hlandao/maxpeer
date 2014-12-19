(function(_, $, peer5){
    console.debug('Running MaxPeer.');

    var config = {
        extensions : ['zip', 'exe', 'mp3', 'msi']
    }

    var getFileExtension = function(url){
        return (/[.]/.exec(url)) ? /[^.]+$/.exec(url) : undefined;
    }

    $('a').each(function(index){
        var url = $(this)[0].href;
        var fileExtension = getFileExtension(url) || [];
        var foundIndex = fileExtension && config.extensions.indexOf(fileExtension[0]);
        if(foundIndex >= 0){
           console.debug('Hi, this is a ' + fileExtension[0] + ' file, let\'s hook him');
           // Disable original href
           $(this).attr('href', 'javascript:void(0);');
           // Hook event
           $(this).click(function(e){
               console.debug('Click on ZIP file, prevent default event',url);
               e.preventDefault();
               e.stopPropagation();


               peer5.download(url);

//               var request = new peer5.Request();
//               request.open("GET",url);
//               request.onprogress = function(e){
//                   console.log(e.loadedHTTP);
//                   console.log(e.loadedP2P);
//               };
//               request.onload = function(e){
//                   console.log(e.currentTarget.response);
//               };
//               request.onerror = function(e){
//                   console.log(e.error);
//               }
//
//               request.send();

               return false;
           })
       }
    });
})(_, Zepto, peer5)