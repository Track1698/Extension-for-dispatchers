(function(_0x47e0a6,_0x4757c5){const _0x268e93=a0_0x4cfe,_0xa6a943=_0x47e0a6();while(!![]){try{const _0x40340f=-parseInt(_0x268e93(0x1b7))/0x1+parseInt(_0x268e93(0x1f4))/0x2*(parseInt(_0x268e93(0x1c7))/0x3)+parseInt(_0x268e93(0x1e1))/0x4*(parseInt(_0x268e93(0x19f))/0x5)+parseInt(_0x268e93(0x1a0))/0x6*(parseInt(_0x268e93(0x1e2))/0x7)+parseInt(_0x268e93(0x186))/0x8+parseInt(_0x268e93(0x1e0))/0x9+-parseInt(_0x268e93(0x196))/0xa;if(_0x40340f===_0x4757c5)break;else _0xa6a943['push'](_0xa6a943['shift']());}catch(_0x1339a0){_0xa6a943['push'](_0xa6a943['shift']());}}}(a0_0x5deb,0xada27));import a0_0x10597e from'./alerts.js';import{changedSearches,checkAlertsFilter,makeItDisappear,resetForm}from'./utils.js';export function saveToLocal(_0x15d3dd,_0x31d366){const _0x4bf291=a0_0x4cfe;chrome['storage'][_0x4bf291(0x183)]['set']({[_0x15d3dd]:_0x31d366},()=>{const _0x2cce93=_0x4bf291;chrome[_0x2cce93(0x211)][_0x2cce93(0x1fd)]?console[_0x2cce93(0x1c0)](_0x2cce93(0x1cb)+_0x15d3dd+':',chrome['runtime'][_0x2cce93(0x1fd)]):console[_0x2cce93(0x174)](_0x15d3dd+_0x2cce93(0x20f));});}export function getFromLocal(_0x58a08a,_0x10e3e5){const _0x211735=a0_0x4cfe,_0x313081={'CcknB':function(_0x4aedd3,_0x309863){return _0x4aedd3(_0x309863);}};chrome[_0x211735(0x1f5)][_0x211735(0x183)]['get']([_0x58a08a],_0x368ff8=>{const _0x2349d3=_0x211735;chrome[_0x2349d3(0x211)][_0x2349d3(0x1fd)]?console[_0x2349d3(0x1c0)](_0x2349d3(0x210)+_0x58a08a+':',chrome['runtime'][_0x2349d3(0x1fd)]):_0x313081[_0x2349d3(0x1f2)](_0x10e3e5,_0x368ff8[_0x58a08a]);});}export function removeFromLocal(_0x50a57a,_0x587a67){const _0x307fc2=a0_0x4cfe,_0x141dea={'VVYPw':function(_0x2afadd){return _0x2afadd();}};chrome[_0x307fc2(0x1f5)][_0x307fc2(0x183)][_0x307fc2(0x18f)]([_0x50a57a],()=>{const _0x3b832b=_0x307fc2;if(chrome[_0x3b832b(0x211)][_0x3b832b(0x1fd)])console['error'](_0x3b832b(0x1ea)+_0x50a57a+':',chrome[_0x3b832b(0x211)][_0x3b832b(0x1fd)]);else{console[_0x3b832b(0x174)](_0x50a57a+_0x3b832b(0x1a6));if(_0x587a67)_0x141dea[_0x3b832b(0x1c4)](_0x587a67);}});}export async function saveSearchInStorage(_0x5058df){const _0x2d1218=a0_0x4cfe,_0x4ade05={'tWmje':_0x2d1218(0x1e5),'JTCyO':_0x2d1218(0x201),'INXss':function(_0x312746){return _0x312746();},'CBUtC':_0x2d1218(0x179),'fBNKp':_0x2d1218(0x177),'VuRpc':'Search\x20saved\x20successfully!','zexox':function(_0x50aa1b){return _0x50aa1b();},'rAAJq':_0x2d1218(0x19a),'wMGke':_0x2d1218(0x1bf),'vmTAf':function(_0x199eaa,_0x583ec4){return _0x199eaa===_0x583ec4;},'XfClB':_0x2d1218(0x1cf),'WgRqs':'update','GycJN':_0x2d1218(0x1ab),'myjOY':_0x2d1218(0x205),'ksXPb':_0x2d1218(0x1b3)};console[_0x2d1218(0x174)](_0x4ade05['ksXPb'],_0x5058df),chrome[_0x2d1218(0x1f5)][_0x2d1218(0x183)][_0x2d1218(0x193)]({'searches':[]},function(_0x567b63){const _0x336a8b=_0x2d1218,_0x24c5fc=_0x567b63[_0x336a8b(0x1b0)];console[_0x336a8b(0x174)](_0x336a8b(0x212),_0x24c5fc);if(_0x24c5fc[_0x336a8b(0x181)]>=0x3)a0_0x10597e[_0x336a8b(0x1c0)](_0x336a8b(0x1d6),_0x4ade05['wMGke'],{'displayDuration':0xbb8});else{const _0x2b889d=_0x24c5fc[_0x336a8b(0x200)](_0x4ace1c=>_0x4ace1c[_0x336a8b(0x1b1)]===_0x5058df['searchName']);if(_0x2b889d&&_0x4ade05[_0x336a8b(0x1d5)](_0x5058df[_0x336a8b(0x209)]['type'],_0x4ade05[_0x336a8b(0x1a8)]))a0_0x10597e[_0x336a8b(0x1c0)]('Search\x20with\x20name\x20\x27'+_0x5058df[_0x336a8b(0x1b1)]+_0x336a8b(0x192),_0x4ade05[_0x336a8b(0x18d)],{'displayDuration':0xbb8});else{if(_0x2b889d&&_0x4ade05['vmTAf'](_0x5058df[_0x336a8b(0x209)][_0x336a8b(0x1b4)],_0x4ade05[_0x336a8b(0x207)])){const _0x29fcf1=_0x24c5fc[_0x336a8b(0x1c5)](_0x368994=>_0x368994['searchName']===_0x5058df[_0x336a8b(0x1b1)]);_0x24c5fc[_0x29fcf1]=_0x5058df,console[_0x336a8b(0x174)](_0x4ade05[_0x336a8b(0x184)],_0x24c5fc),chrome[_0x336a8b(0x1f5)]['local'][_0x336a8b(0x1fe)]({'searches':_0x24c5fc},function(){const _0x31bdf7=_0x336a8b;chrome[_0x31bdf7(0x211)]['lastError']?console[_0x31bdf7(0x1c0)](chrome['runtime']['lastError']):(a0_0x10597e['success'](_0x4ade05['tWmje'],_0x4ade05[_0x31bdf7(0x182)],{'displayDuration':0x7d0}),_0x4ade05['INXss'](resetForm),chrome[_0x31bdf7(0x1f5)][_0x31bdf7(0x183)][_0x31bdf7(0x18f)](_0x4ade05['CBUtC'],function(){const _0x4760e9=_0x31bdf7;console['log'](_0x4760e9(0x1d3));}),console[_0x31bdf7(0x174)](_0x4ade05[_0x31bdf7(0x194)],_0x5058df[_0x31bdf7(0x1b1)]));});}else _0x24c5fc[_0x336a8b(0x1f3)](_0x5058df),console['log'](_0x4ade05[_0x336a8b(0x1d1)],_0x24c5fc),chrome[_0x336a8b(0x1f5)][_0x336a8b(0x183)][_0x336a8b(0x1fe)]({'searches':_0x24c5fc},function(){const _0x1ba093=_0x336a8b;chrome[_0x1ba093(0x211)]['lastError']?console[_0x1ba093(0x1c0)](chrome[_0x1ba093(0x211)][_0x1ba093(0x1fd)]):(a0_0x10597e['success'](_0x4ade05[_0x1ba093(0x1f6)],'Info',{'displayDuration':0x7d0}),_0x4ade05[_0x1ba093(0x1f0)](resetForm),chrome[_0x1ba093(0x1f5)]['local']['remove'](_0x4ade05[_0x1ba093(0x1a2)],function(){const _0x3aa228=_0x1ba093;console[_0x3aa228(0x174)](_0x3aa228(0x1d3));}),console['log'](_0x4ade05[_0x1ba093(0x1f8)],_0x5058df[_0x1ba093(0x1b1)]));});}}});}export function getSearchesFromStorage(_0x5e3a9e){const _0x588f7e=a0_0x4cfe,_0x3851ea={'BZsNc':_0x588f7e(0x18e),'yIUAI':function(_0x4459c5,_0x20f80c){return _0x4459c5(_0x20f80c);}};chrome[_0x588f7e(0x1f5)][_0x588f7e(0x183)][_0x588f7e(0x193)]({'searches':[]},function(_0x402588){const _0x2ad6b1=_0x588f7e;chrome[_0x2ad6b1(0x211)][_0x2ad6b1(0x1fd)]?console[_0x2ad6b1(0x1c0)](_0x3851ea[_0x2ad6b1(0x1d2)],chrome['runtime']['lastError']):_0x3851ea[_0x2ad6b1(0x18a)](_0x5e3a9e,_0x402588['searches']);});}function a0_0x5deb(){const _0xb6b547=['getElementById','Error','error','cmJMK','KKRzB','rzMrB','VVYPw','findIndex','XmumV','315573jCQsHp','ZUSsu','innerHTML','HeQcL','Error\x20saving\x20','data-target','createdDate','innerText','add','ZsYGQ','myjOY','BZsNc','Form\x20data\x20removed','jXesh','vmTAf','Maximum\x20limit\x20of\x203\x20search\x20filters\x20reached.','createElement','value','map','rvFsP','sJDHP','floor','forEach','WWpEB','bXIHr','10293966rQtwpj','36TgCqqe','260092hRgyrA','CQCex','\x27\x20not\x20found.','Search\x20updated\x20successfully!','LUtCq','indexToLoad','PQtjB','wmVCa','Error\x20removing\x20','trash','changedTelegram','\x27\x20status\x20changed\x20to\x20\x27','all','FYylz','zexox','Xlnst','CcknB','push','2uJRqcy','storage','VuRpc','gzCFP','rAAJq','GTXLn','Qgpgz','uBOtc','ZoZwm','lastError','set','aTdxV','find','Info','npAHw','\x20Second(s)','jQeRE','Adding\x20new\x20search\x20to\x20existing\x20searches:','SZRWg','WgRqs','prototype','formData','filter','BUgFv','NFOcU','oigKy','XHnbZ','\x20saved\x20successfully.','Error\x20retrieving\x20','runtime','Retrieved\x20existing\x20searches:','searchNames','Search\x20with\x20name\x20\x27','Error\x20removing\x20search\x20\x27','log','Dtpxd','pVzHQ','Search\x20updated:','Error\x20removing\x20search:','autoSavedFormData','appendChild','JUQTT','from','setAttribute','\x20Min','PIGCm','SOifH','length','JTCyO','local','GycJN','Ilauy','1418248JmhaWG','XReUK','kzhrV','text','yIUAI','call','KVLBO','wMGke','Error\x20retrieving\x20searches:','remove','children','cayyj','\x27\x20already\x20exists.','get','fBNKp','eYeaz','2095690XzwJFt','eAVWM','sendMessage','1|0|3|4|2','Search\x20saved:','[data-target=\x22','querySelector','Search\x20Status\x20Updated','hasOwnProperty','158955IneOco','6mCwUSb','vXmVV','CBUtC','khgJg','rAxBU','storedData','\x20removed\x20successfully.','pYaPu','XfClB','splice','name','saveSearchInStorage\x20Updating\x20existing\x20search\x20in\x20searches\x20array:','option','dZpXP','LHOSs','rYQTB','searches','searchName','gXegg','saveSearchInStorage\x20Attempting\x20to\x20save\x20search:','type','enabled','No\x20searches\x20found\x20in\x20storage.','828745KKvTYu','stringify','yDJuT','mpwWM','srnlO','qhgBy','alertsFilterSelect'];a0_0x5deb=function(){return _0xb6b547;};return a0_0x5deb();}export function removeSearchFromStorage(_0x43e08e,_0x1ac35c){const _0x298da9=a0_0x4cfe,_0x1b265f={'eAVWM':function(_0x8c24ed){return _0x8c24ed();}};chrome[_0x298da9(0x1f5)]['local'][_0x298da9(0x193)]({'searches':[]},function(_0xa06bad){const _0xc977a9=_0x298da9,_0x30af7a={'npAHw':function(_0x131d43){const _0x1d37ad=a0_0x4cfe;return _0x1b265f[_0x1d37ad(0x197)](_0x131d43);}};let _0x563aa6=_0xa06bad[_0xc977a9(0x1b0)]||[];_0x563aa6=_0x563aa6[_0xc977a9(0x20a)](_0x522bc0=>_0x522bc0['searchName']!==_0x43e08e),chrome[_0xc977a9(0x1f5)]['local'][_0xc977a9(0x1fe)]({'searches':_0x563aa6},function(){const _0xaa4a54=_0xc977a9;if(chrome['runtime']['lastError'])console['error'](_0xaa4a54(0x215)+_0x43e08e+'\x27:',chrome['runtime'][_0xaa4a54(0x1fd)]);else{console['log']('Search\x20\x27'+_0x43e08e+'\x27\x20removed\x20successfully.');if(_0x1ac35c)_0x30af7a[_0xaa4a54(0x202)](_0x1ac35c);}});});}export function getStoredData(_0x47a7b5){const _0xabbfbd={'SOifH':function(_0x3af0d7,_0x51da02){return _0x3af0d7(_0x51da02);}};return new Promise(_0x4f59ce=>{const _0x480b59=a0_0x4cfe;chrome[_0x480b59(0x1f5)][_0x480b59(0x183)][_0x480b59(0x193)](_0x47a7b5,function(_0x8372fa){const _0x59e1a9=_0x480b59;_0xabbfbd[_0x59e1a9(0x180)](_0x4f59ce,_0x8372fa);});});}export function updateAlertsFilter(){const _0x31fa2d=a0_0x4cfe,_0x55b827={'KVLBO':_0x31fa2d(0x1ac),'vXmVV':function(_0x166226){return _0x166226();},'rvFsP':_0x31fa2d(0x1bd),'PIGCm':'Show\x20All','XmumV':_0x31fa2d(0x1a5),'gzCFP':_0x31fa2d(0x1b0)};chrome[_0x31fa2d(0x1f5)][_0x31fa2d(0x183)][_0x31fa2d(0x193)]([_0x55b827[_0x31fa2d(0x1c6)],_0x55b827[_0x31fa2d(0x1f7)]],_0x47cfab=>{const _0x5e9654=_0x31fa2d,_0x2cadc0={'rAxBU':_0x55b827[_0x5e9654(0x18c)],'Xlnst':function(_0x11a248){const _0x387487=_0x5e9654;return _0x55b827[_0x387487(0x1a1)](_0x11a248);}},_0x2b9eaa=_0x47cfab[_0x5e9654(0x1a5)]||[],_0x58b75c=_0x47cfab[_0x5e9654(0x1b0)]||[],_0x333e97=new Set();_0x2b9eaa[_0x5e9654(0x1dd)](_0x1cbfa6=>{const _0x45703c=_0x5e9654;_0x1cbfa6&&typeof _0x1cbfa6==='object'&&(_0x1cbfa6['name']&&_0x333e97[_0x45703c(0x1cf)](_0x1cbfa6[_0x45703c(0x1aa)]),Array['isArray'](_0x1cbfa6[_0x45703c(0x1b0)])&&_0x1cbfa6['searches'][_0x45703c(0x1dd)](_0x2ed2fe=>{const _0x31a1e4=_0x45703c;_0x2ed2fe&&_0x2ed2fe[_0x31a1e4(0x1b1)]&&_0x333e97[_0x31a1e4(0x1cf)](_0x2ed2fe[_0x31a1e4(0x1b1)]);}));}),_0x58b75c[_0x5e9654(0x1dd)](_0x4f8c86=>{const _0x4fc29d=_0x5e9654;_0x4f8c86&&_0x4f8c86[_0x4fc29d(0x1b1)]&&_0x333e97['add'](_0x4f8c86[_0x4fc29d(0x1b1)]);});const _0x1b77f3=Array[_0x5e9654(0x17c)](_0x333e97),_0x29a966=document[_0x5e9654(0x1be)](_0x55b827[_0x5e9654(0x1da)]);_0x29a966[_0x5e9654(0x1c9)]='';const _0x52e2c0=document[_0x5e9654(0x1d7)](_0x5e9654(0x1ac));_0x52e2c0[_0x5e9654(0x1d8)]=_0x5e9654(0x1ee),_0x52e2c0[_0x5e9654(0x189)]=_0x55b827[_0x5e9654(0x17f)],_0x29a966[_0x5e9654(0x17a)](_0x52e2c0),_0x1b77f3[_0x5e9654(0x1dd)](_0x42861c=>{const _0x437b86=_0x5e9654,_0xa24eb0=document[_0x437b86(0x1d7)](_0x2cadc0[_0x437b86(0x1a4)]);_0xa24eb0[_0x437b86(0x1d8)]=_0x42861c,_0xa24eb0[_0x437b86(0x189)]=_0x42861c,_0x29a966[_0x437b86(0x17a)](_0xa24eb0);}),_0x29a966['addEventListener']('change',()=>{const _0x4889bc=_0x5e9654,_0x412b3a=_0x29a966[_0x4889bc(0x1d8)];_0x2cadc0[_0x4889bc(0x1f1)](checkAlertsFilter);});});}function a0_0x4cfe(_0xb7e84a,_0xc84a5b){const _0x5deb52=a0_0x5deb();return a0_0x4cfe=function(_0x4cfebb,_0x4cfed2){_0x4cfebb=_0x4cfebb-0x174;let _0x413646=_0x5deb52[_0x4cfebb];return _0x413646;},a0_0x4cfe(_0xb7e84a,_0xc84a5b);}export function clearLoadAlerts(){const _0x43086f=a0_0x4cfe,_0x2394cb={'LHOSs':function(_0x5c0a48){return _0x5c0a48();},'oigKy':_0x43086f(0x1bd),'pVzHQ':function(_0x319ffa,_0x393a01){return _0x319ffa===_0x393a01;},'rzMrB':_0x43086f(0x1ee),'jQeRE':function(_0x555c75){return _0x555c75();},'WWpEB':function(_0x44f666){return _0x44f666();},'pWpHi':_0x43086f(0x1a5)},_0x553d1c=document[_0x43086f(0x1be)](_0x2394cb[_0x43086f(0x20d)])[_0x43086f(0x1d8)];_0x2394cb[_0x43086f(0x176)](_0x553d1c,_0x2394cb[_0x43086f(0x1c3)])?(chrome[_0x43086f(0x1f5)][_0x43086f(0x183)][_0x43086f(0x1fe)]({'storedData':[]}),_0x2394cb[_0x43086f(0x204)](updateSearchNamesInStorage),_0x2394cb[_0x43086f(0x1de)](checkAlertsFilter),updateAlertsFilter()):chrome[_0x43086f(0x1f5)][_0x43086f(0x183)][_0x43086f(0x193)]([_0x2394cb['pWpHi']],function(_0x2c10e9){const _0x4f9c5a=_0x43086f,_0x3ff5b3=_0x2c10e9[_0x4f9c5a(0x1a5)]||[],_0x5bea7b=_0x3ff5b3[_0x4f9c5a(0x20a)](_0x18b4b9=>_0x18b4b9[_0x4f9c5a(0x1aa)]!==_0x553d1c);updateSearchNamesInStorage(),chrome[_0x4f9c5a(0x1f5)][_0x4f9c5a(0x183)][_0x4f9c5a(0x1fe)]({'storedData':_0x5bea7b}),_0x2394cb[_0x4f9c5a(0x1ae)](checkAlertsFilter),updateAlertsFilter();});}export async function updateSearchNamesInStorage(){const _0x3f0fc2=a0_0x4cfe,_0x6ee2ee={'eYeaz':function(_0x493376){return _0x493376();},'dZpXP':function(_0x25f0d2,_0x3a042d){return _0x25f0d2!==_0x3a042d;},'ZLEWi':function(_0x17ea24){return _0x17ea24();},'cayyj':_0x3f0fc2(0x213),'KKRzB':_0x3f0fc2(0x1a5),'kzhrV':_0x3f0fc2(0x1b0)};chrome[_0x3f0fc2(0x1f5)][_0x3f0fc2(0x183)][_0x3f0fc2(0x193)]([_0x6ee2ee[_0x3f0fc2(0x191)],_0x6ee2ee[_0x3f0fc2(0x1c2)],_0x6ee2ee[_0x3f0fc2(0x188)]],function(_0x1e1649){const _0x2ebbfa=_0x3f0fc2,_0x17e35d={'ZsYGQ':function(_0x202374){const _0x3f904d=a0_0x4cfe;return _0x6ee2ee[_0x3f904d(0x195)](_0x202374);}};let _0x290a05=_0x1e1649[_0x2ebbfa(0x213)]||[],_0x570c0e=_0x1e1649[_0x2ebbfa(0x1a5)]||[],_0x30c31e=_0x1e1649['searches']||[];const _0x59d649=_0x570c0e[_0x2ebbfa(0x1d9)](_0x2fa993=>_0x2fa993[_0x2ebbfa(0x1aa)]),_0x117b8e=_0x30c31e['map'](_0x321daa=>_0x321daa['searchName']),_0x26a1fb=[...new Set([..._0x59d649,..._0x117b8e])];let _0x5dc6e1=_0x26a1fb;_0x6ee2ee[_0x2ebbfa(0x1ad)](JSON[_0x2ebbfa(0x1b8)](_0x290a05),JSON['stringify'](_0x5dc6e1))&&_0x6ee2ee['ZLEWi'](checkAlertsFilter),chrome[_0x2ebbfa(0x1f5)][_0x2ebbfa(0x183)][_0x2ebbfa(0x1fe)]({'searchNames':_0x5dc6e1},function(){const _0x169c43=_0x2ebbfa;_0x17e35d[_0x169c43(0x1d0)](updateAlertsFilter);});});}export function saveTelegramIdToLocalStorage(_0x1b4da1){const _0x23b903=a0_0x4cfe,_0xcc2619={'ZUSsu':function(_0x4a05e1,_0x5ca194,_0x53a3c1){return _0x4a05e1(_0x5ca194,_0x53a3c1);}};chrome[_0x23b903(0x1f5)][_0x23b903(0x183)][_0x23b903(0x1fe)]({'telegramId':_0x1b4da1},function(){const _0x2f44f1=_0x23b903;_0xcc2619[_0x2f44f1(0x1c8)](setTimeout,()=>{const _0x481886=_0x2f44f1;chrome[_0x481886(0x211)][_0x481886(0x198)]({'action':_0x481886(0x1ec)});},0x1f4);});}export function updateMinutes(){const _0x27d8f6=a0_0x4cfe,_0x15f2da={'BUgFv':function(_0x3dcd91,_0x1b24b6){return _0x3dcd91-_0x1b24b6;},'LUtCq':function(_0x18c9bf,_0x1bdcc7){return _0x18c9bf/_0x1bdcc7;},'wmVCa':function(_0x370f20,_0x1df137){return _0x370f20<_0x1df137;},'jXesh':_0x27d8f6(0x203),'JUQTT':_0x27d8f6(0x17e),'hBTkl':_0x27d8f6(0x1cc)};chrome[_0x27d8f6(0x1f5)][_0x27d8f6(0x183)][_0x27d8f6(0x193)]([_0x27d8f6(0x1a5)],function(_0x43dab2){const _0x4e56ac=_0x27d8f6,_0x48bb71={'pYaPu':function(_0x276f77,_0xcb388c){const _0x2cda54=a0_0x4cfe;return _0x15f2da[_0x2cda54(0x20b)](_0x276f77,_0xcb388c);},'rYQTB':function(_0x2a3825,_0x1857ad){const _0x2e2def=a0_0x4cfe;return _0x15f2da[_0x2e2def(0x1e6)](_0x2a3825,_0x1857ad);},'GTXLn':function(_0x3fe1aa,_0x231c84){return _0x3fe1aa>=_0x231c84;},'Ilauy':function(_0x2ebe59,_0x10483e){return _0x2ebe59+_0x10483e;},'CQCex':function(_0x553693,_0x5148ed){const _0x5073d8=a0_0x4cfe;return _0x15f2da[_0x5073d8(0x1e9)](_0x553693,_0x5148ed);},'qhgBy':function(_0x3c2ef9,_0x3bc6c0){return _0x15f2da['LUtCq'](_0x3c2ef9,_0x3bc6c0);},'bXIHr':_0x15f2da[_0x4e56ac(0x1d4)],'gXegg':function(_0x49f1df,_0x58c79b){return _0x49f1df+_0x58c79b;},'khgJg':_0x15f2da[_0x4e56ac(0x17b)],'uBOtc':_0x15f2da['hBTkl']},_0xb62162=_0x43dab2[_0x4e56ac(0x1a5)]||[];_0xb62162[_0x4e56ac(0x1dd)](_0xfef859=>{const _0x54ec4b=_0x4e56ac,_0x295f65=new Date(),_0xf00ff9=new Date(_0xfef859[_0x54ec4b(0x1cd)]),_0x1ff747=_0x48bb71[_0x54ec4b(0x1a7)](_0x295f65,_0xf00ff9),_0x37492d=Math['floor'](_0x48bb71['rYQTB'](_0x1ff747,0x3e8*0x3c));let _0x5d38fb;if(_0x48bb71[_0x54ec4b(0x1f9)](_0x37492d,0x3c)){const _0x16479c=Math[_0x54ec4b(0x1dc)](_0x48bb71[_0x54ec4b(0x1af)](_0x37492d,0x3c));_0x5d38fb=_0x48bb71[_0x54ec4b(0x185)](_0x16479c,'\x20Hour(s)');}else{if(_0x48bb71[_0x54ec4b(0x1e3)](_0x37492d,0x1)){const _0x96b913=Math['floor'](_0x48bb71[_0x54ec4b(0x1bc)](_0x1ff747,0x3e8));_0x5d38fb=_0x96b913+_0x48bb71[_0x54ec4b(0x1df)];}else _0x5d38fb=_0x48bb71[_0x54ec4b(0x1b2)](_0x37492d,_0x48bb71[_0x54ec4b(0x1a3)]);}const _0x517b18=document[_0x54ec4b(0x19c)](_0x54ec4b(0x19b)+_0xfef859['id']+'\x22]');_0x517b18&&(_0x517b18[_0x54ec4b(0x190)][0x0][_0x54ec4b(0x1ce)]=_0x5d38fb,_0x517b18[_0x54ec4b(0x17d)](_0x48bb71[_0x54ec4b(0x1fb)],_0xfef859['id']));});});}export async function removeSearch(_0x1850cc){const _0xa9c5b=a0_0x4cfe,_0x4e63ca={'sJDHP':function(_0x1ccf97,_0x3bc560){return _0x1ccf97(_0x3bc560);},'aTdxV':'searches','cmJMK':function(_0x26ad85,_0x2509ea){return _0x26ad85!==_0x2509ea;},'SZRWg':_0xa9c5b(0x199),'NFOcU':function(_0xe53322){return _0xe53322();},'UtxUX':function(_0x5ac935){return _0x5ac935();},'HeQcL':_0xa9c5b(0x1b6),'ZRXrX':_0xa9c5b(0x178)},_0x473c2b=_0x64d332=>new Promise((_0xf6224c,_0xaf3f3a)=>{const _0x2059fe=_0xa9c5b,_0x4a3c96={'XReUK':function(_0x4b5a94,_0x3deedf){return _0x4b5a94(_0x3deedf);}};chrome[_0x2059fe(0x1f5)][_0x2059fe(0x183)]['get'](_0x64d332,_0x3f82bf=>{const _0xfe78ae=_0x2059fe;if(chrome[_0xfe78ae(0x211)][_0xfe78ae(0x1fd)])return _0xaf3f3a(chrome[_0xfe78ae(0x211)][_0xfe78ae(0x1fd)]);_0x4a3c96[_0xfe78ae(0x187)](_0xf6224c,_0x3f82bf);});}),_0xd3a795=_0x2f4788=>new Promise((_0x2de484,_0x323472)=>{const _0x1e68d9=_0xa9c5b,_0x20127c={'nrxDJ':function(_0x515727,_0x338589){return _0x515727(_0x338589);}};chrome[_0x1e68d9(0x1f5)][_0x1e68d9(0x183)][_0x1e68d9(0x1fe)](_0x2f4788,()=>{const _0x8fb157=_0x1e68d9;if(chrome[_0x8fb157(0x211)][_0x8fb157(0x1fd)])return _0x20127c['nrxDJ'](_0x323472,chrome[_0x8fb157(0x211)][_0x8fb157(0x1fd)]);_0x2de484();});});try{const _0x269392=await _0x4e63ca[_0xa9c5b(0x1db)](_0x473c2b,[_0xa9c5b(0x1b0)]);if(Object[_0xa9c5b(0x208)]['hasOwnProperty'][_0xa9c5b(0x18b)](_0x269392,_0x4e63ca[_0xa9c5b(0x1ff)])){const _0xdcbf9a=_0x269392[_0xa9c5b(0x1b0)],_0x4a4f8b=_0xdcbf9a['findIndex'](_0x43ed4f=>_0x43ed4f[_0xa9c5b(0x1b1)]===_0x1850cc);if(_0x4e63ca[_0xa9c5b(0x1c1)](_0x4a4f8b,-0x1)){const _0x1d7c07=_0x4e63ca[_0xa9c5b(0x206)]['split']('|');let _0x3a2230=0x0;while(!![]){switch(_0x1d7c07[_0x3a2230++]){case'0':await _0x4e63ca[_0xa9c5b(0x1db)](_0xd3a795,{'searches':_0xdcbf9a});continue;case'1':_0xdcbf9a[_0xa9c5b(0x1a9)](_0x4a4f8b,0x1);continue;case'2':_0x4e63ca[_0xa9c5b(0x20c)](changedSearches);continue;case'3':a0_0x10597e[_0xa9c5b(0x1eb)](_0xa9c5b(0x214)+_0x1850cc+'\x27\x20removed\x20successfully.','Search\x20Filter\x20Deleted',{'displayDuration':0xbb8});continue;case'4':_0x4e63ca['UtxUX'](updateSearchNamesInStorage);continue;}break;}}else console['log'](_0xa9c5b(0x214)+_0x1850cc+_0xa9c5b(0x1e4));}else console[_0xa9c5b(0x174)](_0x4e63ca[_0xa9c5b(0x1ca)]);}catch(_0x410e71){console[_0xa9c5b(0x1c0)](_0x4e63ca['ZRXrX'],_0x410e71);}}export async function toggleSearchStatus(_0x1d8e74){const _0x494a28=a0_0x4cfe,_0x189da3={'PQtjB':_0x494a28(0x19d),'Dtpxd':function(_0x433541){return _0x433541();},'EBona':function(_0x358f03){return _0x358f03();},'FYylz':function(_0x2ebac1,_0x2d901f){return _0x2ebac1!==_0x2d901f;},'wBqfN':_0x494a28(0x1b6)};chrome[_0x494a28(0x1f5)][_0x494a28(0x183)][_0x494a28(0x193)]([_0x494a28(0x1b0)],function(_0x2b36c2){const _0x479a37=_0x494a28;if(Object[_0x479a37(0x208)]['hasOwnProperty'][_0x479a37(0x18b)](_0x2b36c2,_0x479a37(0x1b0))){const _0x2d2832=_0x2b36c2[_0x479a37(0x1b0)],_0x459017=_0x2d2832[_0x479a37(0x1c5)](_0x115899=>_0x115899['searchName']===_0x1d8e74);_0x189da3[_0x479a37(0x1ef)](_0x459017,-0x1)?(_0x2d2832[_0x459017][_0x479a37(0x1b5)]=!_0x2d2832[_0x459017][_0x479a37(0x1b5)],chrome['storage']['local'][_0x479a37(0x1fe)]({'searches':_0x2d2832},function(){const _0x5c7d73=_0x479a37;a0_0x10597e['success'](_0x5c7d73(0x214)+_0x1d8e74+_0x5c7d73(0x1ed)+_0x2d2832[_0x459017]['enabled']+'\x27.',_0x189da3[_0x5c7d73(0x1e8)],{'displayDuration':0xbb8}),_0x189da3[_0x5c7d73(0x175)](updateSearchNamesInStorage),_0x189da3['EBona'](changedSearches);})):console['log'](_0x479a37(0x214)+_0x1d8e74+_0x479a37(0x1e4));}else console['log'](_0x189da3['wBqfN']);});}export async function editSearch(_0x38f112){const _0x2dd85d=a0_0x4cfe,_0x59463e={'Qgpgz':_0x2dd85d(0x1b0),'yDJuT':function(_0x5406b3,_0x386a91){return _0x5406b3(_0x386a91);},'SsVda':_0x2dd85d(0x1b6)};return new Promise((_0x235d98,_0x6fa78e)=>{const _0x5041c3=_0x2dd85d,_0x1bf31a={'srnlO':_0x59463e[_0x5041c3(0x1fa)],'XHnbZ':function(_0x34b2a8,_0x2be312){return _0x34b2a8!==_0x2be312;},'GMvxY':'Returning\x20formData:','ZoZwm':function(_0x1e902d,_0x5dac5a){const _0x2bcca6=_0x5041c3;return _0x59463e[_0x2bcca6(0x1b9)](_0x1e902d,_0x5dac5a);},'mpwWM':_0x59463e['SsVda']};chrome[_0x5041c3(0x1f5)]['local'][_0x5041c3(0x193)]([_0x5041c3(0x1b0)],function(_0x4d2eed){const _0x3fcfb6=_0x5041c3;if(Object['prototype'][_0x3fcfb6(0x19e)]['call'](_0x4d2eed,_0x1bf31a[_0x3fcfb6(0x1bb)])){const _0x4c8814=_0x4d2eed['searches'],_0x1a37f7=_0x4c8814[_0x3fcfb6(0x1c5)](_0x1e9b8e=>_0x1e9b8e[_0x3fcfb6(0x1b1)]===_0x38f112);console[_0x3fcfb6(0x174)]('searchesArray',_0x4c8814),console[_0x3fcfb6(0x174)](_0x3fcfb6(0x1e7),_0x1a37f7),_0x1bf31a[_0x3fcfb6(0x20e)](_0x1a37f7,-0x1)?(console[_0x3fcfb6(0x174)](_0x1bf31a['GMvxY'],_0x4c8814[_0x1a37f7]['formData']),_0x1bf31a[_0x3fcfb6(0x1fc)](_0x235d98,_0x4c8814[_0x1a37f7]['formData'])):(console['log'](_0x3fcfb6(0x214)+_0x38f112+_0x3fcfb6(0x1e4)),_0x235d98(null));}else console['log'](_0x1bf31a[_0x3fcfb6(0x1ba)]),_0x1bf31a[_0x3fcfb6(0x1fc)](_0x235d98,null);});});}