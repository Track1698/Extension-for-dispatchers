const a0_0x2527da=a0_0x5656;(function(_0x55ca91,_0x5e5c52){const _0x174154=a0_0x5656,_0xec4d75=_0x55ca91();while(!![]){try{const _0x3f9edd=parseInt(_0x174154(0xca))/0x1+parseInt(_0x174154(0x13c))/0x2*(parseInt(_0x174154(0x124))/0x3)+-parseInt(_0x174154(0x115))/0x4+parseInt(_0x174154(0x128))/0x5+parseInt(_0x174154(0xc5))/0x6+parseInt(_0x174154(0x129))/0x7+parseInt(_0x174154(0xff))/0x8*(-parseInt(_0x174154(0x110))/0x9);if(_0x3f9edd===_0x5e5c52)break;else _0xec4d75['push'](_0xec4d75['shift']());}catch(_0x823b9f){_0xec4d75['push'](_0xec4d75['shift']());}}}(a0_0x573d,0x5a1df));function a0_0x573d(){const _0x371434=['Nxrtk','tTzCI','RvBzU','split','FcmSP','verification-input','HVhqw','eRPuz','hbWKc','Telegram\x20connected\x20successfully!','4255716MMLzlo','JcJKO','ArrowLeft','telegramPopup','message','343625jmOUgt','warning','addEventListener','ChrUe','Telegram\x20connection\x20failed.','removeItem','children','/api/autocomplete2','jfgrV','pZHzN','zRuvf','kXgbz','items','GujcC','BpywF','Please\x20reload\x20CentralDispatch\x20or\x20login\x20again','seIUT','dPVaF','yhufC','from','QurNY','ZzwEk','map','nTINF','Logged\x20out\x20successfully.','ZyVID','Backspace','log','click','/api/autocomplete','value','key','bWkYm','vOEmo','Error','EcZap','Error\x20adding\x20item\x20to\x20blacklist','nDWgk','rQMCL','error','New\x20password\x20and\x20confirm\x20password\x20do\x20not\x20match','kanCS','success','/api/changepassword','PcYcX','An\x20error\x20occurred\x20while\x20changing\x20the\x20password.','GAqGO','address','authToken:\x20','TytRm','controlElement','clipboardData','IQYoI','8RKNZxZ','length','xxVcF','smxtx','An\x20unexpected\x20error\x20occurred.\x20Please\x20try\x20again\x20later.','storage','flex','blacklist','Error\x20fetching\x20suggestions:','nPsmH','preventDefault','test','NqWSr','input','local','NwWrh','getElementById','13695867AvCcuo','stringify','info','email','HcQLC','1560804AqauMz','new-password','JjhDN','khOCu','Password\x20changed\x20successfully','KfomB','text','tVmKm','json','XjKyC','charAt','join','mwndW','findIndex','POST','1523262rgMmOg','User\x20not\x20logged\x20in\x20or\x20missing\x20credentials.','ZojKu','focus','1885220SXrvqG','2403618LbSzTB','application/json','/api/telegramcode','telegramId','rIMDy','wnYdF','ACjUf','authToken','confirm-password','MWeok','/api/updateblacklist','VcpmW','DQEYq','bTjKQ','Please\x20enter\x20a\x20valid\x20numeric\x20code.','yFYUm','OgUIR','tVNFh','forEach','2yRSrlk','min','QhWCR'];a0_0x573d=function(){return _0x371434;};return a0_0x573d();}import a0_0x4bf3b5 from'./alerts.js';import{saveToLocal}from'./storage.js';import{backendAddress}from'./main.js';import{getAuthToken,getEmail,getLoginKey,getCompanyId}from'./state.js';import{makeItDisappear,makeItAppear}from'./utils.js';export function logout(){const _0x52f9b4=a0_0x5656,_0x26f07d={'TdrhQ':'authToken','DQEYq':_0x52f9b4(0x113),'smxtx':'companyId','tVmKm':_0x52f9b4(0x106)};chrome[_0x52f9b4(0x104)][_0x52f9b4(0x10d)]['remove']([_0x26f07d['TdrhQ'],_0x26f07d[_0x52f9b4(0x135)],_0x26f07d[_0x52f9b4(0x102)],_0x26f07d[_0x52f9b4(0x11c)],'searches'],()=>{const _0x332baa=_0x52f9b4;a0_0x4bf3b5[_0x332baa(0x112)](_0x332baa(0xe2));});}export async function sendTelegramCodeToBackend(_0x37ba46){const _0x5cc6bd=a0_0x5656,_0x2dfd11={'CWewh':function(_0x946fd5){return _0x946fd5();},'TytRm':function(_0x4a712f){return _0x4a712f();},'NwWrh':function(_0x39575d,_0x2385d2,_0xa839bd){return _0x39575d(_0x2385d2,_0xa839bd);},'vOEmo':_0x5cc6bd(0x123),'bWkYm':'application/json','QruBv':_0x5cc6bd(0xc4)};try{const _0x510498=_0x2dfd11['CWewh'](getEmail),_0x2b5605=_0x2dfd11[_0x5cc6bd(0xfb)](getLoginKey),_0x2ce48a=await _0x2dfd11[_0x5cc6bd(0x10e)](fetch,backendAddress+_0x5cc6bd(0x12b),{'method':_0x2dfd11[_0x5cc6bd(0xeb)],'headers':{'Content-Type':_0x2dfd11[_0x5cc6bd(0xea)]},'body':JSON[_0x5cc6bd(0x111)]({'email':_0x510498,'code':_0x37ba46,'loginKey':_0x2b5605})}),_0x5226a8=await _0x2ce48a['json']();if(_0x5226a8['success'])_0x2dfd11['NwWrh'](saveToLocal,_0x5cc6bd(0x12c),_0x5226a8['userId']),a0_0x4bf3b5[_0x5cc6bd(0xf4)](_0x2dfd11['QruBv']);else throw new Error(_0x5226a8[_0x5cc6bd(0xc9)]||_0x5cc6bd(0xce));}catch(_0x40cba4){a0_0x4bf3b5[_0x5cc6bd(0xf1)](_0x40cba4['message']);}}export function showTelegramPopup(){const _0x3aa37d=a0_0x5656,_0x59aa06={'rIMDy':function(_0x30678f,_0x5bf98a){return _0x30678f===_0x5bf98a;},'phDaU':_0x3aa37d(0xe4),'axfyX':function(_0x22df84,_0x377ddf){return _0x22df84===_0x377ddf;},'NqWSr':function(_0x514526,_0x3c2018){return _0x514526>_0x3c2018;},'cZFgz':function(_0x5e511c,_0x3534bf){return _0x5e511c-_0x3534bf;},'EcZap':function(_0x25115c,_0x7b5357){return _0x25115c-_0x7b5357;},'JcJKO':function(_0x372732,_0xb178b1){return _0x372732<_0xb178b1;},'khOCu':function(_0x466359,_0x5173cc){return _0x466359+_0x5173cc;},'jfgrV':function(_0x5dfbee,_0x3724cc){return _0x5dfbee+_0x3724cc;},'pZHzN':_0x3aa37d(0xc7),'FcmSP':function(_0x447539,_0x1ce77c){return _0x447539-_0x1ce77c;},'kXgbz':function(_0x5baf09,_0x76d5f4){return _0x5baf09-_0x76d5f4;},'HVhqw':function(_0x5ce963){return _0x5ce963();},'nRzyn':function(_0x3f9d91,_0x4e9070){return _0x3f9d91<_0x4e9070;},'RvBzU':function(_0x5dd539,_0x5250b1){return _0x5dd539+_0x5250b1;},'HcQLC':_0x3aa37d(0x11b),'KfomB':function(_0x36651c){return _0x36651c();},'PcYcX':function(_0x2c0850,_0x5e37e1){return _0x2c0850!==_0x5e37e1;},'QurNY':function(_0x3616f2,_0x58b96f){return _0x3616f2+_0x58b96f;},'JjhDN':function(_0x2f7246,_0x25d690){return _0x2f7246+_0x25d690;},'nTINF':function(_0x558852,_0x190a90){return _0x558852+_0x190a90;},'MWeok':function(_0x35038c,_0x218dcf){return _0x35038c-_0x218dcf;},'ACjUf':function(_0xfbdbf0,_0x2ddb7e){return _0xfbdbf0!==_0x2ddb7e;},'ZojKu':'keydown','Xebwx':_0x3aa37d(0x10c),'GAqGO':'paste','BsupX':'focus','PGvBo':_0x3aa37d(0xc8),'zRuvf':_0x3aa37d(0x105),'kanCS':_0x3aa37d(0xe6)},_0x40f5b7=document['getElementById'](_0x59aa06['PGvBo']),_0x2d0392=document[_0x3aa37d(0x10f)]('telegramVerifyButton');_0x40f5b7['style']['display']=_0x59aa06[_0x3aa37d(0xd4)];const _0x689418=Array[_0x3aa37d(0xdd)](document['getElementById'](_0x3aa37d(0xc0))[_0x3aa37d(0xd0)]);function _0x5a8f2f(){const _0x2911f1=_0x3aa37d;return _0x689418[_0x2911f1(0x122)](_0xfb2c4=>_0xfb2c4[_0x2911f1(0xe8)]==='');}_0x689418[_0x3aa37d(0x13b)]((_0x19fea6,_0x46e268)=>{const _0x3d4779=_0x3aa37d,_0x2d36a1={'sicJA':function(_0xf546d6,_0x5993dc){const _0x219db9=a0_0x5656;return _0x59aa06[_0x219db9(0x12f)](_0xf546d6,_0x5993dc);},'eRPuz':function(_0x24ce22,_0x142b3d){const _0x1ba576=a0_0x5656;return _0x59aa06[_0x1ba576(0x10b)](_0x24ce22,_0x142b3d);}};_0x19fea6[_0x3d4779(0xcc)](_0x59aa06[_0x3d4779(0x126)],_0xe798bf=>{const _0x308d90=_0x3d4779;if(_0x59aa06[_0x308d90(0x12d)](_0xe798bf[_0x308d90(0xe9)],_0x59aa06['phDaU'])){_0x59aa06['axfyX'](_0x19fea6[_0x308d90(0xe8)],'')&&_0x59aa06[_0x308d90(0x10b)](_0x46e268,0x0)&&(_0x689418[_0x59aa06['cZFgz'](_0x46e268,0x1)]['value']='',_0x689418[_0x59aa06[_0x308d90(0xed)](_0x46e268,0x1)][_0x308d90(0x127)]());for(let _0x25af35=_0x46e268;_0x59aa06[_0x308d90(0xc6)](_0x25af35,_0x689418[_0x308d90(0x100)]);_0x25af35++){let _0x392d6c=_0x689418[_0x59aa06[_0x308d90(0x118)](_0x25af35,0x1)]?_0x689418[_0x59aa06[_0x308d90(0xd2)](_0x25af35,0x1)][_0x308d90(0xe8)]:'';_0x689418[_0x25af35]['setRangeText'](_0x392d6c,0x0,0x1,'start');}}_0x59aa06[_0x308d90(0x12d)](_0xe798bf['key'],_0x59aa06[_0x308d90(0xd3)])&&_0x59aa06['NqWSr'](_0x46e268,0x0)&&_0x689418[_0x59aa06[_0x308d90(0x143)](_0x46e268,0x1)][_0x308d90(0x127)](),_0x59aa06[_0x308d90(0x12d)](_0xe798bf['key'],'ArrowRight')&&_0x59aa06[_0x308d90(0xc6)](_0x46e268,_0x59aa06[_0x308d90(0xd5)](_0x689418[_0x308d90(0x100)],0x1))&&_0x689418[_0x46e268+0x1][_0x308d90(0x127)]();}),_0x19fea6[_0x3d4779(0xcc)](_0x59aa06['Xebwx'],_0x2424aa=>{const _0x834852=_0x3d4779;_0x19fea6[_0x834852(0xe8)]='';const _0x3b36e6=_0x59aa06[_0x834852(0xc1)](_0x5a8f2f);_0x689418[_0x3b36e6]['value']=_0x2424aa['data'];if(_0x59aa06['nRzyn'](_0x3b36e6+0x1,_0x689418['length']))_0x689418[_0x59aa06[_0x834852(0x141)](_0x3b36e6,0x1)]['focus']();}),_0x19fea6[_0x3d4779(0xcc)](_0x59aa06[_0x3d4779(0xf8)],_0x3b88b6=>{const _0x2b9470=_0x3d4779;_0x3b88b6[_0x2b9470(0x109)]();const _0xf5c7e6=(event[_0x2b9470(0xfd)]||window[_0x2b9470(0xfd)])['getData'](_0x59aa06[_0x2b9470(0x114)]),_0x1ffc9a=_0x59aa06[_0x2b9470(0x11a)](_0x5a8f2f),_0x52bec6=_0x59aa06[_0x2b9470(0xf6)](_0x1ffc9a,-0x1)?Math[_0x2b9470(0x13d)](_0x46e268,_0x1ffc9a):_0x46e268;for(let _0x373d1a=0x0;_0x59aa06[_0x2b9470(0xde)](_0x52bec6,_0x373d1a)<_0x689418[_0x2b9470(0x100)]&&_0x59aa06['JcJKO'](_0x373d1a,_0xf5c7e6[_0x2b9470(0x100)]);_0x373d1a++){_0x689418[_0x59aa06[_0x2b9470(0x117)](_0x52bec6,_0x373d1a)][_0x2b9470(0xe8)]=_0xf5c7e6[_0x2b9470(0x11f)](_0x373d1a);}_0x689418[Math[_0x2b9470(0x13d)](_0x59aa06[_0x2b9470(0xe1)](_0x52bec6,_0xf5c7e6[_0x2b9470(0x100)]),_0x59aa06[_0x2b9470(0x132)](_0x689418['length'],0x1))][_0x2b9470(0x127)]();}),_0x19fea6[_0x3d4779(0xcc)](_0x59aa06['BsupX'],()=>{const _0x3d0148=_0x3d4779,_0x1f39d3=_0x5a8f2f();if(_0x2d36a1['sicJA'](_0x1f39d3,-0x1)&&_0x2d36a1[_0x3d0148(0xc2)](_0x46e268,_0x1f39d3))_0x689418[_0x1f39d3][_0x3d0148(0x127)]();});}),_0x2d0392[_0x3aa37d(0xcc)](_0x59aa06[_0x3aa37d(0xf3)],function(){const _0x5cd8e1=_0x3aa37d,_0x2efbc6=_0x689418[_0x5cd8e1(0xe0)](_0x1af2c2=>_0x1af2c2['value'])[_0x5cd8e1(0x120)]('');/^\d+$/[_0x5cd8e1(0x10a)](_0x2efbc6)?sendTelegramCodeToBackend(_0x2efbc6):a0_0x4bf3b5[_0x5cd8e1(0xcb)](_0x5cd8e1(0x137));});}export async function fetchSuggestions(_0x27d553){const _0x30953f=a0_0x5656,_0x2c6fa0={'seIUT':'controlElement','oTBhP':function(_0x126562){return _0x126562();},'QhWCR':function(_0x33f247,_0x28c041,_0xbded27){return _0x33f247(_0x28c041,_0xbded27);},'nPsmH':_0x30953f(0x107),'wnYdF':_0x30953f(0xd9),'ZzwEk':_0x30953f(0xec),'rQMCL':_0x30953f(0x130),'APskM':function(_0xb18fbe,_0x5eb3c9){return _0xb18fbe(_0x5eb3c9);}},_0x5b6799=document[_0x30953f(0x10f)]('searchFormElement'),_0x3ab393=document['getElementById'](_0x2c6fa0[_0x30953f(0xda)]),_0x52b1aa=_0x2c6fa0['oTBhP'](getAuthToken);try{const _0x1e11a5=backendAddress+_0x30953f(0xe7),_0x34b3b8={'apiKey':_0x52b1aa,'term':_0x27d553};console[_0x30953f(0xe5)](_0x30953f(0xfa),_0x52b1aa);const _0x11c15a=await _0x2c6fa0[_0x30953f(0x13e)](fetch,_0x1e11a5,{'method':_0x30953f(0x123),'headers':{'Content-Type':_0x30953f(0x12a)},'body':JSON[_0x30953f(0x111)](_0x34b3b8)}),_0x3794d0=await _0x11c15a[_0x30953f(0x11d)]();return _0x3794d0[_0x30953f(0xd6)];}catch(_0x711375){return console['error'](_0x2c6fa0[_0x30953f(0x108)],_0x711375),a0_0x4bf3b5[_0x30953f(0xf1)](_0x2c6fa0[_0x30953f(0x12e)],_0x2c6fa0[_0x30953f(0xdf)]),localStorage['removeItem'](_0x2c6fa0[_0x30953f(0xf0)]),_0x2c6fa0['APskM'](makeItDisappear,_0x5b6799),_0x2c6fa0['APskM'](makeItAppear,_0x3ab393),[];}}function a0_0x5656(_0x429f3d,_0x5415d3){const _0x573d3b=a0_0x573d();return a0_0x5656=function(_0x565619,_0x421fe2){_0x565619=_0x565619-0xc0;let _0x56d6c0=_0x573d3b[_0x565619];return _0x56d6c0;},a0_0x5656(_0x429f3d,_0x5415d3);}export async function fetchSuggestions2(_0x4cd142){const _0x159e74=a0_0x5656,_0x179fce={'ChrUe':'searchFormElement','tTzCI':_0x159e74(0xfc),'OgUIR':function(_0x5d088c,_0x1459c3,_0x5528f3){return _0x5d088c(_0x1459c3,_0x5528f3);},'IQYoI':_0x159e74(0x12a),'xxVcF':'3|2|4|5|1|0','WBnrT':function(_0x5eae6c,_0xa168c5){return _0x5eae6c(_0xa168c5);},'xSHcV':'Please\x20reload\x20CentralDispatch\x20or\x20login\x20again','TYkTL':_0x159e74(0xec),'bTjKQ':'Error\x20fetching\x20suggestions:'},_0x3936ee=document[_0x159e74(0x10f)](_0x179fce[_0x159e74(0xcd)]),_0x4453e0=document[_0x159e74(0x10f)](_0x179fce[_0x159e74(0x140)]),_0x295896=getAuthToken();try{const _0x3ce2a6=backendAddress+_0x159e74(0xd1),_0x54ac25={'apiKey':_0x295896,'term':_0x4cd142},_0x4af059=await _0x179fce[_0x159e74(0x139)](fetch,_0x3ce2a6,{'method':_0x159e74(0x123),'headers':{'Content-Type':_0x179fce[_0x159e74(0xfe)]},'body':JSON[_0x159e74(0x111)](_0x54ac25)}),_0x31718d=await _0x4af059[_0x159e74(0x11d)]();return _0x31718d;}catch(_0x468c09){const _0x54505b=_0x179fce[_0x159e74(0x101)][_0x159e74(0x142)]('|');let _0x3216d0=0x0;while(!![]){switch(_0x54505b[_0x3216d0++]){case'0':return[];case'1':_0x179fce['WBnrT'](makeItAppear,_0x4453e0);continue;case'2':a0_0x4bf3b5[_0x159e74(0xf1)](_0x179fce['xSHcV'],_0x179fce['TYkTL']);continue;case'3':console[_0x159e74(0xf1)](_0x179fce[_0x159e74(0x136)],_0x468c09);continue;case'4':localStorage[_0x159e74(0xcf)](_0x159e74(0x130));continue;case'5':makeItDisappear(_0x3936ee);continue;}break;}}}export async function updateBlacklistInDatabase(_0x31954c,_0x3d79ac){const _0x36cb41=a0_0x5656,_0x54693f={'mwndW':function(_0x64e5f7){return _0x64e5f7();},'VcpmW':function(_0x1730a5,_0x357ee1,_0x333835){return _0x1730a5(_0x357ee1,_0x333835);},'yFYUm':'application/json','BpywF':_0x36cb41(0x107),'GujcC':_0x36cb41(0xee),'ZyVID':_0x36cb41(0xec)};try{const _0x822ee5=_0x54693f[_0x36cb41(0x121)](getEmail),_0x2920ab=getCompanyId(),_0x371c6e=backendAddress+_0x36cb41(0x133),_0x11a45e={'companyId':_0x2920ab,'email':_0x822ee5,'name':_0x31954c['name'],'address':_0x31954c[_0x36cb41(0xf9)],'action':_0x3d79ac},_0x1fea04=await _0x54693f[_0x36cb41(0x134)](fetch,_0x371c6e,{'method':_0x36cb41(0x123),'headers':{'Content-Type':_0x54693f[_0x36cb41(0x138)]},'body':JSON[_0x36cb41(0x111)](_0x11a45e)}),_0x31d612=await _0x1fea04[_0x36cb41(0x11d)]();return _0x31d612['blacklist'];}catch(_0x3865ea){return console[_0x36cb41(0xf1)](_0x54693f[_0x36cb41(0xd8)],_0x3865ea),a0_0x4bf3b5[_0x36cb41(0xf1)](_0x54693f[_0x36cb41(0xd7)],_0x54693f[_0x36cb41(0xe3)]),[];}}document['getElementById']('change-password-form')[a0_0x2527da(0xcc)]('submit',async _0x14a4cf=>{const _0x23b4a2=a0_0x2527da,_0x1928bc={'cjSOc':'change-password-form','Nxrtk':'current-password','hbWKc':_0x23b4a2(0x116),'dPVaF':_0x23b4a2(0x131),'ObnNg':function(_0x5a8702,_0x28834f){return _0x5a8702!==_0x28834f;},'nDWgk':_0x23b4a2(0xf2),'rDkTW':function(_0x304bf2){return _0x304bf2();},'XjKyC':function(_0x4c4582,_0x55d5d5){return _0x4c4582||_0x55d5d5;},'wqpEl':_0x23b4a2(0x125),'yhufC':_0x23b4a2(0x123),'HbvnT':'application/json','IBdTZ':_0x23b4a2(0x119),'tVNFh':'Error\x20changing\x20password:'};_0x14a4cf[_0x23b4a2(0x109)]();const _0x553fbd=document[_0x23b4a2(0x10f)](_0x1928bc['cjSOc']),_0x27ed63=document[_0x23b4a2(0x10f)](_0x1928bc[_0x23b4a2(0x13f)])[_0x23b4a2(0xe8)],_0x1ae08e=document[_0x23b4a2(0x10f)](_0x1928bc[_0x23b4a2(0xc3)])[_0x23b4a2(0xe8)],_0x34643d=document[_0x23b4a2(0x10f)](_0x1928bc[_0x23b4a2(0xdb)])[_0x23b4a2(0xe8)];if(_0x1928bc['ObnNg'](_0x1ae08e,_0x34643d)){a0_0x4bf3b5[_0x23b4a2(0xcb)](_0x1928bc[_0x23b4a2(0xef)]);return;}const _0x17690c=_0x1928bc['rDkTW'](getEmail),_0x17734f=getLoginKey();if(_0x1928bc[_0x23b4a2(0x11e)](!_0x17690c,!_0x17734f)){a0_0x4bf3b5[_0x23b4a2(0xcb)](_0x1928bc['wqpEl']);return;}try{const _0xade490=await fetch(backendAddress+_0x23b4a2(0xf5),{'method':_0x1928bc[_0x23b4a2(0xdc)],'headers':{'Content-Type':_0x1928bc['HbvnT']},'body':JSON[_0x23b4a2(0x111)]({'email':_0x17690c,'loginKey':_0x17734f,'oldPassword':_0x27ed63,'newPassword':_0x1ae08e})}),_0x5bd7a0=await _0xade490[_0x23b4a2(0x11d)]();_0xade490['ok']?(a0_0x4bf3b5['success'](_0x1928bc['IBdTZ']),_0x553fbd['reset']()):a0_0x4bf3b5[_0x23b4a2(0xf1)](_0x5bd7a0['error']||_0x23b4a2(0xf7));}catch(_0x28f830){console[_0x23b4a2(0xf1)](_0x1928bc[_0x23b4a2(0x13a)],_0x28f830),a0_0x4bf3b5[_0x23b4a2(0xf1)](_0x23b4a2(0x103));}});