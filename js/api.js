const a0_0x88ee64=a0_0x1c42;(function(_0x2ffcd0,_0x4704f9){const _0x352c88=a0_0x1c42,_0x2e01af=_0x2ffcd0();while(!![]){try{const _0x57dc64=-parseInt(_0x352c88(0x183))/0x1*(-parseInt(_0x352c88(0x1db))/0x2)+parseInt(_0x352c88(0x194))/0x3+-parseInt(_0x352c88(0x1d1))/0x4+-parseInt(_0x352c88(0x1de))/0x5+-parseInt(_0x352c88(0x1ad))/0x6+parseInt(_0x352c88(0x1e4))/0x7*(parseInt(_0x352c88(0x1ef))/0x8)+-parseInt(_0x352c88(0x1c4))/0x9*(-parseInt(_0x352c88(0x1bc))/0xa);if(_0x57dc64===_0x4704f9)break;else _0x2e01af['push'](_0x2e01af['shift']());}catch(_0x342830){_0x2e01af['push'](_0x2e01af['shift']());}}}(a0_0x1632,0x48836));import a0_0x402589 from'./alerts.js';import{saveToLocal}from'./storage.js';import{backendAddress}from'./main.js';import{getAuthToken,getEmail,getLoginKey,getCompanyId}from'./state.js';import{makeItDisappear,makeItAppear}from'./utils.js';export function logout(){const _0x24882d=a0_0x1c42,_0x362b28={'HjRYQ':'authToken','GSnAY':_0x24882d(0x18f)};chrome['storage'][_0x24882d(0x1a2)][_0x24882d(0x198)]([_0x362b28[_0x24882d(0x1f8)],_0x362b28['GSnAY'],'companyId',_0x24882d(0x19c),'searches'],()=>{const _0xf5fef4=_0x24882d;a0_0x402589['info'](_0xf5fef4(0x1cd));});}function a0_0x1632(){const _0x2f475f=['uiXFM','IeVCy','confirm-password','dJADq','ZNCNY','local','Please\x20reload\x20CentralDispatch\x20or\x20login\x20again','/api/changepassword','reset','children','/api/autocomplete2','WIVIh','text','dCYFz','aRuLV','zEuRi','462132jZjrEi','PpGZp','success','Password\x20changed\x20successfully','forEach','AZFgT','JvKZv','elaFf','zodJX','fZjrs','yRGYV','display','flex','idwuq','gGYBg','20380lMkrhG','/api/telegramcode','name','/api/updateblacklist','application/json','telegramVerifyButton','from','PQYmi','909qvKlVY','RQGtU','YKLhu','qzoZG','items','MTJzT','sFvgo','RhvsU','tnpzN','Logged\x20out\x20successfully.','error','CEtyN','ryQff','1159508YhXtfd','split','ryAwO','current-password','address','KZAtF','WKJFQ','paste','POST','Error','130OaZRDq','tzDfh','Backspace','1886390uYKKmY','controlElement','userId','hwMCf','PFNYR','CUwKd','20783lfpTZb','searchFormElement','Paqfb','LazrP','test','VIPIZ','/api/autocomplete','new-password','USWMs','verification-input','start','1288vSCwSP','data','xuvNT','input','nlwfj','DbSjZ','json','warning','log','HjRYQ','UhiSv','authToken','style','ZGXBX','hcEUo','getElementById','removeItem','keydown','RAdCC','KkgfM','telegramPopup','abqJY','qaRnm','stringify','join','rjdEm','HLsDj','Error\x20adding\x20item\x20to\x20blacklist','zsskx','Error\x20fetching\x20suggestions:','fNfGy','yRMnH','kESnZ','gGygZ','ZVzJL','addEventListener','AivYR','uYjkh','UpGvr','EjeWj','charAt','length','DUOIs','value','An\x20unexpected\x20error\x20occurred.\x20Please\x20try\x20again\x20later.','3975YaFjgq','UnQyp','NObyH','authToken:\x20','preventDefault','min','focus','ArrowRight','bhTYw','4|3|2|1|5|0','change-password-form','message','email','gEwde','clipboardData','tLwmw','key','296907sxAlrj','NnnPh','BTXuG','setRangeText','remove','JLjUn','getData','KMMjM','blacklist'];a0_0x1632=function(){return _0x2f475f;};return a0_0x1632();}export async function sendTelegramCodeToBackend(_0x330ac8){const _0x267570=a0_0x1c42,_0x1d89a0={'VIPIZ':function(_0x19427b){return _0x19427b();},'hcEUo':function(_0x3881d1,_0x5a172b,_0x2d6b33){return _0x3881d1(_0x5a172b,_0x2d6b33);},'KZAtF':'POST','dCYFz':_0x267570(0x1c0),'HLsDj':'telegramId','LazrP':'Telegram\x20connected\x20successfully!','IeVCy':'Telegram\x20connection\x20failed.'};try{const _0x42873e=getEmail(),_0xc0f04=_0x1d89a0[_0x267570(0x1e9)](getLoginKey),_0x3ed4ba=await _0x1d89a0['hcEUo'](fetch,backendAddress+_0x267570(0x1bd),{'method':_0x1d89a0[_0x267570(0x1d6)],'headers':{'Content-Type':_0x1d89a0[_0x267570(0x1aa)]},'body':JSON[_0x267570(0x206)]({'email':_0x42873e,'code':_0x330ac8,'loginKey':_0xc0f04})}),_0x1c50e9=await _0x3ed4ba[_0x267570(0x1f5)]();if(_0x1c50e9['success'])_0x1d89a0[_0x267570(0x1fd)](saveToLocal,_0x1d89a0[_0x267570(0x170)],_0x1c50e9[_0x267570(0x1e0)]),a0_0x402589[_0x267570(0x1af)](_0x1d89a0[_0x267570(0x1e7)]);else throw new Error(_0x1c50e9['message']||_0x1d89a0[_0x267570(0x19e)]);}catch(_0xa89ef9){a0_0x402589[_0x267570(0x1ce)](_0xa89ef9[_0x267570(0x18e)]);}}export function showTelegramPopup(){const _0x36927d=a0_0x1c42,_0x14bcdc={'xuvNT':function(_0x859e2){return _0x859e2();},'PFNYR':function(_0x221173,_0x39dea1){return _0x221173<_0x39dea1;},'uYjkh':function(_0x272550,_0x519ffa){return _0x272550+_0x519ffa;},'qzoZG':function(_0xdfdc3f){return _0xdfdc3f();},'RQGtU':function(_0x1f0062,_0x456153){return _0x1f0062!==_0x456153;},'fZjrs':function(_0x7470d9,_0x3a5535){return _0x7470d9>_0x3a5535;},'GHrIX':function(_0x3a4464,_0x2ae3ce){return _0x3a4464===_0x2ae3ce;},'gGYBg':_0x36927d(0x1dd),'aRuLV':function(_0x301c14,_0x30deb0){return _0x301c14-_0x30deb0;},'ZVzJL':function(_0x177d88,_0x38860d){return _0x177d88+_0x38860d;},'USWMs':_0x36927d(0x1ee),'WxhKv':function(_0x4f0b8b,_0x163c07){return _0x4f0b8b===_0x163c07;},'XMGQa':_0x36927d(0x18a),'yRMnH':function(_0x24267b,_0xb257a7){return _0x24267b!==_0xb257a7;},'AivYR':function(_0x5428ff,_0x2446c3){return _0x5428ff<_0x2446c3;},'AZFgT':_0x36927d(0x200),'WKJFQ':_0x36927d(0x1f2),'gGygZ':_0x36927d(0x1d8),'RAdCC':_0x36927d(0x189),'bhTYw':function(_0x4a8e7f,_0x1faa66){return _0x4a8e7f(_0x1faa66);},'ryQff':'Please\x20enter\x20a\x20valid\x20numeric\x20code.','bdpub':_0x36927d(0x203),'NObyH':_0x36927d(0x1c1),'KMMjM':_0x36927d(0x1ed),'MTJzT':'click'},_0xf9b606=document[_0x36927d(0x1fe)](_0x14bcdc['bdpub']),_0x1428a6=document[_0x36927d(0x1fe)](_0x14bcdc[_0x36927d(0x185)]);_0xf9b606[_0x36927d(0x1fb)][_0x36927d(0x1b8)]=_0x36927d(0x1b9);const _0x36bafc=Array[_0x36927d(0x1c2)](document[_0x36927d(0x1fe)](_0x14bcdc[_0x36927d(0x19b)])[_0x36927d(0x1a6)]);function _0x2aaa69(){const _0x593d07=_0x36927d;return _0x36bafc['findIndex'](_0x30b712=>_0x30b712[_0x593d07(0x181)]==='');}_0x36bafc[_0x36927d(0x1b1)]((_0x1860fc,_0x32133a)=>{const _0x1b08f7=_0x36927d,_0x3d17c2={'hwMCf':function(_0x513a4e,_0x59d128){return _0x14bcdc['GHrIX'](_0x513a4e,_0x59d128);},'ZNCNY':_0x14bcdc[_0x1b08f7(0x1bb)],'abqJY':function(_0x59974c,_0x3ed095){return _0x14bcdc['fZjrs'](_0x59974c,_0x3ed095);},'JLjUn':function(_0x3be12f,_0x1012a9){const _0x11fd06=_0x1b08f7;return _0x14bcdc[_0x11fd06(0x1ab)](_0x3be12f,_0x1012a9);},'ZGXBX':function(_0xdd3539,_0x4aa792){const _0x405d0d=_0x1b08f7;return _0x14bcdc[_0x405d0d(0x1ab)](_0xdd3539,_0x4aa792);},'sFvgo':function(_0x2d85a2,_0x12767a){const _0x2203d6=_0x1b08f7;return _0x14bcdc[_0x2203d6(0x178)](_0x2d85a2,_0x12767a);},'NZPyV':_0x14bcdc[_0x1b08f7(0x1ec)],'DoaiO':function(_0x29b344,_0x33da44){return _0x14bcdc['GHrIX'](_0x29b344,_0x33da44);},'sMorE':'ArrowLeft','YKLhu':function(_0x47bee8,_0x54a8bc){return _0x14bcdc['WxhKv'](_0x47bee8,_0x54a8bc);},'UnQyp':_0x14bcdc['XMGQa'],'kESnZ':function(_0x3fd622,_0x2d9c63){return _0x3fd622<_0x2d9c63;},'Paqfb':function(_0x3ba18a){const _0x39d30f=_0x1b08f7;return _0x14bcdc[_0x39d30f(0x1f1)](_0x3ba18a);},'qaRnm':function(_0x49cf9e,_0x27709c){const _0x54abe8=_0x1b08f7;return _0x14bcdc[_0x54abe8(0x175)](_0x49cf9e,_0x27709c);},'LdUqE':function(_0x192994,_0x2b77c7){const _0x49cdba=_0x1b08f7;return _0x14bcdc[_0x49cdba(0x17a)](_0x192994,_0x2b77c7);},'Kpxff':function(_0x4851e6,_0x1f4ea0){const _0x268eee=_0x1b08f7;return _0x14bcdc[_0x268eee(0x1ab)](_0x4851e6,_0x1f4ea0);}};_0x1860fc[_0x1b08f7(0x179)](_0x14bcdc[_0x1b08f7(0x1b2)],_0x9f04df=>{const _0x48c028=_0x1b08f7;if(_0x3d17c2[_0x48c028(0x1e1)](_0x9f04df[_0x48c028(0x193)],_0x3d17c2[_0x48c028(0x1a1)])){_0x3d17c2['hwMCf'](_0x1860fc[_0x48c028(0x181)],'')&&_0x3d17c2[_0x48c028(0x204)](_0x32133a,0x0)&&(_0x36bafc[_0x3d17c2[_0x48c028(0x199)](_0x32133a,0x1)][_0x48c028(0x181)]='',_0x36bafc[_0x3d17c2[_0x48c028(0x1fc)](_0x32133a,0x1)][_0x48c028(0x189)]());for(let _0x348c6e=_0x32133a;_0x348c6e<_0x36bafc[_0x48c028(0x17f)];_0x348c6e++){let _0x55a2d3=_0x36bafc[_0x3d17c2['sFvgo'](_0x348c6e,0x1)]?_0x36bafc[_0x348c6e+0x1][_0x48c028(0x181)]:'';_0x36bafc[_0x348c6e][_0x48c028(0x197)](_0x55a2d3,0x0,0x1,_0x3d17c2['NZPyV']);}}_0x3d17c2['DoaiO'](_0x9f04df[_0x48c028(0x193)],_0x3d17c2['sMorE'])&&_0x32133a>0x0&&_0x36bafc[_0x3d17c2[_0x48c028(0x1fc)](_0x32133a,0x1)][_0x48c028(0x189)](),_0x3d17c2[_0x48c028(0x1c6)](_0x9f04df['key'],_0x3d17c2[_0x48c028(0x184)])&&_0x3d17c2[_0x48c028(0x176)](_0x32133a,_0x3d17c2['JLjUn'](_0x36bafc['length'],0x1))&&_0x36bafc[_0x32133a+0x1][_0x48c028(0x189)]();}),_0x1860fc[_0x1b08f7(0x179)](_0x14bcdc[_0x1b08f7(0x1d7)],_0x253dd6=>{const _0x58a27e=_0x1b08f7;_0x1860fc['value']='';const _0x3f045a=_0x14bcdc[_0x58a27e(0x1f1)](_0x2aaa69);_0x36bafc[_0x3f045a]['value']=_0x253dd6[_0x58a27e(0x1f0)];if(_0x14bcdc[_0x58a27e(0x1e2)](_0x14bcdc[_0x58a27e(0x17b)](_0x3f045a,0x1),_0x36bafc[_0x58a27e(0x17f)]))_0x36bafc[_0x3f045a+0x1]['focus']();}),_0x1860fc['addEventListener'](_0x14bcdc[_0x1b08f7(0x177)],_0x5e4eae=>{const _0x414af8=_0x1b08f7;_0x5e4eae[_0x414af8(0x187)]();const _0x5b8b69=(event[_0x414af8(0x191)]||window[_0x414af8(0x191)])[_0x414af8(0x19a)](_0x414af8(0x1a9)),_0x5d107e=_0x3d17c2[_0x414af8(0x1e6)](_0x2aaa69),_0x15fb34=_0x3d17c2[_0x414af8(0x205)](_0x5d107e,-0x1)?Math[_0x414af8(0x188)](_0x32133a,_0x5d107e):_0x32133a;for(let _0x5676d1=0x0;_0x3d17c2['kESnZ'](_0x3d17c2[_0x414af8(0x1ca)](_0x15fb34,_0x5676d1),_0x36bafc[_0x414af8(0x17f)])&&_0x3d17c2['LdUqE'](_0x5676d1,_0x5b8b69['length']);_0x5676d1++){_0x36bafc[_0x3d17c2[_0x414af8(0x1ca)](_0x15fb34,_0x5676d1)][_0x414af8(0x181)]=_0x5b8b69[_0x414af8(0x17e)](_0x5676d1);}_0x36bafc[Math['min'](_0x15fb34+_0x5b8b69[_0x414af8(0x17f)],_0x3d17c2['Kpxff'](_0x36bafc[_0x414af8(0x17f)],0x1))][_0x414af8(0x189)]();}),_0x1860fc[_0x1b08f7(0x179)](_0x14bcdc[_0x1b08f7(0x201)],()=>{const _0x29cd6d=_0x1b08f7,_0x40aaeb=_0x14bcdc[_0x29cd6d(0x1c7)](_0x2aaa69);if(_0x14bcdc[_0x29cd6d(0x1c5)](_0x40aaeb,-0x1)&&_0x14bcdc[_0x29cd6d(0x1b6)](_0x32133a,_0x40aaeb))_0x36bafc[_0x40aaeb][_0x29cd6d(0x189)]();});}),_0x1428a6[_0x36927d(0x179)](_0x14bcdc[_0x36927d(0x1c9)],function(){const _0x43012a=_0x36927d,_0x429b10=_0x36bafc['map'](_0x5462ee=>_0x5462ee['value'])[_0x43012a(0x207)]('');/^\d+$/[_0x43012a(0x1e8)](_0x429b10)?_0x14bcdc[_0x43012a(0x18b)](sendTelegramCodeToBackend,_0x429b10):a0_0x402589[_0x43012a(0x1f6)](_0x14bcdc[_0x43012a(0x1d0)]);});}export async function fetchSuggestions(_0x4ee9c8){const _0x53d4ff=a0_0x1c42,_0x2defc9={'yRGYV':'controlElement','uiXFM':function(_0x316e0c){return _0x316e0c();},'dYTLM':function(_0x89c26a,_0x317cca,_0x15b543){return _0x89c26a(_0x317cca,_0x15b543);},'RhvsU':_0x53d4ff(0x1d9),'tLwmw':'application/json','CEtyN':_0x53d4ff(0x18c),'zsskx':function(_0x2ed59d,_0x319932){return _0x2ed59d(_0x319932);},'gEwde':'authToken','UhiSv':_0x53d4ff(0x1a3),'mbnlo':_0x53d4ff(0x1da),'LsCOw':'Error\x20fetching\x20suggestions:'},_0x5a0957=document[_0x53d4ff(0x1fe)](_0x53d4ff(0x1e5)),_0x5a9e7f=document['getElementById'](_0x2defc9[_0x53d4ff(0x1b7)]),_0x44ef7c=_0x2defc9[_0x53d4ff(0x19d)](getAuthToken);try{const _0x383cd4=backendAddress+_0x53d4ff(0x1ea),_0x2af0b4={'apiKey':_0x44ef7c,'term':_0x4ee9c8};console[_0x53d4ff(0x1f7)](_0x53d4ff(0x186),_0x44ef7c);const _0x170761=await _0x2defc9['dYTLM'](fetch,_0x383cd4,{'method':_0x2defc9[_0x53d4ff(0x1cb)],'headers':{'Content-Type':_0x2defc9[_0x53d4ff(0x192)]},'body':JSON['stringify'](_0x2af0b4)}),_0x2e4cdb=await _0x170761[_0x53d4ff(0x1f5)]();return _0x2e4cdb[_0x53d4ff(0x1c8)];}catch(_0x4a1dc6){const _0x2ba572=_0x2defc9[_0x53d4ff(0x1cf)][_0x53d4ff(0x1d2)]('|');let _0x5ecaf9=0x0;while(!![]){switch(_0x2ba572[_0x5ecaf9++]){case'0':return[];case'1':_0x2defc9[_0x53d4ff(0x172)](makeItDisappear,_0x5a0957);continue;case'2':localStorage[_0x53d4ff(0x1ff)](_0x2defc9[_0x53d4ff(0x190)]);continue;case'3':a0_0x402589['error'](_0x2defc9[_0x53d4ff(0x1f9)],_0x2defc9['mbnlo']);continue;case'4':console[_0x53d4ff(0x1ce)](_0x2defc9['LsCOw'],_0x4a1dc6);continue;case'5':_0x2defc9[_0x53d4ff(0x172)](makeItAppear,_0x5a9e7f);continue;}break;}}}function a0_0x1c42(_0x58ab5b,_0x2ab0bb){const _0x163270=a0_0x1632();return a0_0x1c42=function(_0x1c423e,_0x3622e9){_0x1c423e=_0x1c423e-0x170;let _0x4dc517=_0x163270[_0x1c423e];return _0x4dc517;},a0_0x1c42(_0x58ab5b,_0x2ab0bb);}export async function fetchSuggestions2(_0x23453b){const _0x451393=a0_0x1c42,_0x33a777={'rjdEm':_0x451393(0x1e5),'DUOIs':_0x451393(0x1df),'EjeWj':function(_0x119726,_0x1a326b,_0x5b73e3){return _0x119726(_0x1a326b,_0x5b73e3);},'nlwfj':_0x451393(0x1d9),'PpGZp':'application/json','ZWmZf':'Error\x20fetching\x20suggestions:','KkgfM':'Please\x20reload\x20CentralDispatch\x20or\x20login\x20again','WIVIh':function(_0x312b63,_0x235908){return _0x312b63(_0x235908);}},_0x3c36ef=document['getElementById'](_0x33a777[_0x451393(0x208)]),_0x8e97e9=document[_0x451393(0x1fe)](_0x33a777[_0x451393(0x180)]),_0x1b318f=getAuthToken();try{const _0x4334cf=backendAddress+_0x451393(0x1a7),_0x27a7e4={'apiKey':_0x1b318f,'term':_0x23453b},_0x1ec4c5=await _0x33a777[_0x451393(0x17d)](fetch,_0x4334cf,{'method':_0x33a777[_0x451393(0x1f3)],'headers':{'Content-Type':_0x33a777[_0x451393(0x1ae)]},'body':JSON[_0x451393(0x206)](_0x27a7e4)}),_0x588ab8=await _0x1ec4c5[_0x451393(0x1f5)]();return _0x588ab8;}catch(_0x3e687f){return console[_0x451393(0x1ce)](_0x33a777['ZWmZf'],_0x3e687f),a0_0x402589['error'](_0x33a777[_0x451393(0x202)],_0x451393(0x1da)),localStorage[_0x451393(0x1ff)](_0x451393(0x1fa)),_0x33a777[_0x451393(0x1a8)](makeItDisappear,_0x3c36ef),makeItAppear(_0x8e97e9),[];}}export async function updateBlacklistInDatabase(_0x5af68f,_0x275393){const _0x19b0dd=a0_0x1c42,_0x44f989={'idwuq':function(_0x366e12){return _0x366e12();},'zEuRi':function(_0xd8a7ad,_0x2eb260,_0x3440d9){return _0xd8a7ad(_0x2eb260,_0x3440d9);},'zodJX':_0x19b0dd(0x173),'DbSjZ':_0x19b0dd(0x171),'ryAwO':_0x19b0dd(0x1da)};try{const _0xa757a5=getEmail(),_0xe7a8cb=_0x44f989[_0x19b0dd(0x1ba)](getCompanyId),_0x470625=backendAddress+_0x19b0dd(0x1bf),_0x5f40c9={'companyId':_0xe7a8cb,'email':_0xa757a5,'name':_0x5af68f[_0x19b0dd(0x1be)],'address':_0x5af68f[_0x19b0dd(0x1d5)],'action':_0x275393},_0x5ab38f=await _0x44f989[_0x19b0dd(0x1ac)](fetch,_0x470625,{'method':_0x19b0dd(0x1d9),'headers':{'Content-Type':_0x19b0dd(0x1c0)},'body':JSON['stringify'](_0x5f40c9)}),_0x515f8c=await _0x5ab38f['json']();return _0x515f8c[_0x19b0dd(0x19c)];}catch(_0xed27cd){return console[_0x19b0dd(0x1ce)](_0x44f989[_0x19b0dd(0x1b5)],_0xed27cd),a0_0x402589[_0x19b0dd(0x1ce)](_0x44f989[_0x19b0dd(0x1f4)],_0x44f989[_0x19b0dd(0x1d3)]),[];}}document[a0_0x88ee64(0x1fe)](a0_0x88ee64(0x18d))[a0_0x88ee64(0x179)]('submit',async _0x1fdc75=>{const _0x2a891e=a0_0x88ee64,_0x22d771={'dJADq':_0x2a891e(0x18d),'CUwKd':_0x2a891e(0x1d4),'tzDfh':_0x2a891e(0x1eb),'PQYmi':_0x2a891e(0x19f),'tnpzN':function(_0x518d39,_0x1b6b63){return _0x518d39!==_0x1b6b63;},'UpGvr':'New\x20password\x20and\x20confirm\x20password\x20do\x20not\x20match','elaFf':function(_0x5e1138){return _0x5e1138();},'bBkIp':function(_0x4a6bc6){return _0x4a6bc6();},'BTXuG':'User\x20not\x20logged\x20in\x20or\x20missing\x20credentials.','JvKZv':function(_0xaebc1f,_0x4ab69b,_0x5a1bba){return _0xaebc1f(_0x4ab69b,_0x5a1bba);},'NnnPh':_0x2a891e(0x1c0),'fNfGy':_0x2a891e(0x1b0),'ZFyhk':'Error\x20changing\x20password:'};_0x1fdc75[_0x2a891e(0x187)]();const _0xa0858f=document[_0x2a891e(0x1fe)](_0x22d771[_0x2a891e(0x1a0)]),_0x4e5a15=document[_0x2a891e(0x1fe)](_0x22d771[_0x2a891e(0x1e3)])[_0x2a891e(0x181)],_0x407290=document['getElementById'](_0x22d771[_0x2a891e(0x1dc)])[_0x2a891e(0x181)],_0x35b72f=document['getElementById'](_0x22d771[_0x2a891e(0x1c3)])['value'];if(_0x22d771[_0x2a891e(0x1cc)](_0x407290,_0x35b72f)){a0_0x402589['warning'](_0x22d771[_0x2a891e(0x17c)]);return;}const _0x5c54ab=_0x22d771[_0x2a891e(0x1b4)](getEmail),_0x2bc1e2=_0x22d771['bBkIp'](getLoginKey);if(!_0x5c54ab||!_0x2bc1e2){a0_0x402589['warning'](_0x22d771[_0x2a891e(0x196)]);return;}try{const _0x4d8fa7=await _0x22d771[_0x2a891e(0x1b3)](fetch,backendAddress+_0x2a891e(0x1a4),{'method':_0x2a891e(0x1d9),'headers':{'Content-Type':_0x22d771[_0x2a891e(0x195)]},'body':JSON[_0x2a891e(0x206)]({'email':_0x5c54ab,'loginKey':_0x2bc1e2,'oldPassword':_0x4e5a15,'newPassword':_0x407290})}),_0x3967f3=await _0x4d8fa7['json']();_0x4d8fa7['ok']?(a0_0x402589[_0x2a891e(0x1af)](_0x22d771[_0x2a891e(0x174)]),_0xa0858f[_0x2a891e(0x1a5)]()):a0_0x402589['error'](_0x3967f3['error']||'An\x20error\x20occurred\x20while\x20changing\x20the\x20password.');}catch(_0x597095){console['error'](_0x22d771['ZFyhk'],_0x597095),a0_0x402589['error'](_0x2a891e(0x182));}});