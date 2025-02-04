14:09:51.431 ace.bundle.js:1 Uncaught SyntaxError: Cannot use import statement outside a module (at ace.bundle.js:1:1)Understand this error
14:09:51.504 10.0.0.1/:60 
        
        
       GET http://10.0.0.1/static/utils/Logging.js net::ERR_ABORTED 404 (Not Found)Understand this error
14:09:51.533 10.0.0.1/:61 
        
        
       GET http://10.0.0.1/static/engine/Socket.js net::ERR_ABORTED 404 (Not Found)Understand this error
14:09:52.283 app.js:1239 No default socket when trying to register hw-notification
HwNotification @ app.js:1239
(anonymous) @ app.js:1332
(anonymous) @ app.js:6673Understand this warning
14:09:52.287 app.js:1538 Uncaught ReferenceError: ace is not defined
    at JsonEditor.config (app.js:1538:12)
    at JsonEditor.render (app.js:1554:17)
    at JsonEditor.connectedCallback (app.js:1517:17)
    at app.js:1558:26
    at app.js:6673:3
config @ app.js:1538
render @ app.js:1554
connectedCallback @ app.js:1517
(anonymous) @ app.js:1558
(anonymous) @ app.js:6673Understand this error
14:09:52.288 app.js:10 Connecting websocket: ws://10.0.0.1/ws undefined
14:09:52.362 app.js:14 SOCKET SENDING:
 {allStatesRequest: true}
14:09:52.369 app.js:1437 Failed to load JSON data: ReferenceError: ace is not defined
    at JsonEditor.config (app.js:1538:12)
    at JsonEditor.render (app.js:1554:17)
    at set value (app.js:1522:17)
    at HwModule.render (app.js:1486:50)
    at app.js:1434:17
(anonymous) @ app.js:1437
Promise.catch (async)
getConfig @ app.js:1436
connectedCallback @ app.js:1468
(anonymous) @ app.js:1496
(anonymous) @ app.js:6673Understand this error
14:09:52.389 shoelace.bundle.js:1594 
        
        
       GET http://10.0.0.1/dist/shoelace/assets/icons/pencil-square.svg 404 (Not Found)
resolveIcon @ shoelace.bundle.js:1594
setIcon @ shoelace.bundle.js:1665
(anonymous) @ shoelace.bundle.js:1556
proto.update @ shoelace.bundle.js:1549
performUpdate @ shoelace.bundle.js:15
scheduleUpdate @ shoelace.bundle.js:15
_$ET @ shoelace.bundle.js:15
await in _$ET (async)
requestUpdate @ shoelace.bundle.js:15
_$Ev @ shoelace.bundle.js:15
b @ shoelace.bundle.js:15
s @ shoelace.bundle.js:28
ShoelaceElement @ shoelace.bundle.js:357
SlIcon @ shoelace.bundle.js:1578
(anonymous) @ shoelace.bundle.js:376
u @ shoelace.bundle.js:22
$ @ shoelace.bundle.js:22
_$AI @ shoelace.bundle.js:22
j @ shoelace.bundle.js:22
update @ shoelace.bundle.js:28
performUpdate @ shoelace.bundle.js:15
scheduleUpdate @ shoelace.bundle.js:15
_$ET @ shoelace.bundle.js:15
await in _$ET (async)
requestUpdate @ shoelace.bundle.js:15
_$Ev @ shoelace.bundle.js:15
b @ shoelace.bundle.js:15
s @ shoelace.bundle.js:28
ShoelaceElement @ shoelace.bundle.js:357
SlIconButton @ shoelace.bundle.js:4057
(anonymous) @ shoelace.bundle.js:376
define @ shoelace.bundle.js:376
(anonymous) @ shoelace.bundle.js:359
ShoelaceElement @ shoelace.bundle.js:358
SlDrawer @ shoelace.bundle.js:4239
(anonymous) @ shoelace.bundle.js:376
HwModule @ app.js:1420
(anonymous) @ app.js:1496
(anonymous) @ app.js:6673Understand this error
14:09:52.420 shoelace.bundle.js:1594 
        
        
       GET http://10.0.0.1/dist/shoelace/assets/icons/check-circle.svg 404 (Not Found)
resolveIcon @ shoelace.bundle.js:1594
setIcon @ shoelace.bundle.js:1665
(anonymous) @ shoelace.bundle.js:1556
proto.update @ shoelace.bundle.js:1549
performUpdate @ shoelace.bundle.js:15
scheduleUpdate @ shoelace.bundle.js:15
_$ET @ shoelace.bundle.js:15
await in _$ET (async)
requestUpdate @ shoelace.bundle.js:15
_$Ev @ shoelace.bundle.js:15
b @ shoelace.bundle.js:15
s @ shoelace.bundle.js:28
ShoelaceElement @ shoelace.bundle.js:357
SlIcon @ shoelace.bundle.js:1578
(anonymous) @ shoelace.bundle.js:376
notify @ app.js:1310
success @ app.js:1282
onOpen @ app.js:341Understand this error
14:09:52.797 app.js:14 SOCKET RECEIVED:
  {"states":[{"hash":6472957,"value":false},{"hash":121915655,"value":0},{"hash":124264916,"value":true},{"hash":291612745,"value":false},{"hash":365447618,"value":true},{"hash":367886937,"value":true},{"hash":377854433,"value":1284},{"hash":398410701,"value":1},{"hash":553984527,"value":0},{"hash":591585897,"value":0},{"hash":685018269,"value":true},{"hash":688403912,"value":false},{"hash":762150080,"value":2},{"hash":789972827,"value":0},{"hash":814574035,"value":true},{"hash":1143003751,"value":false},{"hash":1256861844,"value":false},{"hash":1429083291,"value":1},{"hash":1466629405,"value":100},{"hash":1587245951,"value":false},{"hash":1631903391,"value":false},{"hash":1686859766,"value":false},{"hash":1932120116,"value":0},{"hash":1944577862,"value":2},{"hash":2007447512,"value":5},{"hash":2051383628,"value":false},{"hash":2114280809,"value":false},{"hash":2230986534,"value":false},{"hash":2286761184,"value":2922791},{"hash":2567602691,"value":4000000},{"hash":2578051090,"value":false},{"hash":2621527064,"value":false},{"hash":2641471820,"value":false},{"hash":2799774631,"value":false},{"hash":2800637332,"value":0},{"hash":2842387093,"value":0},{"hash":2889704882,"value":false},{"hash":2918759982,"value":false},{"hash":3037871547,"value":false},{"hash":3102308124,"value":false},{"hash":3208586081,"value":false},{"hash":3279613467,"value":false},{"hash":3519725700,"value":500},{"hash":3697777386,"value":false},{"hash":3711439212,"value":0},{"hash":3815151997,"value":4100000},{"hash":3831064525,"value":2},{"hash":3917490492,"value":false},{"hash":3997433423,"value":0},{"hash":4013394785,"value":0},{"hash":4235215967,"value":0},{"hash":4256228255,"value":19}]}
14:09:52.797 app.js:289 Socket has no target
 6472957
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 121915655
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 124264916
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 291612745
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 365447618
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 367886937
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 377854433
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 398410701
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 553984527
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 591585897
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 685018269
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 688403912
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 762150080
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 789972827
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 814574035
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 1143003751
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 1256861844
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 1429083291
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 1466629405
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 1587245951
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 1631903391
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 1686859766
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 1932120116
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 1944577862
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 2007447512
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 2051383628
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 2114280809
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 2230986534
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 2286761184
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 2567602691
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 2578051090
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 2621527064
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 2641471820
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 2799774631
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.797 app.js:289 Socket has no target
 2800637332
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.798 app.js:289 Socket has no target
 2842387093
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.798 app.js:289 Socket has no target
 2889704882
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.798 app.js:289 Socket has no target
 2918759982
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.798 app.js:289 Socket has no target
 3037871547
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.798 app.js:289 Socket has no target
 3102308124
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.798 app.js:289 Socket has no target
 3208586081
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.798 app.js:289 Socket has no target
 3279613467
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.798 app.js:289 Socket has no target
 3519725700
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.798 app.js:289 Socket has no target
 3697777386
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.798 app.js:289 Socket has no target
 3711439212
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.798 app.js:289 Socket has no target
 3815151997
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.798 app.js:289 Socket has no target
 3831064525
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.798 app.js:289 Socket has no target
 3917490492
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.798 app.js:289 Socket has no target
 3997433423
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.798 app.js:289 Socket has no target
 4013394785
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.798 app.js:289 Socket has no target
 4235215967
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:09:52.798 app.js:289 Socket has no target
 4256228255
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:10:03.116 10.0.0.1/:50 
        
        
       GET https://cdn.jsdelivr.net/npm/ace-builds@1.32.2/css/ace.min.css net::ERR_NAME_NOT_RESOLVEDUnderstand this error
14:10:03.119 10.0.0.1/:45 
        
        
       GET https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.10.4/jsoneditor.min.js net::ERR_NAME_NOT_RESOLVEDUnderstand this error
14:10:12.152 app.js:14 SOCKET RECEIVED:
  {"states":[{"hash":2286761184,"value":2922790}]}
14:10:12.152 app.js:289 Socket has no target
 2286761184
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error
14:10:54.597 app.js:14 SOCKET RECEIVED:
  {"states":[{"hash":2286761184,"value":2922789}]}
14:10:54.597 app.js:289 Socket has no target
 2286761184
(anonymous) @ app.js:289
onMessage @ app.js:286Understand this error