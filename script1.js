/***
 * This script can be used either as a chrome content script OR as an injected script into the DOM(head)
 */
(function (_, $, peer5) {
    console.debug('Running MaxPeer for Chrome.');

    var config = {
        extensions: ['zip', 'exe', 'mp3', 'msi', ".doc", ".docx", ".log", ".msg", ".odt", ".rtf", ".tex", ".txt", ".wpd", ".wps", ".csv", ".dat", ".gbr", ".ged", ".key", ".pps", ".ppt", ".pptx", ".sdf", ".tar", ".vcf", ".xml", ".aif", ".iff", ".m3u", ".m4a", ".mid", ".mp3", ".mpa", ".ra", ".wav", ".wma", ".3g2", ".3gp", ".asf", ".asx", ".avi", ".flv", ".m4v", ".mov", ".mp4", ".mpg", ".rm", ".srt", ".swf", ".vob", ".wmv", ".3dm", ".3ds", ".max", ".obj", ".bmp", ".dds", ".gif", ".jpg", ".png", ".psd", ".tga", ".thm", ".tif", ".tiff", ".yuv", ".ai", ".eps", ".ps", ".svg", ".indd", ".pct", ".xlr", ".xls", ".xlsx", ".dwg", ".dxf", ".gpx", ".kml", ".kmz", ".asp", ".aspx", ".cer", ".cfm", ".csr", ".css", ".htm", ".html", ".js", ".jsp", ".php", ".rss", ".xhtml", ".fnt", ".fon", ".otf", ".ttf", ".cab", ".cpl", ".cur", ".dll", ".dmp", ".drv", ".ico", ".prf", ".hqx", ".mim", ".uue", ".7z", ".cbr", ".deb", ".gz", ".pkg", ".rar", ".rpm", ".sitx", ".tar.gz", ".zip", ".zipx", ".bin", ".cue", ".dmg", ".iso", ".mdf", ".toast", ".vcd", ".bak", ".tmp", ".ics", ".msi", ".part", ".torrent"]
    }

    /**
     * Get a file extension (e.g. 'zip').
     * @param url
     * @returns {Array|{index: number, input: string}}
     */
    var getFileExtension = function (url) {
        return (/[.]/.exec(url)) ? /[^.]+$/.exec(url) : undefined;
    }

    /**
     * Launch the Peer5 downlaoder for a url.
     * @param url
     */
    var startPeer5Download = function (url) {
        peer5.download(url);
    }


    /***
     * Start a custom Peer5 request for a url.
     * @param url
     */
    var startPeer5Request = function (url) {
        var request = new peer5.Request();
        request.open("GET", url);
        request.onprogress = function (e) {
            console.log(e.loadedHTTP);
            console.log(e.loadedP2P);
        };
        request.onload = function (e) {
            console.log(e.currentTarget.response);
        };
        request.onerror = function (e) {
            console.log(e.error);
        }

        request.send();
    }

    /***
     * Check whether a url is interesting for Peer5 downloader by comparing the URLs file extension to our files extensions array.
     *
     * @param url the url we want to check
     * @returns {String|Boolean} false if 'not interesting' OR the file's extensions if it does (e.g. 'zip').
     */
    var isUrlInteresting = function(url){
        var fileExtension = getFileExtension(url) || [];
        var foundIndex = fileExtension && config.extensions.indexOf(fileExtension[0]);
        if (foundIndex >= 0) {
            return fileExtension[0];
        }else{
            return false;
        }
    }

    // Run through all the <a> elements in DOM to find 'interesting URLs.
    $('a').each(function (index) {
        var url = $(this)[0].href;
        // Check if URL is 'interesting'
        var urlExtensionCheck = isUrlInteresting(url);
        if (urlExtensionCheck) {
            console.debug('Hi, this is a ' + urlExtensionCheck + ' file, let\'s hook him');
            // Disable original href
            $(this).attr('href', 'javascript:void(0);');
            // Hook *OUR* event
            $(this).click(function (e) {
                console.debug('Clicked on ' + urlExtensionCheck + ' file, prevent default event. URL : ' + url);
                e.preventDefault();
                e.stopPropagation();
                startPeer5Download(url);
                return false;
            })
        }
    });
})(_, Zepto, peer5)