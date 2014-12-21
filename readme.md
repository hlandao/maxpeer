# MaxPeer for Chrome #

## Develop ##
1. Run npm install
2. Run npm install gulp -g
3. Run bower install
4. Run gulp
5. Go to chrome://extensions and install the unpacked extension located at ./dist in Chrome developer mode.


## Develop ##
### You can use the extension in two modes : ###
1. Use 'script1.js' as content script - default & recommended.
2. Inject the 'script1.js' into the DOM - change the 'content_script' js in manifest.json to contentScriptInjector.js