(function(_0x522216,_0x566523){const _0x34d243=a0_0x1c4e,_0x59882e=_0x522216();while(!![]){try{const _0x5dd87c=-parseInt(_0x34d243(0x19f))/0x1+-parseInt(_0x34d243(0x18f))/0x2*(parseInt(_0x34d243(0x17e))/0x3)+-parseInt(_0x34d243(0x137))/0x4+-parseInt(_0x34d243(0x159))/0x5+parseInt(_0x34d243(0x178))/0x6*(-parseInt(_0x34d243(0x158))/0x7)+-parseInt(_0x34d243(0x161))/0x8+parseInt(_0x34d243(0x173))/0x9;if(_0x5dd87c===_0x566523)break;else _0x59882e['push'](_0x59882e['shift']());}catch(_0x3a46a7){_0x59882e['push'](_0x59882e['shift']());}}}(a0_0x5aea,0x4713c));import a0_0x2d42cc from'./alerts.js';import{changedSearches,refreshAlertsUI}from'./utils.js';export function saveToLocal(_0x4fc32b,_0x1e631e){const _0x470f3d=a0_0x1c4e;chrome[_0x470f3d(0x179)]['local'][_0x470f3d(0x156)]({[_0x4fc32b]:_0x1e631e},()=>{const _0x170cea=_0x470f3d;chrome['runtime'][_0x170cea(0x136)]?console['error'](_0x170cea(0x174)+_0x4fc32b+':',chrome['runtime'][_0x170cea(0x136)]):console[_0x170cea(0x187)](_0x4fc32b+_0x170cea(0x152));});}export function getFromLocal(_0x54f299,_0xb183ac){const _0x3ec04f=a0_0x1c4e,_0x380d71={'AbcIp':function(_0x579560,_0x551014){return _0x579560(_0x551014);}};chrome[_0x3ec04f(0x179)][_0x3ec04f(0x16b)][_0x3ec04f(0x14c)]([_0x54f299],_0x29b329=>{const _0x523073=_0x3ec04f;chrome[_0x523073(0x166)][_0x523073(0x136)]?console[_0x523073(0x181)](_0x523073(0x172)+_0x54f299+':',chrome[_0x523073(0x166)][_0x523073(0x136)]):_0x380d71[_0x523073(0x145)](_0xb183ac,_0x29b329[_0x54f299]);});}export function removeFromLocal(_0x446601,_0x35610e){const _0xc4fe77=a0_0x1c4e,_0x6cf8af={'NVRoY':function(_0x12c2d7){return _0x12c2d7();}};chrome[_0xc4fe77(0x179)][_0xc4fe77(0x16b)][_0xc4fe77(0x148)]([_0x446601],()=>{const _0xd532a4=_0xc4fe77;if(chrome[_0xd532a4(0x166)]['lastError'])console[_0xd532a4(0x181)](_0xd532a4(0x18e)+_0x446601+':',chrome[_0xd532a4(0x166)][_0xd532a4(0x136)]);else{console[_0xd532a4(0x187)](_0x446601+_0xd532a4(0x170));if(_0x35610e)_0x6cf8af[_0xd532a4(0x1a4)](_0x35610e);}});}export async function saveSearchInStorage(_0x345df5){const _0x2517a3=a0_0x1c4e,_0x3db369={'OWYZG':_0x2517a3(0x1a5),'MFFnk':_0x2517a3(0x14d),'PzRZY':function(_0x149c74,_0x3845bc){return _0x149c74>=_0x3845bc;},'PwPmf':_0x2517a3(0x147),'WozYc':_0x2517a3(0x18b),'vHnch':_0x2517a3(0x190)};console[_0x2517a3(0x187)](_0x2517a3(0x13b),_0x345df5),chrome[_0x2517a3(0x179)][_0x2517a3(0x16b)]['get']({'searches':[]},function(_0x397972){const _0x4753ec=_0x2517a3,_0x2e430b=_0x397972['searches'];console[_0x4753ec(0x187)](_0x3db369['MFFnk'],_0x2e430b);if(_0x3db369[_0x4753ec(0x141)](_0x2e430b[_0x4753ec(0x183)],0x5))a0_0x2d42cc[_0x4753ec(0x181)](_0x3db369['PwPmf'],_0x3db369[_0x4753ec(0x14b)],{'displayDuration':0xbb8});else{const _0xf16adf=_0x2e430b['find'](_0x56236d=>_0x56236d[_0x4753ec(0x1a0)]===_0x345df5[_0x4753ec(0x1a0)]);_0xf16adf?a0_0x2d42cc[_0x4753ec(0x181)](_0x4753ec(0x144)+_0x345df5[_0x4753ec(0x1a0)]+'\x27\x20already\x20exists.',_0x3db369['WozYc'],{'displayDuration':0xbb8}):(_0x2e430b[_0x4753ec(0x171)](_0x345df5),console['log'](_0x3db369[_0x4753ec(0x162)],_0x2e430b),chrome[_0x4753ec(0x179)]['local']['set']({'searches':_0x2e430b},function(){const _0x5db026=_0x4753ec;chrome[_0x5db026(0x166)]['lastError']?console[_0x5db026(0x181)](chrome[_0x5db026(0x166)]['lastError']):(a0_0x2d42cc['success'](_0x3db369[_0x5db026(0x157)],_0x5db026(0x15b),{'displayDuration':0x7d0}),console[_0x5db026(0x187)](_0x5db026(0x146),_0x345df5[_0x5db026(0x1a0)]));}));}});}export function getSearchesFromStorage(_0xe9113e){const _0x12a432=a0_0x1c4e,_0x57f1be={'OkBlv':'Error\x20retrieving\x20searches:','KsmEa':function(_0xf0f409,_0x39ce6b){return _0xf0f409(_0x39ce6b);}};chrome[_0x12a432(0x179)][_0x12a432(0x16b)]['get']({'searches':[]},function(_0x2daf3a){const _0x4a77eb=_0x12a432;chrome['runtime'][_0x4a77eb(0x136)]?console[_0x4a77eb(0x181)](_0x57f1be['OkBlv'],chrome['runtime']['lastError']):_0x57f1be['KsmEa'](_0xe9113e,_0x2daf3a[_0x4a77eb(0x191)]);});}function a0_0x5aea(){const _0x11dc33=['Info','setAttribute','YffOu','\x20Second(s)','aDivQ','createElement','4380608RAAHWs','vHnch','floor','qvGjB','EfBNO','runtime','addEventListener','bXFtG','hHMBO','vZfYP','local','alertsFilterSelect','splice','wXYEu','innerText','\x20removed\x20successfully.','push','Error\x20retrieving\x20','22627233LKEnjf','Error\x20saving\x20','searchNames','children','\x20Min','68346FqKImc','storage','ngsnN','all','findIndex','vBPXa','37923xqXeqo','forEach','option','error','aaJiH','length','MMjbb','Search\x20Filter\x20Deleted','updated:\x20','log','\x20Hour(s)','innerHTML','EbUYj','Error','PVUtK','storedData','Error\x20removing\x20','22WSdIDP','Adding\x20new\x20search\x20to\x20existing\x20searches:','searches','changedTelegram','qulSs','name','jAOWf','querySelector','FoREq','GKiiq','change','createdDate','map','LgZGu','rjelb','[data-target=\x22','490476uoEkeP','searchName','trash','filter','\x27\x20removed\x20successfully.','NVRoY','Search\x20saved\x20successfully!','tqMMV','lastError','1161640utIYyJ','Error\x20removing\x20search\x20\x27','CRHYC','YNGHs','Attempting\x20to\x20save\x20search:','hasOwnProperty','Show\x20All','text','xmDcg','nnFjW','PzRZY','getElementById','stringify','Search\x20with\x20name\x20\x27','AbcIp','Search\x20saved:','Maximum\x20limit\x20of\x205\x20search\x20filters\x20reached.','remove','VFoFO','value','WozYc','get','Retrieved\x20existing\x20searches:','iLlLi','WUwrM','yRcBO','vlqkg','\x20saved\x20successfully.','unUtR','appendChild','data-target','set','OWYZG','217yIfPdI','2011855ygFBED','uVAeV'];a0_0x5aea=function(){return _0x11dc33;};return a0_0x5aea();}export function removeSearchFromStorage(_0x4f08a0,_0x159129){const _0x1d144b=a0_0x1c4e;chrome[_0x1d144b(0x179)][_0x1d144b(0x16b)]['get']({'searches':[]},function(_0x35dd1d){const _0x166215=_0x1d144b;let _0xd53adc=_0x35dd1d[_0x166215(0x191)]||[];_0xd53adc=_0xd53adc[_0x166215(0x1a2)](_0x21282f=>_0x21282f[_0x166215(0x1a0)]!==_0x4f08a0),chrome['storage'][_0x166215(0x16b)]['set']({'searches':_0xd53adc},function(){const _0x812564=_0x166215;if(chrome[_0x812564(0x166)][_0x812564(0x136)])console['error'](_0x812564(0x138)+_0x4f08a0+'\x27:',chrome[_0x812564(0x166)][_0x812564(0x136)]);else{console[_0x812564(0x187)]('Search\x20\x27'+_0x4f08a0+'\x27\x20removed\x20successfully.');if(_0x159129)_0x159129();}});});}function a0_0x1c4e(_0x3861a1,_0xd78dd1){const _0x5aeaa8=a0_0x5aea();return a0_0x1c4e=function(_0x1c4e55,_0x5d6db5){_0x1c4e55=_0x1c4e55-0x136;let _0x336331=_0x5aeaa8[_0x1c4e55];return _0x336331;},a0_0x1c4e(_0x3861a1,_0xd78dd1);}export function getStoredData(_0x466c49){const _0x54c0f1={'bXFtG':function(_0x5ce50b,_0x20f26d){return _0x5ce50b(_0x20f26d);}};return new Promise(_0xa2d587=>{const _0x50fbbc=a0_0x1c4e;chrome[_0x50fbbc(0x179)][_0x50fbbc(0x16b)][_0x50fbbc(0x14c)](_0x466c49,function(_0x2dd203){const _0x3e7176=_0x50fbbc;_0x54c0f1[_0x3e7176(0x168)](_0xa2d587,_0x2dd203);});});}export function updateAlertsFilter(_0x3aabba){const _0x28a0f1=a0_0x1c4e,_0x413391={'qvGjB':_0x28a0f1(0x180),'vlqkg':function(_0x18204b,_0x37cd14){return _0x18204b(_0x37cd14);},'EfBNO':_0x28a0f1(0x17b),'rjelb':_0x28a0f1(0x13d),'uVAeV':_0x28a0f1(0x199)},_0xdd1fd8=document['getElementById']('alertsFilterSelect');_0xdd1fd8[_0x28a0f1(0x189)]='';const _0x2fe212=document[_0x28a0f1(0x160)](_0x28a0f1(0x180));_0x2fe212[_0x28a0f1(0x14a)]=_0x413391[_0x28a0f1(0x165)],_0x2fe212[_0x28a0f1(0x13e)]=_0x413391[_0x28a0f1(0x19d)],_0xdd1fd8[_0x28a0f1(0x154)](_0x2fe212),_0x3aabba['forEach'](_0x583872=>{const _0x45d17d=_0x28a0f1,_0x2ea32b=document['createElement'](_0x413391[_0x45d17d(0x164)]);_0x2ea32b[_0x45d17d(0x14a)]=_0x583872,_0x2ea32b['text']=_0x583872,_0xdd1fd8['appendChild'](_0x2ea32b);}),_0xdd1fd8[_0x28a0f1(0x167)](_0x413391[_0x28a0f1(0x15a)],()=>{const _0x5f1e1b=_0x28a0f1,_0x25a118=_0xdd1fd8[_0x5f1e1b(0x14a)];_0x413391[_0x5f1e1b(0x151)](refreshAlertsUI,_0x25a118);});}export function clearLoadAlerts(){const _0x51ed7f=a0_0x1c4e,_0x491567={'MMjbb':'all','vDCoC':'storedData'},_0x23379c=document[_0x51ed7f(0x142)](_0x51ed7f(0x16c))['value'];_0x23379c===_0x491567[_0x51ed7f(0x184)]?(chrome['storage'][_0x51ed7f(0x16b)]['set']({'storedData':[]}),updateSearchNamesInStorage()):chrome[_0x51ed7f(0x179)][_0x51ed7f(0x16b)][_0x51ed7f(0x14c)]([_0x491567['vDCoC']],function(_0x37c9ca){const _0x30a638=_0x51ed7f,_0x504b4f=_0x37c9ca[_0x30a638(0x18d)]||[],_0x11c82b=_0x504b4f[_0x30a638(0x1a2)](_0x57ad23=>_0x57ad23[_0x30a638(0x194)]!==_0x23379c);updateSearchNamesInStorage(),chrome[_0x30a638(0x179)][_0x30a638(0x16b)][_0x30a638(0x156)]({'storedData':_0x11c82b});});}export async function updateSearchNamesInStorage(){const _0xc584ff=a0_0x1c4e,_0x5230b5={'GKiiq':function(_0x2da6b4,_0xeb5de){return _0x2da6b4!==_0xeb5de;},'vZfYP':function(_0x244a21,_0xa63fa3){return _0x244a21(_0xa63fa3);},'YffOu':function(_0x111251,_0x5dcfab){return _0x111251(_0x5dcfab);},'unUtR':'all','ngsnN':'searchNames'};chrome[_0xc584ff(0x179)][_0xc584ff(0x16b)][_0xc584ff(0x14c)]([_0x5230b5[_0xc584ff(0x17a)],_0xc584ff(0x18d),_0xc584ff(0x191)],function(_0x36c124){const _0x952507=_0xc584ff;console[_0x952507(0x187)](_0x36c124);let _0x4207a3=_0x36c124[_0x952507(0x175)]||[],_0x4cefc1=_0x36c124[_0x952507(0x18d)]||[],_0xfc1b53=_0x36c124[_0x952507(0x191)]||[];const _0x3b1ce2=_0x4cefc1[_0x952507(0x19b)](_0x3efebf=>_0x3efebf['name']),_0x1c3159=_0xfc1b53[_0x952507(0x19b)](_0x5353a9=>_0x5353a9[_0x952507(0x1a0)]),_0x58259b=[...new Set([..._0x3b1ce2,..._0x1c3159])];let _0x24c42a=_0x58259b;console[_0x952507(0x187)](_0x952507(0x186),_0x24c42a),_0x5230b5[_0x952507(0x198)](JSON[_0x952507(0x143)](_0x4207a3),JSON[_0x952507(0x143)](_0x24c42a))&&(_0x5230b5[_0x952507(0x16a)](updateAlertsFilter,_0x24c42a),_0x5230b5[_0x952507(0x15d)](refreshAlertsUI,_0x5230b5[_0x952507(0x153)])),chrome[_0x952507(0x179)][_0x952507(0x16b)][_0x952507(0x156)]({'searchNames':_0x24c42a});});}export function saveTelegramIdToLocalStorage(_0x33ef64){const _0x58fcca=a0_0x1c4e,_0x3924fc={'VFoFO':function(_0x3888cb,_0x337486,_0x396f4d){return _0x3888cb(_0x337486,_0x396f4d);}};chrome[_0x58fcca(0x179)]['local'][_0x58fcca(0x156)]({'telegramId':_0x33ef64},function(){const _0x57ee86=_0x58fcca;_0x3924fc[_0x57ee86(0x149)](setTimeout,()=>{const _0x493eef=_0x57ee86;chrome[_0x493eef(0x166)]['sendMessage']({'action':_0x493eef(0x192)});},0x1f4);});}export function updateMinutes(){const _0x41e1fa=a0_0x1c4e,_0x1555f8={'iLlLi':function(_0x17c74c,_0x2bae33){return _0x17c74c-_0x2bae33;},'jbONt':function(_0x1f1aac,_0x662290){return _0x1f1aac/_0x662290;},'FoREq':function(_0x19731d,_0xd782a2){return _0x19731d*_0xd782a2;},'hHMBO':function(_0x27480b,_0x2ee81f){return _0x27480b+_0x2ee81f;},'YSHHh':_0x41e1fa(0x188),'yrDPJ':function(_0x1bd66c,_0x69f652){return _0x1bd66c/_0x69f652;},'YaGkR':_0x41e1fa(0x15e),'jPDqS':_0x41e1fa(0x155),'wXYEu':_0x41e1fa(0x18d)};chrome[_0x41e1fa(0x179)][_0x41e1fa(0x16b)]['get']([_0x1555f8[_0x41e1fa(0x16e)]],function(_0x28343c){const _0x1d1bfb=_0x41e1fa,_0x324305={'vBPXa':function(_0x2d90a1,_0x9b9064){const _0x51f85c=a0_0x1c4e;return _0x1555f8[_0x51f85c(0x14e)](_0x2d90a1,_0x9b9064);},'jAOWf':function(_0x57c7b7,_0x137e91){return _0x1555f8['jbONt'](_0x57c7b7,_0x137e91);},'CRHYC':function(_0x56d1d1,_0x38d37a){const _0x3ebf99=a0_0x1c4e;return _0x1555f8[_0x3ebf99(0x197)](_0x56d1d1,_0x38d37a);},'tqMMV':function(_0x2adf61,_0x448cec){return _0x2adf61/_0x448cec;},'xmDcg':function(_0x2f0e62,_0x2914cf){const _0x464388=a0_0x1c4e;return _0x1555f8[_0x464388(0x169)](_0x2f0e62,_0x2914cf);},'crWSN':_0x1555f8['YSHHh'],'nnFjW':function(_0x5c13ab,_0x19fe56){return _0x5c13ab<_0x19fe56;},'PVUtK':function(_0x5db6a1,_0x3f6d6e){return _0x1555f8['yrDPJ'](_0x5db6a1,_0x3f6d6e);},'mDpIe':_0x1555f8['YaGkR'],'YNGHs':function(_0x59f104,_0x2e0e0e){const _0x1a470b=a0_0x1c4e;return _0x1555f8[_0x1a470b(0x169)](_0x59f104,_0x2e0e0e);},'qulSs':_0x1555f8['jPDqS']},_0x12617f=_0x28343c[_0x1d1bfb(0x18d)]||[];_0x12617f[_0x1d1bfb(0x17f)](_0x4538e5=>{const _0x53e044=_0x1d1bfb,_0x3a6a4f=new Date(),_0x52d3de=new Date(_0x4538e5[_0x53e044(0x19a)]),_0x2be894=_0x324305[_0x53e044(0x17d)](_0x3a6a4f,_0x52d3de),_0x25fcfa=Math[_0x53e044(0x163)](_0x324305[_0x53e044(0x195)](_0x2be894,_0x324305[_0x53e044(0x139)](0x3e8,0x3c)));let _0x5eba15;if(_0x25fcfa>=0x3c){const _0x3fc9b5=Math[_0x53e044(0x163)](_0x324305[_0x53e044(0x1a6)](_0x25fcfa,0x3c));_0x5eba15=_0x324305[_0x53e044(0x13f)](_0x3fc9b5,_0x324305['crWSN']);}else{if(_0x324305[_0x53e044(0x140)](_0x25fcfa,0x1)){const _0x3f119a=Math[_0x53e044(0x163)](_0x324305[_0x53e044(0x18c)](_0x2be894,0x3e8));_0x5eba15=_0x324305[_0x53e044(0x13f)](_0x3f119a,_0x324305['mDpIe']);}else _0x5eba15=_0x324305[_0x53e044(0x13a)](_0x25fcfa,_0x53e044(0x177));}const _0x74cb5=document[_0x53e044(0x196)](_0x53e044(0x19e)+_0x4538e5['id']+'\x22]');_0x74cb5&&(_0x74cb5[_0x53e044(0x176)][0x0][_0x53e044(0x16f)]=_0x5eba15,_0x74cb5[_0x53e044(0x15c)](_0x324305[_0x53e044(0x193)],_0x4538e5['id']));});});}export async function removeSearch(_0x424608){const _0x35a364=a0_0x1c4e,_0x1b297a={'LgZGu':_0x35a364(0x185),'EbUYj':_0x35a364(0x191),'aaJiH':function(_0x4d367a,_0x469a75){return _0x4d367a!==_0x469a75;},'WUwrM':'No\x20searches\x20found\x20in\x20storage.'};chrome['storage']['local'][_0x35a364(0x14c)]([_0x1b297a[_0x35a364(0x18a)]],function(_0x5a7945){const _0x4e3f39=_0x35a364,_0x19e66f={'yRcBO':_0x1b297a[_0x4e3f39(0x19c)],'aDivQ':function(_0x5bb1fd){return _0x5bb1fd();}};if(_0x5a7945[_0x4e3f39(0x13c)](_0x1b297a[_0x4e3f39(0x18a)])){const _0x91d66d=_0x5a7945[_0x4e3f39(0x191)],_0x332c81=_0x91d66d[_0x4e3f39(0x17c)](_0x154a14=>_0x154a14[_0x4e3f39(0x1a0)]===_0x424608);_0x1b297a[_0x4e3f39(0x182)](_0x332c81,-0x1)?(_0x91d66d[_0x4e3f39(0x16d)](_0x332c81,0x1),chrome[_0x4e3f39(0x179)][_0x4e3f39(0x16b)][_0x4e3f39(0x156)]({'searches':_0x91d66d},function(){const _0x125193=_0x4e3f39;a0_0x2d42cc[_0x125193(0x1a1)](_0x125193(0x144)+_0x424608+_0x125193(0x1a3),_0x19e66f[_0x125193(0x150)],{'displayDuration':0xbb8}),updateSearchNamesInStorage(),_0x19e66f[_0x125193(0x15f)](changedSearches);})):console[_0x4e3f39(0x187)](_0x4e3f39(0x144)+_0x424608+'\x27\x20not\x20found.');}else console[_0x4e3f39(0x187)](_0x1b297a[_0x4e3f39(0x14f)]);});}export function updateBlacklistInStorage(_0x566a3e){const _0x1e731e=a0_0x1c4e;chrome[_0x1e731e(0x179)][_0x1e731e(0x16b)][_0x1e731e(0x156)]({'blacklist':_0x566a3e},function(){});}