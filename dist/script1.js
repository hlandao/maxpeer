(function(){function e(){return null}function t(e,t){var i=1024,n=1024*i,r=1024*n,o=1024*r;return e>=0&&i>e?e+" B":e>=i&&n>e?(e/i).toFixed(t)+" KB":e>=n&&r>e?(e/n).toFixed(t)+" MB":e>=r&&o>e?(e/r).toFixed(t)+" GB":e>=o?(e/o).toFixed(t)+" TB":e+" B"}function i(e){function t(e){return e>9?""+e:"0"+e}if(1>e||isNaN(e))return"00:00:00";if(e>86400)return"Calculating...";var i=Math.floor(e%31536e3%86400/3600),n=Math.floor(e%31536e3%86400%3600/60),r=Math.floor(e%31536e3%86400%3600%60);return t(i)+":"+t(n)+":"+t(r)}function n(){var e=[],t=0;this.getLength=function(){return e.length-t},this.isEmpty=function(){return 0==e.length},this.enqueue=function(t){e.push(t)},this.dequeue=function(){if(0==e.length)return void 0;var i=e[t];return 2*++t>=e.length&&(e=e.slice(t),t=0),i},this.peek=function(){return e.length>0?e[t]:void 0}}var r={core:{apiValidators:{},dataStructures:{},data:{},controllers:{},protocol:{},transport:{},util:{},stats:{},workers:{}}};r.config={CHUNKY_HEAD:!0,CHUNKY_HEAD_LENGTH:1e5,DISABLE_CHROME:!1,DISABLE_FIREFOX:!1,LOG_LEVEL:1,USE_QUERYSTRING_FOR_HASH:!1,HTTP_ONLY:!1,USE_TRACKER_PROTOCOL:!0,PC_FAIL_TIMEOUT:15e3,PC_RESEND_INTERVAL:1e3,REQUEST_DROPPED_FAIL:20,EMULATE_LOSS:!1,EMULATE_LOSS_PERCENTAGE:.2,MINIMUM_METADATA_SIZE:64e3,CHUNK_SIZE:1200,SEQUENTIAL_DOWNLOAD:!1,MONITOR_INTERVAL:200,WS_PORT:443,XHR_TIMEOUT:5e3,XHR_MAX_GET:1,XHR_CONCURRENT:6,BUFFERING_THRESHOLD:.1,URGENT_THRESHOLD:2,BYTE_NEEDED_THRESHOLD:10,ENOUGH_BYTES_THRESHOLD:20,STOP_BUFFERING_THRESHOLD:2,HTTP_IDLE_RESET_DURATION:3e4,XHR_SLOT_PROBE_INTERVAL:3e4,HTTP_ALWAYS_DOWNLOAD:!1,P2P_ALWAYS_DOWNLOAD:!1,P2P_REQUEST_BEGIN_THRESHOLD:0,P2P_REQUEST_END_THRESHOLD:2e4,HYBRID_REQUEST_THRESHOLD:1e4,HTTP_REQUEST_THRESHOLD:5e3,MAX_PENDING_CHUNKS:400,MOZ_MAX_PENDING_CHUNKS:200,REQUEST_CHUNK_THRESH:100,BLOCK_GAP:17,CHUNK_EXPIRATION_TIMEOUT:3e3,REPORT_INTERVAL:2e4,STAT_CALC_INTERVAL:500,REQUEST_INTERVAL:3e3,BANDWIDTH_INTERVAL:1e4,SOCKET_RECONNECTION_INTERVAL:3e4,WASTE_CHECK_INTERVAL:1e4,START_WITH_VIDEO_ANALYTICS:!0,USE_FS:!0,USE_PERSISTENT:!0,PROMPT_TIMEOUT:2e4,PERSISTENT_FS_SIZE:1099511627776,CACHE_SIZE:5e7,FS_ROOT_DIR:"peer5/",PREALLOCATE_FILE:!0,ALLOWED_FILE_SIZE:256e6,ALLOWED_FILE_SIZE_FF:104857600,CDN:"http://commondatastorage.googleapis.com/peer5_vod/",STUN_SERVERS:["stun.l.google.com:19302"],TURN_SERVERS:[],TURN_CREDENTIALS:[]},r.tracker={lib:{analytics:{},matching:{},util:{}}},r.client||(r.client={}),r.client.downloader={},r.client.apiValidators={},r.client.videoAnalytics={},function(e){function t(e,t,i,n){this.socketId=e,this.blockIds=t,this.secretId=i,this.swarmId=n}function i(e,t,i,n){this.swarmId=e,this.size=t,this.blockSize=n,this.hashes=i}function n(e,t,i,n,r,o,s,a,c,l,d){this.busySenders=l,this.Connections=e,this.Transactions=t,this.missingBlocks=i,this.numOfP2PCompletedBlocks=n,this.numOfP2PWasteBlocks=c,this.numOfHttpCompletedBlocks=r,this.numOfHttpWasteBlocks=a,this.Size=o,this.downloadTime=s,this.recentBlocks=d}function r(e,t,i,n,r){this.bufferingSegments=e,this.totalBufferingDuration=t,this.currentTime=i,this.currentBlock=n,this.blockGap=r}function o(e,t,i,n,r,o,s,a){this.loadStart=e,this.canPlay=t,this.playTime=i,this.seek=n,this.waste=r,this.canPlay=t,this.buffering=o,this.videoFullyWatched=s,this.fallback=a}function s(e){this.connectionOpenTime=e}function a(e,t,i){this.upBW=e,this.downBW=t,this.sendBufferSize=i}function c(e,t,i,n,r,o){this.id=e,this.transfer=t,this.ux=i,this.ws=n,this.dum=r,this.videoAnalyticsState=o}function l(e,t,i){this.BlockID=e,this.Rate=t,this.Completion=i}function d(e,t,i,n){this.ClientID=e,this.Health=t,this.Total_Downloaded=i,this.Avg_Download_Rate=n}function u(e,t,i){this.op="sdp",this.sdp=e,this.targetId=t,this.originId=i}defaultClientState=new c(0,new n(-100,-100,-100,-100,-100,-100,-100,-100,-100,{},{}),new r(-100,-100,-100,-100,-100),new s(-100),new a(-100,-100,-100),new o(-100,-100,-100,-100,-100,-100,-100,-100)),e.sdp=u,e.Command=t,e.FileInfo=i,e.Connection=d,e.Transaction=l,e.ClientState=c,e.transferState=n,e.uxState=r,e.wsState=s,e.dumState=a,e.defaultClientState=defaultClientState}("undefined"==typeof exports?this.api={}:exports),function(e){function t(e,t){if(this.myDict={},this.keys=[],e){t||(t=1);for(var i=0;e>i;i++){this.keys.push(i);var n=[t,this.keys.length-1];this.myDict[i]=n}}}t.prototype={has:function(e){return e in this.myDict},set:function(e,t){if(this.has(e)){r.warn("Trying to set a key to Dictionary.js that already exists: "+e),r.log("The old value was connected: "+this.myDict[e][0].connected);var i=this.myDict[e][1],n=[t,i];this.myDict[e]=n}else{this.keys.push(e);var n=[t,this.keys.length-1];this.myDict[e]=n}},get:function(e){return this.myDict[e]?this.myDict[e][0]:void 0},getKeys:function(){return this.keys},randomSample:function(e,t){for(var i=t(this.keys,e),n=[],o=0;i.length>o;++o)this.myDict[i[o]]&&this.myDict[i[o]][0]?n.push(this.myDict[i[o]][0]):r.warn("Error in randomSampling, the key: "+i[o]+" is undefined");return n},keys:function(){return this.keys},length:function(){return this.keys.length},filterValues:function(e){for(var t=[],i=0;this.keys.length>i;++i)e(this.myDict[this.keys[i]][0])&&t.push(this.myDict[this.keys[i]][0]);return t},values:function(){for(var e=[],t=0;this.keys.length>t;++t)e.push(this.myDict[this.keys[t]][0]);return e},getFirstVals:function(e){var t=[];for(var i in this.myDict)if(this.myDict.hasOwnProperty(i)&&t.push(this.myDict[i][0]),t.length==e)break;return t},getFirstKeys:function(e,t){var i=[];for(var n in this.myDict){if(i.length>=e)break;t&&t>=parseInt(n)||this.myDict.hasOwnProperty(parseInt(n))&&i.push(parseInt(n))}return i},slice:function(e){for(var t=[],i=0;e.length>i;++i)this.myDict[e[i]]&&t.push(this.myDict[e[i]][0]);return t},remove:function(e){var t=this.myDict[e];t||console.log(t),delete this.myDict[e];var i=t[1];this.keys[i]=this.keys[this.keys.length-1],this.keys[i]in this.myDict&&(this.myDict[this.keys[i]][1]=i),this.keys.length--}},e.Dictionary=t}("undefined"==typeof exports?this.Dictionary={}:exports),function(e){e.shortId=function(){return"xxxxxxxx".replace(/[xy]/g,function(e){var t=0|16*Math.random(),i="x"==e?t:8|3&t;return i.toString(16)})},e.generate_uuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=0|16*Math.random(),i="x"==e?t:8|3&t;return i.toString(16)})}}("undefined"==typeof exports?r.core.util:exports),function(e,t,i){"undefined"!=typeof module?module.exports=i(e,t):"function"==typeof define&&"object"==typeof define.amd?define(i):t[e]=i(e,t)}("radio",this,function(e,t){"use strict";function i(e){return arguments.length?i.$.channel(e):i.$.reset(),i.$}return i.$={version:"0.2",channelName:"",channels:[],reset:function(){i.$.channelName="",i.$.channels=[]},broadcast:function(){var e,i,n,r,o=this.channels[this.channelName],s=o.length;for(e=0;s>e;e++)i=o[e],"object"==typeof i&&i.length&&(n=i[0],r=i[1]||t),n.apply(r,arguments);return this},channel:function(e){var t=this.channels;return t[e]||(t[e]=[]),this.channelName=e,this},subscribe:function(){var e,t,i=arguments,n=this.channels[this.channelName],r=i.length,o=[];for(e=0;r>e;e++)o=i[e],t="function"==typeof o?[o]:o,"object"==typeof t&&t.length&&n.push(t);return this},unsubscribe:function(){var e,t,i,n=arguments,r=this.channels[this.channelName],o=n.length,s=r.length,a=0;for(e=0;o>e;e++)for(a=0,s=r.length,t=0;s>t;t++)i=t-a,(!(n[e]instanceof Array)&&r[i][0]===n[e]||n[e]instanceof Array&&r[i][0]===n[e][0])&&(n[e]instanceof Array&&r[i][1]!==n[e][1]||(r.splice(i,1),a++));return this}},i}),function(){r===void 0&&(r={}),r.logString="S\n";var e=!1,t=r.config?r.config.LOG_LEVEL:2,i=["0","ERROR","WARNING","info","log","debug"],n=function(n,o){function s(e,t){this.title=t,this.title||(this.title=""),this.severity=i[n];var r=new Date;if(this.time=r.toISOString(),this.content=e,3>n){var o=Error().stack;this.stack=o?Error().stack.replace("Error\n",""):""}}if(2>=n&&r.logString&&(r.logString+=o+"\n"),!(n>t))switch(s.prototype.toString=function(){var e;return e=this.content.stack?[this.title,this.severity,this.time,this.content,this.content.stack]:[this.title,this.severity,this.time,JSON.stringify(this.content),this.stack],e.join("	")},o=e?""+new s(o):new s(o),n){case 1:console.error(o);break;case 2:console.warn(o);break;case 3:console.info(o);break;case 4:case 5:console.log(o)}};r.setLogFlat=function(t){e=t},r.setLogLevel=function(e){t=e},r.isVerbose=function(){return t>2},r.isDebug=function(){return 5==t},r.debug=function(e,t){n(5,e,t)},r.log=function(e){n(4,e)},r.info=function(e){n(3,e)},r.warn=function(e){n(2,e)},r.error=function(e){n(1,e)}}(),function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-/=",i={decode:function(e){var i=t.indexOf(e.charAt(e.length-1)),n=t.indexOf(e.charAt(e.length-2)),r=3*(e.length/4);64==i&&r--,64==n&&r--;var o,s,a,c,l,d,u,h=0,f=0,p=new Uint8Array(r);for(h=0;r>h;h+=3)c=t.indexOf(e.charAt(f++)),l=t.indexOf(e.charAt(f++)),d=t.indexOf(e.charAt(f++)),u=t.indexOf(e.charAt(f++)),o=c<<2|l>>4,s=(15&l)<<4|d>>2,a=(3&d)<<6|u,p[h]=o,64!=d&&(p[h+1]=s),64!=u&&(p[h+2]=a);return p},encode:function(e){for(var i,n,r,o,s,a="",c=new Uint8Array(e),l=c.byteLength,d=l%3,u=l-d,h=0;u>h;h+=3)s=c[h]<<16|c[h+1]<<8|c[h+2],i=(16515072&s)>>18,n=(258048&s)>>12,r=(4032&s)>>6,o=63&s,a+=t[i]+t[n]+t[r]+t[o];return 1==d?(s=c[u],i=(252&s)>>2,n=(3&s)<<4,a+=t[i]+t[n]+"=="):2==d&&(s=c[u]<<8|c[u+1],i=(64512&s)>>10,n=(1008&s)>>4,r=(15&s)<<2,a+=t[i]+t[n]+t[r]+"="),a}};e.base64=i}("undefined"==typeof exports?r.core.util:exports),function(e){var t={registerEvents:function(){var e=null;e=window.onerror,window.onerror=function(t,i,n){r.warn("peer5 caught an unhandled error: msg/"+t+" url/"+i+" lineNumber/"+n),radio("unhandledError").broadcast(t,i,n),e&&"function"==typeof e&&e(t,i,n)}}};t.registerEvents(),e.errorHandler=t}("undefined"==typeof exports?r.core.util:exports),function(e){function t(t,i,n){this.tag=e.P2P_DATA,this.swarmId=t,this.chunkId=i,this.payload=n}function i(t,i){this.tag=e.P2P_REQUEST,this.swarmId=t,i||(i=[]),this.chunkIds=i}function n(t,i){this.tag=e.P2P_CANCEL,this.swarmId=t,i||(i=[]),this.all=0==i.length,this.chunkIds=i}function r(t,i,n,r){this.tag=e.P2P_HAVE,this.swarmId=t,this.seeder=i,this.blockIds=[],i||(n?(this.complete=!0,this.availabilityMap=n):(this.complete=!1,this.blockIds=r))}function o(t){this.tag=e.P2P_HAVE_REQUEST,this.swarmId=t}function s(t,i,n,r,o,s,a,c,l,d,u,h,f,p,g,m){this.tag=e.REPORT,this.swarmId=t,this.lastRequestedBlockId=i,this.totalBytesUpP2P=n,this.totalBytesDownP2P=r,this.totalBytesDownHTTP=o,this.totalWasteP2P=s,this.totalWasteHTTP=a,this.totalBytesLoadedFS=c,this.speedUp=l,this.speedDown=d,this.connections=u,this.ua=h,this.availabilityMap=f,this.numOfBlocksHave=p,this.fileSize=g,this.completedDownload=m}function a(t){this.tag=e.JOIN,this.swarmId=t}function c(t,i,n,r,o,s,a,c,l){this.tag=e.FILE_INFO,this.swarmId=t,this.size=i,this.hash=n,this.hashes=r,this.blockSize=o,this.origin=s,this.name=a,this.lastModified=c,this.type=l}function l(t,i){this.tag=e.SWARM_ERROR,this.swarmId=t,this.error=i}function d(t,i,n){this.tag=e.MATCH,this.swarmId=t,this.peerId=i,this.availabilityMap=n}function u(e,t,i,n,r,o,s,a,c,l){this.totalBytesDown=e,this.totalBytesUp=t,this.speedDown=i,this.speedUp=n,this.chunksRequested=o,this.chunksExpired=r,this.latency=s,this.connected=a,this.connectingDuration=c,this.failure=l}function h(t,i,n,r,o){this.tag=e.SDP,this.originId=t,this.destId=i,this.sdpMessage=n,this.port=r,this.type=o}function f(t,i,n,r){this.tag=e.SWARM_HEALTH,this.swarmId=t,this.numOfSeedersInSwarm=i,this.NumOfPeersInSwarm=n,this.totalCompletedDownloads=r}e.P2P_DATA=17,e.P2P_REQUEST=18,e.P2P_CANCEL=19,e.P2P_HAVE=20,e.P2P_HAVE_REQUEST=21,e.REPORT=33,e.FILE_INFO=34,e.MATCH=35,e.JOIN=36,e.SWARM_HEALTH=41,e.SWARM_ERROR=48,e.SDP=49,e.COMPLETED_DOWNLOAD=50,e.SWARM_NOT_FOUND=0,e.SWARM_ONLY_DEVCHANNEL=1,e.SWARM_ONLY_FIREFOX=11,e.SWARM_ONLY_CHROME=12,e.SWARM_NOT_COMPAT=13,e.Have=r,e.HaveRequest=o,e.Cancel=n,e.Request=i,e.Data=t,e.Report=s,e.Connection=u,e.FileInfo=c,e.Match=d,e.Join=a,e.Sdp=h,e.SwarmHealth=f,e.SwarmError=l}("undefined"==typeof exports?r.core.protocol:exports),function(t){function i(e){return"function"==typeof Buffer&&Buffer.isBuffer(e)?e.toString("ucs2"):String.fromCharCode.apply(null,new Uint16Array(e.buffer.slice(e.byteOffset))).trim()}function n(e){if("function"==typeof Buffer)return new Buffer(e,"ucs2");for(var t=new ArrayBuffer(2*e.length),i=new Uint16Array(t),n=0,r=e.length;r>n;n++)i[n]=e.charCodeAt(n);return new Uint8Array(t)}var o={},s=e("./ProtocolMessages.js")||r.core.protocol;"function"==typeof Uint8Array&&Uint8Array.prototype.subarray&&(Uint8Array.prototype.slice=Uint8Array.prototype.subarray),(e("./../util/base64.js")||r.core.util).base64;var a=1,c=4,l=function(e){return String.fromCharCode.apply(null,e).trim()},d=function(e,t){for(var i=new Uint8Array(e.length),n=0;e.length>n;n++)i[n]=e.charCodeAt(n);if(t)for(var r=e.length;t>r;r++)i[r]=" ";return i},u=function(e,t){t||(t=0);var i=0;return i+=e[t++]<<24,i+=e[t++]<<16,i+=e[t++]<<8,i+=e[t]},h=function(e){var t=0;"number"!=typeof e.length&&(e=Array.prototype.slice.call(arguments));for(var i=new Uint8Array(4*e.length),n=0;e.length>n;n++){var r=e[n];i[t++]=(4278190080&r)>>24,i[t++]=(16711680&r)>>16,i[t++]=(65280&r)>>8,i[t++]=255&r}return i},f=function(e){return e?new Uint8Array([1]):new Uint8Array([0])},p=function(e,t){return 0!=e[t]},g=function(e){var t=d(o.packSwarmId(e.swarmId)),i=h(e.chunkId);return o.concat([t,i,e.payload])},m=function(e){var t=[],i=d(o.packSwarmId(e.swarmId));t.push(i);var n=h(e.chunkIds);return t.push(n),o.concat(t)},b=function(e){var t=[],i=d(o.packSwarmId(e.swarmId));t.push(i);var n=h(e.chunkIds);return t.push(n),o.concat(t)},v=function(e){var t=[],i=d(o.packSwarmId(e.swarmId));t.push(i);var n=f(e.seeder);t.push(n);var r=f(e.complete);if(t.push(r),e.complete)t.push(e.availabilityMap);else{var s=h(e.blockIds);t.push(s)}return o.concat(t)},_=function(e,t,i){var n=l(e.slice(t,t+o.transferedSwarmIdSize));t+=o.transferedSwarmIdSize;var r=u(e,t);t+=4;var a=e.slice(t,t+i);return new s.Data(n,r,a)},w=function(e,t,i){var n=l(e.slice(t,t+o.transferedSwarmIdSize));t+=o.transferedSwarmIdSize,i-=o.transferedSwarmIdSize;for(var r=[];i>0;)r.push(u(e,t)),i-=4,t+=4;return new s.Request(n,r)},k=function(e,t,i){var n=l(e.slice(t,t+o.transferedSwarmIdSize));t+=o.transferedSwarmIdSize,i-=o.transferedSwarmIdSize;for(var r=[];i>0;)r.push(u(e,t)),i-=4,t+=4;return new s.Cancel(n,r)},y=function(e,t,i){var n,r,a=l(e.slice(t,t+o.transferedSwarmIdSize));t+=o.transferedSwarmIdSize,i-=o.transferedSwarmIdSize;var c=p(e,t);if(t++,i--,!c){var d=p(e,t);if(t++,i--,d)r=e.slice(t,t+i);else for(n=[];i>0;)n.push(u(e,t)),t+=4,i-=4}return new s.Have(a,c,r,n)},S=function(e){var t=JSON.stringify(e);return d(t)},C=function(e,t,i){try{var n=l(e.slice(t,t+i));return JSON.parse(n)}catch(o){r.error(o),r.error("printing out the buggy json"),r.error(n)}},R=function(e){var t=JSON.stringify(e);return n(t)},E=function(e,t,n){var r=i(e.slice(t,t+n));return JSON.parse(r)},T={encode:S,decode:C},I={encode:R,decode:E},P={};P[s.P2P_DATA]={encode:g,decode:_},P[s.P2P_REQUEST]={encode:m,decode:w},P[s.P2P_CANCEL]={encode:b,decode:k},P[s.P2P_HAVE]={encode:v,decode:y},P[s.P2P_HAVE_REQUEST]=T,P[s.REPORT]=T,P[s.MATCH]=T,P[s.SDP]=T,P[s.FILE_INFO]=I,P[s.SWARM_HEALTH]=T,P[s.SWARM_ERROR]=T,P[s.JOIN]=T;var O=function(e,t,i,n){var r=i;n&&t in P&&P[t].encode&&(r=P[t].encode(i));var o=new Uint8Array(5+r.length),s=r.length;return o[e++]=t,o.set(h(s),e),e+=c,o.set(r,e),o},x=function(e,t){var i=e[t++],n=u(e,t);t+=c;var r=e.slice(t,t+n);return[i,r]};o.concat=function(e){var t=0;e.map(function(e){t+=e.length});var i=new Uint8Array(t),n=0;return e.map(function(e){i.set(e,n),n+=e.length}),i},o.encode=function(e){var t=[];return e.forEach(function(e){if(e&&e.tag&&P[e.tag]&&P[e.tag].encode){var i=P[e.tag].encode(e);t.push(O(0,e.tag,i))}}),o.concat(t)},o.decode=function(e){for(var t=0,i=[];e.length>t;){var n=x(e,t),r=n[0],o=n[1];t+=a+c;var s=P[r];if(!s||!s.decode)return null;i.push(s.decode(e,t,o.length)),t+=o.length}return i},o.transferedSwarmIdSize=36,o.packSwarmId=function(e){return e.length>o.transferedSwarmIdSize&&(r.warn("trimming swarmId to be at size of "+o.transferedSwarmIdSize),e=e.substr(0,o.transferedSwarmIdSize)),Array(o.transferedSwarmIdSize-e.length+1).join(" ").concat(e)},t.packSwarmId=o.packSwarmId,t.concat=o.concat,t.decode=o.decode,t.encode=o.encode}("undefined"==typeof exports?r.core.protocol.BinaryProtocol={}:exports),function(){var e=!1,t=/xyz/.test(function(){})?/\b_super\b/:/.*/;Object.subClass=function(i){function n(){!e&&this.ctor&&this.ctor.apply(this,arguments)}var r=this.prototype;e=!0;var o=new this;e=!1;var s;for(s in i){var a="function"==typeof i[s]&&"function"==typeof r[s]&&t.test(i[s]);o[s]=a?function(e,t){return function(){var i=this._super;this._super=r[e];var n=t.apply(this,arguments);return this._super=i,n}}(s,i[s]):i[s]}for(s in this)this.hasOwnProperty(s)&&"function"!=typeof this[s]&&(n[s]=this[s]);return n.prototype=o,n.constructor=n,n.subClass=arguments.callee,n.addBehavior=function(e,t){if(t=t||{},!e)throw"behaviorAbstractClass must be a vaild behavior class";override(o,t,new e)},n}}(),function(e){var t=t||function(e,t){var i={},n=i.lib={},r=function(){},o=n.Base={extend:function(e){r.prototype=this;var t=new r;return e&&t.mixIn(e),t.hasOwnProperty("init")||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},s=n.WordArray=o.extend({init:function(e,i){e=this.words=e||[],this.sigBytes=i!=t?i:4*e.length},toString:function(e){return(e||c).stringify(this)},concat:function(e){var t=this.words,i=e.words,n=this.sigBytes;if(e=e.sigBytes,this.clamp(),n%4)for(var r=0;e>r;r++)t[n+r>>>2]|=(255&i[r>>>2]>>>24-8*(r%4))<<24-8*((n+r)%4);else if(i.length>65535)for(r=0;e>r;r+=4)t[n+r>>>2]=i[r>>>2];else t.push.apply(t,i);return this.sigBytes+=e,this},clamp:function(){var t=this.words,i=this.sigBytes;t[i>>>2]&=4294967295<<32-8*(i%4),t.length=e.ceil(i/4)},clone:function(){var e=o.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var i=[],n=0;t>n;n+=4)i.push(0|4294967296*e.random());return new s.init(i,t)}}),a=i.enc={},c=a.Hex={stringify:function(e){var t=e.words;e=e.sigBytes;for(var i=[],n=0;e>n;n++){var r=255&t[n>>>2]>>>24-8*(n%4);i.push((r>>>4).toString(16)),i.push((15&r).toString(16))}return i.join("")},parse:function(e){for(var t=e.length,i=[],n=0;t>n;n+=2)i[n>>>3]|=parseInt(e.substr(n,2),16)<<24-4*(n%8);return new s.init(i,t/2)}},l=a.Latin1={stringify:function(e){var t=e.words;e=e.sigBytes;for(var i=[],n=0;e>n;n++)i.push(String.fromCharCode(255&t[n>>>2]>>>24-8*(n%4)));return i.join("")},parse:function(e){for(var t=e.length,i=[],n=0;t>n;n++)i[n>>>2]|=(255&e.charCodeAt(n))<<24-8*(n%4);return new s.init(i,t)}},d=a.Utf8={stringify:function(e){try{return decodeURIComponent(escape(l.stringify(e)))}catch(t){throw Error("Malformed UTF-8 data")}},parse:function(e){return l.parse(unescape(encodeURIComponent(e)))}},u=n.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=d.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var i=this._data,n=i.words,r=i.sigBytes,o=this.blockSize,a=r/(4*o),a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0);if(t=a*o,r=e.min(4*t,r),t){for(var c=0;t>c;c+=o)this._doProcessBlock(n,c);c=n.splice(0,t),i.sigBytes-=r}return new s.init(c,r)},clone:function(){var e=o.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});n.Hasher=u.extend({cfg:o.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,i){return new e.init(i).finalize(t)}},_createHmacHelper:function(e){return function(t,i){return new h.HMAC.init(e,i).finalize(t)}}});var h=i.algo={};return i}(Math);(function(){var e=t,i=e.lib,n=i.WordArray,r=i.Hasher,o=[],i=e.algo.SHA1=r.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var i=this._hash.words,n=i[0],r=i[1],s=i[2],a=i[3],c=i[4],l=0;80>l;l++){if(16>l)o[l]=0|e[t+l];else{var d=o[l-3]^o[l-8]^o[l-14]^o[l-16];o[l]=d<<1|d>>>31}d=(n<<5|n>>>27)+c+o[l],d=20>l?d+((r&s|~r&a)+1518500249):40>l?d+((r^s^a)+1859775393):60>l?d+((r&s|r&a|s&a)-1894007588):d+((r^s^a)-899497514),c=a,a=s,s=r<<30|r>>>2,r=n,n=d}i[0]=0|i[0]+n,i[1]=0|i[1]+r,i[2]=0|i[2]+s,i[3]=0|i[3]+a,i[4]=0|i[4]+c},_doFinalize:function(){var e=this._data,t=e.words,i=8*this._nDataBytes,n=8*e.sigBytes;return t[n>>>5]|=128<<24-n%32,t[(n+64>>>9<<4)+14]=Math.floor(i/4294967296),t[(n+64>>>9<<4)+15]=i,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=r.clone.call(this);return e._hash=this._hash.clone(),e}});e.SHA1=r._createHelper(i),e.HmacSHA1=r._createHmacHelper(i)})(),e.CryptoJS=t}("undefined"==typeof exports?r:exports),function(e){var t=function(e,t){return 4294967295&e+t},i=function(e,i,n,r,o,s){return i=t(t(i,e),t(r,s)),t(i<<o|i>>>32-o,n)},n=function(e,t,n,r,o,s,a){return i(t&n|~t&r,e,t,o,s,a)},r=function(e,t,n,r,o,s,a){return i(t&r|n&~r,e,t,o,s,a)},o=function(e,t,n,r,o,s,a){return i(t^n^r,e,t,o,s,a)},s=function(e,t,n,r,o,s,a){return i(n^(t|~r),e,t,o,s,a)},a=function(e,i){var a=e[0],c=e[1],l=e[2],d=e[3];a=n(a,c,l,d,i[0],7,-680876936),d=n(d,a,c,l,i[1],12,-389564586),l=n(l,d,a,c,i[2],17,606105819),c=n(c,l,d,a,i[3],22,-1044525330),a=n(a,c,l,d,i[4],7,-176418897),d=n(d,a,c,l,i[5],12,1200080426),l=n(l,d,a,c,i[6],17,-1473231341),c=n(c,l,d,a,i[7],22,-45705983),a=n(a,c,l,d,i[8],7,1770035416),d=n(d,a,c,l,i[9],12,-1958414417),l=n(l,d,a,c,i[10],17,-42063),c=n(c,l,d,a,i[11],22,-1990404162),a=n(a,c,l,d,i[12],7,1804603682),d=n(d,a,c,l,i[13],12,-40341101),l=n(l,d,a,c,i[14],17,-1502002290),c=n(c,l,d,a,i[15],22,1236535329),a=r(a,c,l,d,i[1],5,-165796510),d=r(d,a,c,l,i[6],9,-1069501632),l=r(l,d,a,c,i[11],14,643717713),c=r(c,l,d,a,i[0],20,-373897302),a=r(a,c,l,d,i[5],5,-701558691),d=r(d,a,c,l,i[10],9,38016083),l=r(l,d,a,c,i[15],14,-660478335),c=r(c,l,d,a,i[4],20,-405537848),a=r(a,c,l,d,i[9],5,568446438),d=r(d,a,c,l,i[14],9,-1019803690),l=r(l,d,a,c,i[3],14,-187363961),c=r(c,l,d,a,i[8],20,1163531501),a=r(a,c,l,d,i[13],5,-1444681467),d=r(d,a,c,l,i[2],9,-51403784),l=r(l,d,a,c,i[7],14,1735328473),c=r(c,l,d,a,i[12],20,-1926607734),a=o(a,c,l,d,i[5],4,-378558),d=o(d,a,c,l,i[8],11,-2022574463),l=o(l,d,a,c,i[11],16,1839030562),c=o(c,l,d,a,i[14],23,-35309556),a=o(a,c,l,d,i[1],4,-1530992060),d=o(d,a,c,l,i[4],11,1272893353),l=o(l,d,a,c,i[7],16,-155497632),c=o(c,l,d,a,i[10],23,-1094730640),a=o(a,c,l,d,i[13],4,681279174),d=o(d,a,c,l,i[0],11,-358537222),l=o(l,d,a,c,i[3],16,-722521979),c=o(c,l,d,a,i[6],23,76029189),a=o(a,c,l,d,i[9],4,-640364487),d=o(d,a,c,l,i[12],11,-421815835),l=o(l,d,a,c,i[15],16,530742520),c=o(c,l,d,a,i[2],23,-995338651),a=s(a,c,l,d,i[0],6,-198630844),d=s(d,a,c,l,i[7],10,1126891415),l=s(l,d,a,c,i[14],15,-1416354905),c=s(c,l,d,a,i[5],21,-57434055),a=s(a,c,l,d,i[12],6,1700485571),d=s(d,a,c,l,i[3],10,-1894986606),l=s(l,d,a,c,i[10],15,-1051523),c=s(c,l,d,a,i[1],21,-2054922799),a=s(a,c,l,d,i[8],6,1873313359),d=s(d,a,c,l,i[15],10,-30611744),l=s(l,d,a,c,i[6],15,-1560198380),c=s(c,l,d,a,i[13],21,1309151649),a=s(a,c,l,d,i[4],6,-145523070),d=s(d,a,c,l,i[11],10,-1120210379),l=s(l,d,a,c,i[2],15,718787259),c=s(c,l,d,a,i[9],21,-343485551),e[0]=t(a,e[0]),e[1]=t(c,e[1]),e[2]=t(l,e[2]),e[3]=t(d,e[3])},c=function(e){var t,i=[];for(t=0;64>t;t+=4)i[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return i},l=function(e){var t,i=[];for(t=0;64>t;t+=4)i[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24);return i},d=function(e){var t,i,n,r,o,s,l=e.length,d=[1732584193,-271733879,-1732584194,271733878];for(t=64;l>=t;t+=64)a(d,c(e.substring(t-64,t)));for(e=e.substring(t-64),i=e.length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;i>t;t+=1)n[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(n[t>>2]|=128<<(t%4<<3),t>55)for(a(d,n),t=0;16>t;t+=1)n[t]=0;return r=8*l,r=r.toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(r[2],16),s=parseInt(r[1],16)||0,n[14]=o,n[15]=s,a(d,n),d},u=function(e){var t,i,n,r,o,s,c=e.length,d=[1732584193,-271733879,-1732584194,271733878];for(t=64;c>=t;t+=64)a(d,l(e.subarray(t-64,t)));for(e=c>t-64?e.subarray(t-64):new Uint8Array(0),i=e.length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;i>t;t+=1)n[t>>2]|=e[t]<<(t%4<<3);if(n[t>>2]|=128<<(t%4<<3),t>55)for(a(d,n),t=0;16>t;t+=1)n[t]=0;return r=8*c,r=r.toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(r[2],16),s=parseInt(r[1],16)||0,n[14]=o,n[15]=s,a(d,n),d},h=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],f=function(e){var t,i="";for(t=0;4>t;t+=1)i+=h[15&e>>8*t+4]+h[15&e>>8*t];return i},p=function(e){var t;for(t=0;e.length>t;t+=1)e[t]=f(e[t]);return e.join("")},g=function(e){return p(d(e))},m=function(){this.reset()};"5d41402abc4b2a76b9719d911017c592"!==g("hello")&&(t=function(e,t){var i=(65535&e)+(65535&t),n=(e>>16)+(t>>16)+(i>>16);return n<<16|65535&i}),m.prototype.append=function(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),this.appendBinary(e),this},m.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var t,i=this._buff.length;for(t=64;i>=t;t+=64)a(this._state,c(this._buff.substring(t-64,t)));return this._buff=this._buff.substr(t-64),this},m.prototype.end=function(e){var t,i,n=this._buff,r=n.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;r>t;t+=1)o[t>>2]|=n.charCodeAt(t)<<(t%4<<3);return this._finish(o,r),i=e?this._state:p(this._state),this.reset(),i},m.prototype._finish=function(e,t){var i,n,r,o=t;if(e[o>>2]|=128<<(o%4<<3),o>55)for(a(this._state,e),o=0;16>o;o+=1)e[o]=0;i=8*this._length,i=i.toString(16).match(/(.*?)(.{0,8})$/),n=parseInt(i[2],16),r=parseInt(i[1],16)||0,e[14]=n,e[15]=r,a(this._state,e)},m.prototype.reset=function(){return this._buff="",this._length=0,this._state=[1732584193,-271733879,-1732584194,271733878],this},m.prototype.destroy=function(){delete this._state,delete this._buff,delete this._length},m.hash=function(e,t){/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e)));var i=d(e);return t?i:p(i)},m.hashBinary=function(e,t){var i=d(e);return t?i:p(i)},m.ArrayBuffer=function(){this.reset()},m.ArrayBuffer.prototype.append=function(e){var t,i=this._concatArrayBuffer(this._buff,e),n=i.length;for(this._length+=e.byteLength,t=64;n>=t;t+=64)a(this._state,l(i.subarray(t-64,t)));return this._buff=n>t-64?i.subarray(t-64):new Uint8Array(0),this},m.ArrayBuffer.prototype.end=function(e){var t,i,n=this._buff,r=n.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;r>t;t+=1)o[t>>2]|=n[t]<<(t%4<<3);return this._finish(o,r),i=e?this._state:p(this._state),this.reset(),i},m.ArrayBuffer.prototype._finish=m.prototype._finish,m.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._state=[1732584193,-271733879,-1732584194,271733878],this},m.ArrayBuffer.prototype.destroy=m.prototype.destroy,m.ArrayBuffer.prototype._concatArrayBuffer=function(e,t){var i=e.length,n=new Uint8Array(i+t.byteLength);return n.set(e),n.set(new Uint8Array(t),i),n},m.ArrayBuffer.hash=function(e,t){var i=u(new Uint8Array(e));return t?i:p(i)},e.MD5=m}("undefined"==typeof exports?r.core.util:exports),function(e){var t={readFileInSlices:function(e,t,i,n){var o,s=new FileReader,a=0;s.onloadend=function(c){c.target.readyState==FileReader.DONE&&(r.log("onload returned: "+s.readyState),n(e,c.target.result,function(){a++,t.size>(a+1)*i?(o=t.slice(a*i,(a+1)*i),1==s.readyState,r.log("before reading: "+s.readyState),s.readAsArrayBuffer(o)):t.size>a*i?(o=t.slice(a*i,t.size),s.readAsArrayBuffer(o)):(r.debug("Finished reading file "+e),n(e))}))},o=t.slice(a*i,(a+1)*i),s.readAsArrayBuffer(o)}};e.fileHandler=t}("undefined"==typeof exports?r.core.util:exports),function(e){e.randomKFromN=function(e,t){var i=[];if(e>t){for(var n=0;t>=n;n++)i.push(n);return i}for(;e>i.length;){for(var r=Math.ceil(Math.random()*(t+1))-1,o=!1,n=0;i.length>n;n++)if(i[n]==r){o=!0;break}o||i.push(r)}return i},e.randSample=function(t,i){if(0==t.length)return t;var n=e.randomKFromN(i,t.length-1);return e.sampleIndexes(t,n)},e.sampleIndexes=function(e,t){sampledArr=[];for(var i=0;t.length>i;i++)sampledArr.push(e[t[i]]);return sampledArr},e.shuffle=function(e){var t,i,n=e.length;if(n)for(;--n;)i=Math.floor(Math.random()*(n+1)),t=e[i],e[i]=e[n],e[n]=t;return e}}("undefined"==typeof exports?r.core.util:exports),window=window||self,function(e){e.loadScript=function(e,t){var i=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.src=e,n.onreadystatechange=t,n.onload=t,i.appendChild(n)},e.isObjectEmpty=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},e.envokeCallback=function(e,t,i){i=i||window,e&&"function"==typeof e?e.apply(i,t):r.log("couldn't envoke the callback: "+e)},e.executeFunctionByName=function(e,t,i){for(var n=e.split("."),r=n.pop(),o=0;n.length>o;o++)t=t[n[o]];return t[r].apply(t,i)},e.overrideNative=function(){floor=Math.floor,Math.floor=function(e){var t=e;return isNaN(t)?(console.log("bad: "+t),void 0):floor(e)},ceil=Math.ceil,Math.ceil=function(e){var t=e;return isNaN(t)?(console.log("bad: "+t),void 0):ceil(e)},round=Math.round,Math.round=function(e){var t=e;return isNaN(t)?(console.log("bad: "+t),void 0):round(e)}},r.core.util.overrideNative()}("undefined"==typeof exports?r.core.util:exports),e("../util/lang_ext.js"),function(e){e.AvailabilityMapBase=Object.subClass({name:"peer5.core.dataStructures.AvailabilityMapBase",ctor:function(){},has:function(){throw"unimplemented method"},set:function(){throw"unimplemented method"},isFull:function(){throw"unimplemented method"},serialize:function(){throw"unimplemented method"},deserializeAndCopy:function(){throw"unimplemented method"},deserializeAndUpdate:function(){throw"unimplemented method"}})}("undefined"==typeof exports?r.core.dataStructures:exports),function(t){var i=(e("./AvailabilityMapBase.js")||r.core.dataStructures).AvailabilityMapBase;t.AvailabilityMap=i.subClass({name:"peer5.core.dataStructures.AvailabilityMap",ctor:function(e,t){if(this._super(e),this.seeder=t,this.size=e,this.length=Math.ceil(this.size/8),this.bitArray=new Uint8Array(this.length),t)for(var i=0;this.length>i;i++)this.bitArray[i]=255;this.numOfOnBits=0,this.bitMask=[1,2,4,8,16,32,64,128]},has:function(e){if(this.isFull())return!0;var t=this.getOffsets(e);return this.bitArray[t.index]&this.bitMask[t.bit]},set:function(e){if(!this.has(e)){var t=this.getOffsets(e);this.bitArray[t.index]=this.bitArray[t.index]|this.bitMask[t.bit],this.numOfOnBits++}},setSeeder:function(){this.numOfOnBits=this.size},isFull:function(){return this.numOfOnBits==this.size},serialize:function(){return this.bitArray},deserializeAndCopy:function(e){this.bitArray=e;for(var t=0,i=0;e.length>i;++i)if(0!=e[i])for(var n=0;this.bitMask.length>n;++n)this.bitArray[i]&this.bitMask[n]&&t++;this.numOfOnBits=t},deserializeAndUpdate:function(e){for(var t=0;e>t;++t)this.set(e[t]);this.numOfOnBits+=e.length},getOffsets:function(e){var t={};return t.index=Math.floor(e/8),t.bit=e%8,t}})}("undefined"==typeof exports?r.core.dataStructures:exports),function(t){var i=(e("./AvailabilityMap.js")||r.core.dataStructures).AvailabilityMap;t.AvailabilityMapFS=i.subClass({name:"peer5.core.dataStructures.AvailabilityMap",ctor:function(e,t,i,n){this._super(e,!1),this.numOfOnFSBits=0,this.resourceId=t,this.metadataFile=t+".fi",this._initiateFromFilesystem(i,n),this.fsBitArray=new Uint8Array(this.length)},setFS:function(e,t){if(!this.has(e)||this.hasFS(e))return t(!1),void 0;var i=this.getOffsets(e),n=new Uint8Array([this.fsBitArray[i.index]|this.bitMask[i.bit]]);this.fsBitArray[i.index]=this.fsBitArray[i.index]|this.bitMask[i.bit],this.numOfOnFSBits++;var o=this;r.core.data.FSio.write(this.metadataFile,n,i.index,function(e,i){return e?(t(!0),void 0):(r.warn("couldn't write index to metadata file "+o.metadataFile),"space"===i?o._handleOutOfSpaceError():o._handleWriteError(),t(error),void 0)})},setFSFull:function(e){var t=this;r.core.data.FSio.write(this.metadataFile,this.bitArray,0,function(i){return i?(e(!0),void 0):(t._handleWriteError(),e(!1),void 0)})},hasFS:function(e){if(this.isFullFS())return!0;var t=this.getOffsets(e);return this.fsBitArray[t.index]&this.bitMask[t.bit]},isFullFS:function(){return this.numOfOnFSBits===this.size},deserializeAndCopy:function(e){this.fsBitArray=e;for(var t=0,i=0;e.length>i;++i)if(0!=e[i])for(var n=0;this.bitMask.length>n;++n)this.fsBitArray[i]&this.bitMask[n]&&t++;this.numOfOnFSBits=t},removeBlock:function(e,t){if(this.has(e)){var i=this.getOffsets(e),n=this.bitArray[i.index]&~this.bitMask[i.bit],o=this;r.core.data.FSio.write(this.metadataFile,n,i.index,function(e,s){e?(o.bitArray[i.index]=n,t(!0)):(r.warn("couldn't write index to metadata file "+o.metadataFile),"space"===s?o._handleOutOfSpaceError():o._handleWriteError(),t(!1))})}else t(!0)},removeBlocksFrom:function(e,t){if(e>this.size-1)return t(!0),void 0;var i=this;this.removeBlock(e,function(n){return n?(i.removeBlocksFrom(e+1,t),void 0):(t(!1),void 0)})},reset:function(e){this.removeBlocksFrom(0,e)},renameResource:function(e,t){var i=e+".fi",n=this;r.core.data.FSio.renameResource(this.metadataFile,i,function(e){e&&(n.metadataFile=i),t(e)})},_initiateFromFilesystem:function(e,t){var i=this;r.core.data.FSio.isExist(this.metadataFile,function(n){n?(r.info("metadata file "+i.metadataFile+" exists"),r.core.data.FSio.read(i.metadataFile,0,i.length,function(e,n){e?(i.deserializeAndCopy(n),r.info("finished initiating AvailabilityMap from FS"),t(!0)):(r.warn("error reading metadataFile "+i.metadataFile),t(!1))})):(r.info("metadata file "+i.metadataFile+" doesn't exist, creating a new one"),e>i.length?r.core.data.FSio.createResource(i.metadataFile,function(e){e?(r.log("created metadata file, initiating its length"),r.core.data.FSio.write(i.metadataFile,new Uint8Array([]),i.length-1,function(e,n){e?t(!0):("space"===n?i._handleOutOfSpaceError():i._handleWriteError(),t(!1))})):t(!1)}):(r.warn("not enough space to create metadata file: "+i.metadatFile+", removing root dir"),r.core.data.FSio.removeRootDir(function(){r.core.data.FSio.createResource(i.metadataFile,function(e){e?(r.log("created metadata file, initiating its length"),r.core.data.FSio.write(i.metadataFile,new Uint8Array([]),i.length-1,function(e,i){e?t(!0):("space"===i?radio("handleOutOfSpaceError").broadcast():radio("handleWriteError").broadcast(),t(!1))})):t(!1)})})))})}})}("undefined"==typeof exports?r.core.dataStructures:exports),function(){r.core.dataStructures.DoublyLinkedList=Object.subClass({name:"peer5.core.dataStructures.DoublyLinkedList",ctor:function(){this.length=0,this.tail=null,this.head=null},insert:function(e){var t={prev:this.tail,next:null,value:e};this.tail&&(this.tail.next=t),this.tail=t,0==this.length&&(this.head=t),this.length++},remove:function(e){e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),this.tail==e&&(this.tail=e.prev),this.head==e&&(this.head=e.next),!this.head,this.length--},toString:function(){for(var e=this.head;e;)r.log(e.value),e=e.next}})}(),function(){r.core.dataStructures.LRU=Object.subClass({name:"peer5.core.dataStructures.LRU",ctor:function(e,t){this.max=e,this.dict={},this.list=new r.core.dataStructures.DoublyLinkedList,this.deleteCB=t},set:function(e,t){if(r.debug("LRU.set with key: "+e),this.dict[e]&&this._delete(e),this.list.insert(e),this.dict[e]={value:t,p:this.list.tail},this.list.length>this.max){var i=this.list.head;this._delete(i.value,this.deleteCB)}},get:function(e){if(r.debug("LRU.get with key: "+e),this.dict[e]){var t=this.dict[e].p;return t==this.list.tail?this.dict[e].value:(this.list.remove(t),this.list.insert(e),this.dict[e].p=this.list.tail,this.dict[e].value)}return!1},_delete:function(e,t){r.debug("removing key "+e+" from lru");var i=this.dict[e];this.list.remove(i.p),delete this.dict[e],t&&t(e,i.value)}})}(),function(){r.core.transport.AbstractPeerConnection=Object.subClass({name:"peer5.core.transport.AbstractPeerConnection",ctor:function(e,t,i){this.peerConnection,this.dataChannel,this.label=i?e+t:t+e,this.originId=e,this.targetId=t,this.createAnswerConstraints={},this.createOfferConstraints={},this.startTime,this.ready=!1,this.requestDropped=0,this.numOfRequestedChunks=0,this.numOfExpiredChunks=0,this.numOfPendingChunks=0,this.maxNumOfPendingChunks=r.config.MAX_PENDING_CHUNKS/2,this.minLatencyForChunk=null,this.maxLatencyForChunk=null,this.avgLatencyForChunk=null,this.connectingDuration=null,this.numOfChunksArrived=0,this.failure=!1},setupCall:function(){throw"unimplemented method"},handleMessage:function(){throw"unimplemented method"},send:function(){throw"unimplemented method"}})}(),function(){r.core.transport.PeerConnectionImpl=r.core.transport.AbstractPeerConnection.subClass({name:"peer5.core.transport.PeerConnectionImpl",ctor:function(e,t,i){this._super(e,t,i),this.reliable=!1,window.webkitRTCPeerConnection?(this.RTCPeerConnection=webkitRTCPeerConnection,this.RTCSessionDescription=RTCSessionDescription):window.mozRTCPeerConnection&&(r.config.TURN_SERVERS=[],this.RTCPeerConnection=mozRTCPeerConnection,this.RTCSessionDescription=mozRTCSessionDescription,RTCIceCandidate=mozRTCIceCandidate),this.useBase64=!1,this.dataChannelOptions=this.reliable?{}:{ordered:!1,maxRetransmits:0},this.initiatePeerConnection(i)},setupCall:function(){this.startTime=Date.now(),r.debug("createOffer with constraints: "+JSON.stringify(this.createOfferConstraints,null," ")),this.peerConnection.createOffer(this.setLocalAndSendMessage_,function(e){r.debug("createOffer(): failed, "+e)},this.createOfferConstraints)},handleMessage:function(e){if(parsed_msg=e.sdpMessage,r.info("handling message "+e),parsed_msg.type){var t=new this.RTCSessionDescription(parsed_msg),i=this;if(!this.peerConnectionStateValid())return;if(this.peerConnection.remoteDescriptionSet=!0,r.debug("adding remote description: "+this.targetId),this.peerConnection.setRemoteDescription(t,function(){if(r.debug("setRemoteDescription(): success."),i.peerConnection.remoteDescriptionSuccessfullySet=!0,"offer"==t.type){if(r.debug("createAnswer with constraints: "+JSON.stringify(this.createAnswerConstraints,null," ")),!i.peerConnectionStateValid())return;i.peerConnection.createAnswer(i.setLocalAndSendMessage_,function(e){r.debug("createAnswer(): failed, "+e)},i.createAnswerConstraints)}},function(e){r.debug("setRemoteDescription(): failed, "+e)}),this.peerConnection.candidatesMsgQueue){for(var n=0;this.peerConnection.candidatesMsgQueue.length>n;++n)this.peerConnection.addIceCandidate(new RTCIceCandidate(this.peerConnection.candidatesMsgQueue[n]));this.peerConnection.candidatesMsgQueue=null}}else{if(parsed_msg.candidate){if(!this.peerConnectionStateValid())return;if(!this.peerConnection.remoteDescriptionSet)return r.debug("added ice candidate before setting remote description - not adding: "+this.targetId),this.peerConnection.candidatesQueue||(this.peerConnection.candidatesMsgQueue=[]),this.peerConnection.candidatesMsgQueue.push(parsed_msg),void 0;if(r.debug("signaling state: "+this.peerConnection.signalingState+" icegathering state: "+this.peerConnection.iceGatheringState+" iceconnection state: "+this.peerConnection.iceConnectionState),JSON.stringify(parsed_msg)in this.peerConnection.candidates)return r.warn("candidate was already added"),void 0;if(!this.peerConnectionStateValid())return;var o=new RTCIceCandidate(parsed_msg);return this.peerConnection.addIceCandidate(o),this.peerConnection.candidates[JSON.stringify(parsed_msg)]=Date.now(),void 0}r.log("unknown message received")}},send:function(e){var t=this.dataChannel.bufferedAmount;0!=t&&r.debug("yay! sctp enabled? buffered amount is: "+t);var i=this.useBase64?r.core.util.base64.encode(e):e.buffer,n=this;if("open"==n.dataChannel.readyState.toLowerCase()){r.debug("sending data on dataChannel");try{n.dataChannel.send(i)}catch(o){r.warn("Caught dc error: "+o)}}else r.info("dataChannel was not ready, setting timeout"),setTimeout(function(e,t){n.send(e,t)},r.config.PC_RESEND_INTERVAL,n.dataChannel,i)},close:function(){this.ready=!1,this.dataChannel.close(),this.peerConnection.close()},initiatePeerConnection:function(e){this.initiatePeerConnectionCallbacks(),this.createPeerConnection(),e&&this.ensureHasDataChannel(),setTimeout(function(e){e.ready||(r.info("ready state of PCImpl to "+e.targetId+" = "+e.ready),e.failure=!0,r.warn("couldn't connect to "+e.targetId),e.handlePeerDisconnection(e.targetId))},r.config.PC_FAIL_TIMEOUT,this)},initiatePeerConnectionCallbacks:function(){this.registerEvents()},registerEvents:function(){var e=this;this.setLocalAndSendMessage_=function(t){t.sdp=e.transformOutgoingSdp(t.sdp),e.peerConnection.setLocalDescription(t,function(){r.debug("setLocalDescription(): success.")},function(e){r.debug("setLocalDescription(): failed"+e)}),r.debug("Sending SDP message:\n"+t.sdp);var i=new r.core.protocol.Sdp(e.originId,e.targetId,t),n=r.core.protocol.BinaryProtocol.encode([i]);radio("websocketsSendData").broadcast(n)},this.iceCallback_=function(t){if(t.candidate&&"disconnected"!=t.target.iceConnectionState){var i=new r.core.protocol.Sdp(e.originId,e.targetId,t.candidate),n=r.core.protocol.BinaryProtocol.encode([i]);r.debug("onicecandidate: iceGatheringState: "+t.target.iceGatheringState),radio("websocketsSendData").broadcast(n)}},this.iceStateChangedCallback_=function(t){r.debug("iceGatheringState: "+t.target.iceGatheringState),t.target&&"disconnected"===t.target.iceConnectionState&&(r.info("iceStateChanged to disconnected"),e.handlePeerDisconnection())},this.signalingStateChangeCallback_=function(t){t.target&&"closed"==t.target.signalingState&&(r.info("signalingStateChanged to closed"),e.handlePeerDisconnection())},this.onCreateDataChannelCallback_=function(t){null!=e.dataChannel&&"closed"!=e.dataChannel.readyState&&r.warn("Received DataChannel, but we already have one."),e.dataChannel=t.channel,r.debug("DataChannel with label "+e.dataChannel.label+" initiated by remote peer."),e.hookupDataChannelEvents()},this.onDataChannelReadyStateChange_=function(t){var i=t.target.readyState;r.info("DataChannel to "+e.targetId+" state:"+i),"open"==i.toLowerCase()&&(e.ready=!0,e.connectingDuration=Date.now()-e.startTime,radio("connectionReady").broadcast(e.targetId))},this.onDataChannelClose_=function(){r.info("data channel was closed"),e.handlePeerDisconnection()},this.onMessageCallback_=function(t){r.debug("receiving data on dataChannel");var i=e.useBase64?r.core.util.base64.decode(t.data):new Uint8Array(t.data);radio("dataReceivedEvent").broadcast(i,e.targetId)}},ensureHasDataChannel:function(){null==this.peerConnection&&r.warn("Tried to create data channel, but have no peer connection."),null!=this.dataChannel&&"closed"!=this.dataChannel&&r.warn("Creating DataChannel, but we already have one."),this.createDataChannel()},createPeerConnection:function(){for(var e=r.config.STUN_SERVERS,t=r.config.TURN_SERVERS?r.config.TURN_SERVERS:[],i=r.config.TURN_CREDENTIALS,n={iceServers:[]},o=0;e.length>o;++o)n.iceServers.push({url:"stun:"+e[o]});for(var s=0;t.length>s;++s)n.iceServers.push({url:"turn:"+t[s],credential:i[s]});try{r.info("webkitRTCPeerConnection"),this.peerConnection=window.mozRTCPeerConnection?new this.RTCPeerConnection:new this.RTCPeerConnection(n),this.peerConnection.candidates={}}catch(a){r.warn("Failed to create peer connection: "+a)}this.peerConnection.onicecandidate=this.iceCallback_,this.peerConnection.oniceconnectionstatechange=this.iceStateChangedCallback_,this.peerConnection.onicechange=this.iceStateChangedCallback_,this.peerConnection.onsignalingstatechange=this.signalingStateChangeCallback_,this.peerConnection.ondatachannel=this.onCreateDataChannelCallback_},createDataChannel:function(){r.info("createDataChannel"),this.dataChannel=this.peerConnection.createDataChannel(this.label,this.dataChannelOptions),r.debug("DataChannel with label "+this.dataChannel.label+" initiated locally."),this.hookupDataChannelEvents()},closeDataChannel:function(){null==this.dataChannel&&r.warn("Closing DataChannel, but none exists."),r.debug("DataChannel with label "+this.dataChannel.label+" is being closed."),this.dataChannel.close()},hookupDataChannelEvents:function(){this.dataChannel.binaryType="arraybuffer",this.dataChannel.onmessage=this.onMessageCallback_,this.dataChannel.onopen=this.onDataChannelReadyStateChange_,this.dataChannel.onclose=this.onDataChannelClose_,r.info("data-channel-status: "+this.dataChannel.readyState)},transformOutgoingSdp:function(e){var t=e.split("b=AS:30");if(t.length>1)var i=t[0]+"b=AS:1638400"+t[1];else i=e;return i},addStreamCallback_:function(e){r.debug("Receiving remote stream...");var t=document.getElementById("remote-view");t.src=webkitURL.createObjectURL(e.stream),setTimeout(function(){updateVideoTagSize_("remote-view")},500)},removeStreamCallback_:function(){r.debug("Call ended."),document.getElementById("remote-view").src=""},handlePeerDisconnection:function(){this.dataChannel&&"closed"!=this.dataChannel.readyState&&(r.info("handling peer disconnection: closing the datachannel"),this.dataChannel.close()),"closed"!=this.peerConnection.signalingState&&(r.info("handling peer disconnection: closing the peerconnection"),this.peerConnection.close()),radio("connectionFailed").broadcast(this.targetId)},peerConnectionStateValid:function(){return"closed"!=this.peerConnection.iceConnectionState&&"closed"!=this.peerConnection.signalingState?!0:(r.warn("peerConnection state to "+this.targetId+" is invalid - 'not usable'"),!1)}})}(),function(){r.core.stats.StatsCalculator=Object.subClass({name:"peer5.core.stats.StatsCalculator",ctor:function(e,t,i,n){this.swarmId=n,this.url=i,this.resourceId=t,this.size=e,this.numOfChunks=Math.ceil(this.size/r.config.CHUNK_SIZE),this.lastChunkSize=e-(this.numOfChunks-1)*r.config.CHUNK_SIZE,this.transferFinished=!1,this.Report_Created_Timestamp=Date.now(),this.Report_Timestamp=0,this.Stats_Timestamp=Date.now(),this.Total_Recv_No_Waste=0,this.Total_Recv=0,this.Total_Sent=0,this.Total_Sent_P2P=0,this.Total_Recv_P2P=0,this.Total_Recv_HTTP=0,this.Total_Waste_P2P=0,this.Total_Waste_HTTP=0,this.Total_loaded_FS=0,this.numOfSenders=0,this.Total_Avg_Download=0,this.Prev_Report_Timestamp=Date.now(),this.Prev_Total_Recv=0,this.Prev_Total_Sent=0,this.Prev_Total_Sent_P2P=0,this.Prev_Total_Recv_P2P=0,this.Prev_Total_Waste_P2P=0,this.Prev_Total_Waste_HTTP=0,this.Prev_Total_Recv_HTTP=0,this.Prev_Total_loaded_FS=0,this.Avg_Sent=0,this.Avg_Recv=0,this.Avg_Sent_P2P=0,this.Avg_Recv_P2P=0,this.Avg_Loaded_FS=0,this.Avg_Waste_P2P=0,this.Avg_Waste_HTTP=0,this.Avg_Recv_HTTP=0,this.Size_Uploaded_To_Memory=0,this.Total_Avg_Download=0,this.numOfHttpCompletedChunks=0,this.numOfHttpWasteChunks=0,this.numOfP2PCompletedChunks=0,this.numOfP2PWasteChunks=0,this.statsTimestamp=0,this.startTime=Date.now(),this.b1=!1,this.p1=!1,this.p5=!1,this.p10=!1,this.q1=!1,this.q2=!1,this.q3=!1,this.q4=!1,this.registerEvents(),this.calc_avg()},addP2PRecv:function(){this.Total_Recv_P2P+=r.config.CHUNK_SIZE},addP2PWaste:function(){this.numOfP2PWasteChunks++,this.Total_Waste_P2P+=r.config.CHUNK_SIZE},addP2PSent:function(){this.Total_Sent_P2P+=r.config.CHUNK_SIZE},addHTTP:function(){this.Total_Recv_HTTP+=r.config.CHUNK_SIZE},calc_avg:function(){var e=Date.now()-this.statsTimestamp;return 0==this.statsTimestamp?(radio("peer5_state_updated").broadcast(this,this.url),this.statsTimestamp+=e,void 0):(this.statsTimestamp+=e,e/=1e3,this.Total_Recv=this.Total_Recv_HTTP+this.Total_Recv_P2P+this.Total_loaded_FS,this.Total_Recv_No_Waste=this.Total_Recv-this.Total_Waste_HTTP-this.Total_Waste_P2P,this.Total_Sent=this.Total_Sent_P2P,this.Total_Avg_Download=(this.Total_Recv_HTTP+this.Total_Recv_P2P)/((Date.now()-this.startTime)/1e3),this.Avg_Recv=(this.Total_Recv-this.Prev_Total_Recv)/e,this.Avg_Sent=(this.Total_Sent-this.Prev_Total_Sent)/e,this.Avg_Loaded_FS=(this.Total_loaded_FS-this.Prev_Total_loaded_FS)/e,this.Avg_Sent_P2P=(this.Total_Sent_P2P-this.Prev_Total_Sent_P2P)/e,this.Avg_Recv_P2P=(this.Total_Recv_P2P-this.Prev_Total_Recv_P2P)/e,this.Avg_Waste_P2P=(this.Total_Waste_P2P-this.Prev_Total_Waste_P2P)/e,this.Avg_Waste_HTTP=(this.Total_Waste_HTTP-this.Prev_Total_Waste_HTTP)/e,this.Avg_Recv_HTTP=(this.Total_Recv_HTTP-this.Prev_Total_Recv_HTTP)/e,this.Avg_Recv_WS=(this.Total_Recv_WS-this.Prev_Total_Recv_WS)/e,this.Avg_Sent_WS=(this.Total_Sent_WS-this.Prev_Total_Sent_WS)/e,this.Offloading=this.Total_Recv_P2P/(this.Total_Recv_HTTP+this.Total_Recv_P2P),this.Prev_Total_Recv=this.Total_Recv,this.Prev_Total_Sent=this.Total_Sent,this.Prev_Total_Sent_P2P=this.Total_Sent_P2P,this.Prev_Total_Recv_P2P=this.Total_Recv_P2P,this.Prev_Total_Waste_P2P=this.Total_Waste_P2P,this.Prev_Total_Waste_HTTP=this.Total_Waste_HTTP,this.Prev_Total_Recv_HTTP=this.Total_Recv_HTTP,this.Prev_Total_loaded_FS=this.Total_loaded_FS,radio("peer5_state_updated").broadcast(this,this.url),void 0)},registerEvents:function(){var e=this;radio("blockReceivedEvent").subscribe([function(t){if(!(!t||t.swarmId!==this.swarmId&&t.url!==this.resourceId||this.Total_loaded_FS>=this.Total_Recv)){var i=this.resourceId||this.swarmId,n=r.core.data.BlockCache.get(i),o=n.getCompletionRate();!this.b1&&o>0&&(this.b1=!0,radio("peer5_b1_finished").broadcast(Date.now()-this.startTime)),!this.p1&&o>=.01&&(this.p1=!0,radio("peer5_p1_finished").broadcast(this.Total_Avg_Download)),!e.p5&&o>=.05&&(e.p5=!0,radio("peer5_p5_finished").broadcast(this.Total_Avg_Download)),!e.p10&&o>=.1&&(e.p10=!0,radio("peer5_p10_finished").broadcast(this.Total_Avg_Download)),!e.q1&&o>=.25&&(e.q1=!0,radio("peer5_q1_finished").broadcast(this.Total_Avg_Download)),!e.q2&&o>=.5&&(e.q2=!0,radio("peer5_q2_finished").broadcast(this.Total_Avg_Download)),!e.q3&&o>=.75&&(e.q3=!0,radio("peer5_q3_finished").broadcast(this.Total_Avg_Download)),!e.q4&&o>=1&&(e.q4=!0,radio("peer5_q4_finished").broadcast(this.Total_Avg_Download))}},this]),radio("peer5_received_fs_chunk").subscribe([function(e,t){(this.resourceId===t||this.swarmId===t)&&(this.Total_loaded_FS+=e==this.numOfChunks-1?this.lastChunkSize:r.config.CHUNK_SIZE)},this]),radio("peer5_received_http_chunk").subscribe([function(e,t){this.resourceId!==t&&this.swarmId!==t},this]),radio("peer5_waste_http_chunk").subscribe([function(e,t){(this.resourceId===t||this.url===t)&&(this.Total_Waste_HTTP+=e==this.numOfChunks-1?this.lastChunkSize:r.config.CHUNK_SIZE)},this]),radio("peer5_new_p2p_chunk").subscribe([function(t,i){(this.resourceId===i||this.swarmId===i)&&(e.Total_Recv_P2P+=t==this.numOfChunks-1?this.lastChunkSize:r.config.CHUNK_SIZE)},this]),radio("peer5_waste_p2p_chunk").subscribe([function(t,i){(this.resourceId===i||this.swarmId===i)&&(e.numOfP2PWasteChunks++,e.Total_Waste_P2P+=t==this.numOfChunks-1?this.lastChunkSize:r.config.CHUNK_SIZE)},this]),radio("chunkAddedToBlockMap").subscribe([function(){e.Size_Uploaded_To_Memory+=r.config.CHUNK_SIZE},this]),radio("chunkSentEvent").subscribe([function(t){(this.resourceId===t||this.swarmId===t)&&(e.Total_Sent_P2P+=r.config.CHUNK_SIZE)},this]),radio("xhrBytesReceived").subscribe([function(t,i){this.url===i&&(e.Total_Recv_HTTP+=t)},this]),radio("transferFinishedEvent").subscribe([function(t){t&&t&&t.swarmId===this.swarmId&&(e.transferFinished=!0,e.Total_Avg_Download=e.size/((Date.now()-e.startTime)/1e3))},this]),radio("beforeUnload").subscribe([function(){var e=this.resourceId||this.swarmId,t=r.core.data.BlockCache.get(e),i=t.getCompletionRate();radio("exitPageStats").broadcast(i,this.Avg_Recv,this.Total_Avg_Download)},this])}})}(),function(){r.core.controllers.IController=Object.subClass({download:function(){throw"unimplemented method"},stopResource:function(){throw"unimplemented method"},removeResource:function(){throw"unimplemented method"},init:function(){throw"unimplemented method"},isPendingBlock:function(){throw"unimplemented method"},getConnectionStats:function(){throw"unimplemented method"}})}(),function(){r.core.controllers.AbstractController=r.core.controllers.IController.subClass({ctor:function(){this.resourceState={},this.pendingBlocks={}},init:function(e,t){(t||!this.resourceState.hasOwnProperty(e))&&(this.resourceState[e]=!0,(t||!this.pendingBlocks[e])&&(this.pendingBlocks[e]={}))},removeResource:function(e){this.resourceState[e]=!1,delete this.resourceState[e],this.pendingBlocks[e]={},delete this.pendingBlocks[e]},stopResource:function(e){this.resourceState[e]="stop",this.pendingBlocks[e]={},delete this.pendingBlocks[e]},isPendingBlock:function(e,t){return this.resourceState[e]!==!0?!1:this.pendingBlocks[e][t]?r.core.util.isObjectEmpty(this.pendingBlocks[e][t])?(delete this.pendingBlocks[e][t],!1):!0:!1},removeFromPendingBlocks:function(e,t){var i=r.core.data.BlockCache.get(e);if(i){var n=i.getBlockIdOfChunk(t);this.pendingBlocks[e][n]?delete this.pendingBlocks[e][n][t]:r.warn("trying to remove a pending chunk from a non pending block")}},addToPendingBlocks:function(e,t){var i=r.core.data.BlockCache.get(e),n=i.getBlockIdOfChunk(t);this.pendingBlocks[e][n]||(this.pendingBlocks[e][n]={}),this.pendingBlocks[e][n][t]=Date.now()},addChunk:function(e,t,i){var n=r.core.data.BlockCache.get(e);n.setChunk(i,t)},getRarestBlocks:function(e,t,i){for(var n,o,s=r.core.data.BlockCache.get(e),a=[],c=[],l=this.P2PController||this,d=this.urlToId?this.urlToId[e]:e,u=0,h=s.getNumOfBlocks();h>u;u++)if(o=0,i(u)){for(var f in l.remoteAvailabilityMaps[d])l.remoteAvailabilityMaps[d][f].has(u)&&o++;0==c.length?(a.push(u),n=o):o===n?a.push(u):n>o&&(a=[u],n=o)}var p=r.core.util.randSample(a,t);return p},getSeqBlocks:function(e,t,i){for(var n=r.core.data.BlockCache.get(e),o=[],s=n.getFirstMissingBlock(),a=n.getNumOfBlocks()-1,c=s;a>=c&&t>o.length;c++)if(i(c))o.push(c);else if(o.length)break;return o}})}(),function(){r.core.controllers.P2PController=r.core.controllers.AbstractController.subClass({ctor:function(e){this._super(),this.clientId=e,this.peerConnections={},this.initPeerConnections={},this.droppedConnections={},this.inited=!1,this.remoteAvailabilityMaps={},this.p2pPendingChunks={},this.peerSwarms={},this.peerConnectionImpl=null,this.prefetchFlag={},this.resourceState={},this.configureBrowserSpecific(),this.availableTimeStamp=0,this.requestNum=0,this.pendingRequests={},this.registerEvents()},init:function(e,t,i){this._super(e,i),(i||!this.p2pPendingChunks[e])&&(this.p2pPendingChunks[e]={}),this.remoteAvailabilityMaps[e]||(this.remoteAvailabilityMaps[e]={}),this.prefetchFlag[e]=t,this.sendHaveRequestToAll(e)},download:function(e,t,i){if(!t)for(var t in this.peerConnections)this.isPeerAvailable(t)&&this.download(e,t,i);i||(i=function(i){return!o.has(i)&&h.remoteAvailabilityMaps[e][t].has(i)&&!h.isPendingEntireBlock(e,i)});var n=this.peerConnections[t].maxNumOfPendingChunks-this.peerConnections[t].numOfPendingChunks;r.log("allocating "+n+" chunks");var o=r.core.data.BlockCache.get(e);if(this.isAvailable(e)){var s,a,c=[];if((this.lastBlockRequestedInP2P||0===this.lastBlockRequestedInP2P)&&!o.has(this.lastBlockRequestedInP2P)){a=this.lastBlockRequestedInP2P,s=o.getChunkIdsOfBlock(a);for(var l=0;s.length>l&&n>c.length;++l)o.hasChunk(s[l])||this.isPendingChunk(e,s[l])||c.push(s[l])}var d=this.peerConnections[t].maxNumOfPendingChunks-this.peerConnections[t].numOfPendingChunks-c.length;if(d>0)for(var u=Math.ceil(d/(12e5/r.config.CHUNK_SIZE)),h=this,f=this.getRarestBlocks(e,u,i),l=0;f.length>l;l++)if(f[l]!==a){s=[],s=o.getChunkIdsOfBlock(f[l]);for(var p=0;s.length>p&&n>=c.length;++p)o.hasChunk(s[p])||this.p2pPendingChunks.hasOwnProperty(e)&&this.p2pPendingChunks[e].hasOwnProperty(s[p])||c.push(s[p]);this.lastBlockRequestedInP2P=f[l]}return r.log("finished allocating "+c.length+" chunks"+performance.now()),this.distributeChunksAmongSources(e,c,t),c.length}},isPendingEntireBlock:function(e,t){for(var i=r.core.data.BlockCache.get(e),n=i.getChunkIdsOfBlock(t),o=0;n.length>o;o++)if(!this.p2pPendingChunks[e].hasOwnProperty(n[o])&&!i.hasChunk(n[o]))return!1;return!0},isPendingChunk:function(e,t){return this.p2pPendingChunks.hasOwnProperty(e)&&this.p2pPendingChunks[e].hasOwnProperty(t)},isAvailable:function(e){if(this.resourceState[e]!==!0)return!1;var t=Date.now();r.core.data.BlockCache.get(e);for(var i in this.peerConnections)if(this.remoteAvailabilityMaps[e][i]&&this.isPeerAvailable(i))return this.availableTimeStamp=t,!0;return this.availableTimeStamp=t,!1},isPeerAvailable:function(e){if(!this.peerConnections[e])return!1;if(r.log("peerAvailability: "+this.peerConnections[e].numOfPendingChunks+"/"+this.peerConnections[e].maxNumOfPendingChunks),!(this.peerConnections[e].numOfPendingChunks<.9*this.peerConnections[e].maxNumOfPendingChunks))return!1;var t=[];for(var i in this.peerSwarms[e])t.push(i);return 0===t.length?!1:t},getConnectionStats:function(){var e={};for(key in this.peerConnections)this.peerConnections[key]&&(e[key]=new r.core.protocol.Connection(null,null,null,null,this.peerConnections[key].numOfExpiredChunks,this.peerConnections[key].numOfRequestedChunks,this.peerConnections[key].minLatencyForChunk,this.peerConnections[key].ready,this.peerConnections[key].connectingDuration,this.peerConnections[key].failure));for(key in this.droppedConnections)e[key]=new r.core.protocol.Connection(null,null,null,null,this.droppedConnections[key].numOfExpiredChunks,this.droppedConnections[key].numOfRequestedChunks,this.droppedConnections[key].minLatencyForChunk,this.droppedConnections[key].ready,this.droppedConnections[key].connectingDuration,this.droppedConnections[key].failure);return e},getAvailableNumOfChunksToSend:function(){var e=0;for(var t in this.peerConnections)e+=this.peerConnections[t].maxNumOfPendingChunks-this.peerConnections[t].numOfPendingChunks;return e},removeResource:function(e){r.info("removed p2p resource "+e);for(var t in this.pendingRequests)this.pendingRequests[t][1]===e&&(clearTimeout(this.pendingRequests[t][0]),this.expireChunks(this.pendingRequests[t][1],this.pendingRequests[t][2],this.pendingRequests[t][3],t,!0),delete this.pendingRequests[t]);this.remoteAvailabilityMaps[e]={},delete this.remoteAvailabilityMaps[e],this.p2pPendingChunks[e]={},delete this.p2pPendingChunks[e],this._super(e)},stopResource:function(e){r.info("stopped p2p resource "+e);for(var t in this.pendingRequests)this.pendingRequests[t][1]===e&&(clearTimeout(this.pendingRequests[t][0]),this.expireChunks(this.pendingRequests[t][1],this.pendingRequests[t][2],this.pendingRequests[t][3],t,!0),delete this.pendingRequests[t]);this.p2pPendingChunks[e]={},delete this.p2pPendingChunks[e],this._super(e)},registerEvents:function(){var e=this;this.expireChunks=function(t,i,n,o,s){e.pendingRequests[o]&&delete e.pendingRequests[o];for(var a=[],c=0,l=r.core.data.BlockCache.get(t),d=0;i.length>d;d++){var u=i[d];e.p2pPendingChunks.hasOwnProperty(t)&&e.p2pPendingChunks[t].hasOwnProperty(u)&&(r.debug("expiring chunk "+u),delete e.p2pPendingChunks[t][u],e.removeFromPendingBlocks(t,u),c++,e.peerConnections[n]&&(e.peerConnections[n].numOfExpiredChunks++,e.peerConnections[n].numOfPendingChunks--),l.hasChunk(u)||a.push(u))}if(!s)if(c==i.length?e.peerConnections[n]&&(e.peerConnections[n].requestDropped?e.peerConnections[n].requestDropped++:e.peerConnections[n].requestDropped=1,e.peerConnections[n].requestDropped>=r.config.REQUEST_DROPPED_FAIL&&e.closeConnection(n)):e.peerConnections[n]&&(e.peerConnections[n].requestDropped=0),e.peerConnections[n]&&r.log("num of requests dropped from "+n+" is "+e.peerConnections[n].requestDropped),a.length){e.peerConnections[n]&&(e.peerConnections[n].maxNumOfPendingChunks=Math.ceil(Math.max(e.peerConnections[n].maxNumOfPendingChunks/2,e.peerConnections[n].maxNumOfPendingChunks-2*c)),r.log("expiring chunks, windows decreased to "+e.peerConnections[n].maxNumOfPendingChunks));var h;e.peerConnections[n]&&(h=e.isPeerAvailable(n))&&radio("P2PAvailableEvent").broadcast(h,n)}else e.peerConnections[n]&&(e.peerConnections[n].maxNumOfPendingChunks=Math.min(r.config.MAX_PENDING_CHUNKS,e.peerConnections[n].maxNumOfPendingChunks+1),r.log("no chunks expired, windows increased to "+e.peerConnections[n].maxNumOfPendingChunks))},radio("P2PAvailableEvent").subscribe([function(e,t){this.prefetch(e,t)},this]),radio("blockReceivedEvent").subscribe([function(e){e.swarmId&&this.sendHaveToAll(e.swarmId)},this]),radio("dataReceivedEvent").subscribe([function(e,t){var i=r.core.protocol.BinaryProtocol.decode(new Uint8Array(e));if(!this.peerConnections[t])return r.info("got dataReceivedEvent from peerId "+t+"which was not found in peerConnections"),void 0;for(var n=0;i.length>n;++n)if(this.resourceState.hasOwnProperty(i[n].swarmId))switch(i[n].tag){case r.core.protocol.P2P_HAVE:this.receiveHaveMessage(i[n],t);var o;(o=this.isPeerAvailable(t))&&radio("P2PAvailableEvent").broadcast(o,t);break;case r.core.protocol.P2P_HAVE_REQUEST:if(!this.resourceState[i[n].swarmId])return;var s=this.createHaveMessage(i[n].swarmId),a=r.core.protocol.BinaryProtocol.encode([s]);this.peerConnections[t].ready&&this.peerConnections[t].send(a);break;case r.core.protocol.P2P_REQUEST:this.receiveRequestMessage(i[n],t);break;case r.core.protocol.P2P_DATA:this.receiveDataMessage(i[n],t);var o;(o=this.isPeerAvailable(t))&&radio("P2PAvailableEvent").broadcast(o,t);break;case r.core.protocol.P2P_CANCEL:}},this]),radio("connectionReady").subscribe([function(t){this.peerConnections[t]?r.warn("peerConnection to "+t+" was initialized, but we already have a connection to him"):(this.peerConnections[t]=this.initPeerConnections[t],delete this.initPeerConnections[t]),this.peerSwarms[t]={},radio("activePeerConnectionsNumberChanged").broadcast(Object.keys(this.peerConnections).length),r.core.data.BlockCache.forEach(function(i,n){var r=n.metadata;if(r&&e.resourceState[r.swarmId]){var o=r.swarmId;e.sendHaveToNewConnection(o,t)}})},this]),radio("connectionFailed").subscribe([function(e){r.warn("onConnectionFailed: closing connection with "+e),this.peerConnections[e]?delete this.peerConnections[e]:this.initPeerConnections[e]&&delete this.initPeerConnections[e],this.peerSwarms[e]&&delete this.peerSwarms[e],radio("activePeerConnectionsNumberChanged").broadcast(Object.keys(this.peerConnections).length)},this]),radio("receivedMatchEvent").subscribe([function(e){r.info("peer "+this.clientId+" receivedMatch with peer "+e.peerId);var t=e.peerId;this.ensurePeerConnectionInitialized(t,!0)},this]),radio("receivedSDP").subscribe([function(e){this.ensurePeerConnectionInitialized(e.originId,!1),this.initPeerConnections[e.originId]?this.initPeerConnections[e.originId].handleMessage(e):r.log("receivedSDP: this.initPeerConnections ["+e.originId+" ] undefined")},this])},prefetch:function(e,t){var i=e.slice(0);do{var n=i[0];if(this.prefetchFlag[n])var r=this.download(n,t);i.splice(0,1)}while(!r&&0!==i.length)},getSwarmPriority:function(e){for(var t=e[0];r.core.data.BlockCache.get(t).isFull();)e.splice(0,1),t=e[0]},receiveRequestMessage:function(e,t){r.log("received a request for "+e.chunkIds.length+" chunks"),this.sendData(e.swarmId,t,e.chunkIds,0),radio("requestChunks").broadcast(e.swarmId,t,e.chunkIds)},receiveDataMessage:function(e,t){this.receiveP2PChunk(e.swarmId,t,e.chunkId,e.payload)},configureBrowserSpecific:function(){window.mozRTCPeerConnection?(this.peerConnectionImpl=r.core.transport.PeerConnectionImpl,r.config.MAX_PENDING_CHUNKS=r.config.MOZ_MAX_PENDING_CHUNKS):window.webkitRTCPeerConnection&&(this.peerConnectionImpl=r.core.transport.PeerConnectionImpl)},distributeChunksAmongSources:function(e,t,i){var n,o=this;r.debug("chunks to distribute "+t.length),n=i?[i]:Object.keys(this.peerConnections).sort(function(e,t){return o.peerConnections[e].numOfPendingChunks>o.peerConnections[t].numOfPendingChunks});for(var s={},a=0;t.length>a;++a)for(var c=0;n.length>c;++c){var l=Math.floor(t[a]/(12e5/r.config.CHUNK_SIZE));if(this.remoteAvailabilityMaps.hasOwnProperty(e)&&this.remoteAvailabilityMaps[e][n[c]]&&this.remoteAvailabilityMaps[e][n[c]].has(l)&&this.peerConnections[n[c]].numOfPendingChunks<o.peerConnections[n[c]].maxNumOfPendingChunks){s[n[c]]||(s[n[c]]=[]),s[n[c]].push(t[a]),this.peerConnections[n[c]].numOfPendingChunks++;break}}for(var d=0;n.length>d;++d)if(s[n[d]]){var u=n[d],t=s[u];this.addToPendingChunks(e,t,u),this.peerConnections[n[d]].numOfRequestedChunks+=t.length;var h=new r.core.protocol.Request(e,t),f=r.core.protocol.BinaryProtocol.encode([h]);r.log("sending request for "+t.length+" chunks"),this.peerConnections[n[d]].send(f)}},sendToAll:function(e){var t=r.core.protocol.BinaryProtocol.encode([e]);for(var i in this.peerConnections)this.peerConnections[i]&&this.peerConnections[i].ready&&this.peerConnections[i].send(t)},ensurePeerConnectionInitialized:function(e,t){this.peerConnections[e]||this.initPeerConnections[e]||(this.initPeerConnections[e]=new this.peerConnectionImpl(this.clientId,e,t),t&&this.initPeerConnections[e].setupCall())},sendData:function(e,t,i,n){if(this.canUpload(e)&&!(r.config.EMULATE_LOSS&&Math.random()<r.config.EMULATE_LOSS_PERCENTAGE)){var o=i[n];n++;var s=this;r.core.data.BlockCache.get(e).getChunk(o,function(a,c){var l=new r.core.protocol.Data(e,o,c),d=r.core.protocol.BinaryProtocol.encode([l]);s.peerConnections[t].send(d),radio("chunkSentEvent").broadcast(e),i.length>n&&s.sendData(e,t,i,n)})}},sendHaveToNewConnection:function(e,t){var i=r.core.data.BlockCache.get(e);if(i)if(this.peerConnections[t]&&this.peerConnections[t].ready){var n=this.createHaveMessage(e),o=r.core.protocol.BinaryProtocol.encode([n]);this.peerConnections[t].send(o)}else r.log("connection is not ready yet")},receiveHaveMessage:function(e,t){var i=e.swarmId;if(this.remoteAvailabilityMaps[i]){if(!this.remoteAvailabilityMaps[i][t]){r.info("got a have message from a peer with a non initialized availabilityMap");var n=r.core.data.BlockCache.get(e.swarmId);this.remoteAvailabilityMaps[i][t]=new r.core.dataStructures.AvailabilityMap(n.getNumOfBlocks())}e.availabilityMap?this.remoteAvailabilityMaps[i][t].deserializeAndCopy(e.availabilityMap):e.seeder?this.remoteAvailabilityMaps[i][t].setSeeder():this.remoteAvailabilityMaps[i][t].deserializeAndUpdate(e.chunkIds),this.peerSwarms[t]||(this.peerSwarms[t]={}),this.peerSwarms[t][i]=!0}},sendHaveRequestToAll:function(e){var t=new r.core.protocol.HaveRequest(e);this.sendToAll(t)},sendHaveToAll:function(e){var t=this.createHaveMessage(e);this.sendToAll(t)},receiveP2PChunk:function(e,t,i,n){r.debug("receiving chunk "+i);var o=r.core.data.BlockCache.get(e);if(o.hasChunk(i)?(r.log("DOH! I already got chunk: "+i+"!"),radio("peer5_waste_p2p_chunk").broadcast(i,e,t)):(this.addChunk(e,n,i),radio("peer5_new_p2p_chunk").broadcast(i,e,t)),this.p2pPendingChunks.hasOwnProperty(e)&&this.p2pPendingChunks[e].hasOwnProperty(i)){var s=Date.now()-this.p2pPendingChunks[e][i];this.peerConnections[t].minLatencyForChunk?(this.peerConnections[t].minLatencyForChunk=Math.min(this.peerConnections[t].minLatencyForChunk,s),this.peerConnections[t].maxLatencyForChunk=Math.max(this.peerConnections[t].maxLatencyForChunk,s),this.peerConnections[t].avgLatencyForChunk=(this.peerConnections[t].avgLatencyForChunk*this.peerConnections[t].numOfChunksArrived+s)/(1+this.peerConnections[t].numOfChunksArrived)):(this.peerConnections[t].minLatencyForChunk=s,this.peerConnections[t].maxLatencyForChunk=s,this.peerConnections[t].avgLatencyForChunk=s),this.peerConnections[t].numOfChunksArrived++,this.peerConnections[t].numOfPendingChunks--,delete this.p2pPendingChunks[e][i],this.removeFromPendingBlocks(e,i)}else r.log("we already expired chunk: "+i)},addToPendingChunks:function(e,t,i){if(this.peerConnections[i].avgLatencyForChunk&&this.peerConnections[i].numOfChunksArrived>5*this.peerConnections[i].maxNumOfPendingChunks)var n=(r.config.CHUNK_EXPIRATION_TIMEOUT+2*this.peerConnections[i].avgLatencyForChunk)/2;else var n=r.config.CHUNK_EXPIRATION_TIMEOUT;for(var o=0;t.length>o;++o){var s=t[o];this.p2pPendingChunks[e][s]=Date.now(),this.addToPendingBlocks(e,s),radio("peer5_p2p_pending_chunk").broadcast(s,e,i)}if(0!=t.length){this.requestNum++;var a=setTimeout(this.expireChunks,n,e,t,i,this.requestNum);this.pendingRequests[this.requestNum]=[a,e,t,i]}},restoreConnection:function(e){!this.peerConnections[e]&&this.droppedConnections[e]&&(r.warn("connection with "+e+" was restored"),this.peerConnections[e]=this.droppedConnections[e],this.peerConnections[e].ready=!0,delete this.droppedConnections[e],this.sendHaveToNewConnection(e))},createHaveMessage:function(e){var t,i=r.core.data.BlockCache.get(e);return t=i.isFull()?new r.core.protocol.Have(e,!0):new r.core.protocol.Have(e,!1,i.getSerializedMap(),null)},closeConnection:function(e){r.warn("closing connection with "+e+" due to high packet loss"),this.peerConnections[e]&&(r.info(this.peerConnections[e]),this.peerConnections[e].close(),delete this.peerConnections[e])},canUpload:function(){return!0}})}(),function(){var e=function(e){var t={};if(!e)return t;for(var i=e.split("\r\n"),n=0;i.length>n;n++){var r=i[n],o=r.indexOf(": ");if(o>0){var s=r.substring(0,o).toLocaleLowerCase(),a=r.substring(o+2);t[s]=a}}return t},t=function(e,t){return e&&2==e.split("/").length?parseInt(e.split("/")[1]):t?parseInt(t):void 0};r.client.HTTPDownloader=Object.subClass({name:"peer5.client.HTTPDownloader",ctor:function(e){if(this.url=e,this.httpRequestTime=0,this.firstRequest=!0,this.xhr=window._XMLHttpRequest?new _XMLHttpRequest:new XMLHttpRequest,!this.xhr)throw"Cannot instantiate XHR";this.registerEvents()},isHTTPBusy:function(){return this.xhr.busy},cleanHTTP:function(){this.xhr.busy=!1,this.httpRequestTime=0},isHTTPOld:function(){return this.httpRequestTime>0&&this.httpRequestTime+r.config.XHR_TIMEOUT<Date.now()},stop:function(){r.info("aborting XHR"),this.xhr.abort(),this.cleanHTTP(),clearTimeout(this.timerId)},headGET:function(){},head:function(){this.xhr.url=this.url,this.xhr.open("HEAD",this.url),this.xhr.busy=!0;var i=this;this.xhr.onload=function(){if(200!=this.status)return r.warn("Expecting status code 200 from HEAD request. Got "+this.status),this.busy=!1,radio("removeResource").broadcast(this.url,this.status,"head request failed"),void 0;this.busy=!1;var n=this.getAllResponseHeaders(),o=e(n),s=t(o["content-range"],o["content-length"]);if(s){if(r.config.CHUNKY_HEAD)return i.download(0,r.config.CHUNKY_HEAD_LENGTH,!1,!0,s),void 0;this.hash=o["content-md5"],radio("HTTPHeadersReceived").broadcast(this.url,n,o),radio("XHRMetaFetched").broadcast({url:this.url,fileSize:s,hash:null})}else i.download(0,1,!1,!0)},this.xhr.onerror=function(){this.busy=!1,radio("removeResource").broadcast(this.url,this.status,"head request failed")},this.xhr.send(null)},resetTimer:function(e){this.timerId&&(clearTimeout(this.timerId),r.debug("resetTimer clearTimeout of "+this.timerId)),this.timerId=setTimeout(this.expireRequest,r.config.XHR_TIMEOUT,e),r.debug("resetTimer setTimeout returned "+this.timerId)},clearTimer:function(){this.timerId&&(clearTimeout(this.timerId),this.timerId=null)},download:function(i,n,o,s,a){r.debug(i+" - "+n);var c=this;this.httpRequestTime=Date.now(),this.xhr.lastModified=this.httpRequestTime,this.xhr.url=this.url,(!this.xhr.lastTotalLoaded||i>this.xhr.lastTotalLoaded||this.xhr.lastTotalLoaded>n)&&(this.xhr.lastTotalLoaded=i);try{this.xhr.open("GET",this.url,!0)}catch(l){return this.xhr.busy=!1,r.warn("xhr onerror!"),r.warn(l),radio("xhrFailed"+this.xhr.url).broadcast(this.xhr),void 0}this.xhr.busy=!0,this.xhr.startRange=i,this.xhr.endRange=n,n?this.xhr.setRequestHeader("Range","bytes="+i+"-"+n):i&&i>0?this.xhr.setRequestHeader("Range","bytes="+i):i=0,this.xhr.onloadend=function(){r.debug("xhr onloadend start: "+this.startRange+" end: "+this.endRange)},this.xhr.onabort=function(){r.debug("xhr onabort")},this.xhr.onerror=function(e){this.busy=!1,r.warn("xhr onerror!"),r.warn(e),radio("xhrFailed"+this.url).broadcast(this)},this.xhr.responseType="arraybuffer",this.xhr.onload=function(){if(r.log("onload xhr"),this.busy=!1,c.firstRequest&&(c.firstRequest=!1),s){var i=this.getAllResponseHeaders(),n=e(i),o=a||t(n["content-range"]);if(o){var l=new r.core.util.MD5.ArrayBuffer,d=l.end();radio("HTTPHeadersReceived").broadcast(this.url,i,n),radio("XHRMetaFetched").broadcast({url:this.url,fileSize:o,hash:d})}}c.httpRequestTime=0,300>this.status&&this.status>=200&&this.response?(r.info("onload"),radio("bytesReceivedEvent"+this.url).broadcast({url:this.url,offset:this.startRange,dataArray:new Uint8Array(this.response)})):(r.warn("could not determine file size from HTTP"),radio("xhrFailed"+this.url).broadcast(this))},this.xhr.onprogress=function(e){var t=Date.now()-this.lastModified;t>r.config.XHR_TIMEOUT/2&&r.info("onprogress last part arrived in "+t+"ms"),this.lastModified=Date.now(),c.resetTimer(this.lastModified);var i=e.loaded+e.target.startRange-e.target.lastTotalLoaded;r.debug("onprogress size"+i),i>0&&(radio("xhrBytesReceived"+this.url).broadcast(i,this.url),e.target.lastTotalLoaded=e.loaded+e.target.startRange,radio("onprogressEvent "+this.url).broadcast())},r.debug("before sending xhr start: "+i+" end: "+n),this.resetTimer(this.xhr.lastModified);try{this.xhr.send(null)}catch(l){console.log("xhr native error")}r.debug("after sending xhr start: "+i+" end: "+n)},registerEvents:function(){var e=this;this.expireRequest=function(t){e.xhr.lastModified==t&&(r.warn("expiring xhr requested on: "+t),radio("expireHttpRequest").broadcast(r.config.XHR_TIMEOUT),e.stop(),e.xhr.busy=!1,radio("xhrTimeout"+e.url).broadcast(e.xhr))}}})}(),function(){r.client.MultiSlotManager=Object.subClass({name:"peer5.client.MultiSlotManager",ctor:function(e){this.url=e,this.xhrs=[],this.rampup=!0,this.createNewSlot(this.url),this.firstRequest=!0,window.setInterval(this.cron,r.config.XHR_SLOT_PROBE_INTERVAL,this)},createNewSlot:function(e){var t=r.core.util.generate_uuid(),i=e.indexOf("?")>-1?"&":"?",n=e+i+t,o=new r.client.HTTPDownloader(n);this.xhrs.push(o),r.info("created new slot "+n),this.registerNewSlotEvents(n)},isHTTPBusy:function(){for(var e=0;this.xhrs.length>e;++e)if(!this.xhrs[e].isHTTPBusy())return!1;return!0},isHTTPOld:function(){for(var e=0;this.xhrs.length>e;++e)if(!this.xhrs[e].isHTTPOld())return!1;return!0},download:function(e,t,i){for(var n,o=0;this.xhrs.length>o;++o)if(!this.xhrs[o].isHTTPBusy()){n=this.xhrs[o];break}r.debug("downloading "+this.url+" "+e+":"+t),n.download(e,t,i),this.isHTTPBusy()||radio("HTTPAvailableEvent").broadcast(this.url)},stop:function(){for(var e=0;this.xhrs.length>e;++e)this.xhrs[e].stop()},registerNewSlotEvents:function(e){radio("bytesReceivedEvent"+e).subscribe([function(e){r.debug("finished xhr: "+this.url+" "+e.offset),this.firstRequest=!1,e.url=this.url,radio("bytesReceivedEvent").broadcast(e)},this]),radio("xhrFailed"+e).subscribe([function(t){r.debug("expiring xhr: "+this.url+" "+t.startRange+":"+t.endRange),this.xhrs[0].url===e&&this.firstRequest&&radio("removeResource"+e).broadcast(e,t.status,"First xhr failed"),this.rampup=!1;for(var i=0;this.xhrs.length>i;++i)if(this.xhrs[i].url===e){var n=this.xhrs.splice(i,1)[0];n.stop(),r.info("removed slot "+e);break}radio("xhrFailed"+this.url).broadcast(t)},this]),radio("xhrTimeout"+e).subscribe([function(e){radio("xhrFailed"+this.url).broadcast(e)},this]),radio("xhrBytesReceived"+e).subscribe([function(e){radio("xhrBytesReceived").broadcast(e,this.url)},this]);var t=!1;radio("onprogressEvent "+e).subscribe([function(){!t&&this.rampup&&this.xhrs.length<r.config.XHR_CONCURRENT&&(this.createNewSlot(this.url),t=!0,radio("HTTPAvailableEvent").broadcast(this.url))},this])},cron:function(e){e.xhrs.length<r.config.XHR_CONCURRENT&&(e.createNewSlot(e.url),radio("HTTPAvailableEvent").broadcast(this.url))}})}(),function(){r.client.HTTPController=r.core.controllers.AbstractController.subClass({ctor:function(){this._super(),this.Total_Waste_HTTP=0,this.numOfHTTPWasteChunks=0,this.downloadedBytes=0,this.lastFailedStartBlock={},this.httpPendingChunks={},this.xhrs={},this.resourceState={},this.registerEvents()},isAvailable:function(e){return this.resourceState[e]!==!0?!1:!this.xhrs[e].isHTTPBusy()},removeResource:function(e){r.info("removed http resource "+e),this.stop(e),this.httpPendingChunks[e]={},delete this.httpPendingChunks[e],this._super(e)},stopResource:function(e){r.info("stopped http resource "+e),this.stop(e),this.httpPendingChunks[e]={},delete this.httpPendingChunks[e],this._super(e)},init:function(e,t){if(this._super(e,t),!this.xhrs[e]){var i=new r.client.MultiSlotManager(e);radio("xhrFailed"+e).subscribe([function(t){if(this.resourceState[e]===!0){for(var i=t.startRange/r.config.CHUNK_SIZE,n=Math.ceil((t.endRange+1)/r.config.CHUNK_SIZE)-1,o=i;n>=o;o++)delete this.httpPendingChunks[e][o],this.removeFromPendingBlocks(e,o);this.lastFailedStartBlock[e]=t.startRange/12e5,radio("HTTPAvailableEvent").broadcast(e)}},this]),this.xhrs[e]=i}(t||!this.httpPendingChunks[e])&&(this.httpPendingChunks[e]={})},download:function(e,t,i){if(this.isAvailable(e)){var n=r.core.data.BlockCache.get(e);this.xhrs[e]||(this.xhrs[e]=new r.client.HTTPDownloader(e),this.httpPendingChunks[e]={});var o=this.xhrs[e],s=this.httpPendingChunks[e];if(o.isHTTPBusy())return o.isHTTPOld()?(r.warn("http timeout"),this.stop(),0):(r.debug("http busy"),0);!this.lastFailedStartBlock[e]||n.has(this.lastFailedStartBlock[e])||this.isPendingBlock(e,this.lastFailedStartBlock[e])||(t=this.lastFailedStartBlock[e],i=this.lastFailedStartBlock[e]);for(var a=i-t+1,c=t;i>=c;c++){var l=n.getChunkIdsOfBlock(c);for(var d in l)s[l[d]]=Date.now(),this.addToPendingBlocks(e,l[d]),radio("peer5_pending_http_chunk").broadcast(l[d],e,"#000000",2)}this.httpPendingChunks[e]=s;var u=!1;r.log("requesting "+a+" blocks in HTTP");var h=12e5*t,f=Math.min(12e5*(i+1)-1,n.fileSize-1);return o.download(h,f,u),a}},getConnectionStats:function(){},getFirstPendingBlock:function(e){var t=parseInt(Object.keys(this.httpPendingChunks[e])[0]);if(isNaN(t))return-1;var i=r.core.data.BlockCache.get(e).getBlockIdOfChunk(t);return i},addHTTPBytesToChunks:function(e,t,i){for(var n=i.length,o=0,s=r.core.data.BlockCache.get(e);n>0;){var a=Math.floor((t+o)/r.config.CHUNK_SIZE),c=Math.min(r.config.CHUNK_SIZE,n);if(s.hasChunk(a))this.Total_Waste_HTTP+=c,this.numOfHTTPWasteChunks++,r.log("DOH, got bytes for a completed chunk"+a),radio("peer5_waste_http_chunk").broadcast(a,e,"#000000");else{var l=i.subarray(o,o+c);this.addChunk(e,l,a),radio("peer5_received_http_chunk").broadcast(a,e),radio("peer5_new_http_chunk").broadcast(a,e,"#000000")}delete this.httpPendingChunks[e][a],this.removeFromPendingBlocks(e,a),o+=c,n-=c}},registerEvents:function(){radio("XHRMetaFetched").subscribe(function(e){radio("HTTPInited").broadcast(e)}),radio("bytesReceivedEvent").subscribe([function(e){this.addHTTPBytesToChunks(e.url,e.offset,e.dataArray),radio("HTTPAvailableEvent").broadcast(e.url)},this])},stop:function(e){var t=this.xhrs[e];t&&(t.stop(),this.httpPendingChunks[e]={},this.pendingBlocks[e]={})}})}(),function(){r.client.HybridController=r.core.controllers.AbstractController.subClass({ctor:function(e){this.P2PController=new r.core.controllers.P2PController(e),this.httpController=new r.client.HTTPController,this.urlToId={},this.urgent={},this.prefetch={},this.resourceState={},this.registerEvents(),this.lastBlockRequestedInP2P},registerEvents:function(){radio("HTTPInited").subscribe(function(){}),radio("P2PAvailableEvent").subscribe([function(e,t){r.log("P2PAvailableEvent");var i=e.slice(0);do{var n=i[0];if(this.resourceState[n]===!0&&2==this.resourceState[n])return;if(this.prefetch[r.core.data.BlockCache.get(n).getMetadata().url])if(r.config.SEQUENTIAL_DOWNLOAD)var o=this.relaxedP2PDownload(r.core.data.BlockCache.get(n).getMetadata().url,null,null,t);else var o=this.relaxedP2PDownloadRandomly(r.core.data.BlockCache.get(n).getMetadata().url,null,null,t);i.splice(0,1)}while(!o&&0!==i.length)},this]),radio("HTTPAvailableEvent").subscribe([function(e){if(r.debug("http available"),this.httpController.isAvailable(e)&&this.prefetch[e]){var t=r.core.data.BlockCache.get(e);if(t.isFull())return r.info("HTTP Available but already have everything"),this.httpController.stop(e),void 0;var i;i=r.config.SEQUENTIAL_DOWNLOAD?this.relaxedHTTPDownload(e):this.relaxedHTTPDownloadRandomly(e),0===i&&(this.urgent[e]=!0,r.config.SEQUENTIAL_DOWNLOAD?this.aggressiveHTTPDownload(e):this.aggressiveHTTPDownloadRandomly(e))}},this])},removeResource:function(e){this.resourceState[e]=!1,this.P2PController.removeResource(this.urlToId[e]),this.httpController.removeResource(e),delete this.resourceState[e]},stopResource:function(e){this.resourceState[e]="stop",this.P2PController.stopResource(this.urlToId[e]),this.httpController.stopResource(e)},download:function(e,t,i,n){if(this.isAvailable(e)){var o=r.core.data.BlockCache.get(e);if(!o.isFull()){if(t||(t=o.getMissingBlock()),i||(i=o.getNumOfBlocks()-1),n||(n=r.config.HYBRID_REQUEST_THRESHOLD),n>r.config.HYBRID_REQUEST_THRESHOLD&&(this.urgent[e]=!1),t>o.getNumOfBlocks()-1||i>o.getNumOfBlocks()-1)return r.warn("out of range"),void 0;var s=t;t=o.getMissingBlock(),t>s&&radio("blockReceivedEvent").broadcast(o.getMetadata()),(r.config.HTTP_REQUEST_THRESHOLD>n||this.urgent[e])&&(r.config.HTTP_REQUEST_THRESHOLD>n&&(this.urgent[e]=!0),r.debug("urgency is: "+n+" downloading from HTTP"),r.config.SEQUENTIAL_DOWNLOAD?this.aggressiveHTTPDownload(e,t,i):this.aggressiveHTTPDownloadRandomly(e,t,i)),(r.config.P2P_ALWAYS_DOWNLOAD||n>=r.config.P2P_REQUEST_BEGIN_THRESHOLD&&r.config.P2P_REQUEST_END_THRESHOLD>n&&this.P2PController.isAvailable(this.urlToId[e]))&&(r.debug("urgency is: "+n+" downloading from P2P"),r.config.SEQUENTIAL_DOWNLOAD?this.relaxedP2PDownload(e,t,i):this.relaxedP2PDownloadRandomly(e,t,i)),(r.config.HTTP_ALWAYS_DOWNLOAD||n>=r.config.HTTP_REQUEST_THRESHOLD&&r.config.HYBRID_REQUEST_THRESHOLD>=n&&this.httpController.isAvailable(e))&&(r.config.SEQUENTIAL_DOWNLOAD?this.relaxedHTTPDownload(e,t,i):this.relaxedHTTPDownloadRandomly(e,t,i))}}},relaxedHTTPDownload:function(e,t,i){var n=r.core.data.BlockCache.get(e);t||(t=n.getFirstMissingBlock()),i||(i=n.getNumOfBlocks()-1);var o=this,s=this.getSeqBlocks(e,r.config.XHR_MAX_GET,function(r){return r>=t&&i>=r&&n.isEmpty(r)&&!o.httpController.isPendingBlock(e,r)&&!o.P2PController.isPendingBlock(o.urlToId[e],r)});return 0===s.length?0:(this.httpController.download(e,s[0],s[s.length-1]),s[s.length-1]-s[0]+1)},aggressiveHTTPDownload:function(e,t,i){var n=r.core.data.BlockCache.get(e);t||(t=n.getFirstMissingBlock()),i||(i=n.getNumOfBlocks()-1);var o=this,s=this.getSeqBlocks(e,r.config.XHR_MAX_GET,function(n){return n>=t&&i>=n&&!o.httpController.isPendingBlock(e,n)});return 0===s.length?0:(this.httpController.download(e,s[0],s[s.length-1]),s[s.length-1]-s[0]+1)},relaxedHTTPDownloadRandomly:function(e,t,i){var n=r.core.data.BlockCache.get(e);t||(t=n.getFirstMissingBlock()),i||(i=n.getNumOfBlocks()-1);var o=this,s=this.getRarestBlocks(e,r.config.XHR_MAX_GET,function(r){return r>=t&&i>=r&&n.isEmpty(r)&&!o.httpController.isPendingBlock(e,r)&&!o.P2PController.isPendingBlock(o.urlToId[e],r)});return t=s[0],i=s[s.length-1],s.length>0&&this.httpController.download(e,t,i),s.length},aggressiveHTTPDownloadRandomly:function(e,t,i){var n=r.core.data.BlockCache.get(e);t||(t=n.getFirstMissingBlock()),i||(i=n.getNumOfBlocks()-1);var o=this,s=this.getRarestBlocks(e,r.config.XHR_MAX_GET,function(r){return r>=t&&i>=r&&!n.has(r)&&!o.httpController.isPendingBlock(e,r)}),t=s[0],i=s[s.length-1];return s.length>0&&this.httpController.download(e,t,i),s.length},relaxedP2PDownload:function(e,t,i,n){var o=r.core.data.BlockCache.get(e),s=this.urlToId[e];if(this.P2PController.isAvailable(s)){if(t||(t=o.getFirstMissingBlock()),i||(i=o.getNumOfBlocks()-1),t>o.getNumOfBlocks()-1||i>o.getNumOfBlocks()-1)return r.warn("out of range"),void 0;var a=t;for(t=this.lastBlockRequestedInP2P&&!o.has(this.lastBlockRequestedInP2P)?this.lastBlockRequestedInP2P:o.getFirstMissingBlock(),t>a&&radio("blockReceivedEvent").broadcast(o.getMetadata()),this.httpController.getFirstPendingBlock(e);i>=t&&(this.httpController.isPendingBlock(e,t)||this.P2PController.isPendingEntireBlock(s,t));)t++;for(var c,l=[],d=t;i>=d&&o.getNumOfBlocks()>d&&l.length<this.P2PController.getAvailableNumOfChunksToSend();++d)if(!this.httpController.isPendingBlock(e,d)&&!this.P2PController.isPendingEntireBlock(s,d)){c=[],c=o.getChunkIdsOfBlock(d);for(var u=0;c.length>u;++u)o.hasChunk(c[u])||this.P2PController.isPendingChunk(s,c[u])||l.push(c[u]);this.lastBlockRequestedInP2P=d}return this.P2PController.distributeChunksAmongSources(s,l,n),l.length}},relaxedP2PDownloadRandomly:function(e,t,i,n){if(!n)for(var n in this.P2PController.peerConnections)this.P2PController.isPeerAvailable(n)&&this.download(e,t,i,n);var o=r.core.data.BlockCache.get(e);t||(t=o.getFirstMissingBlock()),i||(i=o.getNumOfBlocks()-1);var s=this.urlToId[e],a=this,c=this.P2PController.download(s,n,function(r){return r>=t&&i>=r&&!o.has(r)&&!a.httpController.isPendingBlock(e,r)&&a.P2PController.remoteAvailabilityMaps[s][n].has(r)&&!a.P2PController.isPendingEntireBlock(s,r)});return c},init:function(e,t,i){if(1==i){if(this.resourceState.hasOwnProperty(e.url))return this.resourceState[e.url]=!0,this.httpController.init(e.url,!0),this.P2PController.init(e.swarmId,!1,!0),void 0;this.resourceState[e.url]=i,this.prefetch[e.url]=t,this.urlToId[e.url]=e.swarmId,this.httpController.init(e.url),this.P2PController.init(e.swarmId,!1),this.prefetch&&(this.urgent[e.url]=!1)}else if(2==i){if(this.resourceState.hasOwnProperty(e.swarmId))return this.P2PController.init(e.swarmId,!0,!0),void 0;this.urlToId[e.swarmId]=e.swarmId,this.resourceState[e.swarmId]=i,this.P2PController.init(e.swarmId,!0),this.prefetch&&(this.urgent[e.swarmId]=!1),e.url&&(this.urlToId[e.url]=e.swarmId,this.prefetch[e.url]=t)}else if(3==i){if(this.resourceState.hasOwnProperty(e.url))return this.resourceState[e.url]=!0,this.httpController.init(e.url,!0),void 0;this.resourceState[e.url]=i,this.prefetch[e.url]=t,this.urlToId[e.url]=e.swarmId,this.httpController.init(e.url),this.prefetch&&(this.urgent[e.url]=!1)}},isAvailable:function(e){return(this.P2PController.isAvailable(this.urlToId[e])||this.httpController.isAvailable(e))&&!(this.resourceState[e]===!1||"stop"===this.resourceState[e])},getConnectionStats:function(){return{http:this.httpController.getConnectionStats(),p2p:this.P2PController.getConnectionStats()}},downloadPeriodicTest:function(e){this.resourceState[e]===!0&&this.httpController.isAvailable(e)&&radio("HTTPAvailableEvent").broadcast(e)},stopHttp:function(e){this.httpController.stop(e)}})}(),function(){r.core.transport.WsConnection=Object.subClass({name:"peer5.core.transport.WsConnection",ctor:function(e,t){this.state={connectionOpenTime:0},this.clientId=t,this.wsSeverUrl=e,this.lastPongTimeStamp,this.socketInitating=!0,this.intentionalClose=!1,this.socket,r.config.SIMULATION?Math.random()<r.config.SIMULATORS_DEPLOY_RATIO&&(this.initiateWebSocket(this.wsSeverUrl,this.clientId),setTimeout(function(){new r.client.downloadSimulator},r.config.SIMULATORS_TIMEOUT)):this.initiateWebSocket(this.wsSeverUrl,this.clientId)},initiateWebSocket:function(e,t){var i=this;this.intentionalClose=!1,this.start=Date.now(),this.socket=new WebSocket(e+"?id="+t+"&token="+"z142i5n5qypq4cxr"),r.log("trying to connect to a new websocket"),this.socket.sessionid=t,this.socket.binaryType="arraybuffer",this.socket.onclose=function(e){radio("wsError").broadcast("websocket closed"),r.warn("WebSocket closed with error"),r.warn(e),i.socket=null,i.intentionalClose||(r.info("Peer "+this.sessionid+" is trying to reconnect to the server"),setTimeout(function(){i.initiateWebSocket(i.wsSeverUrl,i.clientId)},r.config.SOCKET_RECONNECTION_INTERVAL))},this.socket.onerror=function(e){r.error("peer with Id "+this.sessionid+" had socket error : "),r.error(e)},this.socket.onopen=function(){var e=Date.now();i.state.connectionOpenTime=e-i.start,i.socketInitating=!1,i.lastPongTimeStamp=e,r.log("websocket took: "+i.state.connectionOpenTime+" to open"),i.socketInit=!0,i.registerServerNotifications(),radio("webSocketInit").broadcast()},radio("websocketsSendData").subscribe([function(e){this.sendData(e)},this])},close:function(){this.intentionalClose=!0,this.socket.close()},registerServerNotifications:function(){var e=this;this.socket.onmessage=function(t){if(e.lastPongTimeStamp=Date.now(),"string"!=typeof t.data)for(var i=r.core.protocol.BinaryProtocol.decode(new Uint8Array(t.data)),n=0;i.length>n;++n)switch(i[n].tag){case r.core.protocol.MATCH:radio("receivedMatchEvent").broadcast(i[n]);break;case r.core.protocol.FILE_INFO:radio("receivedFileInfo").broadcast(i[n]);break;case r.core.protocol.SDP:radio("receivedSDP").broadcast(i[n]);break;case r.core.protocol.SWARM_HEALTH:radio("swarmHealth").broadcast(i[n]);break;case r.core.protocol.SWARM_ERROR:radio("swarmError").broadcast(i[n])}else r.warn("received a string message from server - not supported")}},socketReadyToSend:function(){return this.socket&&this.socketInit&&this.socket.readyState==this.socket.OPEN},sendMessage:function(e){var t=r.core.protocol.BinaryProtocol.encode([e]);this.sendData(t)},sendData:function(e){this.socketReadyToSend()?(r.log("sending data on websockets, at time: "+Date.now()),this.socket.send(e)):r.warn("cant send data - socket is not defined")}})}(),function(){r.core.apiValidators.ApiValidatorBase=Object.subClass({name:"peer5.core.apiValidators.ApiValidatorBase",ctor:function(){this.status=!1},detectBrowser:function(){var e,t=navigator.appName,i=navigator.userAgent,n=i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return n&&null!=(e=i.match(/version\/([\.\d]+)/i))&&(n[2]=e[1]),n=n?[n[1],n[2]]:[t,navigator.appVersion,"-?"]},getMajorVersionNumber:function(e){var t=e.split("."),i=parseInt(t[0]);return i},validate:function(){throw"unimplemented method"}})}(),function(){r.core.apiValidators.ApiValidator=Object.subClass({name:"peer5.core.apiValidators.ApiValidator",ctor:function(e){var t=this.detectBrowser();this.browserName=t[0].toLowerCase(),this.browserVersion=t[1],this.validators={},this.validity={};for(var i in e)this.validators[i]=new e[i](this.browserName,this.browserVersion),this.validity[i]=!1},detectBrowser:function(){var e,t=navigator.appName,i=navigator.userAgent,n=i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return n&&null!=(e=i.match(/version\/([\.\d]+)/i))&&(n[2]=e[1]),n=n?[n[1],n[2]]:[t,navigator.appVersion,"-?"]},validate:function(){var e=!0;switch(this.browserName){case"chrome":if(r.config.DISABLE_CHROME)return!1;break;case"firefox":if(r.config.DISABLE_FIREFOX)return!1}for(var t in this.validators)e=e&&this.validators[t].validate();return e},getBrowser:function(){return{name:this.browserName,version:this.browserVersion}},getStatus:function(){var e={};for(var t in this.validators)e[t]=this.validators[t].status;return e}})}(),function(){r.core.apiValidators.DataChannelsApiValidator=r.core.apiValidators.ApiValidatorBase.subClass({name:"peer5.core.apiValidators.DataChannelsApiValidator",ctor:function(e,t){this._super(),this.browserName=e,this.browserVersion=t,this.browserVersionSupprot={chrome:31,firefox:26,msie:11,opera:12,safari:1e3}},validate:function(){var e=!0;"chrome"==this.browserName&&31>this.getMajorVersionNumber(this.browserVersion)&&(e=!1);var t;try{var i;if(window.webkitRTCPeerConnection){i=window.webkitRTCPeerConnection;var n="stun:stun.l.google.com:19302";servers={iceServers:[{url:"stun:"+n}]},t=new i(servers),t.createDataChannel("test_data_channels",{ordered:!1,maxRetransmits:0})}else window.mozRTCPeerConnection?(i=window.mozRTCPeerConnection,t=new i,t.createDataChannel("test_data_channels",{ordered:!1,maxRetransmits:0})):e=!1}catch(r){e=!1}return t&&t.close(),e||radio("browserUnsupported").broadcast(this.browserName,this.browserVersion,"data channels"),this.status=e,e}})}(),function(){r.core.apiValidators.FileSystemApiValidator=r.core.apiValidators.ApiValidatorBase.subClass({name:"peer5.core.apiValidators.FileSystemApiValidator",ctor:function(e,t){this._super(),this.browserName=e,this.browserVersion=t,this.browserVersionSupprot={chrome:26,firefox:19,msie:11,opera:12,safari:1e3}},validate:function(){if(0==r.config.USE_FS)return!0;var e=this;return"firefox"==this.browserName?(r.config.ALLOWED_FILE_SIZE=r.config.ALLOWED_FILE_SIZE_FF,r.core.data.FSio=new r.core.data.FSioFireFox(function(t){t||(r.info("changing USE_FS to false"),e.status=!1,r.config.USE_FS=!1)}),r.config.IS_FIREFOX=!0,r.config.USE_PERSISTENT||(r.config.USE_FS=!1),window.indexedDB.open||(r.config.USE_FS=!1)):window.webkitRequestFileSystem&&navigator.webkitTemporaryStorage?r.core.data.FSio.requestTempQuota(100,function(t){t||(r.info("changing USE_FS to false"),e.status=!1,r.config.USE_FS=!1)}):r.config.USE_FS=!1,this.status=r.config.USE_FS,!0}})}(),function(){r.overrideXHR=function(){if(window.XMLHttpRequest)window._XMLHttpRequest=window.XMLHttpRequest,window.XMLHttpRequest=r.Request;else{if(!window._XMLHttpRequest)throw"Cannot find XMLHTTPRequest";r.warn("XMLHTTPRequest is already peer5.Request")}},r.revertXHR=function(){window._XMLHttpRequest?(window.XMLHttpRequest=window._XMLHttpRequest,window._XMLHttpRequest=null):r.warn("_XMLHTTPRequest not found")},r.Request=Object.subClass({ctor:function(e){this.readyState=0,this.response,this._responseHeaders,this.responseType="",this.timeout="unimplemented",this.status,this._range,this._get=!1,this._post=!1,this._id,this._swarmState={numOfPeers:0,uploaded:0},this.fileInfo,e=this.sanitizeCtorArgs(e),this.downloadMode=e.downloadMode,this.md5=e.md5,this.sha1=e.sha1,this.onloadstart,this.onprogress,this.onabort,this.onerror,this.onload,this.ontimeout="unimplemented",this.onloadend,this.onreadystatechange,this.onswarmstatechange},open:function(e,t){if(!e)return!1;if("GET"==e.toUpperCase()&&t)this._get=!0,this._id=t;else{if("POST"!=e.toUpperCase())return!1;this._post=!0,this._id=r.core.util.generate_uuid()}this.changeReadyState(1),this.registerEvents()},setRequestHeader:function(){},send:function(e){radio("requestSent").broadcast();var t=this;r.clientInstance.isValidated(function(i){if(!i)return r.getCompatibilityStatus(function(e){t.handleRequestError(e[0])}),void 0;if(!e&&t._get&&1==t.readyState){var n={};t.sha1?n.sha1=t.sha1:t.md5&&(n.md5=t.md5),r.clientInstance.addResource(t._id,t.downloadMode,n)}e&&t._post&&1==t.readyState&&e instanceof Blob&&t.changeReadyState(2)&&r.clientInstance.readBlobData(t._id,e)})},getResponseHeader:function(e){if(2>this.readyState)throw"Response headers are available only when readystate >=2";var t=this._responseMap[e];if(t)return t;throw e+" is not present in the response headers"},getAllResponseHeaders:function(){return this._responseHeaders},getFileInfo:function(){return this.readyState>=2?this.fileInfo:void 0},abort:function(e){if(this.readyState>=1&&3>this.readyState)return this.queuedCommand=["abort",e],void 0;for(;4>this.readyState;)this.changeReadyState(this.readyState+1);var t=this;this.createProgressEvent(this.fileInfo,function(i){e&&e.leaveSwarm?r.clientInstance.removeResource(t._id):r.clientInstance.stopResource(t._id),t.unregisterEvents(),r.core.util.envokeCallback(t.onabort,[i],t),r.core.util.envokeCallback(t.onloadend,[i],t)})},registerEvents:function(){radio("HTTPHeadersReceived").subscribe([this.HTTPHeadersReceivedEvent,this]),radio("fileInfoReceived").subscribe([this.fileInfoReceivedEvent,this]),radio("resourceReady").subscribe([this.resourceReadyEvent,this]),radio("chunkReceivedEvent").subscribe([this.chunkReceivedEvent,this]),radio("blockReceivedEvent").subscribe([this.blockReceivedEvent,this]),radio("transferLoadedEvent").subscribe([this.transferLoadedEvent,this]),radio("requestError").subscribe([this.requestErrorEvent,this]),radio("activePeerConnectionsNumberChanged").subscribe([this.activePeerConnectionsNumberChangedEvent,this]),radio("chunkSentEvent").subscribe([this.chunkSentEvent,this])},unregisterEvents:function(){radio("HTTPHeadersReceived").unsubscribe([this.HTTPHeadersReceivedEvent,this]),radio("fileInfoReceived").unsubscribe([this.fileInfoReceivedEvent,this]),radio("resourceReady").unsubscribe([this.resourceReadyEvent,this]),radio("blockReceivedEvent").unsubscribe([this.blockReceivedEvent,this]),radio("transferLoadedEvent").unsubscribe([this.transferLoadedEvent,this]),radio("requestError").unsubscribe([this.requestErrorEvent,this]),radio("activePeerConnectionsNumberChanged").unsubscribe([this.activePeerConnectionsNumberChangedEvent,this]),radio("chunkSentEvent").unsubscribe([this.chunkSentEvent,this])},HTTPHeadersReceivedEvent:function(e,t,i){e==this._id&&(this._responseHeaders=t,this._responseMap=i)},fileInfoReceivedEvent:function(e){var t=this;r.clientInstance.getSwarmId(this._id,function(i){i==e.swarmId&&t._get&&(t.fileInfo=e,t.changeReadyState(2))})},resourceReadyEvent:function(e){var t=this;r.clientInstance.getSwarmId(this._id,function(i){if(i==e.swarmId)if(t.fileInfo=e,t._get){if(!t.changeReadyState(3))return;if(3!=t.readyState)return;if(t.range)var n=range[0],o=range[1];t.createProgressEvent(e,function(e){r.core.util.envokeCallback(t.onloadstart,[e],t)}),r.clientInstance.isFull(i,function(i){i?t.handleTransferLoaded(e):(urgent=null,stop_prev=null,radio("needByteRangeEvent").broadcast(t._id,n,o,urgent,stop_prev))})}else if(t._post){if(t._id=e.swarmId,!t.changeReadyState(4))return;t._getUrlAndTriggerOnLoad(e)}})},chunkReceivedEvent:function(e){if(e&&(e.url==this._id||e.swarmId==this._id)){var t=this;t.createProgressEvent(e,function(e){r.core.util.envokeCallback(t.onprogress,[e],t)})}},blockReceivedEvent:function(e){if(e&&(e.url==this._id||e.swarmId==this._id)){var t=this;t.createProgressEvent(e,function(e){r.core.util.envokeCallback(t.onprogress,[e],t)})}},transferLoadedEvent:function(e){this.handleTransferLoaded(e)},requestErrorEvent:function(e,t,i){var n=this;r.clientInstance.getResourceId(this._id,function(r){(n._id==e||r==e)&&n.handleRequestError(t,i)})},activePeerConnectionsNumberChangedEvent:function(e){this._swarmState.numOfPeers=e;var t=this.createSwarmStateEvent();r.core.util.envokeCallback(this.onswarmstatechange,[t],this)},chunkSentEvent:function(e){if(this.fileInfo&&this.fileInfo.swarmId==e){var t=this;r.clientInstance.getUploadedStats(e,function(e){for(stat in e)t._swarmState[stat]=e[stat];var i=t.createSwarmStateEvent();r.core.util.envokeCallback(t.onswarmstatechange,[i],t)})}},sanitizeCtorArgs:function(e){switch(e||(e={}),e.downloadMode){case"p2p":e.downloadMode=2;break;case"http":e.downloadMode=3;break;default:e.downloadMode=1}if(e.md5){if("[object String]"!=Object.prototype.toString.call(e.md5))return r.error("options.sha1 contains invalid characters"),!1}else e.md5=null;if(e.sha1){if("[object String]"!=Object.prototype.toString.call(e.sha1))return r.error("options.sha1 contains invalid characters"),!1}else e.sha1=null;return e},createProgressEvent:function(e,t){var i=this.createEvent(),n=this;return e?(r.clientInstance.getNumOfVerifiedBytes(this._id,function(o){o||0==o?(i.loaded=o,i.lengthComputable=!0,i.total=e.size,r.clientInstance.getLoadedStats(n._id,function(e){for(stat in e)i[stat]=e[stat];t(i)})):(i.loaded=0,i.loadedHTTP=0,i.loadedP2P=0,i.loadedFS=0,i.lengthComputable=!1,t(i))}),void 0):(i.loaded=0,i.loadedHTTP=0,i.loadedP2P=0,i.loadedFS=0,i.lengthComputable=!1,t(i),void 0)},createSwarmStateEvent:function(){var e=this.createEvent();for(var t in this._swarmState)e[t]=this._swarmState[t];return e},createEvent:function(){var e={};return e.currentTarget=this,e},changeReadyState:function(e){if(this.readyState!=e-1)return r.info("ready state has jumped a stage"),!1;this.readyState=e,3==this.readyState&&(this.queuedCommand&&r.core.util.executeFunctionByName(this.queuedCommand[0],this,[this.queuedCommand[1]]),this._get&&radio("startedDownloading").broadcast(this.fileInfo.size));var t=this;if(this.fileInfo)this.createProgressEvent(this.fileInfo,function(e){r.core.util.envokeCallback(t.onreadystatechange,[e],t)});else{var i=this.createEvent();r.core.util.envokeCallback(this.onreadystatechange,[i],this)}return!0},handleTransferLoaded:function(e){if(e&&(e.url==this._id||e.swarmId==this._id))if(this._get){if(!this.changeReadyState(4))return;this._getUrlAndTriggerOnLoad(e)}else this._post&&this.changeReadyState(3)},handleRequestError:function(e,t){this.status=e,this.description=t,this.unregisterEvents();var i=this;this.createProgressEvent(this.fileInfo,function(e){r.core.util.envokeCallback(i.onerror,[e],i)})},_getUrlAndTriggerOnLoad:function(e){var t=this;switch(this.status=200,this.responseType){case"arraybuffer":throw"arraybuffer not supported, use blob instead";case"blob":r.clientInstance.getBlob(e.swarmId,function(i,n){i?(t.response=n,t.createProgressEvent(e,function(e){r.core.util.envokeCallback(t.onload,[e],t)})):r.error("couldn't receive blob")});break;case"document":r.error("document responseType isn't supported"),t.handleRequestError(this.INVALID_RESPONSETYPE,"document is not implemented");break;case"json":r.error("json responseType isn't supported"),t.handleRequestError(this.INVALID_RESPONSETYPE,"json is not implemented");break;case"text":r.error("text responseType isn't supported"),t.handleRequestError(this.INVALID_RESPONSETYPE,"text is not implemented");break;default:r.clientInstance.getBlobUrl(e.swarmId,function(i,n){i?(t.response=n,t.createProgressEvent(e,function(e){r.core.util.envokeCallback(t.onload,[e],t)})):r.error("couldn't receive blobUrl")})}}}),r.Request.INVALID_RESPONSETYPE=669,r.Request.SWARMID_NOT_FOUND_ERR=650,r.Request.FILE_SIZE_ERR=640,r.Request.FIREFOX_ONLY_SWARM_ERR=641,r.Request.CHROME_ONLY_SWARM_ERR=642,r.Request.BROWSER_SWARM_COMPAT_ERR=643,r.Request.OUT_OF_SPACE_ERR=644,r.Request.WRITE_ERR=645,r.Request.VERIFICATION_ERR=646,r.DATACHANNELS_ERROR=700,r.WEBSOCKETS_ERROR=701,r.FILESYSTEM_ERROR=702,r.getCompatibilityStatus=function(e){r.clientInstance.getCompatibilityStatus(function(t,i){var n=[];for(type in t)if(!t[type])switch(type){case"dataChannels":n.push(r.DATACHANNELS_ERROR);break;case"Websockets":n.push(r.WEBSOCKETS_ERROR);break;case"fileSystem":n.push(r.FILESYSTEM_ERROR)}e(n,i.name,i.version)})}}(),function(){r.core.Block=Object.subClass({name:"peer5.core.Block",ctor:function(e,t,i){this.blockSize=e,this.length=Math.ceil(this.blockSize/r.config.CHUNK_SIZE),this.buffer=t?t:null,this.verified=i?i:!1,this.hash=null,this.chunkMap=[];for(var n=0;this.length>n;++n)this.chunkMap[n]=this.verified},getBlock:function(){return this.verified?this.buffer?this.buffer:!0:!1},setBlock:function(e){this.verified&&e.length==this.blockSize&&(this.buffer=e)},getChunk:function(e){if(this.verified){if(this.buffer){var t=e*r.config.CHUNK_SIZE,i=(1+e)*r.config.CHUNK_SIZE;return this.buffer.subarray(t,i)}return!0}return!1},hasChunk:function(e){return this.chunkMap[e]},setChunk:function(e,t){this.buffer||(this.buffer=new Uint8Array(this.blockSize),this.chunkMap=[]);var i=new Uint8Array(t),n=e*r.config.CHUNK_SIZE;this.buffer.set(i,n),this.chunkMap[e]=!0},setChunkOn:function(e){this.chunkMap||(this.chunkMap=[]),this.chunkMap[e]=!0},getNumOfChunks:function(){return this.length},removeBlockData:function(){delete this.buffer},verifyBlock:function(e){if(this.verified)return 0;for(var t=0;this.length>t;++t)if(!this.chunkMap[t])return 0;if(null==this.hash)return this.verified=!0,1;if(this.buffer){var i=r.core.util.MD5.ArrayBuffer.hash(this.buffer.buffer);if(i===this.hash)return this.verified=!0,1;r.error("Hash didn't verify, block has been polluted")}else if(e){var i=r.core.util.MD5.ArrayBuffer.hash(e.buffer);if(i===this.hash)return this.buffer=e,this.verified=!0,1;r.error("Hash didn't verify, block has been polluted")}},hashBlock:function(){for(var e=0;this.length>e;++e)if(!this.chunkMap[e])return 0;return this.hash=r.core.util.MD5.ArrayBuffer.hash(this.buffer.buffer),this.hash}})}(),function(){r.core.dataStructures.BlockMap=Object.subClass({name:"peer5.core.dataStructures.BlockMap",ctor:function(e,t,i,n){this.init=!1,this.resourceId=t,n?(this.hashAlg=r.CryptoJS.algo.SHA1.create(),this.aprioriHash=n):i&&(this.hashAlg=new r.core.util.MD5.ArrayBuffer,this.aprioriHash=i),this.metadata=new r.core.protocol.FileInfo(null,e,null,null,12e5,null,null,null,null),this.metadata.url=t,this.privateBlockMap={},this.numOfChunksInBlock=12e5/r.config.CHUNK_SIZE,this.fileSize=e,this.numOfBlocks=Math.ceil(this.fileSize/12e5),this.numOfChunks=Math.ceil(this.fileSize/r.config.CHUNK_SIZE),this.numOfVerifiedBlocks=0,this.firstMissingBlock=0,this.sizeOfLastBlock=e%12e5,0==this.sizeOfLastBlock&&(this.sizeOfLastBlock=12e5),this.availabilityMap,this.fs=!0,this._registerEvents(),r.config.USE_FS?(this.lruMap=new r.core.dataStructures.LRU(Math.floor(r.config.CACHE_SIZE/12e5),this._lruRemoveCb),this._initiateFileSystem()):(this.fs=!1,this.availabilityMap=new r.core.dataStructures.AvailabilityMap(this.numOfBlocks))},getSerializedMap:function(){return this.availabilityMap.serialize()},isFull:function(){return this.numOfBlocks==this.numOfVerifiedBlocks},getCompletionRate:function(){return this.numOfVerifiedBlocks/this.numOfBlocks},has:function(e){return this.privateBlockMap[e]&&this.privateBlockMap[e].verified},hasChunk:function(e){var t=this.calcBlockIdChunkOffset(e);return this.privateBlockMap[t.block]?this.privateBlockMap[t.block].hasChunk(t.chunk):!1},getNumOfBlocks:function(){return this.numOfBlocks},getNumOfVerifiedBytes:function(){return this.numOfVerifiedBlocks==this.numOfBlocks?this.fileSize:12e5*this.numOfVerifiedBlocks},getNumOfChunks:function(){return this.getNumOfChunks},getBlock:function(e,t){if(this.privateBlockMap[e]){var i=this.privateBlockMap[e].getBlock(e);if(this.fs){if(!i)return!1;if(1==i){var n=12e5*e,o=this;r.core.data.FSio.read(this.resourceId,n,n+12e5,function(i,n){if(i){var r=o.privateBlockMap[e];r.setBlock(n),o.lruMap.set(e,r),o.getBlock(e,t)}})}else this.lruMap.get(e),t(i)}else t(i)}},getChunkIdsOfBlock:function(e){if(e>=this.numOfBlocks)return[];for(var t=e==this.numOfBlocks-1?Math.ceil(this.sizeOfLastBlock/r.config.CHUNK_SIZE):this.numOfChunksInBlock,i=[],n=e*this.numOfChunksInBlock,o=n;n+t>o;++o)i.push(o);return i},getBlockIdOfChunk:function(e){if(e>=this.numOfChunks)return-1;var t=this.calcBlockIdChunkOffset(e);return t.block},getChunk:function(e,t){var i=this,n=this.calcBlockIdChunkOffset(e);if(this.privateBlockMap[n.block]){var o=this.privateBlockMap[n.block].getChunk(n.chunk);if(this.fs){if(!o)return!1;if(1==o){var s=12e5*n.block;r.core.data.FSio.read(this.resourceId,s,s+12e5,function(r,o){if(r){var s=i.privateBlockMap[n.block];s.setBlock(o),i.lruMap.set(n.block,s),i.getChunk(e,t)}})}else this.lruMap.get(n.block),t(!0,o)}else t(!0,o)}},setChunk:function(e,t){var i=this.calcBlockIdChunkOffset(e);return this.privateBlockMap[i.block]||this._createANewBlock(i.block),this.privateBlockMap[i.block].setChunk(i.chunk,t),radio("chunkReceivedEvent").broadcast(this.metadata),this.verifyBlock(i.block),i.block},isEmpty:function(e){return!this.privateBlockMap[e]},getBlockIndex:function(e){return Math.ceil(e/12e5)},getBlockIds:function(){return Object.keys(this.privateBlockMap)},getMissingBlock:function(e){return e?this.getRandomMissingBlock():this.getFirstMissingBlock()},getFirstMissingBlock:function(){return this.firstMissingBlock},getRandomMissingBlock:function(){for(var e=0;1e3>e;e++){var t=this.numOfBlocks-this.firstMissingBlock,i=this.firstMissingBlock+Math.floor(Math.random()*t);if(!(i in this.privateBlockMap&&this.privateBlockMap[i].verified))return i}return this.firstMissingBlock},getConsecutiveBuffer:function(e,t){for(var i=e;this.has(i);)i++;var n=i-e,r=new Uint8Array(12e5*n);this._iterateBlocks(function(e){r.set(e,12e5*blockId)},e,e+n-1,function(){t(r)})},verifyBlock:function(e){if(this.privateBlockMap[e]){if(1==this.privateBlockMap[e].verifyBlock()){for(this.numOfVerifiedBlocks++;this.has(this.firstMissingBlock);)this.firstMissingBlock++;radio("blockReceivedEvent").broadcast(this.metadata),this.isFull()&&radio("transferFinishedEvent").broadcast(this.metadata);var t=this;this.fs?t.getBlock(e,function(i){r.core.data.FSio.write(t.resourceId,i,12e5*e,function(i,n){i?(t.lruMap.set(e,t.privateBlockMap[e]),r.debug("successfully wrote block "+e+" to filesystem "),t.availabilityMap.setFS(e,function(i){i&&r.debug("successfully added block "+e+" to metadata file"),t.availabilityMap.isFullFS()&&t._verifyResource(function(e){e?radio("transferLoadedEvent").broadcast(t.metadata):(r.error("file verification failed"),radio("fileVerificationFailed").broadcast(),radio("removeResource").broadcast(t.resourceId,r.Request.VERIFICATION_ERR,"file verification failed"))})})):(r.warn("couldn't write block "+e+" to filesystem"),"space"===n?t._handleOutOfSpaceError():t._handleWriteError())})}):this.isFull()&&this._verifyResource(function(e){setTimeout(function(){e?radio("transferLoadedEvent").broadcast(t.metadata):(r.error("file verification failed"),radio("fileVerificationFailed").broadcast(),radio("removeResource").broadcast(t.resourceId,r.Request.VERIFICATION_ERR,"file verification failed"))},1)})}if(this.privateBlockMap[e].verified)return this.availabilityMap.set(e),!0}return!1},ingestBlock:function(e){return this.privateBlockMap[e]&&this.privateBlockMap[e].hashBlock()?(this.verifyBlock(e),this.privateBlockMap[e].hash):!1},addMetadata:function(e){this.metadata=e,this.init=!0},getMetadata:function(){return this.metadata},initiateFromLocalData:function(e,t,i){var n=this;t||(t=0),i||0==i?n.availabilityMap.hasFS(t)?r.core.data.FSio.read(n.resourceId,12e5*t,12e5*(t+1),function(o,s){o?(n.initiateBlockFromLocalData(t,s)?(radio("blockReceivedEvent").broadcast(n.metadata),r.log("successfully initiated block "+t+" from filesystem "+Date.now())):r.log("couldnt verify block "+t+" from filesystem "+Date.now()),i>t?(t++,n.initiateFromLocalData(e,t,i)):(r.info("finished initiating from filesystem"),radio("resumeEnded").broadcast(),e(!0))):r.warn("couldn't initiate block "+t+" from filesystem")}):(r.debug("blockId "+t+" was not in availabilityMap, skipping to next block"),i>t?(t++,n.initiateFromLocalData(e,t,i)):(r.info("finished initiating from filesystem"),radio("resumeEnded").broadcast(),e(!0))):r.core.data.FSio.getResourceDetails(this.resourceId,function(i,o){var s=Math.floor(o.size/12e5);n.availabilityMap.removeBlocksFrom(s+1,function(i){i?n.initiateFromLocalData(e,t,s):r.error("couldn't remove blocks from availability map")})})},initiateBlockFromLocalData:function(e,t){this._createANewBlock(e);for(var i=0;Math.ceil(t.length/r.config.CHUNK_SIZE)>i;++i)this.privateBlockMap[e].setChunkOn(i);if(this.privateBlockMap[e].verifyBlock(t)){for(this.numOfVerifiedBlocks++;this.has(this.firstMissingBlock);)this.firstMissingBlock++;for(var i=0;Math.ceil(t.length/r.config.CHUNK_SIZE)>i;++i)radio("peer5_received_fs_chunk").broadcast(e*this.numOfChunksInBlock+i,this.resourceId);if(this.availabilityMap.set(e),this.isFull()){var n=this;this.availabilityMap.setFSFull(function(){radio("transferLoadedEvent").broadcast(n.metadata)})}return!0}return delete this.privateBlockMap[e],!1},changeResourceId:function(e,t){if(this.fs){var i=this;r.core.data.FSio.renameResource(this.resourceId,e,function(n){n?(i.resourceId=e,i.availabilityMap.renameResource(e,function(e){t(e)})):t(n)})}else this.resourceId=e,t(!0)},getData:function(e){var t=[];this._iterateBlocks(function(e){t.push(e)},0,this.numOfBlocks-1,function(){try{var i=new Blob(t,{type:"application/octet-binary"})}catch(n){"NS_ERROR_OUT_OF_MEMORY"===n.name&&(n.result,radio("outOfMemoryError").broadcast(n.result))}e(i)})},getBlobUrl:function(e){var t=this;if(this.fs)r.core.data.FSio.createObjectURL(this.resourceId,function(t,i){return t?(e(t,i),void 0):(e(!1),void 0)});else{var i=function(){try{t.getData(function(t){var i=window.URL.createObjectURL(t);e(!0,i)})}catch(n){"NS_ERROR_OUT_OF_MEMORY"===n.name&&(setTimeout(i,1e4),n.result,radio("outOfMemoryError").broadcast(n.result))}};i()}},getBlob:function(e){this.fs?r.core.data.FSio.getBlob(this.resourceId,0,this.fileSize,e):this.getData(function(t){e(!0,t)})},getFileSize:function(){return this.fileSize},allocateFileSize:function(e){var t=this;r.core.data.FSio.write(this.resourceId,new Uint8Array([]),this.fileSize,function(i,n){i||"space"!=n?i||r.error("error in allocateFileSize"):t._handleOutOfSpaceError(),e(i)})},allocateFileSizeSync:function(e){r.core.data.FSio.write(this.resourceId,new Uint8Array([]),this.fileSize,function(t,i){t||"space"!=i?(t||r.error("error in allocateFileSizeSync"),e&&e(t)):r.core.data.CacheManager.handleOutOfSpace(this.resourceId,this.fileSize,function(t){t?e&&e(t):(r.warn("couldn't clear enough space from offline storage"),e&&e(t))})})},_registerEvents:function(){var e=this;this._lruRemoveCb=function(t){e._removeBlockData(t)},radio("handleOutOfSpaceError").subscribe(this._handleOutOfSpaceError),radio("handleWriteError").subscribe(this._handleWriteError)},_initiateFileSystem:function(){var e=this;r.config.USE_PERSISTENT?r.core.data.FSio.queryPersQuota(function(t,i,n){0!=n?r.core.data.FSio.requestPersQuota(n,function(t,i){t?e._createOrResumeResource(i):(r.warn("couldn't initiate filesystem"),e._fallbackToNoFS())},e.fileSize):e._initiateTempFileSystem()}):this._initiateTempFileSystem()},_initiateTempFileSystem:function(){var e=this;r.core.data.FSio.queryTempQuota(function(t,i,n){e.fileSize>n?r.config.USE_PERSISTENT?r.core.data.FSio.requestPersQuota(r.config.PERSISTENT_FS_SIZE,function(t,i){t?e.availabilityMap=new r.core.dataStructures.AvailabilityMapFS(e.numOfBlocks,e.resourceId,i,function(t){t?r.core.data.FSio.createResource(e.resourceId,function(t){t?e._resourceInitedWithFS():(r.warn("failed to create resource in filesystem"),e._fallbackToNoFS())}):(r.warn("couldn't initiate metadata file"),e._fallbackToNoFS())}):(r.warn("couldn't initiate persistent filesystem"),e._fallbackToNoFS())},e.fileSize):(r.warn("not enough space in temporary storage"),e._fallbackToNoFS()):n-i>e.fileSize?e._createOrResumeResource(n-i):e.fileSize>n-i&&e._createOrResumeResource(n-i)})},_clearFSAndCreateNewResourceNew:function(){},_clearFSAndCreateNewResource:function(){var e=this;r.core.data.FSio.removeRootDir(function(){r.core.data.FSio.queryTempQuota(function(t,i,n){t?n-i>e.fileSize?e.availabilityMap=new r.core.dataStructures.AvailabilityMapFS(e.numOfBlocks,e.resourceId,n-i,function(t){t?r.core.data.FSio.createResource(e.resourceId,function(t){t?e._resourceInitedWithFS():(r.warn("failed to create resource in filesystem"),e._fallbackToNoFS())}):(r.warn("failed to initiate metadata file"),e._fallbackToNoFS())}):(r.warn("not enough space in the filesystem after clearing"),e._fallbackToNoFS()):(r.warn("couldn't query temporary quota"),e._fallbackToNoFS())})})},_createOrResumeResource:function(e){var t=this;t.availabilityMap=new r.core.dataStructures.AvailabilityMapFS(t.numOfBlocks,t.resourceId,e,function(e){e?t.availabilityMap.numOfOnFSBits>0?r.core.data.FSio.isExist(t.resourceId,function(e){e?(r.info("Resource "+t.resourceId+" exists already in the filesystem."),radio("resumeStarted").broadcast(),t.initiateFromLocalData(function(e){e?t._resourceInitedWithFS():(r.warn("there was a problem resuming the resource"),t._fallbackToNoFS())})):t.availabilityMap.reset(function(e){e?r.core.data.FSio.createResource(t.resourceId,function(e){e?t._resourceInitedWithFS():(r.warn("failed to create resource in filesystem"),t._fallbackToNoFS())}):(r.error("couldn't reset the availability map"),t._fallbackToNoFS())})}):r.core.data.FSio.createResource(t.resourceId,function(e){e?t._resourceInitedWithFS():(r.warn("failed to create resource in filesystem"),t._fallbackToNoFS())}):(r.warn("couldn't initiate metadata file"),t._fallbackToNoFS())})},_resourceInitedWithFS:function(){this.fs=!0,radio("filesystemInitiated"+this.resourceId).broadcast(),this.init&&radio("resourceInit").broadcast(this.metadata)},_fallbackToNoFS:function(){this.fs=!1,this.availabilityMap=new r.core.dataStructures.AvailabilityMap(this.numOfBlocks),this.init&&radio("resourceInit").broadcast(this.metadata),radio("filesystemInitiated"+this.resourceId).broadcast()},_removeBlockData:function(e){this.privateBlockMap[e]&&this.privateBlockMap[e].removeBlockData()},_handleOutOfSpaceError:function(){var e;e=this.metadata.url?this.metadata.url:this.resourceId,r.error("Out of space error"),radio("pauseResource").broadcast(e,r.Request.OUT_OF_SPACE_ERR,"out of space"),r.core.data.CacheManager.handleOutOfSpace(this.resourceId,this.fileSize,function(t){t?radio("resumeResource").broadcast(e):(r.warn("couldn't clear enough space from offline storage"),radio("removeResource").broadcast(e,r.Request.OUT_OF_SPACE_ERR,"out of space"))})},_handleWriteError:function(){r.error("offline storage write error");var e;e=this.metadata.url?this.metadata.url:this.resourceId,radio("removeResource").broadcast(e,r.Request.WRITE_ERR,"offline storage write error")},_verifyResource:function(e){if(!this.hashAlg)return e(!0),void 0;var t=this;return this.hashAlg?(this._iterateBlocks(function(e,i){console.log("hashing block "+i),t.hashAlg.append?t.hashAlg.append(e):t.hashAlg.update(r.core.util.base64.encode(e))},0,this.numOfBlocks-1,function(){if(t.hashAlg.end)var i=t.hashAlg.end().toUpperCase();else var i=(""+t.hashAlg.finalize()).toUpperCase();r.info("resourceId "+t.resourceId+" loaded with hash = "+i),e(i===t.aprioriHash)}),void 0):(e(!0),void 0)},_iterateBlocks:function(e,t,i,n){var r=this,o=function(t){r.getBlock(t,function(r){r&&e(r,t),t++,i>=t?o(t):n(!0)})};o(t)},_createANewBlock:function(e){var t=e==this.numOfBlocks-1?this.sizeOfLastBlock:12e5;this.privateBlockMap[e]=new r.core.Block(t),this.metadata.hashes&&(this.privateBlockMap[e].hash=this.metadata.hashes[e])},calcBlockIdChunkOffset:function(e){var t=Math.floor(e/this.numOfChunksInBlock),i=e%this.numOfChunksInBlock;return{block:t,chunk:i}}})}(),function(){r.core.data.BlockMaps=Object.subClass({ctor:function(){this._blockMaps={},this._keys={}},getRealKeyName:function(e){return this._blockMaps.hasOwnProperty(e)?e:this._keys.hasOwnProperty(e)?this.getRealKeyName(this._keys[e]):!1},alias:function(e,t){this._keys.hasOwnProperty(e)||(this._keys[e]=t)},add:function(e,t){this._blockMaps[e]=t},get:function(e){return e=this.getRealKeyName(e),this._blockMaps[e]},remove:function(e){e=this.getRealKeyName(e),delete this._blockMaps[e]},forEach:function(e){for(var t in this._blockMaps)e(t,this._blockMaps[t])}}),r.core.data.BlockCache=new r.core.data.BlockMaps}(),function(){r.core.data.FSio=Object.subClass({ctor:function(){this.writeQueue=new n,this.registerEvents(),this.pendingObjectUrlCb={},this.finishWriteCbs=[],this.currentlyWriting=!1},executeOnReady:function(){},createResource:function(e,t){r.info("Adding resource "+e+" to the filesystem.");var i=this;this.fs.root.getFile(r.config.FS_ROOT_DIR+e,{create:!0},function(){t&&t(!0)},function(e){i.errorHandler(e,t)})},removeResource:function(e,t){r.log("Removing resource "+e+" from the filesystem.");var i=this;this.fs.root.getFile(r.config.FS_ROOT_DIR+e,{create:!1},function(e){e.remove(function(){t&&t(!0)},function(e){i.errorHandler(e,t)})},function(e){i.errorHandler(e,t)})},renameResource:function(e,t,i){r.info("changing resource name from "+e+" to "+t);var n=this;this.fs.root.getDirectory(r.config.FS_ROOT_DIR,{create:!1},function(o){o.getFile(e,{create:!1},function(e){e.moveTo(o,t,function(e){e&&r.info("succesfully renamed"),i&&i(!0)},function(e){n.errorHandler(e,i)})},function(e){n.errorHandler(e,i)})},function(e){n.errorHandler(e,i)})},write:function(e,t,i,n){t=new Blob([t]),r.debug("Writing to resource "+e),this._writeAvailable()?(this._addWriteCommand(e,t,i,n),this._write(e,t,i,n)):this.currentlyWriting?this._addWriteCommand(e,t,i,n):this.continueWriting()},continueWriting:function(){var e=this.writeQueue.peek();this._write(e.resourceId,e.data,e.position,e.cb)},read:function(e,t,i,n){var o=this;this.fs.root.getFile(r.config.FS_ROOT_DIR+e,{},function(e){e.file(function(e){var r=new FileReader;r.onloadend=function(e){e.target.readyState!=FileReader.DONE||e.target.error||n&&n(!0,new Uint8Array(e.target.result))},r.onerror=function(e){o.errorHandler(e,n)};var s=e.slice(t,i);r.readAsArrayBuffer(s)},function(e){o.errorHandler(e,n)})},function(e){o.errorHandler(e,n)})},getBlob:function(e,t,i,n){var o=this;this.fs.root.getFile(r.config.FS_ROOT_DIR+e,{},function(e){e.file(function(e){var r=e.slice(t,i);n(!0,r)},function(e){o.errorHandler(e,n)})},function(e){o.errorHandler(e,n)})},getResourceDetails:function(e,t){var i=this;this.fs.root.getFile(r.config.FS_ROOT_DIR+e,{},function(e){e.file(function(e){t(!0,{size:e.size})},function(e){i.errorHandler(e,t)})},function(e){i.errorHandler(e,t)})},createObjectURL:function(e,t){var i=this;this.fs.root.getFile(r.config.FS_ROOT_DIR+e,{},function(e){t&&t(!0,e.toURL())},function(e){i.errorHandler(e,t)})},notifyFinishWrite:function(e){0>=this.writeQueue.getLength()?e():this.finishWriteCbs.push(e)},isExist:function(e,t){r.log("Checking if resource "+e+" exists in the filesystem.");var i=this;this.fs.root.getFile(r.config.FS_ROOT_DIR+e,{create:!1},function(){t&&t(!0)},function(e){i.errorHandler(e,t)})},getFileInfo:function(e){this.fs.root.getFile(r.config.FS_ROOT_DIR+e,{create:!1},function(e){e.file(function(e){console.log(e)})})},listFiles:function(e){var t=this,i=this.fs.root.createReader();i.readEntries(function(t){t.length?r.debug("Filesystem files: "+t):r.debug("Filesystem is empty"),e(!0,t)},function(i){t.errorHandler(i,e)})},removeAll:function(e){r.warn("removing all files in filesystem");var t=this,i=this.fs.root.createReader();i.readEntries(function(i){for(var n,o=0;n=i[o];++o)n.isDirectory?n.removeRecursively(function(){e&&e(!0)},function(i){t.errorHandler(i,e)}):n.remove(function(){e&&e(!0)},function(i){t.errorHandler(i,e)});r.debug("Directory emptied.")},function(i){t.errorHandler(i,e)})},removeRootDir:function(e){r.warn("removing all files in filesystem under "+r.config.FS_ROOT_DIR);var t=this,i=this.fs.root.createReader();i.readEntries(function(i){for(var n,o=0;n=i[o];++o)n.isDirectory&&n.name+"/"==r.config.FS_ROOT_DIR&&n.removeRecursively(function(){t.fs.root.getDirectory(r.config.FS_ROOT_DIR,{create:!0},function(){e(!0)},function(i){t.errorHandler(i,e)})},function(i){t.errorHandler(i,e)});r.debug("Directory emptied.")},function(i){t.errorHandler(i,e)})},getLibraryStatistics:function(e){var t=this,i=[],n=[];this.fs&&this.fs.root.getDirectory(r.config.FS_ROOT_DIR,{},function(r){var o=r.createReader();o.readEntries(function(r){for(var o=0;r.length>o;o++)i.push(r[o]),n.push(r[o].name);t.getStatsOfFileArray(0,{size:0,filesStats:[]},i,n,function(t){e&&e(t)})})},function(i){t.errorHandler(i,e)})},printDirectory:function(){this.fs&&this.fs.root.getDirectory(r.config.FS_ROOT_DIR,{},function(e){var t=e.createReader();t.readEntries(function(e){for(var t=0;e.length>t;t++)console.log(e[t].name)})},function(e){console.log(e)})},getStatsOfFileArray:function(e,t,i,n,r){var o=this;if(e==i.length)r&&r(t);else{var s=i[e];s.file(function(a){var c=a.size;t.size+=c,t.filesStats.push({key:a.name,size:c,lastModified:a.lastModifiedDate,fileInstance:s}),o.getStatsOfFileArray(e+1,t,i,n,r)})}},deleteFiles:function(e,t,i){var n=t,r=[];for(var o in e)r.push(e[o]);n.deleteMultipleFiles(0,r,t,i)},deleteMultipleFiles:function(e,t,i,n){if(e==t.length)n&&n(!0);else{var r=t[e],o=i;r.fileInstance.remove(function(){i.deleteMultipleFiles(e+1,t,i,n)},function(e){o.errorHandler(e,n)})}},removeAllButThis:function(e,t,i){r.info("removing all files in filesystem under "+r.config.FS_ROOT_DIR+" besides "+e+","+t);var n=this;this.fs.root.getDirectory(r.config.FS_ROOT_DIR,{},function(r){var o=r.createReader();o.readEntries(function(r){for(var o,s=r.length,a=0;o=r[a];++a)o.name!=e&&o.name!=t?o.isDirectory?o.removeRecursively(function(){s--,0===s&&i(!0)},function(e){n.errorHandler(e,i)}):o.remove(function(){s--,0===s&&i(!0)},function(e){n.errorHandler(e,i)}):s--})},function(e){n.errorHandler(e,i)});var n=this,o=this.fs.root.createReader();o.readEntries(function(e){for(var t,o=0;t=e[o];++o)t.isDirectory&&t.name+"/"==r.config.FS_ROOT_DIR&&t.removeRecursively(function(){n.fs.root.getDirectory(r.config.FS_ROOT_DIR,{create:!0},function(){i(!0)},function(e){n.errorHandler(e,i)})},function(e){n.errorHandler(e,i)});r.debug("Directory emptied.")},function(e){n.errorHandler(e,i)})},getTypeOfFS:function(){if(this.fs){if(this.fs.name.indexOf("Pers")>-1)return"PERS";if(this.fs.name.indexOf("Temp")>-1)return"TEMP"}return null},getUnUsedQuotaSpace:function(e){"PERS"==this.getTypeOfFS()&&navigator.webkitPersistentStorage.queryUsageAndQuota(function(t,i){e&&e(i-t)},function(){e&&e(0)}),"TEMP"==this.getTypeOfFS()&&navigator.webkitTemporaryStorage.queryUsageAndQuota(function(t,i){e&&e(i-t)},function(){e&&e(0)})},requestTempQuota:function(e,t){if(!e)var e=16106127360;if(!t)var t=function(){};r.info("requesting quota size = "+e);var i=this,n=1.1*e;window.webkitRequestFileSystem(window.TEMPORARY,n,function(e){i.onInitFs(e),i.queryTempQuota(function(e,i,n){t(!0,n-i)})},function(e){i.errorHandler(e,t)})},testRequestPersQuota:function(e){if(!e)var e=16106127360;navigator.webkitPersistentStorage.requestQuota(e,function(e){console.log("requestQuota and got: "+e)},function(e){console.log("requestQuota Error "+e)})},testRequestTempQuota:function(e){if(!e)var e=32212254720;navigator.webkitTemporaryStorage.requestQuota(e,function(e){console.log("requestQuota and got: "+e)},function(e){console.log("requestQuota Error "+e)})},testPersQueryUsageAndQuota:function(){navigator.webkitPersistentStorage.queryUsageAndQuota(function(e,t){console.log("Used quota: "+e+", total quota: "+t)},function(e){console.log("Error",e)})},testTempQueryUsageAndQuota:function(){navigator.webkitTemporaryStorage.queryUsageAndQuota(function(e,t){console.log("Used quota: "+e+", total quota: "+t)},function(e){console.log("Error",e)})},requestPersQuota:function(e,t){if(!e)var e=16106127360;if(!t)var t=function(){};r.info("requesting perma quota size = "+e);var i=this,n=e,o=!1;radio("requestedPersQuota").broadcast(),radio("peer5_persistent_fd_auth").broadcast(),navigator.webkitPersistentStorage.requestQuota(n,function(e){if(!o){if(o=!0,0===e)return radio("persQuotaAnswer").broadcast(!1),t&&t(!1),void 0;window.webkitRequestFileSystem(window.PERSISTENT,e,function(e){radio("persQuotaAnswer").broadcast(!0),i.onInitFs(e),i.queryPersQuota(function(e,i,n){t(!0,n-i)})},function(e){i.errorHandler(e,t),radio("persQuotaAnswer").broadcast(!1)})}},function(e){i.errorHandler(e,t),radio("persQuotaAnswer").broadcast(!1)}),window.setTimeout(function(){o||(o=!0,t(!1),radio("persQuotaTimeout").broadcast())},r.config.PROMPT_TIMEOUT)},queryTempQuota:function(e){navigator.webkitTemporaryStorage.queryUsageAndQuota(function(t,i){r.info("Using: "+100*(t/i)+"% of temporary storage"),e&&e(!0,t,i)},function(t){r.error("Error",t),e&&e(!1)})},queryPersQuota:function(e){navigator.webkitPersistentStorage.queryUsageAndQuota(function(t,i){r.info("Using: "+100*(t/i)+"% of persistent storage"),e&&e(!0,t,i)},function(t){r.error("Error",t),e&&e(!1)})},_writeAvailable:function(){return this.writeQueue.isEmpty()},_write:function(e,t,i,n){var o=this;o.currentlyWriting=!0,this.fs.root.getFile(r.config.FS_ROOT_DIR+e,{create:!1},function(s){s.createWriter(function(s){i>s.length?(r.debug("truncating: filewriter length = "+s.length+" position = "+i),s.onwriteend=function(r){return o.currentlyWriting=!1,r.target.error?(o.errorHandler(s.error,n),o.writeQueue.dequeue(),void 0):(o._write(e,t,i,n),void 0)},s.truncate(i)):(s.onwriteend=function(t){if(o.currentlyWriting=!1,t.currentTarget.error)return o.errorHandler(t.currentTarget.error,n),void 0;if(o.writeQueue.dequeue(),r.debug("onwriteend( "+e+"): writeQueue length = "+o.writeQueue.getLength()),o.writeQueue.isEmpty()){n&&n(!0),r.debug("finished writing all the commands in command queue"),r.debug("writeQueue is empty, pendingObjectUrlCb = "+o.pendingObjectUrlCb[e]),o.pendingObjectUrlCb[e]&&(o.createObjectURL(e,o.pendingObjectUrlCb[e]),delete o.pendingObjectUrlCb[e]);for(var i=0;o.finishWriteCbs.length>i;++i)o.finishWriteCbs[i](e);o.finishWriteCbs=[]}else{n&&n(!0);var s=o.writeQueue.peek();o._write(s.resourceId,s.data,s.position,s.cb)}},s.onerror=function(e){o.currentlyWriting=!1,o.errorHandler(e.currentTarget.error,n)},r.debug("data size = "+t.size+" fileWriter.length = "+s.length+" position = "+i),s.seek(i),s.write(t))},function(e){o.currentlyWriting=!1,o.errorHandler(e,n)})},function(e){o.currentlyWriting=!1,o.errorHandler(e,n)})},_addWriteCommand:function(e,t,i,n){var r={resourceId:e,data:t,position:i,cb:n};this.writeQueue.enqueue(r)},testQuota:function(){window.webkitStorageInfo.queryUsageAndQuota(webkitStorageInfo.TEMPORARY,function(e,t){console.log("Used quota: "+e+", remaining quota: "+t)},function(e){console.log("Error",e)})},registerEvents:function(){var e=this;this.onInitFs=function(t){e.fs=t,t.root.getDirectory(r.config.FS_ROOT_DIR,{create:!0},function(){r.info("initiated filesystem")},function(t){e.errorHandler(t),r.warn("failed to create peer5 directory")})},this.errorHandler=function(e,t){var i="";switch(e.name){case"QuotaExceededError":i="QuotaExceededError",t&&t(!1,"space");break;case"NotFoundError":i="NotFoundError",t&&t(!1);break;case"SecurityError":i="SecurityError",t&&t(!1);break;case"InvalidModificationError":i="InvalidModificationError",t&&t(!1);break;case"InvalidStateError":i="InvalidStateError",t&&t(!1);break;default:i="Unknown Error",t&&t(!1)}radio("offlineStorageError").broadcast(i),r.warn("File system error: "+i)}}}),r.core.data.FSio=new r.core.data.FSio}(),function(){r.core.data.FSioFireFox=Object.subClass({ctor:function(e){this.writeQueue=new n,this.executeOnInit=[],this.registerEvents(),this.pendingObjectUrlCb={},this.finishWriteCbs=[],this.db,this.filesObjectStore="files",this.filesMetaData={},this.flushSize=67108864,this.currentlyWriting=!1,this.createMainDB(function(t){t?r.info("mainDB created successfuly"):r.warn("mainDB creation had error"),e(t)})},createMainDB:function(e){var t=this,i=window.indexedDB.open(r.config.FS_ROOT_DIR,4);i.onerror=function(i){t.errorHandler(i),e&&e(!1)},i.onupgradeneeded=function(e){e.target.result.createObjectStore(t.filesObjectStore)},i.onsuccess=function(i){t.db=i.target.result;for(var n=0;t.executeOnInit.length>n;n++)r.core.util.envokeCallback(t.executeOnInit[n].function,t.executeOnInit[n].args,t.executeOnInit[n].context);e&&e(!0)}},executeOnReady:function(e){this.executeOnInit.push(e)},createResource:function(e,t){r.info("Adding resource "+e+" to the indexedDB.");var i=this,n=i.db.mozCreateFileHandle(e);n.onsuccess=function(){var n=this.result,r=i.db.transaction([i.filesObjectStore],"readwrite").objectStore(i.filesObjectStore),o=r.put(n,e);o.onsuccess=function(){i.filesMetaData[e]={fileLength:0,appendedSinceLastFlush:0},t&&t(!0)},o.onerror=function(e){i.errorHandler(e),t&&t(!1)}},n.onerror=function(e){i.errorHandler(e),t&&t(!1)}},removeResource:function(e,t){r.log("Removing resource "+e+" from the filesystem.");var i=this,n=i.db.transaction([i.filesObjectStore],"readwrite").objectStore(i.filesObjectStore),o=n["delete"](e);o.onsuccess=function(){delete i.filesMetaData[e],t&&t(!0)},o.onerror=function(e){i.errorHandler(e),t&&t(!1)}},renameResource:function(e,t,i){r.info("changing resource name from "+e+" to "+t);var n=this,o=n.db.transaction([n.filesObjectStore],"readwrite").objectStore(n.filesObjectStore),s=o.get(e);s.onsuccess=function(a){if(!a.target.result)return n.errorHandler({code:"record was not found for key"+e}),i&&i(!1),void 0;var c=s.result;n.db.transaction([n.filesObjectStore],"readwrite").objectStore(n.filesObjectStore);var l=o.add(c,t);n.filesMetaData[t]=n.filesMetaData[e],l.onsuccess=function(){var t=n.db.transaction([n.filesObjectStore],"readwrite").objectStore(n.filesObjectStore),o=t["delete"](e);o.onsuccess=function(){delete n.filesMetaData[e],r.info("succesfully renamed"),i&&i(!0)},o.onerror=function(e){n.errorHandler(e),i&&i(!1)}},l.onerror=function(e){n.errorHandler(e),i&&i(!1)}},s.onerror=function(e){n.errorHandler(e),i&&i(!1)}},write:function(e,t,i,n){r.debug("Writing to resource "+e),this._writeAvailable()?(this._addWriteCommand(e,t,i,n),this._write(e,t,i,n)):this.currentlyWriting?this._addWriteCommand(e,t,i,n):this.continueWriting()},continueWriting:function(){var e=this.writeQueue.peek();this._write(e.resourceId,e.data,e.position,e.cb)},read:function(e,t,i,n){var r=this,o=r.db.transaction(["files"]),s=o.objectStore("files"),a=s.get(e);a.onsuccess=function(o){if(!o.target.result)return r.errorHandler({code:"record was not found for key"+e}),n&&n(!1),void 0;var s=a.result,c=s.open("readwrite");c.location=t;var l=c.readAsArrayBuffer(i-t);l.onsuccess=function(e){n&&n(!0,new Uint8Array(e.target.result))},l.onerror=function(e){r.errorHandler(e),n&&n(!1)}},a.onerror=function(e){r.errorHandler(e),n&&n(!1)}},getBlob:function(){},getResourceDetails:function(e,t){var i=this,n=i.db.transaction([i.filesObjectStore],"readwrite").objectStore(i.filesObjectStore),r=n.get(e);r.onsuccess=function(n){if(!n.target.result)return i.errorHandler({code:"record was not found for key"+e}),t&&t(!1),void 0;var o=r.result,s=o.open("readwrite"),a=s.getMetadata();a.onsuccess=function(e){t(!0,{size:e.target.result.size})},a.onerror=function(e){i.errorHandler(e),t&&t(!1)}},r.onerror=function(e){i.errorHandler(e),t&&t(!1)}},createObjectURL:function(e,t){var i=this,n=i.db.transaction([i.filesObjectStore],"readwrite").objectStore(i.filesObjectStore),r=n.get(e);r.onsuccess=function(n){if(!n.target.result)return i.errorHandler({code:"record was not found for key"+e}),t&&t(!1),void 0;var o=r.result,s=o.open("readwrite");i.checkAndFlush(s,i,e,function(){s.name;var e=o.getFile();e.onsuccess=function(e){var i=e.target.result;!window.URL&&window.webkitURL&&(window.URL=window.webkitURL),t&&t(!0,URL.createObjectURL(i))},e.onerror=function(e){i.errorHandler(e),t&&t(!1)}},!0)},r.onerror=function(e){i.errorHandler(e),t&&t(!1)}},notifyFinishWrite:function(e){0>=this.writeQueue.getLength()?e():this.finishWriteCbs.push(e)},isExist:function(e,t){r.log("Checking if resource "+e+" exists in the filesystem.");var i=this;try{var n=i.db.transaction([i.filesObjectStore],"readwrite").objectStore(i.filesObjectStore)}catch(o){console.log(o)}if(!n)return t&&t(!1),void 0;var s=n.get(e);s.onsuccess=function(n){if(!n.target.result)return t&&t(!1),void 0;var r=n.target.result,o=r.open("readonly"),s=o.getMetadata();s.onsuccess=function(n){i.filesMetaData[e]={fileLength:n.target.result.size,appendedSinceLastFlush:0},t&&t(!0)},s.onerror=function(e){i.errorHandler(e),t&&t(!1)}},s.onerror=function(e){i.errorHandler(e),t&&t(!1)}},listFiles:function(e){var t=this,i=t.db.transaction([t.filesObjectStore],"readwrite").objectStore(t.filesObjectStore),n=!0;i.openCursor().onsuccess=function(t){var i=[],o=t.target.result;n&&!o&&r.debug("Filesystem is empty"),o?(n=!1,i.push(o.key),o["continue"]()):(e(!0,i),alert("No more entries!"))}},forceRemoveAllDBwhenOutOfSpace:function(e){this.db.close(),window.indexedDB.deleteDatabase(r.config.FS_ROOT_DIR),this.createMainDB(function(t){t?e&&e(!0):e&&e(!1)})},removeAllNew:function(){var e=this,t=e.db.transaction([e.filesObjectStore],"readwrite"),i=t.objectStore(e.filesObjectStore).clear();i.onsuccess=function(){console.log("Filesystem is empty")},i.onerror=function(){console.log("removeAll() failed")}},removeDep:function(e){r.warn("removing all files in filesystem");var t=this,i=t.db.transaction([t.filesObjectStore],"readwrite").objectStore(t.filesObjectStore),n=!0;i.openCursor().onsuccess=function(o){var s=o.target.result;if(n&&!s&&r.debug("Filesystem is empty"),s){n=!1;var a=i["delete"](s.key);a.onsuccess=function(){t.filesMetaData[s.key]&&delete t.filesMetaData[s.key],s["continue"]()},a.onerror=function(){e&&e(!1)}}else r.debug("Directory emptied."),e&&e(!0)}},getAllKeys:function(e,t){r.warn("removing all files in filesystem");var i=this,n=i.db.transaction([i.filesObjectStore],"readwrite").objectStore(i.filesObjectStore),o=[],s=[];n.openCursor().onsuccess=function(i){var n=i.target.result;n?"confirmed_persistent"!=n.key||t?(o.push(n.key),s.push(n.value),n.continue()):n.continue():(console.log("get all keys : "+o.length),console.log("get all keys : "+s.length),e&&e(s,o))}},filterEntries:function(e,t,i,n){var r=this;if(e==t.length)n&&n(t,i);else{var o=t[e].open("readwrite"),s=o.getMetadata();s.onsuccess=function(o){var s=o.target.result.lastModified;Date.now()-s.getTime()>24?r.filterEntries(e+1,t,i,n):(t.splice(e,1),i.splice(e,1),r.filterEntries(e,t,i,n))}}},getStatsOfFileArray:function(e,t,i,n,r){var o=this;if(e==i.length)r&&r(t);else{var s=i[e].open("readwrite"),a=s.getMetadata();a.onsuccess=function(s){var a=s.target.result.size,c=s.target.result.lastModified;t.size+=a,t.filesStats.push({key:n[e],size:a,lastModified:c,fileInstance:i[e]}),o.getStatsOfFileArray(e+1,t,i,n,r)}}},printDirectory:function(){var e=this;e.getAllKeys(function(e,t){for(var i=0;t.length>i;i++)console.log(t[i])},!0)},cleanSpaceForFileDuringOutOfSpace:function(){},getLibraryStatistics:function(e){var t=this;t.getAllKeys(function(i,n){t.getStatsOfFileArray(0,{size:0,filesStats:[]},i,n,function(t){e&&e(t)})})},removeOldEntries:function(e){var t=this;t.getAllKeys(function(i,n){console.log("removeOldEntries "+n),console.log("removeOldEntries "+i),t.filterEntries(0,i,n,function(i,n){console.log("truncating"),t.truncateFiles(0,i,t,function(i){i?(console.log("done truncating successfully"),t.deleteMultipleFiles(0,n,t,function(t){t?(e&&e(!0),console.log("done removeOldEntries successfully")):(console.log("done removeOldEntries failure"),e&&e(!1))})):(console.log("done truncating failure"),e&&e(!1))})})})},deleteFiles:function(e,t,i){var n=t,r=[],o=[];for(var s in e)o.push(e[s].key),r.push(e[s].fileInstance);n.truncateFiles(0,r,n,function(e){e?(console.log("done truncating successfully"),n.deleteMultipleFiles(0,o,n,function(e){e?i&&i(!0):(i&&i(!1),console.log("delete failure"))})):(console.log("truncating failure"),i&&i(!1))})},removeAll:function(e){var t=this;t.getAllKeys(function(i,n){console.log("truncating");for(var r=0;n.length>r;r++)if("confirmed_persistent"==n[r]){n.splice(r,1),i.splice(r,1);break}t.truncateFiles(0,i,t,function(i){i?(console.log("done truncating all files successfully"),t.deleteMultipleFiles(0,n,t,function(t){t?(e&&e(!0),console.log("done removeAll successfully")):(console.log("done removeAll failure"),e&&e(!1))})):(console.log("done truncating failure"),e&&e(!1))})})},deleteMultipleFiles:function(e,t,i,n){if(e==t.length)n&&n(!0);else{var o=i.db.transaction([i.filesObjectStore],"readwrite").objectStore(i.filesObjectStore),s=o.delete(t[e]);s.onsuccess=function(){i.deleteMultipleFiles(e+1,t,i,n)},s.onerror=function(){r.error("delete multiple files error"),n&&n(!1)}}},truncateFiles:function(e,t,i,n){if(e==t.length)n&&n(!0);else{console.log("truncating "+t[e]);var o=t[e],s=o.open("readwrite"),a=s.truncate(0);a.onsuccess=function(){i.truncateFiles(e+1,t,i,n)},a.onerror=function(){r.error("truncate needed files failure"),n&&n(!1)}}},removeRootDir:function(e){this.removeAll(e)},requestPersQuota:function(e,t,i){var n=this;n.isExist("confirmed_persistent",function(e){if(e)return t(!0,r.config.PERSISTENT_FS_SIZE),void 0;if(r.config.ALLOWED_FILE_SIZE>=i)return t(!1,0),void 0;radio("requestedPersQuota").broadcast(),radio("peer5_persistent_fd_auth").broadcast();var o,s=(new Date).getTime()+100,a=window.indexedDB.open(s,1),c=!1;a.onerror=function(){console.log("Error obtaining quota, retrying..."),t(!1,0)},a.onsuccess=function(){o=a.result,a.getquota()},a.onupgradeneeded=function(e){e.target.result.createObjectStore(s)},a.getquota=function(){var e=o.transaction(s,"readwrite");e.oncomplete=function(){o.close(),window.indexedDB.deleteDatabase(s),n.createResource("confirmed_persistent",function(e){if(!c){if(c=!0,!e)return t(!1,0),void 0;radio("persQuotaAnswer").broadcast(!0),t(!0,r.config.PERSISTENT_FS_SIZE)}},!0)},e.onerror=function(){return c?void 0:(c=!0,radio("persQuotaAnswer").broadcast(!1),o.close(),window.indexedDB.deleteDatabase(s),t(!1,0),void 0)},e.objectStore(s).put(new Blob([new ArrayBuffer(62914560)]),"quota"),window.setTimeout(function(){c||(e.oncomplete=function(){},e.onerror=function(){},radio("persQuotaTimeout").broadcast(),o.close(),window.indexedDB.deleteDatabase(s),t(!1,0))},r.config.PROMPT_TIMEOUT)}})},requestTempQuota:function(){r.warn("requestTempQuota shouldn't be called in firefox")},queryPersQuota:function(e){this.isExist("confirmed_persistent",function(t){return t?(e(!0,0,r.config.PERSISTENT_FS_SIZE),void 0):(e(!1,0,0),void 0)})},queryTempQuota:function(e){e(!1,0,0)},_writeAvailable:function(){return this.writeQueue.isEmpty()},_write_dep:function(e,t,i,n){var o=this,s=window.indexedDB.open(r.config.FS_ROOT_DIR,3);s.onerror=function(e){o.errorHandler(e),n&&n(!1)},s.onsuccess=function(){o.db=s.result;var a=o.db.transaction([o.filesObjectStore],"readwrite").objectStore(o.filesObjectStore),c=a.get(e);c.onsuccess=function(s){if(!s.target.result)return o.errorHandler({code:"record was not found for key"+e}),n&&n(!1),void 0;var a=c.result,l=a.open("readwrite"),d=l.getMetadata();d.onsuccess=function(s){var c=s.target.result.size;if(i>c){r.debug("truncating: filewriter length = "+s.target.result.size+" position = "+i);var l=new FileReader;l.onload=function(t){var s=t.target.result,l=a.open("readwrite");l.oncomplete=function(){if(o.writeQueue.dequeue(),r.debug("onwriteend( "+e+"): writeQueue length = "+o.writeQueue.getLength()),o.writeQueue.isEmpty()){n&&n(!0),r.debug("finished writing all the commands in command queue"),r.debug("writeQueue is empty, pendingObjectUrlCb = "+o.pendingObjectUrlCb[e]),o.pendingObjectUrlCb[e]&&(o.createObjectURL(e,o.pendingObjectUrlCb[e]),delete o.pendingObjectUrlCb[e]);for(var t=0;o.finishWriteCbs.length>t;++t)o.finishWriteCbs[t](e);o.finishWriteCbs=[]}else{n&&n(!0);var i=o.writeQueue.peek();o._write(i.resourceId,i.data,i.position,i.cb)}};for(var d=i-c,u=0,h=new ArrayBuffer(1048576);d>u;)1048576>d-u&&(h=new ArrayBuffer(d-u)),u+=1048576,l.append(h);var f=l.append(s);f.onerror=function(e){o.errorHandler(e),n&&n(!1)}},l.readAsArrayBuffer(t)}else{var l=new FileReader;l.onload=function(t){var s=t.target.result,c=a.open("readwrite");c.location=i;var l=c.write(s);if(l||0!=i||0!=s.byteLength)l.onsuccess=function(){var t=c.flush();t.onsuccess=function(){if(o.writeQueue.dequeue(),r.debug("onwriteend( "+e+"): writeQueue length = "+o.writeQueue.getLength()),o.writeQueue.isEmpty()){n&&n(!0),r.debug("finished writing all the commands in command queue"),r.debug("writeQueue is empty, pendingObjectUrlCb = "+o.pendingObjectUrlCb[e]),o.pendingObjectUrlCb[e]&&(o.createObjectURL(e,o.pendingObjectUrlCb[e]),delete o.pendingObjectUrlCb[e]);for(var t=0;o.finishWriteCbs.length>t;++t)o.finishWriteCbs[t](e);o.finishWriteCbs=[]}else{n&&n(!0),r.debug("onwriteend: writeQueue is not empty, writing another command");var i=o.writeQueue.peek();o._write(i.resourceId,i.data,i.position,i.cb)}},t.onerror=function(e){o.errorHandler(e),n&&n(!1)}},l.onerror=function(e){o.errorHandler(e),n&&n(!1)};else if(o.writeQueue.dequeue(),r.debug("onwriteend( "+e+"): writeQueue length = "+o.writeQueue.getLength()),n&&n(!0),o.writeQueue.isEmpty()){r.debug("finished writing all the commands in command queue"),r.debug("writeQueue is empty, pendingObjectUrlCb = "+o.pendingObjectUrlCb[e]),o.pendingObjectUrlCb[e]&&(o.createObjectURL(e,o.pendingObjectUrlCb[e]),delete o.pendingObjectUrlCb[e]);for(var d=0;o.finishWriteCbs.length>d;++d)o.finishWriteCbs[d](e);o.finishWriteCbs=[]}else{var u=o.writeQueue.peek();o._write(u.resourceId,u.data,u.position,u.cb)}},l.readAsArrayBuffer(t)}},d.onerror=function(e){o.errorHandler(e),n&&n(!1)}},c.onerror=function(e){o.errorHandler(e),n&&n(!1)}}},_write_no_flush:function(e,t,i,n){var o=this,s=window.indexedDB.open(r.config.FS_ROOT_DIR,3);s.onerror=function(e){o.errorHandler(e),n&&n(!1)},s.onsuccess=function(){o.db=s.result;var a=o.db.transaction([o.filesObjectStore],"readwrite").objectStore(o.filesObjectStore),c=a.get(e);c.onsuccess=function(s){if(!s.target.result)return o.errorHandler({code:"record was not found for key"+e}),n&&n(!1),void 0;var a=c.result,l=a.open("readwrite"),d=l.getMetadata();d.onsuccess=function(s){var c=s.target.result.size;if(i>c){r.debug("truncating: filewriter length = "+s.target.result.size+" position = "+i);var l=a.open("readwrite"),d=i-c;o.appendZerosBeforeRealData(l,e,d,t.buffer,!1,n,function(){o.performAfterWriteOperations(e,n)})}else{var l=a.open("readwrite");l.location=i;var u=l.write(t.buffer);if(!u&&0==i&&0==t.buffer.byteLength)return o.performAfterWriteOperations(e,n),void 0;u.onsuccess=function(){o.performAfterWriteOperations(e,n)},u.onerror=function(e){o.currentlyWriting=!1,o.errorHandler(e),n&&n(!1)}}},d.onerror=function(e){o.currentlyWriting=!1,o.errorHandler(e),n&&n(!1)}},c.onerror=function(e){o.currentlyWriting=!1,o.errorHandler(e),n&&n(!1)}}},_write:function(e,t,i,n){var o=this,s=o.db.transaction([o.filesObjectStore],"readwrite").objectStore(o.filesObjectStore),a=s.get(e);o.currentlyWriting=!0,a.onsuccess=function(s){if(!s.target.result)return o.currentlyWriting=!1,o.errorHandler({code:"record was not found for key"+e}),n&&n(!1),void 0;var c=a.result,l=c.open("readwrite");if(o.filesMetaData[e]){var d=o.filesMetaData[e].fileLength;if(o.filesMetaData[e].fileLength=Math.max(d,i+t.buffer.byteLength),i>d){r.debug("truncating: filewriter length = "+s.target.result.size+" position = "+i);var l=c.open("readwrite"),u=i-d;o.appendZerosBeforeRealData(l,e,u,t.buffer,!1,n,function(){o.performAfterWriteOperations(e,n)})}else{var l=c.open("readwrite");l.location=i;var h=l.write(t.buffer);if(!h&&0==t.buffer.byteLength)return o.performAfterWriteOperations(e,n),void 0;h.onsuccess=function(){o.filesMetaData[e].appendedSinceLastFlush+=t.buffer.byteLength,o.performAfterWriteOperations(e,n),o.checkAndFlush(l,o,e,function(e){e||console.log("checkAndFlush error")},!1)},h.onerror=function(e){o.errorHandler(e),n&&n(!1)}}}else;},a.onerror=function(e){o.errorHandler(e),n&&n(!1)}},performAfterWriteOperations:function(e,t){var i=this;if(i.writeQueue.dequeue(),i.currentlyWriting=!1,r.debug("onwriteend( "+e+"): writeQueue length = "+i.writeQueue.getLength()),i.writeQueue.isEmpty()){t&&t(!0),r.debug("finished writing all the commands in command queue"),r.debug("writeQueue is empty, pendingObjectUrlCb = "+i.pendingObjectUrlCb[e]),i.pendingObjectUrlCb[e]&&(i.createObjectURL(e,i.pendingObjectUrlCb[e]),delete i.pendingObjectUrlCb[e]);for(var n=0;i.finishWriteCbs.length>n;++n)i.finishWriteCbs[n](e);i.finishWriteCbs=[]}else{t&&t(!0),r.debug("onwriteend: writeQueue is not empty, writing another command");var o=i.writeQueue.peek();i._write(o.resourceId,o.data,o.position,o.cb)}},_addWriteCommand:function(e,t,i,n){var r={resourceId:e,data:t,position:i,cb:n};this.writeQueue.enqueue(r)},appendZerosBeforeRealData:function(e,t,i,n,r,o,s){var a=this;if(r)if(n.byteLength>0){var c=e.append(n);c.onsuccess=function(){a.filesMetaData[t].appendedSinceLastFlush+=n.byteLength,s&&s()},c.onerror=function(){a.currentlyWriting=!1,a.writeQueue.dequeue(),o&&o(!1)}}else s&&s();else if(i>=67108864){var l=e.append(new ArrayBuffer(67108864));l.onsuccess=function(){var r=e.flush();r.onsuccess=function(){a.appendZerosBeforeRealData(e,t,i-67108864,n,!1,o,s)},r.onerror=function(){}},l.onerror=function(e){a.currentlyWriting=!1,a.writeQueue.dequeue(),"The operation failed for reasons unrelated to the file storage itself and not covered by any other error code."==e.target.error.message&&"UnknownError"==e.target.error.name||"The current locked file exceeded its quota limitations."==e.target.error.message&&"QuotaExceededError"==e.target.error.name?o&&o(!1,"space"):o&&o(!1)}}else if(i>0){var d=e.append(new ArrayBuffer(i));d.onsuccess=function(){if(a.filesMetaData[t].appendedSinceLastFlush+=i,a.filesMetaData[t].appendedSinceLastFlush>a.flushSize){var r=e.flush();r.onsuccess=function(){a.appendZerosBeforeRealData(e,t,0,n,!0,o,s)},r.onerror=function(){}}else a.appendZerosBeforeRealData(e,t,0,n,!0,o,s)},d.onerror=function(e){"The operation failed for reasons unrelated to the file storage itself and not covered by any other error code."==e.target.error.message&&"UnknownError"==e.target.error.name||"The current locked file exceeded its quota limitations."==e.target.error.message&&"QuotaExceededError"==e.target.error.name?(a.currentlyWriting=!1,a.writeQueue.dequeue(),o&&o(!1,"space")):o&&o(!1)}}else a.appendZerosBeforeRealData(e,t,0,n,!0,o,s)},checkAndFlush:function(e,t,i,n,r){if(t.filesMetaData[i].appendedSinceLastFlush>t.flushSize||r){var o=e.flush();o.onsuccess=function(){t.filesMetaData[i].appendedSinceLastFlush=0,n&&n(!0)},o.onerror=function(){console.log("flush error in checkAndFlush function")}}else n&&n(!0)},registerEvents:function(){this.errorHandler=function(e){var t="";switch(e.code){default:t=e}radio("offlineStorageError").broadcast(t),r.warn("File system error: "+t)}}})}(),function(){r.core.data.CacheManager=Object.subClass({ctor:function(){this.mb=1048576},getRandomArbitrary:function(e,t){return Math.floor(Math.random()*(t-e)+e)},testFillLibrary:function(e,t,i){this.fillLibraryWithMultipleFiles(0,e,t,i,function(){console.log("wrote all test files")})},fillLibraryWithMultipleFiles:function(e,t,i,n,o){var s=this,a=this.getRandomArbitrary(i,n);if(console.log(a),e==t)o(!0);else{var c=Date.now();r.core.data.FSio.createResource(c,function(){console.log("started to write file with id "+c),r.core.data.FSio.write(c,new Uint8Array([]),a,function(r,l){r?(console.log("wrote file with id "+c),s.fillLibraryWithMultipleFiles(e+1,t,i,n,o)):"space"===l&&s.handleOutOfSpace(c,a,function(){console.log("handleOutOfSpace")})})},!0)}},performHandleOuOfSpaceMainFunction:function(e,t,i,n,o,s,a){var c=e;r.core.data.FSio.getLibraryStatistics(function(e){o=e;var l=c.getFileSizeFromArray(t,o.filesStats),d=c.sumFilesSizeExcludingCurrent(t,o.filesStats),u=0,h=[],f=0;if(i>(l+d+a)/s)c.failedToCleanUpOutOfSpace(t,o,n);else{for(c.sortArrayOfFilesObjectByLastModified(o.filesStats);(s*i-l-a>u||(d-l-a)/2+i>u)&&o.filesStats.length>f;)if(-1==(""+o.filesStats[f].key).indexOf(".fi"))if(t!=o.filesStats[f].key&&c.isSafeToDeleteFile(o.filesStats[f])){h.push(o.filesStats[f]);var p=c.findCorrespondingFileInfo(o.filesStats,o.filesStats[f].key+".fi");p&&h.push(p),u+=o.filesStats[f].size,f++}else f++;else f++;u>=s*i-l-a?r.core.data.FSio.deleteFiles(h,r.core.data.FSio,function(e){e?n&&n(!0):(r.error("deleteFiles failed for an unknown reason"),n&&n(!1))}):c.failedToCleanUpOutOfSpace(t,o,n)}})},handleOutOfSpace:function(e,t,i){var n,o,s=this,a=0;r.config.IS_FIREFOX?(o=2,a=0,s.performHandleOuOfSpaceMainFunction(s,e,t,i,n,o,a)):(o=1,r.core.data.FSio.getUnUsedQuotaSpace(function(r){a=r,s.performHandleOuOfSpaceMainFunction(s,e,t,i,n,o,a)}))},test:function(){var e,t=this;r.core.data.FSio.getLibraryStatistics(function(i){e=i,t.standardCleanUp(e,function(e){console.log(e)})})},standardCleanUp:function(e,t){var i=0,n=[],o=0;for(this.sortArrayOfFilesObjectByLastModified(e.filesStats);e.size/2>i&&e.filesStats.length>o;)if(-1==(""+e.filesStats[o].key).indexOf(".fi"))if(this.isSafeToDeleteFile(e.filesStats[o])){n.push(e.filesStats[o]);var s=this.findCorrespondingFileInfo(e.filesStats,e.filesStats[o].key+".fi");s&&n.push(s),i+=e.filesStats[o].size,o++}else o++;else o++;r.core.data.FSio.deleteFiles(n,r.core.data.FSio,function(e){e?t&&t(!0):t&&t(!1)})},testCleanOldFiles:function(){this.cleanOldFiles(function(e){console.log(e)})},isSafeToDeleteFile:function(e){var t=0;return t=Date.now()-e.lastModified.getTime(),r.config.TIME_PERIOD_FILE_STILL_LIVE>t?!1:!0},cleanOldFiles:function(e){var t=this;r.core.data.FSio.getLibraryStatistics(function(i){var n=i,o=0,s=[],a=0;t.sortArrayOfFilesObjectByLastModified(n.filesStats);for(var c in n.filesStats)if(a=Date.now()-n.filesStats[c].lastModified.getTime(),a>r.config.PERIODIC_CACHE_CLEANUP_PERIOD){s.push(n.filesStats[c]);var l=t.findCorrespondingFileInfo(n.filesStats,n.filesStats[c].key+".fi");l&&s.push(l),o+=n.filesStats[c].size}r.core.data.FSio.deleteFiles(s,r.core.data.FSio,function(t){t?e&&e(!0):e&&e(!1)})})},convertMiliToDays:function(e){return Math.floor(e/864e5)},findCorrespondingFileInfo:function(e,t){var i;for(var n in e)e[n].key==t&&(i=e[n]);return i},spliceFileObjectFromArray:function(e,t){for(var i in e)e[i].key==t&&e.splice(i,1)},sortArrayOfFilesObjectByLastModified:function(e){return e.sort(function(e,t){var i=new Date(e.lastModified),n=new Date(t.lastModified);return n>i?-1:i>n?1:0}),e},getFileSizeFromArray:function(e,t){var i=0;for(var n in t)if(t[n].key==e){i=t[n].size;break}return i},sumFilesSizeExcludingCurrent:function(e,t){for(var i=0,n=0;t.length>n;n++)t[n].key!=e&&this.isSafeToDeleteFile(t[n])&&(i+=t[n].size);return i},failedToCleanUpOutOfSpace:function(e,t,i){var n=this,o=[],s=this.findCorrespondingFileInfo(t.filesStats,e),a=this.findCorrespondingFileInfo(t.filesStats,e+".fi");s&&o.push(s),a&&o.push(a),s&&(t.size-=s.size),a&&(t.size-=a.size),this.spliceFileObjectFromArray(t.filesStats,e),this.spliceFileObjectFromArray(t.filesStats,e+".fi"),r.core.data.FSio.deleteFiles(o,r.core.data.FSio,function(){r.warn("handleOutOfSpace can not clean enough space for the wanted download "),n.standardCleanUp(t,function(){i(!1)})})}}),r.core.data.CacheManager=new r.core.data.CacheManager}(),function(){function e(e,t){var i=!1,n=!0,r=e.document,o=r.documentElement,s=r.addEventListener?"addEventListener":"attachEvent",a=r.addEventListener?"removeEventListener":"detachEvent",c=r.addEventListener?"":"on",l=function(n){("readystatechange"!=n.type||"complete"==r.readyState)&&(("load"==n.type?e:r)[a](c+n.type,l,!1),!i&&(i=!0)&&t.call(e,n.type||n))},d=function(){try{o.doScroll("left")}catch(e){return setTimeout(d,50),void 0}l("poll")};if("complete"==r.readyState)t.call(e,"lazy");else{if(r.createEventObject&&o.doScroll&&!r.addEventListener){try{n=!e.frameElement}catch(u){}n&&d()}r[s](c+"DOMContentLoaded",l,!1),r[s](c+"readystatechange",l,!1),e[s](c+"load",l,!1)}}r.contentLoaded=e}(),function(){function e(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function n(){o.resizing||(o.resizing=!0,window.requestAnimationFrame(function(){o.instances.forEach(function(e){e.checkPanesWidth(),e.resize()}),o.resizing=!1}))}function o(e){this.document_container=e,this.instances=[],this.$children=[],this.feedback_open=!1,this.elementInited=!1,o.instances.push(this)}function s(e){var n={},o=e.Avg_Recv_P2P+e.Avg_Recv_HTTP,s=e.Total_Recv_No_Waste;this.size||(this.file_size=e.size,this.size=t(e.size),this.size_type=this.size.substring(this.size.length-2),n.size=this.size),this.total_avg_download=e.Total_Avg_Download,this.new_disp_speed=0==this.disp_speed?o:.9*this.disp_speed+.1*o,this.disp_speed=Math.floor(this.new_disp_speed),10>this.disp_speed&&(this.disp_speed=0);var a=this.disp_speed?Math.floor((e.size-s)/this.disp_speed):"Forever";null==this.eta||this.eta>86400||a+1==this.eta||this.eta_off>10||isNaN(this.eta)&&!isNaN(a)?(this.eta_off=0,this.eta=a):(this.eta_off++,this.eta--),n.time=i(this.eta),n.speed=this.disp_speed;var c=0;e.Total_Recv_HTTP>0&&e.Total_Recv_P2P>0&&(c=(e.Total_Recv_HTTP+e.Total_Recv_P2P)/e.Total_Recv_HTTP,c=Math.round(100*(c-1)),c=Math.min(c,999),c>0&&(n.extra_speed=c));var l=t(s,1)+"";return this.completion_rate=s/e.size,n.downloaded=l,e.size>s?n.progress=Math.round(100*(s/e.size)):(r.warn("FileUI trimmed the percentage to 100%"),n.progress=100),n}function a(e,t){var i=t.filename.split("."),n=i.pop();i=i.join("."),this.manager=e,this.options=t,this.started=!1,this.paused=!1,this.completed=!1,this.drawn=Object.create(null),this.paint_buffer=[],this.buffering=!1,this.chunks_in_block=12e5/r.config.CHUNK_SIZE,this.new_disp_speed=409600+1024*100*Math.random(),this.disp_speed=0,this.url=t.url,this.http_color=l,this.fs_color=l,this.waste_color=l,this.colors=[l],this.num_of_peers=0,this.start_time=Date.now(),this._debug(),this._initElement(),this._initCanvas(),this.setFilename(i),this.setFileExt(n),this.displayInitializing(),this.manager.resize()}function c(){a.apply(this,arguments);var e,t=document.body,i=window.getComputedStyle(t),n="overflow",r="visible";e=i.getPropertyValue(n),e!=r&&(this._old_body_overflow=e,t.style.setProperty(n,r,"important")),window.addEventListener("touchmove",this._touchMoveHandler,!1)}var l="#428bca",d=400,u=8,h="rgba(255,101,35,1)",f=4,p=Math.PI,g=p/180,m=!1,b="iso, tar, gz, lz, lzma, lzo, rz, xz, 7z, s7z, ace, apk, arc, arj"+", ice, jar, rar, zip, zipx, cab, lzh, bz2, uue, z".split(", "),v="webm, mkv, flv, ogv, ogg, avi, mov, qt, wmv, rm, rmvb, mp4, m4p"+", m4v, mpg, mp2, mpeg, mpe, mpv, m2v, m4v, 3gp, 3g2".split(", "),_="jpg, jpeg, jpe, jfif, gif, png, bmp, tif, tiff".split(", "),w=function(){var e=document.createElement("div"),t=e.style;return"transition"in t?"transitionend":"webkitTransition"in t?"webkitTransitionEnd":"msTransition"in t?"MSTransitionEnd":null}();window.matchMedia?window.addEventListener("load",function(){if(window.matchMedia("only screen and (min-device-width : 320px) and (max-device-width : 640px) and (max-device-height: 768px)").matches){m=!0;var e,t=document.querySelector("meta[name=viewport]"),i={width:"device-width","user-scalable":"no","initial-scale":"1"},n=[],r=!1;t?(e=t.getAttribute("content").match(/([-\w]+=[^\s,]*)/g),e&&e.length&&e.forEach(function(e){e=e.split("="),e[0]in i||n.push(e[0]+"="+e[1])})):(t=document.createElement("meta"),t.setAttribute("name","viewport"),r=!0),Object.keys(i).forEach(function(e){n.push(e+"="+i[e])}),t.setAttribute("content",n.join(", ")),r&&document.head.appendChild(t)}},!1):window.addEventListener("resize",n,!1),o.instances=[],o.prototype._initElement=function(){var t=this.$container=document.createElement("div");t.classList.add("p5-dl-container"),t.classList.add("p5-dl-hide"),t.innerHTML=e("#p5-dl-container-template")[0].textContent,this.$el=e(".p5-dl-main",this.$container)[0],this.document_container.appendChild(t)},o.prototype.resize=function(){m||this.instances.forEach(function(e){e.resize()})},o.prototype.checkPanesWidth=function(){if(!m){var e,t=this.$el,i=t.clientWidth,n=this.$children,r=n.length;r*d+(r-1)*u>=i?(t.parentNode.classList.add("p5-dl-fixed-panes"),n.forEach(function(e){e.style.removeProperty("width")}),n[0].classList.remove("p5-dl-only-child")):(t.parentNode.classList.remove("p5-dl-fixed-panes"),r>1?(e=Math.floor((i-(r-1)*u)/r),n.forEach(function(t){t.style.width=e+"px"}),n[0].classList.remove("p5-dl-only-child")):r&&(n[0].classList.add("p5-dl-only-child"),n[0].style.removeProperty("width")))}},o.prototype.addPane=function(e){return this.elementInited||(this._initElement(),this._initFeedbackForm(),this.elementInited=!0),m?new c(this,e):new a(this,e)},o.prototype.open=function(e){this.instances.length||(this.$container.classList.remove("p5-dl-hide"),document.body.classList.add("p5-dl-fixed")),this.instances.push(e),this.$children.push(e.$el),this.$el.insertBefore(e.$el,this.$el.firstChild),this.checkPanesWidth()},o.prototype.close=function(e){this.instances.splice(this.instances.indexOf(e),1),this.$children.splice(this.$children.indexOf(e.$el),1),this.instances.length||(this.$container.classList.add("p5-dl-hide"),document.body.classList.remove("p5-dl-fixed")),this.$el.removeChild(e.$el),this.checkPanesWidth(),this.resize()},o.prototype.serializeFeedbackForm=function(){var e=new FormData(this.$feedback_form),t=window.location,i=t.href.replace(t.protocol+"//"+t.hostname,""),n=t.port,o=this.collectStats();return n&&(i=i.replace(":"+n,"")),e.append("user_agent",window.navigator.userAgent),e.append("user_domain",t.hostname),e.append("path",i),e.append("log_capture",r.logString.substring(0,1048576)||"n.a"),e.append("files",JSON.stringify(o)),e},o.prototype._initFeedbackForm=function(){var t,i="p5-dl-checked",n=!1,r=function(){this.checkPanesWidth(),this.resize(),n&&window.requestAnimationFrame(r)}.bind(this),o=function(){n=!1},s=function(){this.feedback_open=!this.feedback_open,null==w&&setTimeout(o,300),this.$container.classList.toggle("p5-dl-feedback-opened"),n=!0,window.requestAnimationFrame(r)}.bind(this),a=function(){this.$submit.removeEventListener("click",a,!1);var t=new XMLHttpRequest,i=this.serializeFeedbackForm();t.open("POST","https://api.peer5.com/downloader-feedback"),t.onreadystatechange=function(){4===t.readyState&&this.$submit.addEventListener("click",a,!1)}.bind(this),t.send(i),e(".p5-dl-feedback-comment")[0].value="",s()}.bind(this);this.$feedback_container=e(".p5-dl-feedback",this.$container)[0],this.$feedback_form=e(".p5-dl-feedback-form",this.$container)[0],this.$submit=e(".p5-dl-feedback-submit",this.$feedback_form)[0],w&&this.$feedback_container.addEventListener(w,o,!1),this.$submit.addEventListener("click",a,!1),e(".p5-dl-feedback-open",this.$container)[0].addEventListener("click",s,!1),e("input[name=rating]",this.$feedback_form).forEach(function(e){e.addEventListener("change",function(){this.feedback_open||s();var n=e.parentNode.parentNode;t&&t.classList.remove(i),e.checked&&(n.classList.add(i),n.parentNode.classList.add(i),t=n)}.bind(this),!1)},this)},o.prototype.collectStats=function(){return this.instances.map(function(e){return e.collectStats()})},a.prototype.update=function(e){if(!this.paused){var t=s.call(this,e);t.size&&this.setTotalSize(t.size),t.time&&this.setTime(t.time),t.speed&&this.setSpeed(t.speed),this.setExtraSpeed(t.extra_speed),t.downloaded&&this.setSize(t.downloaded),t.progress&&this.setProgress(t.progress)}},a.prototype.collectStats=function(){return{speed_avg:this.total_avg_download||-1,completion_rate:this.completion_rate||-1,file_size:this.file_size||-1,time_elapsed:this.start_time?Date.now()-this.start_time:-1}},a.prototype.enablePause=function(){this.$pause.classList.remove("p5-dl-hide")},a.prototype.disablePause=function(){this.$pause.classList.add("p5-dl-hide")},a.prototype.setFilename=function(e){this.$filename.textContent=e},a.prototype.setFileExt=function(e){this.$fileext.textContent="."+e,~b.indexOf(e)?this.$file_type.classList.add("p5-dl-zip"):~v.indexOf(e)?this.$file_type.classList.add("p5-dl-media"):~_.indexOf(e)&&this.$file_type.classList.add("p5-dl-pic")},a.prototype.setProgress=function(e){this.progress=e,this.$progress_fill.style.height=e/100*this.progress_fill_max_height+"px",this.$progress.textContent=e+"%"},a.prototype.setTime=function(e){this.$time.textContent=e?e:""},a.prototype.setSpeed=function(e){if(isNaN(e))this.$speed.textContent="";else{var i=e>1048576?2:0;this.$speed.textContent=t(Math.floor(1.1*e),i)+"/s"}},a.prototype.setSize=function(e){this.$size.textContent=e?e+"/":""},a.prototype.setTotalSize=function(e){this.$total_size.textContent=e},a.prototype.setPeers=function(e){isNaN(e)?this.$peers.textContent="":(this.num_of_peers=e,this.$peers.textContent=e+" Peers")},a.prototype.setExtraSpeed=function(e){e?(this.$extra_speed.textContent="+"+e+"% Speed by peers",this.$peers_speed.classList.add("p5-dl-has-peers")):this.$peers_speed.classList.remove("p5-dl-has-peers")},a.prototype.setNumOfChunks=function(e){this.num_of_chunks=Math.ceil(e/r.config.CHUNK_SIZE),this.num_of_blocks=this.num_of_chunks/this.chunks_in_block},a.prototype._debug=function(){location.hash.indexOf("visual")>0&&(this.colors=["#3491E3","#2871B0","#1D507D","#62A7E3","#8FBCE3","#4F677D"],this.http_color="#111111",this.fs_color="#555555",this.waste_color="#FFFFFF",radio("peer5_pending_http_chunk").subscribe([function(e){this.paintHttp(e,.5)},this]),radio("peer5_p2p_pending_chunk").subscribe([function(e,t,i){this.paintP2p(e,.5,i)},this]))},a.prototype._initElement=function(){var t=this.$el=document.createElement("li");t.classList.add("p5-dl-pane"),t.innerHTML=e("#p5-dl-pane-template")[0].textContent,this.manager.open(this),this.progress_fill_max_height=e(".p5-dl-progress",this.$el)[0].clientHeight-8,this.$progress_fill=e(".p5-dl-progress-fill",this.$el)[0],this.$pause=e(".p5-dl-pause",this.$el)[0],this.$play=e(".p5-dl-play",this.$el)[0],this.$done=e(".p5-dl-done",this.$el)[0],this.$close=e(".p5-dl-close-pane",this.$el)[0],this.$filename=e(".p5-dl-filename",this.$el)[0],this.$fileext=e(".p5-dl-file-ext",this.$el)[0],this.$progress=e(".p5-dl-progress-label",this.$el)[0],this.$peers=e(".p5-dl-stats-peers-content",this.$el)[0],this.$speed=e(".p5-dl-stats-speed-content",this.$el)[0],this.$extra_speed=e(".p5-dl-extra-speed-content",this.$el)[0],this.$peers_speed=e(".p5-dl-peers-speed",this.$el)[0],this.$time=e(".p5-dl-stats-time-content",this.$el)[0],this.$total_size=e(".p5-dl-stats-size-total-content",this.$el)[0],this.$file_type=e(".p5-dl-stats-size",this.$el)[0],this.$size=e(".p5-dl-stats-size-content",this.$el)[0],this.$message=e(".p5-dl-stats-message",this.$el)[0],this.$pause.addEventListener("click",this.pause.bind(this),!1),this.$play.addEventListener("click",this.resume.bind(this),!1),this.$close.addEventListener("click",this.close.bind(this),!1)},a.prototype._initCanvas=function(){var e,t=document.createElement("canvas");return this.canvas=t,t.classList.add("boxes"),this.$el.insertBefore(t,this.$el.firstChild),e=window.getComputedStyle(this.$el),this.canvas_width=+e.getPropertyValue("width").slice(0,-2),this.canvas_height=6,t.width=this.canvas_width,t.height=this.canvas_height,this.ctx=t.getContext("2d"),this.ctx.strokeStyle=h,this.ctx.fillStyle=h,this.ctx.lineWidth=f,this},a.prototype.pause=function(){this.paused=!0,this.$pause.style.display="none",this.$play.style.display="block",this.options.pause(this)},a.prototype.resume=function(){this.paused=!1,this.$play.style.display="none",this.$pause.style.display="block",this.options.resume(this)},a.prototype.resize=function(){this.resized=!0;var e=window.getComputedStyle(this.$el);this.canvas_width=+e.getPropertyValue("width").slice(0,-2),this.canvas.width=this.canvas_width,this.ctx.strokeStyle=h,this.ctx.fillStyle=h,this.ctx.lineWidth=f,this.draw()},a.prototype.draw=function(e){this.resized&&(this.resized=!1,this.drawState()),arguments.length&&this.drawChunk(e)},a.prototype.drawState=function(){var e,t=this.drawn;for(e in t)this.drawBlock(e)},a.prototype.drawChunk=function(e){var t=Math.floor(e/this.chunks_in_block),i=this.drawn[t];i||(i=this.drawn[t]=[]),~i.indexOf(e)||(i.push(e),this.drawBlock(t))},a.prototype.drawBlock=function(e){var t=this.canvas_width/this.num_of_blocks,i=this.drawn[e].length/this.chunks_in_block,n=(0|e*t)%this.canvas_width;this.paint(n,t*i)},a.prototype.fillBuffer=function(e,t){this.paint_buffer.push([e,t])},a.prototype.paint=function(e,t){this.fillBuffer(e,t),this.buffering||(this.buffering=!0,window.requestAnimationFrame(this._paint.bind(this)))},a.prototype._paint=function(){for(var e,t=this.paint_buffer;e=t.pop();)this.ctx.fillRect(e[0],0,e[1]||1,6);this.buffering=!1},a.prototype.close=function(){this.manager.close(this),this.options.close(this)},a.prototype.getColor=function(e){return this.colors[e.charCodeAt(0)%this.colors.length]},a.prototype.paintFs=function(e,t){this.draw(e,t,this.fs_color)},a.prototype.paintHttp=function(e,t){this.draw(e,t,this.http_color)},a.prototype.paintP2p=function(e,t,i){this.draw(e,t,i)},a.prototype.paintWasteP2p=function(e,t){this.draw(e,t,this.waste_color)},a.prototype.paintWasteHttp=function(e,t){this.draw(e,t,this.waste_color)},a.prototype.displayDownloadStart=function(){this.setMessage(),this.enablePause(),this.setPeers(0)},a.prototype.displayInitializing=function(){this.setMessage("Initializing file...tnx!")},a.prototype.displayFilesystemAuth=function(){this.setMessage("Please allow the file to be stored to your computer")},a.prototype.displayCompleted=function(e){this.completed=!0,100!==this.progress&&(r.warn("FileUI trimmed the percentage to 100%"),this.setProgress(100),this.setSize(t(e))),this.disablePause(),this.$el.classList.add("p5-dl-completed"),this.setSpeed(this.total_avg_download),this.$done.classList.remove("p5-dl-hide"),this.setMessage("Download complete")},a.prototype.displayVerifying=function(){this.setMessage("Verifying file...")},a.prototype.concealStats=function(){this.setExtraSpeed(),this.setSize(),this.setSpeed(),this.setTime(),this.setPeers()},a.prototype.showError=function(e){this.paused=!0,this.disablePause(),this.concealStats(),this.setMessage(e+"")},a.prototype.setMessage=function(e){e?(this.$message.textContent=e,this.setExtraSpeed()):this.$message.textContent=""},c.prototype=Object.create(a.prototype,{constructor:{value:c},_initCanvas:{value:function(){var t=e(".p5-dl-progress",this.$el)[0],i=document.createElement("canvas"),n=window.getComputedStyle(t);return this.canvas=i,i.classList.add("arcs"),this.canvas_width=+n.getPropertyValue("width").slice(0,-2)+20,this.canvas_height=+n.getPropertyValue("height").slice(0,-2)+20,t.parentNode.insertBefore(i,t),i.width=this.canvas_width,i.height=this.canvas_height,this.ctx=i.getContext("2d"),this.ctx.strokeStyle=h,this.ctx.fillStyle=h,this.ctx.lineWidth=f,this.x=this.canvas_width/2,this.r=this.canvas_width/2-8,this.y=this.canvas_height/2,this.ctx.beginPath(),this},enumerable:!0},drawBlock:{value:function(e){var t=360/this.num_of_blocks,i=this.drawn[e].length/this.chunks_in_block,n=e*t%360,r=n+i*t;this.paint(n,r)},enumerable:!0},fillBuffer:{value:function(e,t){this.ctx.moveTo(this.x+this.r*Math.cos(e*g),this.y+this.r*Math.sin(e*g)),this.ctx.arc(this.x,this.y,this.r,e*g,t*g)},enumerable:!0},_paint:{value:function(){this.ctx.stroke(),this.ctx.beginPath(),this.buffering=!1},enumerable:!0},close:{value:function(){a.prototype.close.call(this),this._old_body_overflow&&(document.body.style.setProperty("overflow",this._old_body_overflow),this._old_body_overflow=null),window.removeEventListener("touchmove",this._touchMoveHandler,!1)},enumerable:!0},_touchMoveHandler:{value:function(e){e.preventDefault()},enumerable:!0}}),r.client.downloader.PaneManager=o}(),r.client.downloader.AdManager=Object.subClass({name:"peer5.client.downloader.AdManager",ctor:function(e){this.container=e},display:function(e,t){function i(){if(Math.random()>r.config.AD_SMPL_RTIO){var e=document.createElement("div"),t=document.createElement("div");e.className="p5-dl-ad-display",t.className="p5-dl-ad-overlay",e.innerHTML=r.config.AD_FRAME,t.appendChild(e)}else{var e=document.createElement("a"),i=document.createElement("div");.5>Math.random()?(i.className="p5-dl-ad-display-smpl1",e.href="http://www.down5.me/down5/vlc.html?o=sda1_6"):(i.className="p5-dl-ad-display-smpl2",e.href="http://www.down5.me/down5/megaglest.html?o=sda2_6"),e.target="_blank",e.appendChild(i)}var n=document.createElement("span");n.className="p5-dl-button p5-dl-ad-display-close",n.onclick=function(){this.parentNode.remove(),clearInterval(thi$.intervalId)},e.appendChild(n),thi$.container.appendChild(e)}function n(){var e=document.querySelector("div.p5-dl-ad-display > iframe");e.src=e.src}function o(){i(),thi$.refresh>0&&(thi$.intervalId=setInterval(n,thi$.refresh))}this.delay=isNaN(e)?0:e,this.refresh=isNaN(t)?0:t,thi$=this,setTimeout(o,this.delay)},stop:function(){}}),function(){function e(){function e(){l+=Math.round(2*Math.random()-1),document.querySelector(".peer5_users_counter").innerHTML=l}var i,n,o=document.head,s=document.createElement("style"),a={"p5-dl-container-template":'<div class="p5-dl-main-wrapper">\n    <ul class="p5-dl-main"></ul>\n</div>\n<div class="p5-dl-scroller"><span class="p5-dl-grip"></span></div>\n<div class="p5-dl-feedback">\n    <form class="p5-dl-feedback-form" method="post" action="//peer5.com/feedback-form">\n        <div class="p5-dl-feedback-left">\n            <span class="p5-dl-need-help">ANY FEEDBACK?</span>\n            <ul>\n                <li>\n                    <label><input type="radio" name="rating" value="1" /></label>\n                </li>\n                <li>\n                    <label><input type="radio" name="rating" value="2" /></label>\n                </li>\n                <li>\n                    <label><input type="radio" name="rating" value="3" /></label>\n                </li>\n                <li>\n                    <label><input type="radio" name="rating" value="4" /></label>\n                </li>\n                <li>\n                    <label><input type="radio" name="rating" value="5" /></label>\n                </li>\n            </ul>\n            <span class="p5-dl-feedback-open"></span>\n\n            <a target="_blank" href="https://www.peer5.com"><div class="p5-dl-brand"></div></a>\n        </div>\n        <div class="p5-dl-feedback-right">\n            <textarea class="p5-dl-feedback-comment" name="comment" placeholder="YOUR FEEDBACK HERE"></textarea>\n            <span class="p5-dl-feedback-submit">SUBMIT</span>\n        </div>\n    </form>\n</div>\n',"p5-dl-pane-template":'<span class="p5-dl-button p5-dl-close-pane"></span>\n<div class="p5-dl-progress">\n    <div class="p5-dl-progress-fill"></div>\n    <span class="p5-dl-progress-label"></span>\n    <span class="p5-dl-button p5-dl-pause p5-dl-hide"></span>\n    <span class="p5-dl-button p5-dl-play"></span>\n    <span class="p5-dl-button p5-dl-done p5-dl-hide"></span>\n</div>\n<div class="p5-dl-meta">\n    <h1 class="p5-dl-file">\n        <span class="p5-dl-filename p5-dl-ellipsis"></span><span\n            class="p5-dl-file-ext p5-dl-em"></span>\n    </h1>\n\n    <div class="p5-dl-stats">\n        <div class="p5-dl-peers-speed">\n            <span class="p5-dl-stats-datum p5-dl-stats-peers"><span class="p5-dl-stats-peers-content"></span></span><span\n                class="p5-dl-stats-datum p5-dl-stats-speed p5-dl-stats-speed-content"></span><span\n                class="p5-dl-extra-speed p5-dl-extra-speed-content"></span>\n        </div><span\n            class="p5-dl-stats-datum p5-dl-stats-time p5-dl-stats-time-content"></span><span\n            class="p5-dl-stats-datum p5-dl-stats-size"><span class="p5-dl-stats-size-content"></span><span\n            class="p5-dl-stats-size-total p5-dl-stats-size-total-content"></span></span>\n        <div class="p5-dl-stats-message"></div>\n    </div>\n</div>\n'},c=document.createElement("script");c.type="x-template",s.innerHTML="@import url(//fonts.googleapis.com/css?family=Exo+2:200);body.p5-dl-fixed{padding-bottom:144px!important}.p5-dl-container{position:fixed;bottom:0;left:0;right:0;z-index:2147483647;height:144px;padding:0;margin:0;background-color:#000;font-family:'Exo 2',sans-serif!important;font-size:16px!important;text-transform:uppercase}.p5-dl-container *{margin:0;padding:0;color:#EEE;font-weight:400}.p5-dl-main-wrapper{position:absolute;top:0;bottom:0;left:0;right:234px;z-index:-1;overflow:hidden;-webkit-transition:right 300ms ease-in-out 0ms;transition:right 300ms ease-in-out 0ms}.p5-dl-feedback-opened .p5-dl-main-wrapper{right:500px}.p5-dl-main-wrapper.p5-dl-fixed-panes{overflow-x:auto;overflow-y:hidden}.p5-dl-scroller{display:none;position:absolute;bottom:0;left:0;right:233px;height:10px;background-color:#58585B}.p5-dl-grip{display:block;position:absolute;bottom:2px;left:4px;width:20%;height:6px;border-radius:3px;background-color:#AAA}.p5-dl-main{list-style:none;position:absolute;top:0;bottom:0;left:0;z-index:-1;width:100%;white-space:nowrap}.p5-dl-fixed-panes .p5-dl-main{width:auto;min-width:100%}.p5-dl-pane{display:inline-block;position:relative;z-index:-1;height:100%;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background-color:#58585B}.p5-dl-pane+.p5-dl-pane{margin-left:6px}.p5-dl-fixed-panes .p5-dl-pane{width:400px}.p5-dl-pane canvas.boxes{position:absolute;left:0;right:0;top:0}.p5-dl-pane canvas.arcs{position:absolute;top:25px;left:10px}.p5-dl-fixed-panes .p5-dl-pane canvas.arcs{top:10px}.p5-dl-progress{display:inline-block;position:absolute;left:20px;top:35px;overflow:hidden;width:83px;height:83px;border:none;border-radius:83px;-webkit-box-shadow:inset 0 0 0 4px #FFF;-moz-box-shadow:inset 0 0 0 4px #FFF;box-shadow:inset 0 0 0 4px #FFF}.p5-dl-fixed-panes .p5-dl-progress{top:20px}.p5-dl-progress-fill{position:absolute;bottom:4px;left:0;right:0;z-index:-1;background-color:#FF6523}.p5-dl-progress-label{display:block;position:absolute;z-index:1;width:100%;height:50%;padding-top:15px;text-align:center;font-size:19px;color:#DFE0E1}.p5-dl-button{display:block;position:absolute;z-index:2;width:100%;height:100%;padding-top:45px;font-size:24px;font-weight:700;text-align:center;color:#FFF;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;cursor:pointer}.p5-dl-ad-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000;filter:alpha(opacity=50);-moz-opacity:.5;-khtml-opacity:.5;opacity:.5;z-index:0}.p5-dl-ad-display{position:fixed;bottom:141px;z-index:10001;left:50%;transform:translate(-50%)}.p5-dl-ad-display-smpl1{height:90px;width:728px;position:fixed;bottom:144px;z-index:10001;left:50.7%;transform:translate(-50%);background-image:url(https://api.peer5.com/downloader/icons/ads/VLCbanner.png);background-size:100% auto}.p5-dl-ad-display-smpl2{height:90px;width:728px;position:fixed;bottom:144px;z-index:10001;left:50.7%;transform:translate(-50%);background-image:url(https://api.peer5.com/downloader/icons/ads/Megaglest1.png);background-size:100% auto}.p5-dl-ad-display-close{right:2px;top:2px;width:20px;height:20px;padding:0;background:url(https://api.peer5.com/downloader/icons/x_button.svg) left top/cover no-repeat}.p5-dl-close-pane{right:12px;top:12px;width:20px;height:20px;padding:0;background:url(https://api.peer5.com/downloader/icons/x_button.svg) left top/cover no-repeat}.p5-dl-pause{background:url(https://api.peer5.com/downloader/icons/pause-white.svg) center 70%/40% auto no-repeat}.p5-dl-play{display:none;background:url(https://api.peer5.com/downloader/icons/play-white.svg) center 70%/40% auto no-repeat}.p5-dl-done{background:url(https://api.peer5.com/downloader/icons/v-white.svg) center 70%/40% auto no-repeat;cursor:default}.p5-dl-meta{display:inline-block;position:absolute;top:20px;bottom:20px;right:13px;left:123px}.p5-dl-fixed-panes .p5-dl-meta{top:10px;bottom:10px}.p5-dl-extra-speed{display:none;position:absolute;bottom:-8px;left:5%;min-width:90%;padding:2px 4px;font-size:10px;text-align:center;background-color:#FF6523;color:#111;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.p5-dl-has-peers .p5-dl-extra-speed{display:block}.p5-dl-pane.p5-dl-only-child .p5-dl-extra-speed{font-size:13px;bottom:-46px}.p5-dl-file{position:absolute;top:0;left:2px;right:0;height:40px;line-height:40px;font-size:20px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;text-align:center}.p5-dl-filename{color:#FFF}.p5-dl-pane.p5-dl-only-child .p5-dl-file{right:51%;height:104px;line-height:111px;font-size:23px}.p5-dl-pane.p5-dl-only-child .p5-dl-file:after,.p5-dl-pane.p5-dl-only-child .p5-dl-file:before{content:\"\";position:absolute;top:15px;bottom:15px;right:0;border-right:1px solid #979797}.p5-dl-pane.p5-dl-only-child .p5-dl-file:before{right:auto;left:0}.p5-dl-em{color:#FF6523}.p5-dl-stats{position:absolute;top:40px;bottom:0;left:0;right:0}.p5-dl-pane.p5-dl-only-child .p5-dl-stats{top:0;left:50%;height:104px}.p5-dl-stats-datum{display:inline-block;width:25%;height:60px;padding:34px 4px 0;font-size:11px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;text-align:center;vertical-align:top;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background-repeat:no-repeat;background-size:30px auto;background-position:center 6px}.p5-dl-pane.p5-dl-only-child .p5-dl-stats-datum{height:104px;padding:60px 6px 20px;line-height:100%;font-size:16px;background-size:40px auto}.p5-dl-stats-time{background-image:url(https://api.peer5.com/downloader/icons/timer.svg)}.p5-dl-pane.p5-dl-only-child .p5-dl-stats-time{background-position:center 26px}.p5-dl-stats-speed{width:50%;background-image:url(https://api.peer5.com/downloader/icons/speedometer.svg)}.p5-dl-pane.p5-dl-only-child .p5-dl-stats-speed{background-position:center 26px}.p5-dl-stats-size{background-image:url(https://api.peer5.com/downloader/icons/doc.svg)}.p5-dl-stats-size.p5-dl-zip{background-image:url(https://api.peer5.com/downloader/icons/zip.svg)}.p5-dl-stats-size.p5-dl-media{background-image:url(https://api.peer5.com/downloader/icons/media.svg)}.p5-dl-stats-size.p5-dl-pic{background-image:url(https://api.peer5.com/downloader/icons/pic.svg)}.p5-dl-pane.p5-dl-only-child .p5-dl-stats-size{background-position:center 26px}.p5-dl-peers-speed{display:inline-block;position:relative;width:50%;height:60px}.p5-dl-stats-peers{width:50%;background-image:url(https://api.peer5.com/downloader/icons/peer-deactivated.svg)}.p5-dl-has-peers .p5-dl-stats-peers{background-image:url(https://api.peer5.com/downloader/icons/peer-activated.svg)}.p5-dl-has-peers .p5-dl-stats-speed{background-image:url(https://api.peer5.com/downloader/icons/speedometer-extra.svg)}.p5-dl-pane.p5-dl-only-child .p5-dl-stats-peers{background-position:center 26px}.p5-dl-stats-message{position:absolute;width:90%;margin:0 auto;bottom:-8px;right:6px;left:6px;line-height:150%;font-size:13px;text-align:center;background-color:#999;color:#FFF;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.p5-dl-pane.p5-dl-only-child .p5-dl-stats-message{bottom:0}.p5-dl-completed .p5-dl-stats-message{background-color:#FF6523;color:#111}.p5-dl-feedback{position:absolute;top:0;bottom:0;right:0;width:234px;padding:20px 0;border:6px solid #000;background-color:#000;text-align:center;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:-5px 0 4px 0 rgba(0,0,0,.5);-moz-box-shadow:-5px 0 4px 0 rgba(0,0,0,.5);box-shadow:-5px 0 4px 0 rgba(0,0,0,.5);-webkit-transition:width 300ms ease-in-out 0ms;transition:width 300ms ease-in-out 0ms}.p5-dl-feedback-opened .p5-dl-feedback{width:500px}.p5-dl-brand{display:inline-block;width:116px;height:30px;line-height:30px;text-align:left;background:url(https://api.peer5.com/downloader/icons/logo.svg) left top no-repeat}.p5-dl-need-help{font-size:23px}.p5-dl-brand:before{content:\"BY\";font-size:23px}.p5-dl-feedback-form{height:30px;text-align:center}.p5-dl-feedback-form p{font-weight:700}.p5-dl-feedback-left{position:relative;top:0;left:0;width:234px}.p5-dl-feedback-right{position:absolute;top:20px;right:0;left:234px;padding:0 20px}.p5-dl-feedback-open{display:inline-block;width:26px;height:26px;background:url(https://api.peer5.com/downloader/icons/speech_bubble.svg) center center no-repeat;cursor:pointer}.p5-dl-feedback-form ul{display:inline-block;vertical-align:top;list-style:none}.p5-dl-feedback-form li{display:inline-block;width:26px;text-align:center}.p5-dl-feedback-form li label{display:block;position:relative;width:26px;height:26px;cursor:pointer}.p5-dl-feedback-form li label:after{position:absolute;content:'';display:block;top:0;width:30px;height:25px;background:url(https://api.peer5.com/downloader/icons/empty_feedback_star.svg) center center no-repeat}.p5-dl-feedback-form ul.p5-dl-checked label:after{background:url(https://api.peer5.com/downloader/icons/orange_feedback_star.svg) center center no-repeat}.p5-dl-feedback-form li.p5-dl-checked~li label:after{background:url(https://api.peer5.com/downloader/icons/empty_feedback_star.svg) center center no-repeat}.p5-dl-feedback-form ul.p5-dl-checked:hover label:after,.p5-dl-feedback-form ul:hover label:after{background:url(https://api.peer5.com/downloader/icons/orange_feedback_star.svg) center center no-repeat}.p5-dl-feedback-form .p5-dl-checked li:hover~li label:after,.p5-dl-feedback-form li:hover~li label:after{background:url(https://api.peer5.com/downloader/icons/empty_feedback_star.svg) center center no-repeat}.p5-dl-feedback-form li input{visibility:hidden}.p5-dl-completed canvas{background-color:#FF6523}.p5-dl-feedback-comment{display:block;padding:6px;width:100%;height:56px;margin-bottom:8px;border:none;resize:none;border-radius:6px;color:#000;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:'Exo 2',sans-serif!important;font-weight:600}.p5-dl-feedback-submit{display:block;padding:2px 0;border-radius:6px;color:#fff;background-color:#FF6523;cursor:pointer}@media only screen and (min-device-width :320px) and (max-device-width :640px) and (max-device-height :768px){::-webkit-input-placeholder{color:#474747}:-moz-placeholder{color:#474747;opacity:1}::-moz-placeholder{color:#474747;opacity:1}:-ms-input-placeholder{color:#474747}.p5-dl-completed canvas{background-color:transparent}.p5-dl-container{height:auto;top:0}.p5-dl-feedback-open{display:none}.p5-dl-main-wrapper{right:0;bottom:200px;border:none}.p5-dl-feedback-opened .p5-dl-main-wrapper{right:0}.p5-dl-main{bottom:0}.p5-dl-pane{background-color:transparent}.p5-dl-pane canvas.arcs{position:absolute;top:50%;left:50%;margin:-65px 0 0 -85px}.p5-dl-progress{top:50%;left:50%;width:150px;height:150px;margin:-55px 0 0 -75px;border-radius:100px;-webkit-box-shadow:inset 0 0 0 6px #FFF;-moz-box-shadow:inset 0 0 0 6px #FFF;box-shadow:inset 0 0 0 6px #FFF}.p5-dl-progress-label{padding-top:30px}.p5-dl-progress-fill{background-color:#FF6523}.p5-dl-pause{padding-top:110px}.p5-dl-file{margin-top:10px;font-size:26px}.p5-dl-stats{top:50px}.p5-dl-pane.p5-dl-only-child .p5-dl-file:after{border:none}.p5-dl-em,.p5-dl-stats-size-total{color:#FF6523}.p5-dl-meta{top:0;bottom:0;left:0;right:0}.p5-dl-pane.p5-dl-only-child .p5-dl-stats{top:auto;left:0;height:80px;line-height:80px}.p5-dl-stats-datum{width:50%;padding:42px 4px 0;background-size:40px auto;font-size:16px}.p5-dl-peers-speed{position:absolute;bottom:12px;width:100%;padding-bottom:20px}.p5-dl-extra-speed{width:100%;left:0;bottom:-12px;font-size:18px}.p5-dl-stats-size{display:inline-block;width:50%;height:auto;padding:0;text-align:center;font-size:19px;background:none!important}.p5-dl-stats-time{display:inline-block;width:50%;height:auto;padding:0;font-size:19px;background:0 0}.p5-dl-stats-message{left:0;right:0;bottom:0;width:100%}.p5-dl-feedback{top:auto;width:100%;height:200px;padding:10px 0;border:none;background-color:#666}.p5-dl-feedback-opened .p5-dl-feedback{width:100%}.p5-dl-feedback-right{position:static;margin-top:9px}.p5-dl-feedback-left{position:static;width:auto}.p5-dl-need-help{display:none}.p5-dl-feedback-form{top:0;left:50px;right:50px;height:auto;text-align:center}.p5-dl-feedback-form li:hover label:before{position:initial;content:initial;display:initial;top:initial;width:initial;height:initial;background:initial}.p5-dl-feedback-comment{display:block;width:100%;height:64px;padding:8px;background-color:#999;border:3px solid #777;border-radius:8px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:'Exo 2',sans-serif!important}.p5-dl-feedback-submit{display:block;margin-top:12px;padding:3px 0;border-radius:8px;background-color:#FF6523;color:#fff;cursor:pointer;-webkit-box-shadow:0 1px 0 0 #000;-moz-box-shadow:0 1px 0 0 #000;box-shadow:0 1px 0 0 #000}.p5-dl-brand{position:absolute;bottom:10px;left:50%;margin-left:-58px;background:url(https://api.peer5.com/downloader/icons/logo.svg) left top no-repeat}}@media only screen and (min-device-width :320px) and (max-device-width :640px) and (max-device-height :768px) and (min-width :321px) and (orientation :landscape){.p5-dl-main-wrapper{bottom:12px}.p5-dl-stats-size,.p5-dl-stats-time{display:inline-block;width:50%}.p5-dl-feedback-opened .p5-dl-main-wrapper{right:0;bottom:200px}.p5-dl-feedback-opened .p5-dl-file{display:none}.p5-dl-feedback-opened .p5-dl-progress,.p5-dl-feedback-opened canvas.arcs{top:90%}.p5-dl-feedback-opened .p5-dl-stats{top:12px}.p5-dl-feedback-opened .p5-dl-peers-speed{padding-bottom:0}.p5-dl-feedback-opened .p5-dl-peers-speed .p5-dl-stats-datum{background-image:none}.p5-dl-brand{display:none}.p5-dl-feedback-opened .p5-dl-brand{display:block}.p5-dl-feedback{height:39px}.p5-dl-feedback-opened .p5-dl-feedback{height:200px;width:100%}.p5-dl-feedback-open{display:inline-block}}.p5-dl-hide{display:none!important}",o.appendChild(s);for(i in a)n=c.cloneNode(!1),n.setAttribute("id",i),n.textContent=a[i],o.appendChild(n),n=null;if(c=null,s=null,t=new r.client.downloader.PaneManager(document.body),[].slice.call(document.querySelectorAll("[peer5-download]")).forEach(function(e){e.addEventListener("click",function(t){var i,n=e.getAttribute("peer5-download");n&&(i="this"==n||"self"==n?e:document.querySelector(n)),t.preventDefault();var o=e.getAttribute("href");r.download(o,{container:i})})}),document.querySelector(".peer5_users_counter")){var l=Math.floor(Date.now()/3e4%9e5);window.setInterval(e,500),e()}}r.download=function(e,t){if(t||(t={}),!e)return r.error("Empty URL"),!1;var n=document.createElement("a");if(n.href=e,e=n.href,t.name=t.name?""+t.name:decodeURI(e.substr(e.lastIndexOf("/")+1).split("?")[0].split("#")[0]),t.onFallback&&"function"!=typeof t.onFallback&&(r.warn("options.onFallback is not a function - ignoring"),t.onFallback=null),t.onDownloadComplete&&"function"!=typeof t.onDownloadComplete&&(r.warn("options.onDownloadComplete is not a function - ignoring"),t.onDownloadComplete=null),t.md5){if("[object String]"!=Object.prototype.toString.call(t.md5))return r.error("options.sha1 contains invalid characters"),!1}else t.md5=null;if(t.sha1){if("[object String]"!=Object.prototype.toString.call(t.sha1))return r.error("options.sha1 contains invalid characters"),!1}else t.sha1=null;var o=i[e];if(o)r.warn(e+" was already existed in the filewrappers"),o.download();else{var s=new r.client.downloader.FileWrapper(e,t);s.download(),i[e]=s}},r.stopDownload=function(e){i[e].stop()},r.exitDownload=function(e){i[e].exit(),delete i[e]};var t,i={},n=function(){var e=!1;r.core.util.envokeCallback(o,[]),radio("beforeUnload").broadcast();for(var t in i)radio("exitPage").broadcast(i[t].started,i[t].fallback),!i[t].started||i[t].completed||i[t].fallback||(e=!0);return e?"Download in progress. Closing this tab will stop the download.":void 0},o=window.onbeforeunload;window.onbeforeunload=n,r.client.downloader.FileWrapper=Object.subClass({name:"peer5.client.downloader.FileWrapper",ctor:function(e,t){this.completed=!1,this.started=!1,this.fallback=!1,this.ui=null,this.url=e,this.swarmId=null,t.name&&(this.filename=t.name),this.options=t||{},this.ui_events_cache={peer5_received_http_chunk:function(e,t){t==this.url&&this.ui.paintHttp(e,1)},peer5_pending_http_chunk:function(e,t){t!=this.url},peer5_waste_http_chunk:function(e,t){t!=this.url},peer5_state_updated:function(e,t){t==this.url&&this.ui.update(e)},transferFinishedEvent:function(e){(this.url===e.url||this.swarmId===e.swarmId)&&this.ui.displayVerifying()},peer5_persistent_fd_auth:function(){this.ui.displayFilesystemAuth()},peer5_received_fs_chunk:function(e,t){t==this.swarmId&&this.ui.paintFs(e,1)},peer5_new_p2p_chunk:function(e,t,i){this.swarmId&&t==this.swarmId&&this.ui.paintP2p(e,1,i)},peer5_p2p_pending_chunk:function(e,t,i){this.swarmId&&t==this.swarmId&&this.ui.paintP2p(e,1,i)},peer5_waste_p2p_chunk:function(e,t,i){this.swarmId&&t==this.swarmId&&this.ui.paintWasteP2p(e,1,i)}}},download:function(){var e=this;this.isEnabled(function(){e._download()},function(){r.warn("Downloader isEnabled returned false"),e.regularDownload()})},_download:function(){function e(e){var t="attachment; filename=";if(-1==e.indexOf(t))return null;var i=e.replace(t,"");return i.substring(1,i.length-1)}function i(){if(!n.ui){var e={url:n.url,filename:n.filename,pause:function(){radio("pauseClicked").broadcast(),r.stopDownload(n.url)},resume:function(){radio("playClicked").broadcast(),r.download(n.url)},close:function(){r.exitDownload(n.url)}};n.ui=t.addPane(e),console.log(document.body.clientWidth),r.config.AD_FRAME&&document.body.clientWidth>1e3&&(n.adsManager=new r.client.downloader.AdManager(document.getElementsByClassName("p5-dl-container")[0]),n.adsManager.display(r.config.AD_FRAME_DELAY,r.config.AD_FRAME_REFRESH)),n.registerEvents()}}var n=this,o={};this.options.sha1?o.sha1=this.options.sha1:this.options.md5&&(o.md5=this.options.md5),r.config.HTTP_ONLY&&(o.downloadMode="http");var s=new r.Request(o);s.onreadystatechange=function(){if(!n.options||!n.options.disableUI){if(!n.swarmId&&this.readyState>=2){var t=this.getFileInfo();n.ui.setNumOfChunks(t.size),n.swarmId=t.swarmId;try{var i=e(this.getResponseHeader("content-disposition")),o=decodeURIComponent(i);i&&o&&(n.filename=o)}catch(s){r.info("content-disposition is not found")}}3==this.readyState&&(n.ui.displayDownloadStart(),n.started=!0)}},s.open("GET",this.url),i(),s.onprogress=function(){},s.onload=function(e){n.completed=!0,n.ui&&(n.ui.displayCompleted(e.total),n.deregisterEvents()),radio("downloadFinished").broadcast(n.url,e.total,e.loadedP2P,e.loadedHTTP,e.loadedFS),setTimeout(function(){radio("seeding").broadcast(5e3),setTimeout(function(){radio("seeding").broadcast(3e4),setTimeout(function(){radio("seeding").broadcast(3e5)},27e4)},25e3)},5e3),!window.URL&&window.webkitURL&&(window.URL=window.webkitURL);var t=document.createElement("a");if(t.setAttribute("download",n.filename),t.setAttribute("href",this.response),document.body.appendChild(t),t.click(),r.config.IS_FIREFOX&&r.core.data.BlockCache.get(n.url).fs){var i=new XMLHttpRequest;i.open("GET","//peer5.com/downloader/peer5_logo_white.png",!1),i.onload=function(){},i.send(null)}n.options.onDownloadComplete&&n.options.onDownloadComplete()},s.onerror=function(e){r.error(e),n.ui&&n.parseError(e),n.options.onFallback?n.options.onFallback():(r.warn("FileWrapper Fallbacking to normal download"),n.regularDownload()),n.fallback=!0,radio("fallback").broadcast(this.status,e.total)},s.onswarmstatechange=function(e){e.hasOwnProperty("numOfPeers")&&n.ui.setPeers(e.numOfPeers)},s.send(),this.request=s},stop:function(){r.warn("download stopped "+this.url),this.request.abort()},isEnabled:function(e,t){r.getCompatibilityStatus(function(i,n){if(i.length>0&&702!=i[0])return t(),void 0;switch(n){case"chrome":if(r.config.DISABLE_CHROME)return t(),void 0;break;case"opera":if(r.config.DISABLE_OPERA)return t(),void 0;break;case"firefox":if(r.config.DISABLE_FIREFOX)return t(),void 0}e()})},parseError:function(e){var t="";switch(e.currentTarget.status){case r.Request.INVALID_RESPONSETYPE:t="An error has occurred while downloading, please retry.";break;case r.Request.SWARMID_NOT_FOUND_ERR:t="An error has occurred while downloading, please retry.";break;case r.Request.FILE_SIZE_ERR:t="File size is too big, please allow persistent storage.";break;case r.Request.FIREFOX_ONLY_SWARM_ERR:t="An error has occurred while downloading, please retry.";break;case r.Request.CHROME_ONLY_SWARM_ERR:t="An error has occurred while downloading, please retry.";break;case r.Request.BROWSER_SWARM_COMPAT_ERR:t="An error has occurred while downloading, please retry.";break;case r.Request.OUT_OF_SPACE_ERR:t="Not enough disk space, please clear some space and retry.";break;case r.Request.WRITE_ERR:t="A problem has occured while writing to disk, please retry.";break;case r.Request.VERIFICATION_ERR:t="The file you have downloaded is corrupt, please contact site owner.";break;default:t=600>e.currentTarget.status?"There is a connectivity problem, please check your connection.":"An error has occurred while downloading, please retry."}this.ui.showError(t)},exit:function(){r.warn("download exited "+this.url),this.request.abort({leaveSwarm:!0}),this.dtor(),radio("exitDownload").broadcast(this.completed)},regularDownload:function(){!window.URL&&window.webkitURL&&(window.URL=window.webkitURL);var e=document.createElement("a");if(e.setAttribute("download",this.options.name),e.setAttribute("href",this.url),document.body.appendChild(e),e.click)e.click();else{var t="hiddenDownloader",i=document.getElementById(t);null===i&&(i=document.createElement("iframe"),i.id=t,i.style.display="none",document.body.appendChild(i)),i.src=this.url}},deregisterEvents:function(){var e=this.ui_events_cache;Object.keys(e).forEach(function(t){radio(t).unsubscribe([e[t],this])},this)},registerEvents:function(){var e=this.ui_events_cache;Object.keys(e).forEach(function(t){radio(t).subscribe([e[t],this])},this)},dtor:function(){this.deregisterEvents(),this.ui=null,this.url=null,this.options=null,this.request=null}}),r.contentLoaded(window,e)}(),!function(){r.riveted=function(){function e(e){e=e||{},h=parseInt(e.reportInterval,10)||5,f=parseInt(e.idleTimeout,10)||30,"function"==typeof e.eventHandler&&(u=e.eventHandler),p="nonInteraction"in e&&(e.nonInteraction===!1||"false"===e.nonInteraction)?!1:!0,i(document,"keydown",d),i(document,"click",d),i(window,"mousemove",t(d,500)),i(window,"scroll",t(d,500)),i(document,"visibilitychange",o),i(document,"webkitvisibilitychange",o)}function t(e,t){var i,n,r,o=null,s=0,a=function(){s=new Date,o=null,r=e.apply(i,n)};return function(){var c=new Date;s||(s=c);var l=t-(c-s);return i=this,n=arguments,0>=l?(clearTimeout(o),o=null,s=c,r=e.apply(i,n)):o||(o=setTimeout(a,l)),r}}function i(e,t,i){e.addEventListener?e.addEventListener(t,i,!1):e.attachEvent?e.attachEvent("on"+t,i):e["on"+t]=i}function n(e){b?dataLayer.push({event:"RivetedTiming",eventCategory:"Riveted",timingVar:"First Interaction",timingValue:e}):(g&&ga("send","timing","Riveted","First Interaction",e),m&&_gaq.push(["_trackTiming","Riveted","First Interaction",e,null,100]))}function r(){clearTimeout(S),a()}function o(){(document.hidden||document.webkitHidden)&&r()}function s(){w+=1,w>0&&0===w%h&&u(w)}function a(){_=!0,clearTimeout(y)}function c(){_=!1,clearTimeout(y),y=setInterval(s,1e3)}function l(){var e=new Date,t=e-k;v=!0,n(t),y=setInterval(s,1e3)}function d(){v||l(),_&&c(),clearTimeout(S),S=setTimeout(r,1e3*f+100)}var u,h,f,p,g,m,b,v=!1,_=!1,w=0,k=new Date,y=null,S=null;return"function"==typeof ga&&(g=!0),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(m=!0),"undefined"!=typeof dataLayer&&"function"==typeof dataLayer.push&&(b=!0),u=function(e){b?dataLayer.push({event:"Riveted",eventCategory:"Riveted",eventAction:"Time Spent",eventLabel:"Seconds",eventValue:e,eventNonInteraction:p}):(g&&ga("send","event","Riveted","Time Spent",""+e,h,{nonInteraction:p}),m&&_gaq.push(["_trackEvent","Riveted","Time Spent",""+e,h,p]))},{init:e,trigger:d,setIdle:r}}()}(),function(){(function(e,t,i,n,r,o,s){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,o=t.createElement(i),s=t.getElementsByTagName(i)[0],o.async=1,o.src=n,s.parentNode.insertBefore(o,s)})(window,document,"script","//www.google-analytics.com/analytics.js","peer5_ga"),peer5_ga("create","UA-37859248-1"),peer5_ga("send","pageview"),r.gaManager=function(){this.registerEvents(),this.downloadStarted={},this.fallback=0},r.gaManager.prototype={registerEvents:function(){if(radio("scriptLoaded").subscribe([function(){r.info("script loaded "+Date.now()),peer5_ga("send","event","script","loaded")},this]),radio("scriptValidated").subscribe([function(e){e?(r.info("script passed validated"),peer5_ga("send","event","script","browser passed validation")):(r.info("script failed validation"),peer5_ga("send","event","script","browser failed validation"))},this]),radio("requestSent").subscribe([function(){r.info("request sent "+Date.now()),peer5_ga("send","event","request","sent")},this]),radio("startedDownloading").subscribe([function(e){r.info("started downloading "+Date.now()),peer5_ga("send","event","transfer","downloadStarted","requestSize",e),this.downloadStarted[e]=!0},this]),radio("resumeStarted").subscribe([function(){r.info("resume started "+Date.now()),peer5_ga("send","event","storage","resume started")},this]),radio("resumeEnded").subscribe([function(){r.info("resume ended "+Date.now()),peer5_ga("send","event","storage","resume ended")},this]),radio("requestedPersQuota").subscribe([function(){r.info("requested persistent quota event"),peer5_ga("send","event","user","prompt persistent quota")},this]),radio("persQuotaAnswer").subscribe([function(e){e?(r.info("user has approved using persistent quota"),peer5_ga("send","event","user","approved persistent quota")):(r.info("user has denied using persistent quota"),peer5_ga("send","event","user","denied persistent quota"))},this]),radio("persQuotaTimeout").subscribe([function(){peer5_ga("send","event","user","persistent quota timed out")},this]),radio("offlineStorageError").subscribe([function(e){peer5_ga("send","event","error","offline storage",e)},this]),radio("usingFileSystem").subscribe([function(e){peer5_ga("send","event","cacheMethod","filesystem","fileSize",e)},this]),radio("usingMemory").subscribe([function(e){peer5_ga("send","event","cacheMethod","memory","fileSize",e)},this]),radio("wsError").subscribe([function(e){peer5_ga("send","event","errors",e)},this]),radio("expireHttpRequest").subscribe([function(e){peer5_ga("send","event","errors","xhr manually expired","timeout duration",e)},this]),radio("unhandledError").subscribe([function(e,t,i){peer5_ga("send","event","unhandled errors",e,t,i)},this]),radio("outOfMemoryError").subscribe([function(e){peer5_ga("send","event","errors","out of memory","heap size",e)},this]),radio("peer5_b1_finished").subscribe([function(e){r.info("Got first block in "+e+" ms"),peer5_ga("send","event","transfer","received first block","time to first block",e)},this]),radio("peer5_p1_finished").subscribe([function(e){r.info("p1 completed"+Date.now()),e=Math.abs(Math.floor(e)),peer5_ga("send","event","transfer","downloaded 1%","average download speed",e)},this]),radio("peer5_p5_finished").subscribe([function(e){r.info("p5 completed"+Date.now()),e=Math.abs(Math.floor(e)),peer5_ga("send","event","transfer","downloaded 5%","average download speed",e)},this]),radio("peer5_p10_finished").subscribe([function(e){r.info("p10 completed"+Date.now()),e=Math.abs(Math.floor(e)),peer5_ga("send","event","transfer","downloaded 10%","average download speed",e)},this]),radio("peer5_q1_finished").subscribe(function(e){r.info("q1 completed"+Date.now()),e=Math.abs(Math.floor(e)),peer5_ga("send","event","transfer","downloaded 25%","average download speed",e)}),radio("peer5_q2_finished").subscribe(function(e){r.info("q2 completed"+Date.now()),e=Math.abs(Math.floor(e)),peer5_ga("send","event","transfer","downloaded 50%","average download speed",e)}),radio("peer5_q3_finished").subscribe(function(e){r.info("q3 completed"+Date.now()),e=Math.abs(Math.floor(e)),peer5_ga("send","event","transfer","downloaded 75%","average download speed",e)}),radio("peer5_q4_finished").subscribe(function(e){r.info("q4 completed"+Date.now()),e=Math.abs(Math.floor(e)),peer5_ga("send","event","transfer","downloaded 100%","average download speed",e)}),radio("downloadFinished").subscribe([function(e,t,i,n,r){peer5_ga("send","event","transfer","downloadFinished","fileSize",t),peer5_ga("send","event","transfer","downloadFinished","p2p bytes downloaded",i),peer5_ga("send","event","transfer","downloadFinished","http bytes downloaded",n),peer5_ga("send","event","transfer","downloadFinished","filesystem bytes resumed",r)},this]),radio("seeding").subscribe([function(e){switch(r.info("seeding for "+e+" miliseconds"),e){case 5e3:peer5_ga("send","event","user","seeding","5 seconds");break;case 3e4:peer5_ga("send","event","user","seeding","30 seconds");break;case 3e5:peer5_ga("send","event","user","seeding","5 minutes")}},this]),radio("exitDownload").subscribe([function(e){e?peer5_ga("send","event","user","exit download","download completed"):peer5_ga("send","event","user","exit download","download didnt complete")},this]),radio("exitPageStats").subscribe([function(e,t,i){t=Math.abs(Math.floor(t)),i=Math.abs(Math.floor(i)),.25>e?peer5_ga("send","event","user","exit page","download in Q1",t):.5>e?peer5_ga("send","event","user","exit page","download in Q2",t):.75>e?peer5_ga("send","event","user","exit page","download in Q3",t):1>e?peer5_ga("send","event","user","exit page","download in Q4",t):peer5_ga("send","event","user","exit page","download finished",t),peer5_ga("send","event","user","exit page","average download speed",i)},this]),radio("exitPage").subscribe([function(e,t){e?t?peer5_ga("send","event","user","exit page","after download start and fallen-back"):peer5_ga("send","event","user","exit page","after download start and no fallback"):t?peer5_ga("send","event","user","exit page","before download start and fallen-back"):peer5_ga("send","event","user","exit page","before download start and no fallback")},this]),radio("fallback").subscribe([function(e,t){this.fallback++,r.info("fallback "+Date.now()),this.downloadStarted[t]?peer5_ga("send","event","errors","fallback after download started",e):peer5_ga("send","event","errors","fallback before download started",e)},this]),radio("fileVerificationFailed").subscribe([function(){peer5_ga("send","event","errors","file verification failed")},this]),radio("pauseClicked").subscribe([function(){peer5_ga("send","event","user","clicked paused")},this]),radio("playClicked").subscribe([function(){peer5_ga("send","event","user","clicked played")},this]),radio("helpClicked").subscribe([function(){peer5_ga("send","event","user","clicked help")},this]),radio("helpExited").subscribe([function(){peer5_ga("send","event","user","exited help")},this]),radio("sharedClicked").subscribe([function(){peer5_ga("send","event","user","clicked share")},this]),radio("logoClicked").subscribe([function(){peer5_ga("send","event","user","clicked logo")},this]),r.riveted){var e=5,t=!0,i=function(i){r.debug("time spent:"+(""+i)+", report interval: "+e),peer5_ga("send","event","user","Time Spent",""+i,e,{nonInteraction:t})};r.riveted.init({eventHandler:i})}}},r.gaManager=new r.gaManager}(),function(e){r.client.DownloadUploadManager=Object.subClass({name:"peer5.client.DownloadUploadManager",ctor:function(){if(this.clientId=r.core.util.generate_uuid(),this.registerEvents(),this.apiValidator=new r.core.apiValidators.ApiValidator({dataChannels:r.core.apiValidators.DataChannelsApiValidator,fileSystem:r.core.apiValidators.FileSystemApiValidator}),this.apiValidator.validate()){this.validated=!0,this.pendingWSMessages=[],this.chunkSize=r.config.CHUNK_SIZE;var e=r.config.WSURL_OVERRIDE||"wss://t.peer5.com"||"ws://localhost:8443";this.wsConnectionImpl=new r.core.transport.WsConnection(e,this.clientId),this.controller=new r.client.HybridController(this.clientId),this.resources={},this.statsCalculators={},this.lastReportTime=0,this.lastStatCalcTime=0,this.cron_interval_id=window.setInterval(this.cron,r.config.MONITOR_INTERVAL,this),radio("peer5_uuid").broadcast(this.clientId)}else this.validated=!1;r.core.data.FSio.executeOnReady({"function":this.cleanOldFiles,args:function(){radio("scriptLoaded").broadcast(),radio("scriptValidated").broadcast(this.validated)},context:this})},cleanOldFiles:function(e){this.cleanOldFilesPersistent(this.cleanOldFilesTemporary,e)},cleanOldFilesPersistent:function(e,t){r.core.data.FSio.queryPersQuota(function(i,n,o){console.log("quota is : "+o),o>0?r.core.data.FSio.requestPersQuota(o-1,function(i){i?r.core.data.CacheManager.cleanOldFiles(function(){r.log("success cleanOldFiles on Persistent FS"),e&&e(t)}):e&&e(t)}):e&&e(t)})},cleanOldFilesTemporary:function(e){r.core.data.FSio.queryTempQuota(function(t,i,n){n>0?r.core.data.FSio.requestTempQuota(r.config.TEMPORARY_FS_SIZE,function(t){t?r.core.data.CacheManager.cleanOldFiles(function(){r.log("success cleanOldFiles on Persistent FS"),e&&e()}):e&&e()}):e&&e()})},getNumOfVerifiedBytes:function(e,t){var i,n=r.core.data.BlockCache.get(e);n&&(i=n.getNumOfVerifiedBytes()),t(i)},getBlobUrl:function(e,t){var i=r.core.data.BlockCache.get(e);i.getBlobUrl(t)},getBlob:function(e,t){var i=r.core.data.BlockCache.get(e);i.getBlob(t)},getResourceId:function(e,t){var i=r.core.data.BlockCache.get(e);i?t(i.resourceId):t()},getClientId:function(e){e(this.clientId)},isValidated:function(e){e(this.validated)},getSwarmId:function(e,t){var i=r.core.data.BlockCache.get(e);i&&i.getMetadata()&&t(i.getMetadata().swarmId)},isFull:function(e,t){var i=r.core.data.BlockCache.get(e);t(i.isFull())},addResource:function(e,t,i){if(this.resources.hasOwnProperty(e)&&this.resources[e].state>1){this.resources[e].mod=t;var n=r.core.data.BlockCache.get(e);if(n)var o=n.getMetadata();if(o){var s=!0;return this.controller.init(o,s,this.resources[o.swarmId].mod),radio("fileInfoReceived").broadcast(o),radio("resourceReady").broadcast(o),void 0}return r.error("couldn't add resource already exists in unstable state"),void 0}if(this.resources[e]={state:0,mod:t,sha1:i.sha1,md5:i.md5},-1!=e.indexOf("http")){var a=new r.client.HTTPDownloader(e);a.head(),radio("xhrFailed"+e).subscribe([this._XHRMetaFailedCallback,this]),radio("xhrTimeout"+e).subscribe([this._XHRMetaFailedCallback,this])}else this.joinSwarm(e)},removeResource:function(e){this.resources[e].state=4,this.controller.removeResource(e),r.core.data.BlockCache.remove(e),this.resources[e]&&this.resources[e].hash&&this.resources[this.resources[e].hash]&&delete this.resources[this.resources[e].hash],this.resources[e]&&this.resources[e].resourceId&&this.resources[this.resources[e].resourceId]&&delete this.resources[this.resources[e].resourceId],this.resources[e]&&delete this.resources[e]},stopResource:function(e){this.resources[e].state=4,this.controller.stopResource(e)},readBlobData:function(e,t){this.resources[e]={},this.resources[e].state=0,this.resources[e].origin=!0,this.resources[e].hashAlg=new r.core.util.MD5.ArrayBuffer,this.resources[e].blockHashes={},this.resources[e].chunkRead=0,this.resources[e].mod=2,this.resources[e].resourceId=e;var i=t.size;this.statsCalculators[e]=new r.core.stats.StatsCalculator(i,e,""),r.core.data.BlockCache.add(e,new r.core.dataStructures.BlockMap(i,e,this.resources[e].md5,this.resources[e].sha1));var n=this,o=r.core.data.BlockCache.get(e);r.config.USE_FS?radio("filesystemInitiated"+e).subscribe([function(){1==o.fs&&r.config.PREALLOCATE_FILE?o.allocateFileSizeSync(function(i){i?n.readBlobInSlices(e,t):radio("removeResource").broadcast(e,r.Request.FILE_SIZE_ERR,"Not enough disk space for file")}):n.readBlobInSlices(e,t)},this]):this.readBlobInSlices(e,t),radio("transferLoadedEvent").subscribe([function(t){t.url!==e||this.resources[e].uploaded||(this.resources[e].uploaded=!0,this.createAndUploadFileInfo(e))},n])},getLoadedStats:function(e,t){var i={},n=this.statsCalculators[e]||this.statsCalculators[this.resources[e].resourceId];i.loadedHTTP=n.Total_Recv_HTTP,i.loadedP2P=n.Total_Recv_P2P,i.loadedFS=n.Total_loaded_FS,t(i)},getUploadedStats:function(e,t){var i={},n=this.statsCalculators[e]||this.statsCalculators[this.resources[e].resourceId];i.uploaded=n.Total_Sent_P2P,t(i)},getCompatibilityStatus:function(e){var t=this.apiValidator.getStatus(),i=this.apiValidator.getBrowser();e(t,i)},createAndUploadFileInfo:function(e){this.resources[e].hash=this.resources[e].hashAlg.end(),this.changeResourceId(e,this.resources[e].hash);var t=r.core.data.BlockCache.get(e),i=new r.core.protocol.FileInfo(null,t.fileSize,this.resources[e].hash,this.resources[e].blockHashes,null,"api",null,null,null);this.wsConnectionImpl.socketReadyToSend()?this.wsConnectionImpl.sendMessage(i):this.pendingWSMessages.push(i)},readBlobInSlices:function(e,t){if(!r.core.data.BlockCache.get(e).fs&&t.size>r.config.ALLOWED_FILE_SIZE)return radio("removeResource").broadcast(e,r.Request.FILE_SIZE_ERR,"file size too big"),void 0;var i=this;r.core.util.fileHandler.readFileInSlices(e,t,12e5,function(e,t,n){e&&t&&n?(r.log("adding chunks"),i.addChunks(e,t,n)):(!e||t||n)&&r.error("handle error")})},addChunks:function(e,t,i){r.log("slice"),this.resources[e].hashAlg.append(t);for(var n=r.core.data.BlockCache.get(e),o=Math.ceil(t.byteLength/r.config.CHUNK_SIZE),s=0;o>s;s++){var a=s*r.config.CHUNK_SIZE,c=new Uint8Array(t.slice(a,Math.min(a+r.config.CHUNK_SIZE,t.byteLength))),l=n.setChunk(this.resources[e].chunkRead,c),d=n.ingestBlock(l);d&&(this.resources[e].blockHashes[l]=d),radio("chunkAddedToBlockMap").broadcast(),this.resources[e].chunkRead++}this.resources[e].chunkRead==this.numOfChunksInFile&&(this.hasEntireFile=!0),n.fs?r.core.data.FSio.notifyFinishWrite(i):i()},cron:function(e){e.sendReport(),e.calculateStats(),radio("cron").broadcast();for(var t in e.statsCalculators)e.resources[t]&&2!==e.resources[t].mod&&!r.core.data.BlockCache.get(t).isFull()&&(0===e.statsCalculators[t].Avg_Recv_HTTP?e.resources[t].httpIdle++:e.resources[t].httpIdle=0,e.resources[t].httpIdle>=r.config.HTTP_IDLE_RESET_DURATION/r.config.MONITOR_INTERVAL&&(e.controller.stopHttp(r.core.data.BlockCache.get(t).getMetadata().url),e.resources[t].httpIdle=0),e.controller.downloadPeriodicTest(r.core.data.BlockCache.get(t).getMetadata().url))},calculateStats:function(){var e=Date.now();if(!(e-this.lastStatCalcTime<r.config.STAT_CALC_INTERVAL)&&(this.lastStatCalcTime=e,this.statsCalculators))for(var t in this.statsCalculators)this.statsCalculators[t].calc_avg(!1)},sendReport:function(e){var t=this,i=Date.now();if(!(i-t.lastReportTime<r.config.REPORT_INTERVAL)){t.lastReportTime=i;var n=e?!0:null;r.core.data.BlockCache.forEach(function(e,i){if(i.init&&i.metadata&&i.metadata.swarmId&&i.availabilityMap&&t.statsCalculators&&t.statsCalculators[i.metadata.swarmId]){var o=t.statsCalculators[i.metadata.swarmId],s=new r.core.protocol.Report(i.metadata.swarmId,null,o.Total_Sent_P2P,o.Total_Recv_P2P,o.Total_Recv_HTTP,o.Total_Waste_P2P,o.Total_Waste_HTTP,o.Total_loaded_FS,null,null,t.getConnectionStats(),null,null,i.availabilityMap.numOfOnBits,i.fileSize,n);t.wsConnectionImpl.sendMessage(s)}})}},getConnectionStats:function(){return this.controller.getConnectionStats().p2p},handleFileInfo:function(e){this.statsCalculators[e.swarmId]=new r.core.stats.StatsCalculator(e.size,e.name,e.url,e.swarmId);var t=e.url||e.swarmId,i=new r.core.dataStructures.BlockMap(e.size,e.swarmId,this.resources[t].md5,this.resources[t].sha1);r.core.data.BlockCache.add(e.swarmId,i),i.addMetadata(e),e.url&&this.changeResourceId(e.url,e.swarmId),this.resources[e.swarmId].state=1,radio("fileInfoReceived").broadcast(e),i.fs||radio("resourceInit").broadcast(e)},updateFileInfo:function(e){var t=this;this.changeResourceId(e.hash,e.swarmId,function(i){if(i){t.resources[e.swarmId].state=1;var n=r.core.data.BlockCache.get(e.swarmId);n.addMetadata(e),radio("resourceInit").broadcast(e)}else r.warn("couldn't change resource Id")}),radio("fileInfoReceived").broadcast(e)},joinSwarm:function(e){this.wsConnectionImpl.socketReadyToSend()?this.wsConnectionImpl.sendMessage(new r.core.protocol.Join(e)):this.pendingWSMessages.push(new r.core.protocol.Join(e))},_XHRMetaFailedCallback:function(e){var t=e.url,i=e.status,n="xhr failed or timed out";r.warn("removing resource "+t),r.warn(i+": "+"description"),radio("requestError").broadcast(t,i,n),this.removeResource(t)},registerEvents:function(){radio("pauseResource").subscribe([function(e){this.stopResource(e),radio("resumeResource").subscribe([function(t){if(t===e){var i=null;this.resources[e].md5?i={md5:this.resources[e].md5}:this.resources[e].sha1&&(i={sha1:this.resources[e].sha1}),this.addResource(e,this.resources[e].mod,i)}},this])},this]),radio("stopResource").subscribe([function(e,t,i){radio("requestError").broadcast(e,t,i),this.stopResource(e)},this]),radio("removeResource").subscribe([function(e,t,i){r.warn("removing resource "+e),r.warn(t+": "+i),radio("requestError").broadcast(e,t,i),this.removeResource(e)},this]),radio("resourceInit").subscribe([function(e){this.resources[e.swarmId].state=2;var t=r.core.data.BlockCache.get(e.swarmId);if(!t.fs&&e.size>r.config.ALLOWED_FILE_SIZE)return 1==this.resources[e.swarmId].mod||3==this.resources[e.swarmId].mod?radio("removeResource").broadcast(e.url,r.Request.FILE_SIZE_ERR,"file size too big"):2==this.resources[e.swarmId].mod&&radio("removeResource").broadcast(e.swarmId,r.Request.FILE_SIZE_ERR,"file size too big"),void 0;var i=!0;this.controller.init(e,i,this.resources[e.swarmId].mod),1==t.fs&&r.config.PREALLOCATE_FILE&&t.allocateFileSize(function(e){e||r.warn("Couldn't allocate space for file")}),radio("resourceReady").broadcast(e)},this]),radio("XHRMetaFetched").subscribe([function(e){var t=e.url;if(!t)return r.error("No URL given!"),void 0;if(t=t.split("#")[0],radio("xhrFailed"+t).unsubscribe([this._XHRMetaFailedCallback,this]),radio("xhrTimeout"+t).unsubscribe([this._XHRMetaFailedCallback,this]),!e.fileSize)return radio("removeResource").broadcast(e.url,r.Request.FILE_SIZE_ERR,"file size undefined"),void 0;if(!r.config.USE_FS&&e.fileSize>r.config.ALLOWED_FILE_SIZE)return radio("removeResource").broadcast(e.url,r.Request.FILE_SIZE_ERR,"file size too big"),void 0;var i,n;if(this.resources[t].hash)i=this.resources[t].hash;else if(e.hash)i=e.hash+"!"+e.fileSize;else{var o=r.config.USE_QUERYSTRING_FOR_HASH?t:t.split("?")[0];o=r.config.REMOVE_WOWZA_SESSION_ID_FOR_HASH?o.split("_")[0]+o.split("_")[2]:o,i=o+"!"+e.fileSize}var s=r.CryptoJS.SHA1(i);n=""+s,n=n.substr(0,20),r.info("Hash is "+n);var a=new r.core.protocol.FileInfo(n,e.fileSize,n,null,12e5);a.url=t,this.resources[a.url].mediaType||(a.name=this.resources[a.url].name),this.joinSwarm(a.swarmId),this.handleFileInfo(a)},this]),radio("needByteRangeEvent").subscribe([function(e,t,i,n,o){var s=r.core.data.BlockCache.get(e),a=t?s.getBlockIndex(t):null,c=i?s.getBlockIndex(i):null;o&&r.warn("We don't support in pausing and resuming"),this.controller.download(e,a,c,n)},this]),radio("webSocketInit").subscribe([function(){for(var e=0;this.pendingWSMessages.length>e;++e)this.wsConnectionImpl.sendMessage(this.pendingWSMessages[e]);this.pendingWSMessages=[]},this]),radio("receivedFileInfo").subscribe([function(e){return this.resources[e.swarmId]||this.resources[e.hash]?(this.resources[e.hash]&&this.resources[e.hash].origin?0==this.resources[e.hash].state&&this.updateFileInfo(e):this.resources[e.swarmId]&&0==this.resources[e.swarmId].state&&this.handleFileInfo(e),void 0):(r.warn("received fileInfo for a non existing swarm"),void 0)},this]),radio("browserUnsupported").subscribe([function(){r.warn("Unsupported browser for peer5"),radio("browserUnsupported").unsubscribe(arguments.callee),this.validated=!1},this]),radio("swarmError").subscribe([function(e){var t;switch(e.error){case r.core.protocol.SWARM_NOT_FOUND:if(1==this.resources[e.swarmId].mod||3==this.resources[e.swarmId].mod)return;if(2==this.resources[e.swarmId].mod){var t=r.Request.SWARMID_NOT_FOUND_ERR;break}case r.core.protocol.SWARM_ONLY_CHROME:var t=r.Request.CHROME_ONLY_SWARM_ERR;break;case r.core.protocol.SWARM_ONLY_FIREFOX:var t=r.Request.FIREFOX_ONLY_SWARM_ERR;break;case r.core.protocol.SWARM_NOT_COMPAT:var t=r.Request.BROWSER_SWARM_COMPAT_ERR}radio("requestError").broadcast(e.swarmId,t)},this])},changeResourceId:function(e,t,i){this.resources[e]&&(this.resources[t]=this.resources[e],this.resources[t].resourceId=t),this.statsCalculators[e]&&(this.statsCalculators[t]=this.statsCalculators[e],this.statsCalculators[t].resourceId=t),!r.core.data.BlockCache.get(e)||r.core.data.BlockCache.get(t)&&e!==t?!r.core.data.BlockCache.get(e)&&r.core.data.BlockCache.get(t)&&r.core.data.BlockCache.alias(e,t):(r.core.data.BlockCache.alias(t,e),i&&r.core.data.BlockCache.get(e).changeResourceId(t,i))}}),e.clientInstance=new r.client.DownloadUploadManager}("undefined"==typeof exports?r:exports),function(){r.client.downloadSimulator=Object.subClass({ctor:function(){if(r.config.SIMULATE_DOWNLOAD){var e=this,t={};r.config.HTTP_ONLY&&(t.downloadMode="http");var i=new r.Request(t);i.open("GET",r.config.SIMULATION_RESOURCE_URL),i.onload=function(t){radio("downloadFinished").broadcast(e.url,t.total,t.loadedP2P,t.loadedHTTP,t.loadedFS),setTimeout(function(){radio("seeding").broadcast(5e3),setTimeout(function(){radio("seeding").broadcast(3e4),setTimeout(function(){radio("seeding").broadcast(3e5)},27e4)},25e3)},5e3)},i.onerror=function(e){radio("fallback").broadcast(this.status,e.total)},i.send()}}})}("undefined"==typeof exports?r:exports);var o={};o.setLogLevel=r.setLogLevel,o.download=r.download,o.stopDownload=r.stopDownload,o.exitDownload=r.exitDownload,o.Request=r.Request,o.getCompatibilityStatus=r.getCompatibilityStatus,o.DATACHANNELS_ERROR=r.DATACHANNELS_ERROR,o.WEBSOCKETS_ERROR=r.WEBSOCKETS_ERROR,o.FILESYSTEM_ERROR=r.FILESYSTEM_ERROR,window.peer5=o})();
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.7.0';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var createCallback = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  _.iteratee = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return createCallback(value, context, argCount);
    if (_.isObject(value)) return _.matches(value);
    return _.property(value);
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    if (obj == null) return obj;
    iteratee = createCallback(iteratee, context);
    var i, length = obj.length;
    if (length === +length) {
      for (i = 0; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    if (obj == null) return [];
    iteratee = _.iteratee(iteratee, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length),
        currentKey;
    for (var index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = function(obj, iteratee, memo, context) {
    if (obj == null) obj = [];
    iteratee = createCallback(iteratee, context, 4);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index = 0, currentKey;
    if (arguments.length < 3) {
      if (!length) throw new TypeError(reduceError);
      memo = obj[keys ? keys[index++] : index++];
    }
    for (; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = function(obj, iteratee, memo, context) {
    if (obj == null) obj = [];
    iteratee = createCallback(iteratee, context, 4);
    var keys = obj.length !== + obj.length && _.keys(obj),
        index = (keys || obj).length,
        currentKey;
    if (arguments.length < 3) {
      if (!index) throw new TypeError(reduceError);
      memo = obj[keys ? keys[--index] : --index];
    }
    while (index--) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    predicate = _.iteratee(predicate, context);
    _.some(obj, function(value, index, list) {
      if (predicate(value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    predicate = _.iteratee(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(_.iteratee(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    if (obj == null) return true;
    predicate = _.iteratee(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    if (obj == null) return false;
    predicate = _.iteratee(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (obj.length !== +obj.length) obj = _.values(obj);
    return _.indexOf(obj, target) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = obj && obj.length === +obj.length ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = _.iteratee(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = _.iteratee(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = low + high >>> 1;
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = _.iteratee(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    for (var i = 0, length = input.length; i < length; i++) {
      var value = input[i];
      if (!_.isArray(value) && !_.isArguments(value)) {
        if (!strict) output.push(value);
      } else if (shallow) {
        push.apply(output, value);
      } else {
        flatten(value, shallow, strict, output);
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (array == null) return [];
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = _.iteratee(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = array.length; i < length; i++) {
      var value = array[i];
      if (isSorted) {
        if (!i || seen !== value) result.push(value);
        seen = value;
      } else if (iteratee) {
        var computed = iteratee(value, i, array);
        if (_.indexOf(seen, computed) < 0) {
          seen.push(computed);
          result.push(value);
        }
      } else if (_.indexOf(result, value) < 0) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true, []));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    if (array == null) return [];
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = array.length; i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(slice.call(arguments, 1), true, true, []);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function(array) {
    if (array == null) return [];
    var length = _.max(arguments, 'length').length;
    var results = Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var idx = array.length;
    if (typeof from == 'number') {
      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
    }
    while (--idx >= 0) if (array[idx] === item) return idx;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var Ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    args = slice.call(arguments, 2);
    bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      Ctor.prototype = func.prototype;
      var self = new Ctor;
      Ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (_.isObject(result)) return result;
      return self;
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = hasher ? hasher.apply(this, arguments) : key;
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed before being called N times.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      } else {
        func = null;
      }
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    if (!_.isObject(obj)) return obj;
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (hasOwnProperty.call(source, prop)) {
            obj[prop] = source[prop];
        }
      }
    }
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj, iteratee, context) {
    var result = {}, key;
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      iteratee = createCallback(iteratee, context);
      for (key in obj) {
        var value = obj[key];
        if (iteratee(value, key, obj)) result[key] = value;
      }
    } else {
      var keys = concat.apply([], slice.call(arguments, 1));
      obj = new Object(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        key = keys[i];
        if (key in obj) result[key] = obj[key];
      }
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(concat.apply([], slice.call(arguments, 1)), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    if (!_.isObject(obj)) return obj;
    for (var i = 1, length = arguments.length; i < length; i++) {
      var source = arguments[i];
      for (var prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (
      aCtor !== bCtor &&
      // Handle Object.create(x) cases
      'constructor' in a && 'constructor' in b &&
      !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
        _.isFunction(bCtor) && bCtor instanceof bCtor)
    ) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size, result;
    // Recursively compare objects and arrays.
    if (className === '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size === b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      size = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      result = _.keys(b).length === size;
      if (result) {
        while (size--) {
          // Deep compare each member
          key = keys[size];
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around an IE 11 bug.
  if (typeof /./ !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    var pairs = _.pairs(attrs), length = pairs.length;
    return function(obj) {
      if (obj == null) return !length;
      obj = new Object(obj);
      for (var i = 0; i < length; i++) {
        var pair = pairs[i], key = pair[0];
        if (pair[1] !== obj[key] || !(key in obj)) return false;
      }
      return true;
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = createCallback(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? object[property]() : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */

var Zepto = (function() {
  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
    document = window.document,
    elementDisplay = {}, classCache = {},
    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    rootNodeRE = /^(?:body|html)$/i,
    capitalRE = /([A-Z])/g,

    // special attributes that should be get/set via method calls
    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
    table = document.createElement('table'),
    tableRow = document.createElement('tr'),
    containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    },
    readyRE = /complete|loaded|interactive/,
    simpleSelectorRE = /^[\w-]*$/,
    class2type = {},
    toString = class2type.toString,
    zepto = {},
    camelize, uniq,
    tempParent = document.createElement('div'),
    propMap = {
      'tabindex': 'tabIndex',
      'readonly': 'readOnly',
      'for': 'htmlFor',
      'class': 'className',
      'maxlength': 'maxLength',
      'cellspacing': 'cellSpacing',
      'cellpadding': 'cellPadding',
      'rowspan': 'rowSpan',
      'colspan': 'colSpan',
      'usemap': 'useMap',
      'frameborder': 'frameBorder',
      'contenteditable': 'contentEditable'
    },
    isArray = Array.isArray ||
      function(object){ return object instanceof Array }

  zepto.matches = function(element, selector) {
    if (!selector || !element || element.nodeType !== 1) return false
    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
                          element.oMatchesSelector || element.matchesSelector
    if (matchesSelector) return matchesSelector.call(element, selector)
    // fall back to performing a selector:
    var match, parent = element.parentNode, temp = !parent
    if (temp) (parent = tempParent).appendChild(element)
    match = ~zepto.qsa(parent, selector).indexOf(element)
    temp && tempParent.removeChild(element)
    return match
  }

  function type(obj) {
    return obj == null ? String(obj) :
      class2type[toString.call(obj)] || "object"
  }

  function isFunction(value) { return type(value) == "function" }
  function isWindow(obj)     { return obj != null && obj == obj.window }
  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
  function isObject(obj)     { return type(obj) == "object" }
  function isPlainObject(obj) {
    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
  }
  function likeArray(obj) { return typeof obj.length == 'number' }

  function compact(array) { return filter.call(array, function(item){ return item != null }) }
  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
  function dasherize(str) {
    return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
  }
  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

  function classRE(name) {
    return name in classCache ?
      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
  }

  function maybeAddPx(name, value) {
    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
  }

  function defaultDisplay(nodeName) {
    var element, display
    if (!elementDisplay[nodeName]) {
      element = document.createElement(nodeName)
      document.body.appendChild(element)
      display = getComputedStyle(element, '').getPropertyValue("display")
      element.parentNode.removeChild(element)
      display == "none" && (display = "block")
      elementDisplay[nodeName] = display
    }
    return elementDisplay[nodeName]
  }

  function children(element) {
    return 'children' in element ?
      slice.call(element.children) :
      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
  }

  // `$.zepto.fragment` takes a html string and an optional tag name
  // to generate DOM nodes nodes from the given html string.
  // The generated DOM nodes are returned as an array.
  // This function can be overriden in plugins for example to make
  // it compatible with browsers that don't support the DOM fully.
  zepto.fragment = function(html, name, properties) {
    var dom, nodes, container

    // A special case optimization for a single tag
    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))

    if (!dom) {
      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
      if (!(name in containers)) name = '*'

      container = containers[name]
      container.innerHTML = '' + html
      dom = $.each(slice.call(container.childNodes), function(){
        container.removeChild(this)
      })
    }

    if (isPlainObject(properties)) {
      nodes = $(dom)
      $.each(properties, function(key, value) {
        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
        else nodes.attr(key, value)
      })
    }

    return dom
  }

  // `$.zepto.Z` swaps out the prototype of the given `dom` array
  // of nodes with `$.fn` and thus supplying all the Zepto functions
  // to the array. Note that `__proto__` is not supported on Internet
  // Explorer. This method can be overriden in plugins.
  zepto.Z = function(dom, selector) {
    dom = dom || []
    dom.__proto__ = $.fn
    dom.selector = selector || ''
    return dom
  }

  // `$.zepto.isZ` should return `true` if the given object is a Zepto
  // collection. This method can be overriden in plugins.
  zepto.isZ = function(object) {
    return object instanceof zepto.Z
  }

  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
  // takes a CSS selector and an optional context (and handles various
  // special cases).
  // This method can be overriden in plugins.
  zepto.init = function(selector, context) {
    var dom
    // If nothing given, return an empty Zepto collection
    if (!selector) return zepto.Z()
    // Optimize for string selectors
    else if (typeof selector == 'string') {
      selector = selector.trim()
      // If it's a html fragment, create nodes from it
      // Note: In both Chrome 21 and Firefox 15, DOM error 12
      // is thrown if the fragment doesn't begin with <
      if (selector[0] == '<' && fragmentRE.test(selector))
        dom = zepto.fragment(selector, RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // If it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
    }
    // If a function is given, call it when the DOM is ready
    else if (isFunction(selector)) return $(document).ready(selector)
    // If a Zepto collection is given, just return it
    else if (zepto.isZ(selector)) return selector
    else {
      // normalize array if an array of nodes is given
      if (isArray(selector)) dom = compact(selector)
      // Wrap DOM nodes.
      else if (isObject(selector))
        dom = [selector], selector = null
      // If it's a html fragment, create nodes from it
      else if (fragmentRE.test(selector))
        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // And last but no least, if it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
    }
    // create a new Zepto collection from the nodes found
    return zepto.Z(dom, selector)
  }

  // `$` will be the base `Zepto` object. When calling this
  // function just call `$.zepto.init, which makes the implementation
  // details of selecting nodes and creating Zepto collections
  // patchable in plugins.
  $ = function(selector, context){
    return zepto.init(selector, context)
  }

  function extend(target, source, deep) {
    for (key in source)
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
          target[key] = {}
        if (isArray(source[key]) && !isArray(target[key]))
          target[key] = []
        extend(target[key], source[key], deep)
      }
      else if (source[key] !== undefined) target[key] = source[key]
  }

  // Copy all but undefined properties from one or more
  // objects to the `target` object.
  $.extend = function(target){
    var deep, args = slice.call(arguments, 1)
    if (typeof target == 'boolean') {
      deep = target
      target = args.shift()
    }
    args.forEach(function(arg){ extend(target, arg, deep) })
    return target
  }

  // `$.zepto.qsa` is Zepto's CSS selector implementation which
  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
  // This method can be overriden in plugins.
  zepto.qsa = function(element, selector){
    var found,
        maybeID = selector[0] == '#',
        maybeClass = !maybeID && selector[0] == '.',
        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
        isSimple = simpleSelectorRE.test(nameOnly)
    return (isDocument(element) && isSimple && maybeID) ?
      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
      (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
      slice.call(
        isSimple && !maybeID ?
          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
          element.getElementsByTagName(selector) : // Or a tag
          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
      )
  }

  function filtered(nodes, selector) {
    return selector == null ? $(nodes) : $(nodes).filter(selector)
  }

  $.contains = document.documentElement.contains ?
    function(parent, node) {
      return parent !== node && parent.contains(node)
    } :
    function(parent, node) {
      while (node && (node = node.parentNode))
        if (node === parent) return true
      return false
    }

  function funcArg(context, arg, idx, payload) {
    return isFunction(arg) ? arg.call(context, idx, payload) : arg
  }

  function setAttribute(node, name, value) {
    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
  }

  // access className property while respecting SVGAnimatedString
  function className(node, value){
    var klass = node.className || '',
        svg   = klass && klass.baseVal !== undefined

    if (value === undefined) return svg ? klass.baseVal : klass
    svg ? (klass.baseVal = value) : (node.className = value)
  }

  // "true"  => true
  // "false" => false
  // "null"  => null
  // "42"    => 42
  // "42.5"  => 42.5
  // "08"    => "08"
  // JSON    => parse if valid
  // String  => self
  function deserializeValue(value) {
    try {
      return value ?
        value == "true" ||
        ( value == "false" ? false :
          value == "null" ? null :
          +value + "" == value ? +value :
          /^[\[\{]/.test(value) ? $.parseJSON(value) :
          value )
        : value
    } catch(e) {
      return value
    }
  }

  $.type = type
  $.isFunction = isFunction
  $.isWindow = isWindow
  $.isArray = isArray
  $.isPlainObject = isPlainObject

  $.isEmptyObject = function(obj) {
    var name
    for (name in obj) return false
    return true
  }

  $.inArray = function(elem, array, i){
    return emptyArray.indexOf.call(array, elem, i)
  }

  $.camelCase = camelize
  $.trim = function(str) {
    return str == null ? "" : String.prototype.trim.call(str)
  }

  // plugin compatibility
  $.uuid = 0
  $.support = { }
  $.expr = { }

  $.map = function(elements, callback){
    var value, values = [], i, key
    if (likeArray(elements))
      for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i)
        if (value != null) values.push(value)
      }
    else
      for (key in elements) {
        value = callback(elements[key], key)
        if (value != null) values.push(value)
      }
    return flatten(values)
  }

  $.each = function(elements, callback){
    var i, key
    if (likeArray(elements)) {
      for (i = 0; i < elements.length; i++)
        if (callback.call(elements[i], i, elements[i]) === false) return elements
    } else {
      for (key in elements)
        if (callback.call(elements[key], key, elements[key]) === false) return elements
    }

    return elements
  }

  $.grep = function(elements, callback){
    return filter.call(elements, callback)
  }

  if (window.JSON) $.parseJSON = JSON.parse

  // Populate the class2type map
  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase()
  })

  // Define methods that will be available on all
  // Zepto collections
  $.fn = {
    // Because a collection acts like an array
    // copy over these useful array functions.
    forEach: emptyArray.forEach,
    reduce: emptyArray.reduce,
    push: emptyArray.push,
    sort: emptyArray.sort,
    indexOf: emptyArray.indexOf,
    concat: emptyArray.concat,

    // `map` and `slice` in the jQuery API work differently
    // from their array counterparts
    map: function(fn){
      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
    },
    slice: function(){
      return $(slice.apply(this, arguments))
    },

    ready: function(callback){
      // need to check if document.body exists for IE as that browser reports
      // document ready when it hasn't yet created the body element
      if (readyRE.test(document.readyState) && document.body) callback($)
      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
      return this
    },
    get: function(idx){
      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
    },
    toArray: function(){ return this.get() },
    size: function(){
      return this.length
    },
    remove: function(){
      return this.each(function(){
        if (this.parentNode != null)
          this.parentNode.removeChild(this)
      })
    },
    each: function(callback){
      emptyArray.every.call(this, function(el, idx){
        return callback.call(el, idx, el) !== false
      })
      return this
    },
    filter: function(selector){
      if (isFunction(selector)) return this.not(this.not(selector))
      return $(filter.call(this, function(element){
        return zepto.matches(element, selector)
      }))
    },
    add: function(selector,context){
      return $(uniq(this.concat($(selector,context))))
    },
    is: function(selector){
      return this.length > 0 && zepto.matches(this[0], selector)
    },
    not: function(selector){
      var nodes=[]
      if (isFunction(selector) && selector.call !== undefined)
        this.each(function(idx){
          if (!selector.call(this,idx)) nodes.push(this)
        })
      else {
        var excludes = typeof selector == 'string' ? this.filter(selector) :
          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
        this.forEach(function(el){
          if (excludes.indexOf(el) < 0) nodes.push(el)
        })
      }
      return $(nodes)
    },
    has: function(selector){
      return this.filter(function(){
        return isObject(selector) ?
          $.contains(this, selector) :
          $(this).find(selector).size()
      })
    },
    eq: function(idx){
      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
    },
    first: function(){
      var el = this[0]
      return el && !isObject(el) ? el : $(el)
    },
    last: function(){
      var el = this[this.length - 1]
      return el && !isObject(el) ? el : $(el)
    },
    find: function(selector){
      var result, $this = this
      if (!selector) result = $()
      else if (typeof selector == 'object')
        result = $(selector).filter(function(){
          var node = this
          return emptyArray.some.call($this, function(parent){
            return $.contains(parent, node)
          })
        })
      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
      else result = this.map(function(){ return zepto.qsa(this, selector) })
      return result
    },
    closest: function(selector, context){
      var node = this[0], collection = false
      if (typeof selector == 'object') collection = $(selector)
      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
        node = node !== context && !isDocument(node) && node.parentNode
      return $(node)
    },
    parents: function(selector){
      var ancestors = [], nodes = this
      while (nodes.length > 0)
        nodes = $.map(nodes, function(node){
          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
            ancestors.push(node)
            return node
          }
        })
      return filtered(ancestors, selector)
    },
    parent: function(selector){
      return filtered(uniq(this.pluck('parentNode')), selector)
    },
    children: function(selector){
      return filtered(this.map(function(){ return children(this) }), selector)
    },
    contents: function() {
      return this.map(function() { return slice.call(this.childNodes) })
    },
    siblings: function(selector){
      return filtered(this.map(function(i, el){
        return filter.call(children(el.parentNode), function(child){ return child!==el })
      }), selector)
    },
    empty: function(){
      return this.each(function(){ this.innerHTML = '' })
    },
    // `pluck` is borrowed from Prototype.js
    pluck: function(property){
      return $.map(this, function(el){ return el[property] })
    },
    show: function(){
      return this.each(function(){
        this.style.display == "none" && (this.style.display = '')
        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
          this.style.display = defaultDisplay(this.nodeName)
      })
    },
    replaceWith: function(newContent){
      return this.before(newContent).remove()
    },
    wrap: function(structure){
      var func = isFunction(structure)
      if (this[0] && !func)
        var dom   = $(structure).get(0),
            clone = dom.parentNode || this.length > 1

      return this.each(function(index){
        $(this).wrapAll(
          func ? structure.call(this, index) :
            clone ? dom.cloneNode(true) : dom
        )
      })
    },
    wrapAll: function(structure){
      if (this[0]) {
        $(this[0]).before(structure = $(structure))
        var children
        // drill down to the inmost element
        while ((children = structure.children()).length) structure = children.first()
        $(structure).append(this)
      }
      return this
    },
    wrapInner: function(structure){
      var func = isFunction(structure)
      return this.each(function(index){
        var self = $(this), contents = self.contents(),
            dom  = func ? structure.call(this, index) : structure
        contents.length ? contents.wrapAll(dom) : self.append(dom)
      })
    },
    unwrap: function(){
      this.parent().each(function(){
        $(this).replaceWith($(this).children())
      })
      return this
    },
    clone: function(){
      return this.map(function(){ return this.cloneNode(true) })
    },
    hide: function(){
      return this.css("display", "none")
    },
    toggle: function(setting){
      return this.each(function(){
        var el = $(this)
        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
      })
    },
    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
    html: function(html){
      return 0 in arguments ?
        this.each(function(idx){
          var originHtml = this.innerHTML
          $(this).empty().append( funcArg(this, html, idx, originHtml) )
        }) :
        (0 in this ? this[0].innerHTML : null)
    },
    text: function(text){
      return 0 in arguments ?
        this.each(function(idx){
          var newText = funcArg(this, text, idx, this.textContent)
          this.textContent = newText == null ? '' : ''+newText
        }) :
        (0 in this ? this[0].textContent : null)
    },
    attr: function(name, value){
      var result
      return (typeof name == 'string' && !(1 in arguments)) ?
        (!this.length || this[0].nodeType !== 1 ? undefined :
          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
        ) :
        this.each(function(idx){
          if (this.nodeType !== 1) return
          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
        })
    },
    removeAttr: function(name){
      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){
        setAttribute(this, attribute)
      }, this)})
    },
    prop: function(name, value){
      name = propMap[name] || name
      return (1 in arguments) ?
        this.each(function(idx){
          this[name] = funcArg(this, value, idx, this[name])
        }) :
        (this[0] && this[0][name])
    },
    data: function(name, value){
      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()

      var data = (1 in arguments) ?
        this.attr(attrName, value) :
        this.attr(attrName)

      return data !== null ? deserializeValue(data) : undefined
    },
    val: function(value){
      return 0 in arguments ?
        this.each(function(idx){
          this.value = funcArg(this, value, idx, this.value)
        }) :
        (this[0] && (this[0].multiple ?
           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
           this[0].value)
        )
    },
    offset: function(coordinates){
      if (coordinates) return this.each(function(index){
        var $this = $(this),
            coords = funcArg(this, coordinates, index, $this.offset()),
            parentOffset = $this.offsetParent().offset(),
            props = {
              top:  coords.top  - parentOffset.top,
              left: coords.left - parentOffset.left
            }

        if ($this.css('position') == 'static') props['position'] = 'relative'
        $this.css(props)
      })
      if (!this.length) return null
      var obj = this[0].getBoundingClientRect()
      return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: Math.round(obj.width),
        height: Math.round(obj.height)
      }
    },
    css: function(property, value){
      if (arguments.length < 2) {
        var computedStyle, element = this[0]
        if(!element) return
        computedStyle = getComputedStyle(element, '')
        if (typeof property == 'string')
          return element.style[camelize(property)] || computedStyle.getPropertyValue(property)
        else if (isArray(property)) {
          var props = {}
          $.each(property, function(_, prop){
            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
          })
          return props
        }
      }

      var css = ''
      if (type(property) == 'string') {
        if (!value && value !== 0)
          this.each(function(){ this.style.removeProperty(dasherize(property)) })
        else
          css = dasherize(property) + ":" + maybeAddPx(property, value)
      } else {
        for (key in property)
          if (!property[key] && property[key] !== 0)
            this.each(function(){ this.style.removeProperty(dasherize(key)) })
          else
            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
      }

      return this.each(function(){ this.style.cssText += ';' + css })
    },
    index: function(element){
      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
    },
    hasClass: function(name){
      if (!name) return false
      return emptyArray.some.call(this, function(el){
        return this.test(className(el))
      }, classRE(name))
    },
    addClass: function(name){
      if (!name) return this
      return this.each(function(idx){
        if (!('className' in this)) return
        classList = []
        var cls = className(this), newName = funcArg(this, name, idx, cls)
        newName.split(/\s+/g).forEach(function(klass){
          if (!$(this).hasClass(klass)) classList.push(klass)
        }, this)
        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
      })
    },
    removeClass: function(name){
      return this.each(function(idx){
        if (!('className' in this)) return
        if (name === undefined) return className(this, '')
        classList = className(this)
        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
          classList = classList.replace(classRE(klass), " ")
        })
        className(this, classList.trim())
      })
    },
    toggleClass: function(name, when){
      if (!name) return this
      return this.each(function(idx){
        var $this = $(this), names = funcArg(this, name, idx, className(this))
        names.split(/\s+/g).forEach(function(klass){
          (when === undefined ? !$this.hasClass(klass) : when) ?
            $this.addClass(klass) : $this.removeClass(klass)
        })
      })
    },
    scrollTop: function(value){
      if (!this.length) return
      var hasScrollTop = 'scrollTop' in this[0]
      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
      return this.each(hasScrollTop ?
        function(){ this.scrollTop = value } :
        function(){ this.scrollTo(this.scrollX, value) })
    },
    scrollLeft: function(value){
      if (!this.length) return
      var hasScrollLeft = 'scrollLeft' in this[0]
      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
      return this.each(hasScrollLeft ?
        function(){ this.scrollLeft = value } :
        function(){ this.scrollTo(value, this.scrollY) })
    },
    position: function() {
      if (!this.length) return

      var elem = this[0],
        // Get *real* offsetParent
        offsetParent = this.offsetParent(),
        // Get correct offsets
        offset       = this.offset(),
        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

      // Subtract element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0
      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

      // Add offsetParent borders
      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

      // Subtract the two offsets
      return {
        top:  offset.top  - parentOffset.top,
        left: offset.left - parentOffset.left
      }
    },
    offsetParent: function() {
      return this.map(function(){
        var parent = this.offsetParent || document.body
        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
          parent = parent.offsetParent
        return parent
      })
    }
  }

  // for now
  $.fn.detach = $.fn.remove

  // Generate the `width` and `height` functions
  ;['width', 'height'].forEach(function(dimension){
    var dimensionProperty =
      dimension.replace(/./, function(m){ return m[0].toUpperCase() })

    $.fn[dimension] = function(value){
      var offset, el = this[0]
      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
        (offset = this.offset()) && offset[dimension]
      else return this.each(function(idx){
        el = $(this)
        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
      })
    }
  })

  function traverseNode(node, fun) {
    fun(node)
    for (var i = 0, len = node.childNodes.length; i < len; i++)
      traverseNode(node.childNodes[i], fun)
  }

  // Generate the `after`, `prepend`, `before`, `append`,
  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
  adjacencyOperators.forEach(function(operator, operatorIndex) {
    var inside = operatorIndex % 2 //=> prepend, append

    $.fn[operator] = function(){
      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
      var argType, nodes = $.map(arguments, function(arg) {
            argType = type(arg)
            return argType == "object" || argType == "array" || arg == null ?
              arg : zepto.fragment(arg)
          }),
          parent, copyByClone = this.length > 1
      if (nodes.length < 1) return this

      return this.each(function(_, target){
        parent = inside ? target : target.parentNode

        // convert all methods to a "before" operation
        target = operatorIndex == 0 ? target.nextSibling :
                 operatorIndex == 1 ? target.firstChild :
                 operatorIndex == 2 ? target :
                 null

        var parentInDocument = $.contains(document.documentElement, parent)

        nodes.forEach(function(node){
          if (copyByClone) node = node.cloneNode(true)
          else if (!parent) return $(node).remove()

          parent.insertBefore(node, target)
          if (parentInDocument) traverseNode(node, function(el){
            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
               (!el.type || el.type === 'text/javascript') && !el.src)
              window['eval'].call(window, el.innerHTML)
          })
        })
      })
    }

    // after    => insertAfter
    // prepend  => prependTo
    // before   => insertBefore
    // append   => appendTo
    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
      $(html)[operator](this)
      return this
    }
  })

  zepto.Z.prototype = $.fn

  // Export internal API functions in the `$.zepto` namespace
  zepto.uniq = uniq
  zepto.deserializeValue = deserializeValue
  $.zepto = zepto

  return $
})()

window.Zepto = Zepto
window.$ === undefined && (window.$ = Zepto)

;(function($){
  var _zid = 1, undefined,
      slice = Array.prototype.slice,
      isFunction = $.isFunction,
      isString = function(obj){ return typeof obj == 'string' },
      handlers = {},
      specialEvents={},
      focusinSupported = 'onfocusin' in window,
      focus = { focus: 'focusin', blur: 'focusout' },
      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

  function zid(element) {
    return element._zid || (element._zid = _zid++)
  }
  function findHandlers(element, event, fn, selector) {
    event = parse(event)
    if (event.ns) var matcher = matcherFor(event.ns)
    return (handlers[zid(element)] || []).filter(function(handler) {
      return handler
        && (!event.e  || handler.e == event.e)
        && (!event.ns || matcher.test(handler.ns))
        && (!fn       || zid(handler.fn) === zid(fn))
        && (!selector || handler.sel == selector)
    })
  }
  function parse(event) {
    var parts = ('' + event).split('.')
    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
  }
  function matcherFor(ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
  }

  function eventCapture(handler, captureSetting) {
    return handler.del &&
      (!focusinSupported && (handler.e in focus)) ||
      !!captureSetting
  }

  function realEvent(type) {
    return hover[type] || (focusinSupported && focus[type]) || type
  }

  function add(element, events, fn, data, selector, delegator, capture){
    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
    events.split(/\s/).forEach(function(event){
      if (event == 'ready') return $(document).ready(fn)
      var handler   = parse(event)
      handler.fn    = fn
      handler.sel   = selector
      // emulate mouseenter, mouseleave
      if (handler.e in hover) fn = function(e){
        var related = e.relatedTarget
        if (!related || (related !== this && !$.contains(this, related)))
          return handler.fn.apply(this, arguments)
      }
      handler.del   = delegator
      var callback  = delegator || fn
      handler.proxy = function(e){
        e = compatible(e)
        if (e.isImmediatePropagationStopped()) return
        e.data = data
        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
        if (result === false) e.preventDefault(), e.stopPropagation()
        return result
      }
      handler.i = set.length
      set.push(handler)
      if ('addEventListener' in element)
        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
    })
  }
  function remove(element, events, fn, selector, capture){
    var id = zid(element)
    ;(events || '').split(/\s/).forEach(function(event){
      findHandlers(element, event, fn, selector).forEach(function(handler){
        delete handlers[id][handler.i]
      if ('removeEventListener' in element)
        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
      })
    })
  }

  $.event = { add: add, remove: remove }

  $.proxy = function(fn, context) {
    var args = (2 in arguments) && slice.call(arguments, 2)
    if (isFunction(fn)) {
      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
      proxyFn._zid = zid(fn)
      return proxyFn
    } else if (isString(context)) {
      if (args) {
        args.unshift(fn[context], fn)
        return $.proxy.apply(null, args)
      } else {
        return $.proxy(fn[context], fn)
      }
    } else {
      throw new TypeError("expected function")
    }
  }

  $.fn.bind = function(event, data, callback){
    return this.on(event, data, callback)
  }
  $.fn.unbind = function(event, callback){
    return this.off(event, callback)
  }
  $.fn.one = function(event, selector, data, callback){
    return this.on(event, selector, data, callback, 1)
  }

  var returnTrue = function(){return true},
      returnFalse = function(){return false},
      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
      eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
      }

  function compatible(event, source) {
    if (source || !event.isDefaultPrevented) {
      source || (source = event)

      $.each(eventMethods, function(name, predicate) {
        var sourceMethod = source[name]
        event[name] = function(){
          this[predicate] = returnTrue
          return sourceMethod && sourceMethod.apply(source, arguments)
        }
        event[predicate] = returnFalse
      })

      if (source.defaultPrevented !== undefined ? source.defaultPrevented :
          'returnValue' in source ? source.returnValue === false :
          source.getPreventDefault && source.getPreventDefault())
        event.isDefaultPrevented = returnTrue
    }
    return event
  }

  function createProxy(event) {
    var key, proxy = { originalEvent: event }
    for (key in event)
      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

    return compatible(proxy, event)
  }

  $.fn.delegate = function(selector, event, callback){
    return this.on(event, selector, callback)
  }
  $.fn.undelegate = function(selector, event, callback){
    return this.off(event, selector, callback)
  }

  $.fn.live = function(event, callback){
    $(document.body).delegate(this.selector, event, callback)
    return this
  }
  $.fn.die = function(event, callback){
    $(document.body).undelegate(this.selector, event, callback)
    return this
  }

  $.fn.on = function(event, selector, data, callback, one){
    var autoRemove, delegator, $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.on(type, selector, data, fn, one)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = data, data = selector, selector = undefined
    if (isFunction(data) || data === false)
      callback = data, data = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(_, element){
      if (one) autoRemove = function(e){
        remove(element, e.type, callback)
        return callback.apply(this, arguments)
      }

      if (selector) delegator = function(e){
        var evt, match = $(e.target).closest(selector, element).get(0)
        if (match && match !== element) {
          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
        }
      }

      add(element, event, callback, data, selector, delegator || autoRemove)
    })
  }
  $.fn.off = function(event, selector, callback){
    var $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.off(type, selector, fn)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = selector, selector = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(){
      remove(this, event, callback, selector)
    })
  }

  $.fn.trigger = function(event, args){
    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
    event._args = args
    return this.each(function(){
      // handle focus(), blur() by calling them directly
      if (event.type in focus && typeof this[event.type] == "function") this[event.type]()
      // items in the collection might not be DOM elements
      else if ('dispatchEvent' in this) this.dispatchEvent(event)
      else $(this).triggerHandler(event, args)
    })
  }

  // triggers event handlers on current element just as if an event occurred,
  // doesn't trigger an actual event, doesn't bubble
  $.fn.triggerHandler = function(event, args){
    var e, result
    this.each(function(i, element){
      e = createProxy(isString(event) ? $.Event(event) : event)
      e._args = args
      e.target = element
      $.each(findHandlers(element, event.type || event), function(i, handler){
        result = handler.proxy(e)
        if (e.isImmediatePropagationStopped()) return false
      })
    })
    return result
  }

  // shortcut methods for `.bind(event, fn)` for each event type
  ;('focusin focusout focus blur load resize scroll unload click dblclick '+
  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
    $.fn[event] = function(callback) {
      return (0 in arguments) ?
        this.bind(event, callback) :
        this.trigger(event)
    }
  })

  $.Event = function(type, props) {
    if (!isString(type)) props = type, type = props.type
    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
    event.initEvent(type, bubbles, true)
    return compatible(event)
  }

})(Zepto)

;(function($){
  var jsonpID = 0,
      document = window.document,
      key,
      name,
      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      scriptTypeRE = /^(?:text|application)\/javascript/i,
      xmlTypeRE = /^(?:text|application)\/xml/i,
      jsonType = 'application/json',
      htmlType = 'text/html',
      blankRE = /^\s*$/,
      originAnchor = document.createElement('a')

  originAnchor.href = window.location.href

  // trigger a custom event and return false if it was cancelled
  function triggerAndReturn(context, eventName, data) {
    var event = $.Event(eventName)
    $(context).trigger(event, data)
    return !event.isDefaultPrevented()
  }

  // trigger an Ajax "global" event
  function triggerGlobal(settings, context, eventName, data) {
    if (settings.global) return triggerAndReturn(context || document, eventName, data)
  }

  // Number of active Ajax requests
  $.active = 0

  function ajaxStart(settings) {
    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
  }
  function ajaxStop(settings) {
    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
  }

  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
  function ajaxBeforeSend(xhr, settings) {
    var context = settings.context
    if (settings.beforeSend.call(context, xhr, settings) === false ||
        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
      return false

    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
  }
  function ajaxSuccess(data, xhr, settings, deferred) {
    var context = settings.context, status = 'success'
    settings.success.call(context, data, status, xhr)
    if (deferred) deferred.resolveWith(context, [data, status, xhr])
    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
    ajaxComplete(status, xhr, settings)
  }
  // type: "timeout", "error", "abort", "parsererror"
  function ajaxError(error, type, xhr, settings, deferred) {
    var context = settings.context
    settings.error.call(context, xhr, type, error)
    if (deferred) deferred.rejectWith(context, [xhr, type, error])
    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
    ajaxComplete(type, xhr, settings)
  }
  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
  function ajaxComplete(status, xhr, settings) {
    var context = settings.context
    settings.complete.call(context, xhr, status)
    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
    ajaxStop(settings)
  }

  // Empty function, used as default callback
  function empty() {}

  $.ajaxJSONP = function(options, deferred){
    if (!('type' in options)) return $.ajax(options)

    var _callbackName = options.jsonpCallback,
      callbackName = ($.isFunction(_callbackName) ?
        _callbackName() : _callbackName) || ('jsonp' + (++jsonpID)),
      script = document.createElement('script'),
      originalCallback = window[callbackName],
      responseData,
      abort = function(errorType) {
        $(script).triggerHandler('error', errorType || 'abort')
      },
      xhr = { abort: abort }, abortTimeout

    if (deferred) deferred.promise(xhr)

    $(script).on('load error', function(e, errorType){
      clearTimeout(abortTimeout)
      $(script).off().remove()

      if (e.type == 'error' || !responseData) {
        ajaxError(null, errorType || 'error', xhr, options, deferred)
      } else {
        ajaxSuccess(responseData[0], xhr, options, deferred)
      }

      window[callbackName] = originalCallback
      if (responseData && $.isFunction(originalCallback))
        originalCallback(responseData[0])

      originalCallback = responseData = undefined
    })

    if (ajaxBeforeSend(xhr, options) === false) {
      abort('abort')
      return xhr
    }

    window[callbackName] = function(){
      responseData = arguments
    }

    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
    document.head.appendChild(script)

    if (options.timeout > 0) abortTimeout = setTimeout(function(){
      abort('timeout')
    }, options.timeout)

    return xhr
  }

  $.ajaxSettings = {
    // Default type of request
    type: 'GET',
    // Callback that is executed before request
    beforeSend: empty,
    // Callback that is executed if the request succeeds
    success: empty,
    // Callback that is executed the the server drops error
    error: empty,
    // Callback that is executed on request complete (both: error and success)
    complete: empty,
    // The context for the callbacks
    context: null,
    // Whether to trigger "global" Ajax events
    global: true,
    // Transport
    xhr: function () {
      return new window.XMLHttpRequest()
    },
    // MIME types mapping
    // IIS returns Javascript as "application/x-javascript"
    accepts: {
      script: 'text/javascript, application/javascript, application/x-javascript',
      json:   jsonType,
      xml:    'application/xml, text/xml',
      html:   htmlType,
      text:   'text/plain'
    },
    // Whether the request is to another domain
    crossDomain: false,
    // Default timeout
    timeout: 0,
    // Whether data should be serialized to string
    processData: true,
    // Whether the browser should be allowed to cache GET responses
    cache: true
  }

  function mimeToDataType(mime) {
    if (mime) mime = mime.split(';', 2)[0]
    return mime && ( mime == htmlType ? 'html' :
      mime == jsonType ? 'json' :
      scriptTypeRE.test(mime) ? 'script' :
      xmlTypeRE.test(mime) && 'xml' ) || 'text'
  }

  function appendQuery(url, query) {
    if (query == '') return url
    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
  }

  // serialize payload and append it to the URL for GET requests
  function serializeData(options) {
    if (options.processData && options.data && $.type(options.data) != "string")
      options.data = $.param(options.data, options.traditional)
    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
      options.url = appendQuery(options.url, options.data), options.data = undefined
  }

  $.ajax = function(options){
    var settings = $.extend({}, options || {}),
        deferred = $.Deferred && $.Deferred(),
        urlAnchor
    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

    ajaxStart(settings)

    if (!settings.crossDomain) {
      urlAnchor = document.createElement('a')
      urlAnchor.href = settings.url
      urlAnchor.href = urlAnchor.href
      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)
    }

    if (!settings.url) settings.url = window.location.toString()
    serializeData(settings)

    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
    if (hasPlaceholder) dataType = 'jsonp'

    if (settings.cache === false || (
         (!options || options.cache !== true) &&
         ('script' == dataType || 'jsonp' == dataType)
        ))
      settings.url = appendQuery(settings.url, '_=' + Date.now())

    if ('jsonp' == dataType) {
      if (!hasPlaceholder)
        settings.url = appendQuery(settings.url,
          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
      return $.ajaxJSONP(settings, deferred)
    }

    var mime = settings.accepts[dataType],
        headers = { },
        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },
        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
        xhr = settings.xhr(),
        nativeSetHeader = xhr.setRequestHeader,
        abortTimeout

    if (deferred) deferred.promise(xhr)

    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
    setHeader('Accept', mime || '*/*')
    if (mime = settings.mimeType || mime) {
      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
      xhr.overrideMimeType && xhr.overrideMimeType(mime)
    }
    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')

    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
    xhr.setRequestHeader = setHeader

    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        xhr.onreadystatechange = empty
        clearTimeout(abortTimeout)
        var result, error = false
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))
          result = xhr.responseText

          try {
            // http://perfectionkills.com/global-eval-what-are-the-options/
            if (dataType == 'script')    (1,eval)(result)
            else if (dataType == 'xml')  result = xhr.responseXML
            else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
          } catch (e) { error = e }

          if (error) ajaxError(error, 'parsererror', xhr, settings, deferred)
          else ajaxSuccess(result, xhr, settings, deferred)
        } else {
          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
        }
      }
    }

    if (ajaxBeforeSend(xhr, settings) === false) {
      xhr.abort()
      ajaxError(null, 'abort', xhr, settings, deferred)
      return xhr
    }

    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]

    var async = 'async' in settings ? settings.async : true
    xhr.open(settings.type, settings.url, async, settings.username, settings.password)

    for (name in headers) nativeSetHeader.apply(xhr, headers[name])

    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
        xhr.onreadystatechange = empty
        xhr.abort()
        ajaxError(null, 'timeout', xhr, settings, deferred)
      }, settings.timeout)

    // avoid sending empty string (#319)
    xhr.send(settings.data ? settings.data : null)
    return xhr
  }

  // handle optional data/success arguments
  function parseArguments(url, data, success, dataType) {
    if ($.isFunction(data)) dataType = success, success = data, data = undefined
    if (!$.isFunction(success)) dataType = success, success = undefined
    return {
      url: url
    , data: data
    , success: success
    , dataType: dataType
    }
  }

  $.get = function(/* url, data, success, dataType */){
    return $.ajax(parseArguments.apply(null, arguments))
  }

  $.post = function(/* url, data, success, dataType */){
    var options = parseArguments.apply(null, arguments)
    options.type = 'POST'
    return $.ajax(options)
  }

  $.getJSON = function(/* url, data, success */){
    var options = parseArguments.apply(null, arguments)
    options.dataType = 'json'
    return $.ajax(options)
  }

  $.fn.load = function(url, data, success){
    if (!this.length) return this
    var self = this, parts = url.split(/\s/), selector,
        options = parseArguments(url, data, success),
        callback = options.success
    if (parts.length > 1) options.url = parts[0], selector = parts[1]
    options.success = function(response){
      self.html(selector ?
        $('<div>').html(response.replace(rscript, "")).find(selector)
        : response)
      callback && callback.apply(self, arguments)
    }
    $.ajax(options)
    return this
  }

  var escape = encodeURIComponent

  function serialize(params, obj, traditional, scope){
    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
    $.each(obj, function(key, value) {
      type = $.type(value)
      if (scope) key = traditional ? scope :
        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
      // handle data in serializeArray() format
      if (!scope && array) params.add(value.name, value.value)
      // recurse into nested objects
      else if (type == "array" || (!traditional && type == "object"))
        serialize(params, value, traditional, key)
      else params.add(key, value)
    })
  }

  $.param = function(obj, traditional){
    var params = []
    params.add = function(key, value) {
      if ($.isFunction(value)) value = value()
      if (value == null) value = ""
      this.push(escape(key) + '=' + escape(value))
    }
    serialize(params, obj, traditional)
    return params.join('&').replace(/%20/g, '+')
  }
})(Zepto)

;(function($){
  $.fn.serializeArray = function() {
    var name, type, result = [],
      add = function(value) {
        if (value.forEach) return value.forEach(add)
        result.push({ name: name, value: value })
      }
    if (this[0]) $.each(this[0].elements, function(_, field){
      type = field.type, name = field.name
      if (name && field.nodeName.toLowerCase() != 'fieldset' &&
        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
        ((type != 'radio' && type != 'checkbox') || field.checked))
          add($(field).val())
    })
    return result
  }

  $.fn.serialize = function(){
    var result = []
    this.serializeArray().forEach(function(elm){
      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
    })
    return result.join('&')
  }

  $.fn.submit = function(callback) {
    if (0 in arguments) this.bind('submit', callback)
    else if (this.length) {
      var event = $.Event('submit')
      this.eq(0).trigger(event)
      if (!event.isDefaultPrevented()) this.get(0).submit()
    }
    return this
  }

})(Zepto)

;(function($){
  // __proto__ doesn't exist on IE<11, so redefine
  // the Z function to use object extension instead
  if (!('__proto__' in {})) {
    $.extend($.zepto, {
      Z: function(dom, selector){
        dom = dom || []
        $.extend(dom, $.fn)
        dom.selector = selector || ''
        dom.__Z = true
        return dom
      },
      // this is a kludge but works
      isZ: function(object){
        return $.type(object) === 'array' && '__Z' in object
      }
    })
  }

  // getComputedStyle shouldn't freak out when called
  // without a valid element as argument
  try {
    getComputedStyle(undefined)
  } catch(e) {
    var nativeGetComputedStyle = getComputedStyle;
    window.getComputedStyle = function(element){
      try {
        return nativeGetComputedStyle(element)
      } catch(e) {
        return null
      }
    }
  }
})(Zepto)
;

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