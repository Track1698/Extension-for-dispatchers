(function(_0x220d45,_0x4ef558){const _0xd3ed9c=a0_0x4916,_0x41ad81=_0x220d45();while(!![]){try{const _0x3aa7af=-parseInt(_0xd3ed9c(0x106))/0x1+parseInt(_0xd3ed9c(0x12b))/0x2*(-parseInt(_0xd3ed9c(0xf3))/0x3)+-parseInt(_0xd3ed9c(0x10d))/0x4+parseInt(_0xd3ed9c(0xbc))/0x5*(parseInt(_0xd3ed9c(0x12d))/0x6)+parseInt(_0xd3ed9c(0x129))/0x7+-parseInt(_0xd3ed9c(0xe4))/0x8+-parseInt(_0xd3ed9c(0xc0))/0x9*(-parseInt(_0xd3ed9c(0xd9))/0xa);if(_0x3aa7af===_0x4ef558)break;else _0x41ad81['push'](_0x41ad81['shift']());}catch(_0x3b82ef){_0x41ad81['push'](_0x41ad81['shift']());}}}(a0_0x4868,0x6e442));import a0_0x1ac32c from'./alerts.js';import{changedSearches,checkAlertsFilter,resetForm}from'./utils.js';export function saveToLocal(_0x3d2064,_0x253279){const _0x1fe989=a0_0x4916;chrome[_0x1fe989(0x128)][_0x1fe989(0xe1)][_0x1fe989(0xf1)]({[_0x3d2064]:_0x253279},()=>{const _0xd52e90=_0x1fe989;chrome[_0xd52e90(0xbb)][_0xd52e90(0xf2)]?console[_0xd52e90(0xc5)]('Error\x20saving\x20'+_0x3d2064+':',chrome[_0xd52e90(0xbb)]['lastError']):console[_0xd52e90(0xc1)](_0x3d2064+_0xd52e90(0x118));});}export function getFromLocal(_0x4e364c,_0x222900){const _0x4e02a0=a0_0x4916;chrome['storage'][_0x4e02a0(0xe1)][_0x4e02a0(0xea)]([_0x4e364c],_0x5eae54=>{const _0x32299a=_0x4e02a0;chrome['runtime'][_0x32299a(0xf2)]?console[_0x32299a(0xc5)](_0x32299a(0xe7)+_0x4e364c+':',chrome['runtime'][_0x32299a(0xf2)]):_0x222900(_0x5eae54[_0x4e364c]);});}export function removeFromLocal(_0x2b50ca,_0x2522ff){const _0x36e813=a0_0x4916,_0x175f77={'ZUIff':function(_0x1ff75d){return _0x1ff75d();}};chrome[_0x36e813(0x128)][_0x36e813(0xe1)][_0x36e813(0x108)]([_0x2b50ca],()=>{const _0x603e0f=_0x36e813;if(chrome['runtime'][_0x603e0f(0xf2)])console['error'](_0x603e0f(0x10a)+_0x2b50ca+':',chrome[_0x603e0f(0xbb)][_0x603e0f(0xf2)]);else{console[_0x603e0f(0xc1)](_0x2b50ca+_0x603e0f(0x11e));if(_0x2522ff)_0x175f77[_0x603e0f(0xfc)](_0x2522ff);}});}export async function saveSearchInStorage(_0x13c68c){const _0x3683b9=a0_0x4916,_0x27193e={'ZbKSY':function(_0x1ae869){return _0x1ae869();},'DGpDq':'Search\x20saved:','FEYPZ':_0x3683b9(0x116),'FqEVJ':function(_0x37e196,_0x1e0369){return _0x37e196>=_0x1e0369;},'qAEms':'Error','VCHTg':'Adding\x20new\x20search\x20to\x20existing\x20searches:','LcVXm':_0x3683b9(0x102)};console[_0x3683b9(0xc1)](_0x27193e[_0x3683b9(0x100)],_0x13c68c),chrome[_0x3683b9(0x128)][_0x3683b9(0xe1)][_0x3683b9(0xea)]({'searches':[]},function(_0x24e837){const _0x44cf5d=_0x3683b9,_0x58556d={'QgFWH':function(_0x2b8970){return _0x27193e['ZbKSY'](_0x2b8970);},'ohJfz':_0x27193e[_0x44cf5d(0x10b)]},_0x3f8cd6=_0x24e837[_0x44cf5d(0xe2)];console[_0x44cf5d(0xc1)](_0x27193e[_0x44cf5d(0xd7)],_0x3f8cd6);if(_0x27193e[_0x44cf5d(0x11f)](_0x3f8cd6['length'],0x3))a0_0x1ac32c[_0x44cf5d(0xc5)](_0x44cf5d(0x132),_0x27193e[_0x44cf5d(0x126)],{'displayDuration':0xbb8});else{const _0x33d118=_0x3f8cd6[_0x44cf5d(0xe0)](_0x3297b8=>_0x3297b8['searchName']===_0x13c68c[_0x44cf5d(0x111)]);_0x33d118?a0_0x1ac32c[_0x44cf5d(0xc5)](_0x44cf5d(0x105)+_0x13c68c['searchName']+_0x44cf5d(0xd0),_0x44cf5d(0xb9),{'displayDuration':0xbb8}):(_0x3f8cd6[_0x44cf5d(0x11c)](_0x13c68c),console[_0x44cf5d(0xc1)](_0x27193e['VCHTg'],_0x3f8cd6),chrome[_0x44cf5d(0x128)][_0x44cf5d(0xe1)][_0x44cf5d(0xf1)]({'searches':_0x3f8cd6},function(){const _0x452c0b=_0x44cf5d;chrome[_0x452c0b(0xbb)]['lastError']?console['error'](chrome['runtime'][_0x452c0b(0xf2)]):(a0_0x1ac32c['success'](_0x452c0b(0xdd),_0x452c0b(0x119),{'displayDuration':0x7d0}),_0x58556d[_0x452c0b(0x122)](resetForm),console[_0x452c0b(0xc1)](_0x58556d['ohJfz'],_0x13c68c[_0x452c0b(0x111)]));}));}});}export function getSearchesFromStorage(_0x32c1af){const _0x7d0616=a0_0x4916,_0x314b28={'tWjBR':'Error\x20retrieving\x20searches:','Zvgkc':function(_0x11bba4,_0x1dcce4){return _0x11bba4(_0x1dcce4);}};chrome['storage'][_0x7d0616(0xe1)][_0x7d0616(0xea)]({'searches':[]},function(_0x426b2c){const _0x33a04a=_0x7d0616;chrome[_0x33a04a(0xbb)]['lastError']?console['error'](_0x314b28[_0x33a04a(0x103)],chrome[_0x33a04a(0xbb)][_0x33a04a(0xf2)]):_0x314b28['Zvgkc'](_0x32c1af,_0x426b2c[_0x33a04a(0xe2)]);});}function a0_0x4868(){const _0x4841e7=['alertsFilterSelect','SUHfE','\x27\x20already\x20exists.','rXpOo','getElementById','dlVzL','hasOwnProperty','sendMessage','data-target','FEYPZ','add','250nMaaoV','isArray','GUmem','Show\x20All','Search\x20saved\x20successfully!','rqONa','tjgSd','find','local','searches','createElement','5331200psUwUE','BwgJE','name','Error\x20retrieving\x20','splice','IjnBA','get','GMXHi','all','\x27\x20removed\x20successfully.','zPYcO','yOaJI','Error\x20removing\x20search\x20\x27','set','lastError','656685hRKajw','jrOCJ','sezzw','storedData','children','findIndex','ltMyq','emGax','FQrfV','ZUIff','VRoOE','VATPA','option','LcVXm','\x20Hour(s)','Attempting\x20to\x20save\x20search:','tWjBR','xOFMW','Search\x20with\x20name\x20\x27','591465EbLOjK','forEach','remove','sTQwR','Error\x20removing\x20','DGpDq','filter','424128rFwOEO','oVCWJ','searchNames','mSWKt','searchName','KQaNV','text','\x20Min','[data-target=\x22','Retrieved\x20existing\x20searches:','bNyDX','\x20saved\x20successfully.','Info','appendChild','innerHTML','push','prototype','\x20removed\x20successfully.','FqEVJ','EYVrw','RDCPW','QgFWH','WkTeC','hVXeu','innerText','qAEms','\x27\x20not\x20found.','storage','3633679GPtvrQ','DADXm','4lPcsyp','map','13242gSYbiR','CRumk','change','object','addEventListener','Maximum\x20limit\x20of\x203\x20search\x20filters\x20reached.','CqYfy','gvlNB','Error','yDxjj','runtime','725SdLLST','lCRiH','\x20Second(s)','brXqy','509121IZquAR','log','nXUzO','ZRZeC','stringify','error','querySelector','trash','TQsxH','from','changedTelegram','floor','createdDate','value'];a0_0x4868=function(){return _0x4841e7;};return a0_0x4868();}function a0_0x4916(_0x2fc552,_0x5793ff){const _0x4868c9=a0_0x4868();return a0_0x4916=function(_0x491694,_0x41e577){_0x491694=_0x491694-0xb8;let _0x2446f1=_0x4868c9[_0x491694];return _0x2446f1;},a0_0x4916(_0x2fc552,_0x5793ff);}export function removeSearchFromStorage(_0x12a4d7,_0x1807bc){const _0x2fa3d7=a0_0x4916;chrome[_0x2fa3d7(0x128)][_0x2fa3d7(0xe1)][_0x2fa3d7(0xea)]({'searches':[]},function(_0x46d986){const _0x4315c7=_0x2fa3d7,_0x3d2175={'ZRZeC':function(_0x14d472){return _0x14d472();}};let _0x5808e3=_0x46d986[_0x4315c7(0xe2)]||[];_0x5808e3=_0x5808e3[_0x4315c7(0x10c)](_0x4eb494=>_0x4eb494[_0x4315c7(0x111)]!==_0x12a4d7),chrome[_0x4315c7(0x128)]['local']['set']({'searches':_0x5808e3},function(){const _0x5523da=_0x4315c7;if(chrome[_0x5523da(0xbb)][_0x5523da(0xf2)])console['error'](_0x5523da(0xf0)+_0x12a4d7+'\x27:',chrome['runtime'][_0x5523da(0xf2)]);else{console[_0x5523da(0xc1)]('Search\x20\x27'+_0x12a4d7+_0x5523da(0xed));if(_0x1807bc)_0x3d2175[_0x5523da(0xc3)](_0x1807bc);}});});}export function getStoredData(_0x1c7cc0){return new Promise(_0xb5116=>{const _0x2ed7ca=a0_0x4916,_0x4d8826={'ZYKwu':function(_0x3b2b01,_0x11eabf){return _0x3b2b01(_0x11eabf);}};chrome[_0x2ed7ca(0x128)]['local']['get'](_0x1c7cc0,function(_0x19bbe2){_0x4d8826['ZYKwu'](_0xb5116,_0x19bbe2);});});}export function updateAlertsFilter(){const _0x368cc4=a0_0x4916,_0x25a80={'lCRiH':_0x368cc4(0xff),'zPYcO':function(_0x14133d,_0x1ba615){return _0x14133d===_0x1ba615;},'qOghX':_0x368cc4(0x130),'xOFMW':function(_0x5d6318){return _0x5d6318();},'BwgJE':_0x368cc4(0xce),'RDCPW':'all','yDxjj':_0x368cc4(0xdc),'qWKav':_0x368cc4(0x12f),'IjnBA':_0x368cc4(0xf6),'qQcJx':_0x368cc4(0xe2)};chrome[_0x368cc4(0x128)][_0x368cc4(0xe1)][_0x368cc4(0xea)]([_0x25a80[_0x368cc4(0xe9)],_0x25a80['qQcJx']],_0x523166=>{const _0x141447=_0x368cc4,_0x2c5785={'rqONa':function(_0x176da4,_0x34b648){const _0x1f13da=a0_0x4916;return _0x25a80[_0x1f13da(0xee)](_0x176da4,_0x34b648);},'oVCWJ':_0x25a80['qOghX'],'cSgha':function(_0x3c6a52){const _0xdab96a=a0_0x4916;return _0x25a80[_0xdab96a(0x104)](_0x3c6a52);}},_0x4fa932=_0x523166[_0x141447(0xf6)]||[],_0x56795a=_0x523166['searches']||[],_0x4716f3=new Set();_0x4fa932['forEach'](_0x41bace=>{const _0x5a21f9=_0x141447;_0x41bace&&_0x2c5785[_0x5a21f9(0xde)](typeof _0x41bace,_0x2c5785[_0x5a21f9(0x10e)])&&(_0x41bace['name']&&_0x4716f3[_0x5a21f9(0xd8)](_0x41bace[_0x5a21f9(0xe6)]),Array[_0x5a21f9(0xda)](_0x41bace['searches'])&&_0x41bace[_0x5a21f9(0xe2)][_0x5a21f9(0x107)](_0x370613=>{const _0x1bb39c=_0x5a21f9;_0x370613&&_0x370613[_0x1bb39c(0x111)]&&_0x4716f3[_0x1bb39c(0xd8)](_0x370613[_0x1bb39c(0x111)]);}));}),_0x56795a['forEach'](_0x2c7761=>{const _0x4952c1=_0x141447;_0x2c7761&&_0x2c7761['searchName']&&_0x4716f3[_0x4952c1(0xd8)](_0x2c7761[_0x4952c1(0x111)]);});const _0x6e8a84=Array[_0x141447(0xc9)](_0x4716f3),_0x5a5327=document[_0x141447(0xd2)](_0x25a80[_0x141447(0xe5)]);_0x5a5327[_0x141447(0x11b)]='';const _0x55854d=document[_0x141447(0xe3)](_0x25a80[_0x141447(0xbd)]);_0x55854d['value']=_0x25a80[_0x141447(0x121)],_0x55854d['text']=_0x25a80[_0x141447(0xba)],_0x5a5327[_0x141447(0x11a)](_0x55854d),_0x6e8a84[_0x141447(0x107)](_0x44461c=>{const _0x163cd7=_0x141447,_0x1a9b60=document[_0x163cd7(0xe3)](_0x25a80[_0x163cd7(0xbd)]);_0x1a9b60[_0x163cd7(0xcd)]=_0x44461c,_0x1a9b60[_0x163cd7(0x113)]=_0x44461c,_0x5a5327[_0x163cd7(0x11a)](_0x1a9b60);}),_0x5a5327[_0x141447(0x131)](_0x25a80['qWKav'],()=>{const _0x434b1e=_0x141447,_0x369480=_0x5a5327[_0x434b1e(0xcd)];_0x2c5785['cSgha'](checkAlertsFilter);});});}export function clearLoadAlerts(){const _0x416864=a0_0x4916,_0x29df11={'sezzw':function(_0x422bef){return _0x422bef();},'emGax':function(_0x117e15){return _0x117e15();},'brXqy':function(_0x1ce2fa){return _0x1ce2fa();},'yOaJI':_0x416864(0xce),'MTHPN':function(_0x1b1c53,_0x34fadc){return _0x1b1c53===_0x34fadc;},'GUmem':function(_0x5a1ec6){return _0x5a1ec6();},'CqYfy':_0x416864(0xf6)},_0xb3b75a=document[_0x416864(0xd2)](_0x29df11[_0x416864(0xef)])['value'];_0x29df11['MTHPN'](_0xb3b75a,_0x416864(0xec))?(chrome['storage'][_0x416864(0xe1)][_0x416864(0xf1)]({'storedData':[]}),updateSearchNamesInStorage(),checkAlertsFilter(),_0x29df11[_0x416864(0xdb)](updateAlertsFilter)):chrome[_0x416864(0x128)][_0x416864(0xe1)][_0x416864(0xea)]([_0x29df11[_0x416864(0x133)]],function(_0x51c8b5){const _0x19619d=_0x416864,_0x1d7060=_0x51c8b5[_0x19619d(0xf6)]||[],_0x47dee6=_0x1d7060[_0x19619d(0x10c)](_0x1f946e=>_0x1f946e[_0x19619d(0xe6)]!==_0xb3b75a);_0x29df11[_0x19619d(0xf5)](updateSearchNamesInStorage),chrome[_0x19619d(0x128)][_0x19619d(0xe1)][_0x19619d(0xf1)]({'storedData':_0x47dee6}),_0x29df11[_0x19619d(0xfa)](checkAlertsFilter),_0x29df11[_0x19619d(0xbf)](updateAlertsFilter);});}export async function updateSearchNamesInStorage(){const _0x3a8b61=a0_0x4916,_0x2bd7bf={'rXpOo':function(_0x4e239e,_0x343c50){return _0x4e239e!==_0x343c50;},'hVXeu':function(_0x48cf04){return _0x48cf04();},'bNyDX':_0x3a8b61(0x10f),'nXUzO':_0x3a8b61(0xf6),'CXEqC':'searches'};chrome[_0x3a8b61(0x128)][_0x3a8b61(0xe1)][_0x3a8b61(0xea)]([_0x2bd7bf[_0x3a8b61(0x117)],_0x2bd7bf[_0x3a8b61(0xc2)],_0x2bd7bf['CXEqC']],function(_0x28bbde){const _0x2eb779=_0x3a8b61;let _0xff77ce=_0x28bbde[_0x2eb779(0x10f)]||[],_0x2c06a6=_0x28bbde[_0x2eb779(0xf6)]||[],_0x447fae=_0x28bbde[_0x2eb779(0xe2)]||[];const _0x38e746=_0x2c06a6[_0x2eb779(0x12c)](_0x4cbb8e=>_0x4cbb8e[_0x2eb779(0xe6)]),_0x4b3028=_0x447fae[_0x2eb779(0x12c)](_0x13a501=>_0x13a501[_0x2eb779(0x111)]),_0x3fcd4e=[...new Set([..._0x38e746,..._0x4b3028])];let _0xe027cf=_0x3fcd4e;_0x2bd7bf[_0x2eb779(0xd1)](JSON[_0x2eb779(0xc4)](_0xff77ce),JSON['stringify'](_0xe027cf))&&_0x2bd7bf[_0x2eb779(0x124)](checkAlertsFilter),chrome[_0x2eb779(0x128)][_0x2eb779(0xe1)][_0x2eb779(0xf1)]({'searchNames':_0xe027cf},function(){updateAlertsFilter();});});}export function saveTelegramIdToLocalStorage(_0x529f38){const _0x3fd851=a0_0x4916,_0x21fee2={'sTQwR':_0x3fd851(0xca),'SCsWA':function(_0x375f2d,_0x516168,_0x3c833f){return _0x375f2d(_0x516168,_0x3c833f);}};chrome[_0x3fd851(0x128)][_0x3fd851(0xe1)]['set']({'telegramId':_0x529f38},function(){const _0x58d3d9=_0x3fd851,_0x998303={'ufPbq':_0x21fee2[_0x58d3d9(0x109)]};_0x21fee2['SCsWA'](setTimeout,()=>{const _0x4eef15=_0x58d3d9;chrome[_0x4eef15(0xbb)][_0x4eef15(0xd5)]({'action':_0x998303['ufPbq']});},0x1f4);});}export function updateMinutes(){const _0x24dc17=a0_0x4916,_0xa47381={'LVECF':function(_0x282f7e,_0x5bf390){return _0x282f7e-_0x5bf390;},'TQsxH':function(_0x1d52e8,_0x2d1084){return _0x1d52e8*_0x2d1084;},'WkTeC':function(_0xa34008,_0x4b078b){return _0xa34008/_0x4b078b;},'mSWKt':function(_0x939e3d,_0x233445){return _0x939e3d+_0x233445;},'FQrfV':_0x24dc17(0xbe),'VRoOE':_0x24dc17(0x114),'tjgSd':_0x24dc17(0xd6)};chrome[_0x24dc17(0x128)]['local'][_0x24dc17(0xea)]([_0x24dc17(0xf6)],function(_0x529cfe){const _0xa57a38=_0x24dc17,_0x167288={'tbtls':function(_0x55f96c,_0x434ed9){return _0xa47381['LVECF'](_0x55f96c,_0x434ed9);},'gvlNB':function(_0x98873b,_0x4402ea){return _0x98873b/_0x4402ea;},'DADXm':function(_0xf7fa02,_0x19bad1){const _0x3779fd=a0_0x4916;return _0xa47381[_0x3779fd(0xc8)](_0xf7fa02,_0x19bad1);},'SUHfE':function(_0x468181,_0x1011fe){const _0x17b06c=a0_0x4916;return _0xa47381[_0x17b06c(0x123)](_0x468181,_0x1011fe);},'GMXHi':function(_0xd57c49,_0x4e2132){return _0xa47381['mSWKt'](_0xd57c49,_0x4e2132);},'CRumk':_0xa57a38(0x101),'ltMyq':function(_0x43581a,_0x3c4efa){const _0xde30c=_0xa57a38;return _0xa47381[_0xde30c(0x110)](_0x43581a,_0x3c4efa);},'JWUBx':_0xa47381[_0xa57a38(0xfb)],'KQaNV':function(_0x2dabf3,_0x38bb92){const _0x48b2e7=_0xa57a38;return _0xa47381[_0x48b2e7(0x110)](_0x2dabf3,_0x38bb92);},'IelTR':_0xa47381[_0xa57a38(0xfd)],'EYVrw':_0xa47381[_0xa57a38(0xdf)]},_0x5bc537=_0x529cfe[_0xa57a38(0xf6)]||[];_0x5bc537['forEach'](_0x252d0b=>{const _0x2d19e5=_0xa57a38,_0x579fd5=new Date(),_0x2a5f7a=new Date(_0x252d0b[_0x2d19e5(0xcc)]),_0x364ede=_0x167288['tbtls'](_0x579fd5,_0x2a5f7a),_0x3abc74=Math['floor'](_0x167288[_0x2d19e5(0xb8)](_0x364ede,_0x167288[_0x2d19e5(0x12a)](0x3e8,0x3c)));let _0x40e5e6;if(_0x3abc74>=0x3c){const _0x4545f8=Math[_0x2d19e5(0xcb)](_0x167288[_0x2d19e5(0xcf)](_0x3abc74,0x3c));_0x40e5e6=_0x167288[_0x2d19e5(0xeb)](_0x4545f8,_0x167288[_0x2d19e5(0x12e)]);}else{if(_0x3abc74<0x1){const _0x591afb=Math[_0x2d19e5(0xcb)](_0x167288[_0x2d19e5(0xcf)](_0x364ede,0x3e8));_0x40e5e6=_0x167288[_0x2d19e5(0xf9)](_0x591afb,_0x167288['JWUBx']);}else _0x40e5e6=_0x167288[_0x2d19e5(0x112)](_0x3abc74,_0x167288['IelTR']);}const _0x382203=document[_0x2d19e5(0xc6)](_0x2d19e5(0x115)+_0x252d0b['id']+'\x22]');_0x382203&&(_0x382203[_0x2d19e5(0xf7)][0x0][_0x2d19e5(0x125)]=_0x40e5e6,_0x382203['setAttribute'](_0x167288[_0x2d19e5(0x120)],_0x252d0b['id']));});});}export async function removeSearch(_0x185150){const _0x605a1f=a0_0x4916,_0x21d72e={'NhjoS':'Search\x20Filter\x20Deleted','VATPA':function(_0x4bb35b){return _0x4bb35b();},'rleJP':function(_0x4b54a6,_0x5975ca){return _0x4b54a6!==_0x5975ca;},'jrOCJ':'No\x20searches\x20found\x20in\x20storage.','dlVzL':_0x605a1f(0xe2)};chrome['storage'][_0x605a1f(0xe1)]['get']([_0x21d72e[_0x605a1f(0xd3)]],function(_0x542595){const _0x26ffcf=_0x605a1f,_0x82208={'ELVkJ':_0x21d72e['NhjoS'],'SaRSd':function(_0x2f3022){const _0x5921e8=a0_0x4916;return _0x21d72e[_0x5921e8(0xfe)](_0x2f3022);}};if(Object[_0x26ffcf(0x11d)][_0x26ffcf(0xd4)]['call'](_0x542595,_0x26ffcf(0xe2))){const _0x310992=_0x542595[_0x26ffcf(0xe2)],_0x6980d7=_0x310992[_0x26ffcf(0xf8)](_0x519f83=>_0x519f83[_0x26ffcf(0x111)]===_0x185150);_0x21d72e['rleJP'](_0x6980d7,-0x1)?(_0x310992[_0x26ffcf(0xe8)](_0x6980d7,0x1),chrome[_0x26ffcf(0x128)]['local']['set']({'searches':_0x310992},function(){const _0x172e5d=_0x26ffcf;a0_0x1ac32c[_0x172e5d(0xc7)](_0x172e5d(0x105)+_0x185150+'\x27\x20removed\x20successfully.',_0x82208['ELVkJ'],{'displayDuration':0xbb8}),_0x82208['SaRSd'](updateSearchNamesInStorage),changedSearches();})):console[_0x26ffcf(0xc1)]('Search\x20with\x20name\x20\x27'+_0x185150+_0x26ffcf(0x127));}else console[_0x26ffcf(0xc1)](_0x21d72e[_0x26ffcf(0xf4)]);});}export function updateBlacklistInStorage(_0x3497ac){const _0x252e50=a0_0x4916;chrome[_0x252e50(0x128)][_0x252e50(0xe1)]['set']({'blacklist':_0x3497ac},function(){});}