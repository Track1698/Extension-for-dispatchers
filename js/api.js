const a0_0x1e2c85=a0_0x24a0;(function(_0xc1ced9,_0x577706){const _0x1ab603=a0_0x24a0,_0x2b0d72=_0xc1ced9();while(!![]){try{const _0x427663=-parseInt(_0x1ab603(0x224))/0x1*(-parseInt(_0x1ab603(0x1cb))/0x2)+-parseInt(_0x1ab603(0x21f))/0x3*(-parseInt(_0x1ab603(0x215))/0x4)+parseInt(_0x1ab603(0x1d8))/0x5+-parseInt(_0x1ab603(0x23c))/0x6*(-parseInt(_0x1ab603(0x223))/0x7)+-parseInt(_0x1ab603(0x222))/0x8+-parseInt(_0x1ab603(0x1e2))/0x9*(-parseInt(_0x1ab603(0x1ff))/0xa)+-parseInt(_0x1ab603(0x233))/0xb;if(_0x427663===_0x577706)break;else _0x2b0d72['push'](_0x2b0d72['shift']());}catch(_0x27b1f0){_0x2b0d72['push'](_0x2b0d72['shift']());}}}(a0_0x5375,0xd3eed));function a0_0x24a0(_0x1deaa3,_0x2d2bd0){const _0x53758a=a0_0x5375();return a0_0x24a0=function(_0x24a0d0,_0x3a7a47){_0x24a0d0=_0x24a0d0-0x1bd;let _0x8aef2c=_0x53758a[_0x24a0d0];return _0x8aef2c;},a0_0x24a0(_0x1deaa3,_0x2d2bd0);}import a0_0x24d892 from'./alerts.js';import{saveToLocal,getFromLocal}from'./storage.js';function a0_0x5375(){const _0x1beb21=['2999680QGGyxT','WoXzN','Backspace','NpoOu','setRangeText','log','Jklgo','GhTBb','cHfLq','submit','18sVcjxg','paste','getElementById','OhGrE','cDoOO','error','Error\x20adding\x20item\x20to\x20blacklist','An\x20error\x20occurred\x20while\x20changing\x20the\x20password.','telegramPopup','eaKRW','IKSgp','findIndex','info','POST','local','email','focus','oevRp','kAgAQ','ySiWu','Ujrlz','EhbPx','zEung','pginV','PIYWE','New\x20password\x20and\x20confirm\x20password\x20do\x20not\x20match','searches','message','GgZDT','4785040czmzXQ','BEmll','Pmchq','current-password','split','HRRxB','MYGty','keydown','blacklist','Plaaw','key','controlElement','OlNhO','DPhHx','join','dWtCb','items','nqjBv','RVbmE','charAt','application/json','Kcuyw','9028dFjJHH','length','User\x20not\x20logged\x20in\x20or\x20missing\x20credentials.','ZmIDB','dhZib','QIEVA','Error\x20changing\x20password:','forEach','hTgIf','An\x20unexpected\x20error\x20occurred.\x20Please\x20try\x20again\x20later.','57rJZEne','NYaWU','storage','8460936EIwNfp','174657ABaLKK','1131613vcrWaO','DDrcW','min','click','value','meDXj','test','nnNoh','gCWlr','uWZiL','/api/changepassword','eJRGQ','ZDHih','clipboardData','telegramId','26428710IeszEF','Error\x20fetching\x20suggestions:','Error','json','FFLQC','Please\x20reload\x20CentralDispatch\x20or\x20login\x20again','srsJZ','/api/updateblacklist','change-password-form','384TTUrlZ','remove','tFrfu','text','verification-input','new-password','ZbWxk','success','cFweK','OcaMC','HgLzI','warning','bdTJW','Please\x20enter\x20a\x20valid\x20numeric\x20code.','reset','5|3|2|1|4|0','MeUBj','name','addEventListener','confirm-password','zmWUG','mzAwO','telegramVerifyButton','ArrowRight','ArrowLeft','2eptCyo','getData','authToken','NHbRP','ayIrj','NcZYw','wbVZD','display','map','stringify','qYsKJ','YutVp','start'];a0_0x5375=function(){return _0x1beb21;};return a0_0x5375();}import{backendAddress}from'./main.js';import{setAuthToken,getAuthToken,setEmail,getEmail,setCompanyId,setLoginKey,getLoginKey,getCompanyId}from'./state.js';import{makeItDisappear,makeItAppear}from'./utils.js';export function logout(){const _0x3ccebc=a0_0x24a0,_0x2457b5={'mzAwO':'Logged\x20out\x20successfully.','GhTBb':_0x3ccebc(0x1f1),'NYaWU':'companyId','EhbPx':_0x3ccebc(0x207),'gCWlr':_0x3ccebc(0x1fc)};chrome[_0x3ccebc(0x221)][_0x3ccebc(0x1f0)][_0x3ccebc(0x23d)](['authToken',_0x2457b5[_0x3ccebc(0x1df)],_0x2457b5[_0x3ccebc(0x220)],_0x2457b5[_0x3ccebc(0x1f7)],_0x2457b5[_0x3ccebc(0x22c)]],()=>{const _0x3a22eb=_0x3ccebc;a0_0x24d892[_0x3a22eb(0x1ee)](_0x2457b5[_0x3a22eb(0x1c7)]);});}export async function sendTelegramCodeToBackend(_0x493253){const _0x4624d7=a0_0x24a0,_0x4431c4={'zmWUG':function(_0x466780){return _0x466780();},'LZabs':function(_0x348b29){return _0x348b29();},'qYsKJ':function(_0x58fc2a,_0x31cb70,_0x2bf673){return _0x58fc2a(_0x31cb70,_0x2bf673);},'IPcip':_0x4624d7(0x1ef),'Jklgo':_0x4624d7(0x232),'tFrfu':'Telegram\x20connected\x20successfully!','nnNoh':'Telegram\x20connection\x20failed.'};try{const _0xab6b7b=_0x4431c4[_0x4624d7(0x1c6)](getEmail),_0x5ccbf1=_0x4431c4['LZabs'](getLoginKey),_0x1f6fc7=await _0x4431c4[_0x4624d7(0x1d5)](fetch,backendAddress+'/api/telegramcode',{'method':_0x4431c4['IPcip'],'headers':{'Content-Type':_0x4624d7(0x213)},'body':JSON[_0x4624d7(0x1d4)]({'email':_0xab6b7b,'code':_0x493253,'loginKey':_0x5ccbf1})}),_0x788502=await _0x1f6fc7['json']();if(_0x788502[_0x4624d7(0x243)])saveToLocal(_0x4431c4[_0x4624d7(0x1de)],_0x788502['userId']),a0_0x24d892[_0x4624d7(0x243)](_0x4431c4[_0x4624d7(0x23e)]);else throw new Error(_0x788502['message']||_0x4431c4[_0x4624d7(0x22b)]);}catch(_0x3566a4){a0_0x24d892[_0x4624d7(0x1e7)](_0x3566a4[_0x4624d7(0x1fd)]);}}export function showTelegramPopup(){const _0x359523=a0_0x24a0,_0x4d1dfb={'ZmIDB':_0x359523(0x1da),'OhGrE':function(_0x4fc487,_0x265ffb){return _0x4fc487===_0x265ffb;},'OlNhO':function(_0x5f0079,_0x1c7ccd){return _0x5f0079>_0x1c7ccd;},'Plaaw':function(_0x5b27c8,_0x26ef1f){return _0x5b27c8-_0x26ef1f;},'NpoOu':function(_0x4536b6,_0x25d5f2){return _0x4536b6<_0x25d5f2;},'NHbRP':function(_0x6b12b5,_0x1c2ab5){return _0x6b12b5+_0x1c2ab5;},'anHXZ':_0x359523(0x1ca),'YutVp':function(_0x17d08d,_0x2fe3d7){return _0x17d08d>_0x2fe3d7;},'UKYvw':function(_0x3a855c,_0x300009){return _0x3a855c===_0x300009;},'HgLzI':_0x359523(0x1c9),'ySiWu':function(_0x267b67,_0x2d3337){return _0x267b67<_0x2d3337;},'kAgAQ':function(_0x5eab7d,_0x234312){return _0x5eab7d+_0x234312;},'nqjBv':function(_0x2011f2){return _0x2011f2();},'XbXaa':function(_0x4622a8,_0x43e611){return _0x4622a8!==_0x43e611;},'uWZiL':function(_0x14705f,_0x139782){return _0x14705f+_0x139782;},'Zbutr':function(_0x59ff2b,_0x85e243){return _0x59ff2b+_0x85e243;},'meDXj':function(_0x4898c2,_0x13e749){return _0x4898c2-_0x13e749;},'eJRGQ':function(_0x51778d){return _0x51778d();},'srsJZ':function(_0x3f43e4){return _0x3f43e4();},'hTgIf':function(_0x2ede29,_0x42d232){return _0x2ede29>_0x42d232;},'xUASa':_0x359523(0x206),'ZuCwr':'input','xMwvR':_0x359523(0x1e3),'NcZYw':_0x359523(0x1f2),'dhZib':function(_0x4b0e7a,_0x27d73a){return _0x4b0e7a(_0x27d73a);},'ayIrj':_0x359523(0x1bf),'WoXzN':_0x359523(0x1c8),'MYGty':'flex','Kcuyw':_0x359523(0x227)},_0x2f4431=document[_0x359523(0x1e4)](_0x359523(0x1ea)),_0x4cb8da=document[_0x359523(0x1e4)](_0x4d1dfb[_0x359523(0x1d9)]);_0x2f4431['style'][_0x359523(0x1d2)]=_0x4d1dfb[_0x359523(0x205)];const _0x25da9a=Array['from'](document['getElementById'](_0x359523(0x240))['children']);function _0x1cc264(){const _0x23ea53=_0x359523;return _0x25da9a[_0x23ea53(0x1ed)](_0x56d11b=>_0x56d11b[_0x23ea53(0x228)]==='');}_0x25da9a[_0x359523(0x21c)]((_0x47519e,_0x2b5df5)=>{const _0x1ddcda=_0x359523,_0x319df9={'DPhHx':function(_0x40ebf1){const _0x2f5f50=a0_0x24a0;return _0x4d1dfb[_0x2f5f50(0x22f)](_0x40ebf1);},'ZbWxk':function(_0x2b432f,_0xee50bf){return _0x4d1dfb['ySiWu'](_0x2b432f,_0xee50bf);},'pyvtc':function(_0x2c6c30,_0x348039){return _0x2c6c30+_0x348039;},'UPcMB':function(_0x422c6a,_0x3d8cd1){const _0x19ed85=a0_0x24a0;return _0x4d1dfb[_0x19ed85(0x1f4)](_0x422c6a,_0x3d8cd1);},'wbVZD':function(_0x3a8e5b){const _0x103bca=a0_0x24a0;return _0x4d1dfb[_0x103bca(0x239)](_0x3a8e5b);},'zEung':function(_0x3857b1,_0x5a82e9){return _0x4d1dfb['XbXaa'](_0x3857b1,_0x5a82e9);},'PIYWE':function(_0x47f087,_0x531ba0){const _0x3fdb9b=a0_0x24a0;return _0x4d1dfb[_0x3fdb9b(0x21d)](_0x47f087,_0x531ba0);}};_0x47519e[_0x1ddcda(0x1c4)](_0x4d1dfb['xUASa'],_0x5612ef=>{const _0x26224d=_0x1ddcda;if(_0x5612ef[_0x26224d(0x209)]===_0x4d1dfb[_0x26224d(0x218)]){_0x4d1dfb[_0x26224d(0x1e5)](_0x47519e[_0x26224d(0x228)],'')&&_0x4d1dfb[_0x26224d(0x20b)](_0x2b5df5,0x0)&&(_0x25da9a[_0x4d1dfb[_0x26224d(0x208)](_0x2b5df5,0x1)][_0x26224d(0x228)]='',_0x25da9a[_0x2b5df5-0x1][_0x26224d(0x1f2)]());for(let _0x32b4ba=_0x2b5df5;_0x4d1dfb[_0x26224d(0x1db)](_0x32b4ba,_0x25da9a[_0x26224d(0x216)]);_0x32b4ba++){let _0x32781d=_0x25da9a[_0x4d1dfb[_0x26224d(0x1ce)](_0x32b4ba,0x1)]?_0x25da9a[_0x32b4ba+0x1][_0x26224d(0x228)]:'';_0x25da9a[_0x32b4ba][_0x26224d(0x1dc)](_0x32781d,0x0,0x1,_0x26224d(0x1d7));}}_0x4d1dfb[_0x26224d(0x1e5)](_0x5612ef[_0x26224d(0x209)],_0x4d1dfb['anHXZ'])&&_0x4d1dfb[_0x26224d(0x1d6)](_0x2b5df5,0x0)&&_0x25da9a[_0x4d1dfb[_0x26224d(0x208)](_0x2b5df5,0x1)][_0x26224d(0x1f2)](),_0x4d1dfb['UKYvw'](_0x5612ef[_0x26224d(0x209)],_0x4d1dfb[_0x26224d(0x246)])&&_0x4d1dfb[_0x26224d(0x1f5)](_0x2b5df5,_0x4d1dfb[_0x26224d(0x208)](_0x25da9a[_0x26224d(0x216)],0x1))&&_0x25da9a[_0x4d1dfb['kAgAQ'](_0x2b5df5,0x1)][_0x26224d(0x1f2)]();}),_0x47519e['addEventListener'](_0x4d1dfb['ZuCwr'],_0x131523=>{const _0x47bf07=_0x1ddcda;_0x47519e[_0x47bf07(0x228)]='';const _0x904597=_0x319df9[_0x47bf07(0x20c)](_0x1cc264);_0x25da9a[_0x904597][_0x47bf07(0x228)]=_0x131523['data'];if(_0x319df9[_0x47bf07(0x242)](_0x319df9['pyvtc'](_0x904597,0x1),_0x25da9a[_0x47bf07(0x216)]))_0x25da9a[_0x319df9['UPcMB'](_0x904597,0x1)][_0x47bf07(0x1f2)]();}),_0x47519e['addEventListener'](_0x4d1dfb['xMwvR'],_0x5d5e76=>{const _0x1ab0fa=_0x1ddcda;_0x5d5e76['preventDefault']();const _0x3ff920=(event[_0x1ab0fa(0x231)]||window[_0x1ab0fa(0x231)])[_0x1ab0fa(0x1cc)](_0x1ab0fa(0x23f)),_0x680471=_0x4d1dfb[_0x1ab0fa(0x210)](_0x1cc264),_0x156a61=_0x4d1dfb['XbXaa'](_0x680471,-0x1)?Math[_0x1ab0fa(0x226)](_0x2b5df5,_0x680471):_0x2b5df5;for(let _0xe2b901=0x0;_0x4d1dfb[_0x1ab0fa(0x1ce)](_0x156a61,_0xe2b901)<_0x25da9a[_0x1ab0fa(0x216)]&&_0xe2b901<_0x3ff920['length'];_0xe2b901++){_0x25da9a[_0x4d1dfb[_0x1ab0fa(0x22d)](_0x156a61,_0xe2b901)][_0x1ab0fa(0x228)]=_0x3ff920[_0x1ab0fa(0x212)](_0xe2b901);}_0x25da9a[Math['min'](_0x4d1dfb['Zbutr'](_0x156a61,_0x3ff920[_0x1ab0fa(0x216)]),_0x4d1dfb[_0x1ab0fa(0x229)](_0x25da9a[_0x1ab0fa(0x216)],0x1))]['focus']();}),_0x47519e[_0x1ddcda(0x1c4)](_0x4d1dfb[_0x1ddcda(0x1d0)],()=>{const _0x3911ef=_0x1ddcda,_0x39fd75=_0x319df9[_0x3911ef(0x1d1)](_0x1cc264);if(_0x319df9[_0x3911ef(0x1f8)](_0x39fd75,-0x1)&&_0x319df9[_0x3911ef(0x1fa)](_0x2b5df5,_0x39fd75))_0x25da9a[_0x39fd75]['focus']();});}),_0x4cb8da[_0x359523(0x1c4)](_0x4d1dfb[_0x359523(0x214)],function(){const _0x142645=_0x359523,_0x12a7a0=_0x25da9a[_0x142645(0x1d3)](_0x23148e=>_0x23148e[_0x142645(0x228)])[_0x142645(0x20d)]('');/^\d+$/[_0x142645(0x22a)](_0x12a7a0)?_0x4d1dfb[_0x142645(0x219)](sendTelegramCodeToBackend,_0x12a7a0):a0_0x24d892['warning'](_0x4d1dfb[_0x142645(0x1cf)]);});}export async function fetchSuggestions(_0x4662de){const _0x23bc26=a0_0x24a0,_0x7a8ea8={'oevRp':'searchFormElement','qEpff':_0x23bc26(0x20a),'OcaMC':function(_0x14ca01){return _0x14ca01();},'IKSgp':'authToken:\x20','jAPLQ':_0x23bc26(0x1ef),'iCWGu':_0x23bc26(0x213),'MeUBj':_0x23bc26(0x1c1),'pginV':function(_0x282f4c,_0x1285a5){return _0x282f4c(_0x1285a5);},'SIEss':_0x23bc26(0x1cd),'RVbmE':_0x23bc26(0x235),'FFLQC':_0x23bc26(0x234)},_0x53b576=document[_0x23bc26(0x1e4)](_0x7a8ea8[_0x23bc26(0x1f3)]),_0x157af6=document['getElementById'](_0x7a8ea8['qEpff']),_0x4be06d=_0x7a8ea8[_0x23bc26(0x245)](getAuthToken);try{const _0x70bf07=backendAddress+'/api/autocomplete',_0x4bc424={'apiKey':_0x4be06d,'term':_0x4662de};console[_0x23bc26(0x1dd)](_0x7a8ea8[_0x23bc26(0x1ec)],_0x4be06d);const _0x15d2ca=await fetch(_0x70bf07,{'method':_0x7a8ea8['jAPLQ'],'headers':{'Content-Type':_0x7a8ea8['iCWGu']},'body':JSON[_0x23bc26(0x1d4)](_0x4bc424)}),_0x4b8bda=await _0x15d2ca[_0x23bc26(0x236)]();return _0x4b8bda[_0x23bc26(0x20f)];}catch(_0x22b7cb){const _0x468e6c=_0x7a8ea8[_0x23bc26(0x1c2)][_0x23bc26(0x203)]('|');let _0x506e70=0x0;while(!![]){switch(_0x468e6c[_0x506e70++]){case'0':return[];case'1':_0x7a8ea8[_0x23bc26(0x1f9)](makeItDisappear,_0x53b576);continue;case'2':localStorage['removeItem'](_0x7a8ea8['SIEss']);continue;case'3':a0_0x24d892[_0x23bc26(0x1e7)](_0x23bc26(0x238),_0x7a8ea8[_0x23bc26(0x211)]);continue;case'4':_0x7a8ea8[_0x23bc26(0x1f9)](makeItAppear,_0x157af6);continue;case'5':console['error'](_0x7a8ea8[_0x23bc26(0x237)],_0x22b7cb);continue;}break;}}}export async function updateBlacklistInDatabase(_0x3ac39d,_0x281582){const _0x2a3444=a0_0x24a0,_0x427779={'dWtCb':function(_0x434cc4){return _0x434cc4();},'QIEVA':function(_0x510418){return _0x510418();},'cDoOO':_0x2a3444(0x1ef),'HRRxB':function(_0x52e391,_0x3ea087){return _0x52e391(_0x3ea087);},'GgZDT':_0x2a3444(0x234),'GRiRq':_0x2a3444(0x1e8),'eaKRW':'Error'};try{const _0x673bac=_0x427779[_0x2a3444(0x20e)](getEmail),_0x5eff91=_0x427779[_0x2a3444(0x21a)](getCompanyId),_0x174347=backendAddress+_0x2a3444(0x23a),_0x359b37={'companyId':_0x5eff91,'email':_0x673bac,'name':_0x3ac39d[_0x2a3444(0x1c3)],'address':_0x3ac39d['address'],'action':_0x281582},_0x156bf7=await fetch(_0x174347,{'method':_0x427779[_0x2a3444(0x1e6)],'headers':{'Content-Type':_0x2a3444(0x213)},'body':JSON[_0x2a3444(0x1d4)](_0x359b37)}),_0xccbd2c=await _0x156bf7['json']();return _0x427779[_0x2a3444(0x204)](populateBlacklist,_0xccbd2c[_0x2a3444(0x207)]),_0xccbd2c['blacklist'];}catch(_0x12f68f){return console[_0x2a3444(0x1e7)](_0x427779[_0x2a3444(0x1fe)],_0x12f68f),a0_0x24d892['error'](_0x427779['GRiRq'],_0x427779[_0x2a3444(0x1eb)]),[];}}document['getElementById'](a0_0x1e2c85(0x23b))[a0_0x1e2c85(0x1c4)](a0_0x1e2c85(0x1e1),async _0x1cc09e=>{const _0x56f325=a0_0x1e2c85,_0x3d471f={'ZDHih':_0x56f325(0x23b),'DDrcW':_0x56f325(0x202),'cFweK':function(_0x5c7ea7,_0x5e1fcd){return _0x5c7ea7!==_0x5e1fcd;},'Ujrlz':_0x56f325(0x1fb),'bdTJW':function(_0x18bd38){return _0x18bd38();},'BEmll':function(_0x43837e,_0x77848a,_0x31d278){return _0x43837e(_0x77848a,_0x31d278);},'cHfLq':_0x56f325(0x1ef),'hxtzB':_0x56f325(0x213),'pWgXe':'Password\x20changed\x20successfully','HKQMu':_0x56f325(0x1e9),'Pmchq':_0x56f325(0x21e)};_0x1cc09e['preventDefault']();const _0x319d37=document[_0x56f325(0x1e4)](_0x3d471f[_0x56f325(0x230)]),_0x185a07=document[_0x56f325(0x1e4)](_0x3d471f[_0x56f325(0x225)])[_0x56f325(0x228)],_0x51c499=document['getElementById'](_0x56f325(0x241))[_0x56f325(0x228)],_0x176af2=document[_0x56f325(0x1e4)](_0x56f325(0x1c5))[_0x56f325(0x228)];if(_0x3d471f[_0x56f325(0x244)](_0x51c499,_0x176af2)){a0_0x24d892['warning'](_0x3d471f[_0x56f325(0x1f6)]);return;}const _0x40fa85=_0x3d471f[_0x56f325(0x1be)](getEmail),_0x2642b3=_0x3d471f[_0x56f325(0x1be)](getLoginKey);if(!_0x40fa85||!_0x2642b3){a0_0x24d892[_0x56f325(0x1bd)](_0x56f325(0x217));return;}try{const _0x52b4b4=await _0x3d471f[_0x56f325(0x200)](fetch,backendAddress+_0x56f325(0x22e),{'method':_0x3d471f[_0x56f325(0x1e0)],'headers':{'Content-Type':_0x3d471f['hxtzB']},'body':JSON[_0x56f325(0x1d4)]({'email':_0x40fa85,'loginKey':_0x2642b3,'oldPassword':_0x185a07,'newPassword':_0x51c499})}),_0x552c80=await _0x52b4b4[_0x56f325(0x236)]();_0x52b4b4['ok']?(a0_0x24d892[_0x56f325(0x243)](_0x3d471f['pWgXe']),_0x319d37[_0x56f325(0x1c0)]()):a0_0x24d892[_0x56f325(0x1e7)](_0x552c80[_0x56f325(0x1e7)]||_0x3d471f['HKQMu']);}catch(_0x35c3d8){console[_0x56f325(0x1e7)](_0x56f325(0x21b),_0x35c3d8),a0_0x24d892['error'](_0x3d471f[_0x56f325(0x201)]);}});