(function(_0xa2423c,_0x4cbed0){const _0x44c991=a0_0x2670,_0x921f76=_0xa2423c();while(!![]){try{const _0xa54787=-parseInt(_0x44c991(0x15c))/0x1*(parseInt(_0x44c991(0x144))/0x2)+-parseInt(_0x44c991(0x16d))/0x3+-parseInt(_0x44c991(0x143))/0x4+-parseInt(_0x44c991(0x17c))/0x5*(-parseInt(_0x44c991(0x161))/0x6)+-parseInt(_0x44c991(0x14e))/0x7*(parseInt(_0x44c991(0x150))/0x8)+-parseInt(_0x44c991(0x127))/0x9*(parseInt(_0x44c991(0x176))/0xa)+parseInt(_0x44c991(0x188))/0xb;if(_0xa54787===_0x4cbed0)break;else _0x921f76['push'](_0x921f76['shift']());}catch(_0x5004fe){_0x921f76['push'](_0x921f76['shift']());}}}(a0_0x3902,0xa5b01));import a0_0x43e56d from'./alerts.js';import{changedSearches,checkAlertsFilter,makeItDisappear,resetForm}from'./utils.js';export function saveToLocal(_0x4f6684,_0x43b6bd){const _0x1befc7=a0_0x2670;chrome[_0x1befc7(0x113)][_0x1befc7(0x189)][_0x1befc7(0x19f)]({[_0x4f6684]:_0x43b6bd},()=>{const _0x5cad6b=_0x1befc7;chrome[_0x5cad6b(0x11f)][_0x5cad6b(0x136)]?console[_0x5cad6b(0x160)](_0x5cad6b(0x153)+_0x4f6684+':',chrome[_0x5cad6b(0x11f)][_0x5cad6b(0x136)]):console[_0x5cad6b(0x177)](_0x4f6684+_0x5cad6b(0x185));});}export function getFromLocal(_0x36a822,_0x433777){const _0x425b26=a0_0x2670,_0x1c7e67={'OrSdS':function(_0x5458bc,_0x25030b){return _0x5458bc(_0x25030b);}};chrome[_0x425b26(0x113)][_0x425b26(0x189)]['get']([_0x36a822],_0x75d083=>{const _0x221c92=_0x425b26;chrome['runtime']['lastError']?console[_0x221c92(0x160)](_0x221c92(0x198)+_0x36a822+':',chrome['runtime'][_0x221c92(0x136)]):_0x1c7e67[_0x221c92(0x12a)](_0x433777,_0x75d083[_0x36a822]);});}export function removeFromLocal(_0x1e3033,_0x1efa05){chrome['storage']['local']['remove']([_0x1e3033],()=>{const _0x5b2908=a0_0x2670;if(chrome[_0x5b2908(0x11f)][_0x5b2908(0x136)])console[_0x5b2908(0x160)]('Error\x20removing\x20'+_0x1e3033+':',chrome[_0x5b2908(0x11f)][_0x5b2908(0x136)]);else{console[_0x5b2908(0x177)](_0x1e3033+'\x20removed\x20successfully.');if(_0x1efa05)_0x1efa05();}});}export async function saveSearchInStorage(_0x2e82d8){const _0x29c82d=a0_0x2670,_0x412fc2={'ERevs':_0x29c82d(0x14c),'Fjryo':function(_0x3d19ae){return _0x3d19ae();},'ygdcV':_0x29c82d(0x128),'WhPle':_0x29c82d(0x139),'fFfKZ':'Info','YVePm':_0x29c82d(0x19d),'WsjoZ':'Error','ZDqhs':function(_0x12744a,_0x54c24a){return _0x12744a===_0x54c24a;},'SRrbt':_0x29c82d(0x164),'Evcbv':_0x29c82d(0x114),'NWznB':'Updating\x20existing\x20search\x20in\x20searches\x20array:','EKMZA':'Adding\x20new\x20search\x20to\x20existing\x20searches:'};console[_0x29c82d(0x177)](_0x29c82d(0x1a1),_0x2e82d8),chrome[_0x29c82d(0x113)][_0x29c82d(0x189)]['get']({'searches':[]},function(_0xef2d49){const _0x5c3a3a=_0x29c82d,_0x1a05bf={'WkByU':'Search\x20updated\x20successfully!','SUbgi':_0x412fc2[_0x5c3a3a(0x18e)],'WQvYC':function(_0x4b87f5){const _0x1bb6e7=_0x5c3a3a;return _0x412fc2[_0x1bb6e7(0x17a)](_0x4b87f5);},'rVgQE':_0x412fc2[_0x5c3a3a(0x13e)],'hXTsa':_0x5c3a3a(0x16f)},_0x5ade15=_0xef2d49['searches'];console[_0x5c3a3a(0x177)](_0x412fc2[_0x5c3a3a(0x137)],_0x5ade15);if(_0x5ade15[_0x5c3a3a(0x152)]>=0x3)a0_0x43e56d[_0x5c3a3a(0x160)]('Maximum\x20limit\x20of\x203\x20search\x20filters\x20reached.',_0x412fc2['WsjoZ'],{'displayDuration':0xbb8});else{const _0x2e8229=_0x5ade15['find'](_0x40abee=>_0x40abee[_0x5c3a3a(0x193)]===_0x2e82d8['searchName']);if(_0x2e8229&&_0x412fc2[_0x5c3a3a(0x116)](_0x2e82d8[_0x5c3a3a(0x162)][_0x5c3a3a(0x192)],_0x412fc2['SRrbt']))a0_0x43e56d['error'](_0x5c3a3a(0x169)+_0x2e82d8['searchName']+_0x5c3a3a(0x179),_0x412fc2[_0x5c3a3a(0x140)],{'displayDuration':0xbb8});else{if(_0x2e8229&&_0x412fc2['ZDqhs'](_0x2e82d8['formData'][_0x5c3a3a(0x192)],_0x412fc2[_0x5c3a3a(0x18f)])){const _0x557116=_0x5ade15[_0x5c3a3a(0x15e)](_0x4f7d4e=>_0x4f7d4e[_0x5c3a3a(0x193)]===_0x2e82d8[_0x5c3a3a(0x193)]);_0x5ade15[_0x557116]=_0x2e82d8,console['log'](_0x412fc2[_0x5c3a3a(0x11d)],_0x5ade15),chrome[_0x5c3a3a(0x113)][_0x5c3a3a(0x189)]['set']({'searches':_0x5ade15},function(){const _0x513933=_0x5c3a3a;chrome[_0x513933(0x11f)]['lastError']?console[_0x513933(0x160)](chrome[_0x513933(0x11f)][_0x513933(0x136)]):(a0_0x43e56d[_0x513933(0x173)](_0x1a05bf['WkByU'],_0x1a05bf['SUbgi'],{'displayDuration':0x7d0}),_0x1a05bf['WQvYC'](resetForm),chrome[_0x513933(0x113)][_0x513933(0x189)][_0x513933(0x196)](_0x1a05bf['rVgQE'],function(){const _0x3c7afd=_0x513933;console[_0x3c7afd(0x177)](_0x3c7afd(0x16f));}),console[_0x513933(0x177)](_0x513933(0x167),_0x2e82d8['searchName']));});}else _0x5ade15[_0x5c3a3a(0x168)](_0x2e82d8),console[_0x5c3a3a(0x177)](_0x412fc2['EKMZA'],_0x5ade15),chrome[_0x5c3a3a(0x113)][_0x5c3a3a(0x189)][_0x5c3a3a(0x19f)]({'searches':_0x5ade15},function(){const _0x18ad29=_0x5c3a3a;chrome[_0x18ad29(0x11f)][_0x18ad29(0x136)]?console[_0x18ad29(0x160)](chrome['runtime'][_0x18ad29(0x136)]):(a0_0x43e56d[_0x18ad29(0x173)](_0x412fc2[_0x18ad29(0x133)],_0x18ad29(0x124),{'displayDuration':0x7d0}),_0x412fc2['Fjryo'](resetForm),chrome[_0x18ad29(0x113)]['local'][_0x18ad29(0x196)](_0x412fc2['ygdcV'],function(){const _0x4dcb6a=_0x18ad29;console[_0x4dcb6a(0x177)](_0x1a05bf[_0x4dcb6a(0x15d)]);}),console[_0x18ad29(0x177)](_0x412fc2['WhPle'],_0x2e82d8[_0x18ad29(0x193)]));});}}});}export function getSearchesFromStorage(_0x440892){const _0x6a7d1a=a0_0x2670,_0x818e53={'jmyCk':_0x6a7d1a(0x172),'ksSTV':function(_0x276176,_0x2fab42){return _0x276176(_0x2fab42);}};chrome[_0x6a7d1a(0x113)]['local'][_0x6a7d1a(0x12c)]({'searches':[]},function(_0x2e3e30){const _0x1f1b11=_0x6a7d1a;chrome[_0x1f1b11(0x11f)]['lastError']?console[_0x1f1b11(0x160)](_0x818e53[_0x1f1b11(0x12b)],chrome[_0x1f1b11(0x11f)]['lastError']):_0x818e53[_0x1f1b11(0x131)](_0x440892,_0x2e3e30[_0x1f1b11(0x126)]);});}export function removeSearchFromStorage(_0x431a38,_0x1396e9){const _0x14d35a=a0_0x2670,_0x313af7={'fugQI':function(_0x4ea280){return _0x4ea280();}};chrome[_0x14d35a(0x113)][_0x14d35a(0x189)]['get']({'searches':[]},function(_0x44c7fa){const _0x4607d6=_0x14d35a;let _0x598757=_0x44c7fa[_0x4607d6(0x126)]||[];_0x598757=_0x598757['filter'](_0x262f08=>_0x262f08['searchName']!==_0x431a38),chrome[_0x4607d6(0x113)][_0x4607d6(0x189)][_0x4607d6(0x19f)]({'searches':_0x598757},function(){const _0xeccc99=_0x4607d6;if(chrome[_0xeccc99(0x11f)][_0xeccc99(0x136)])console[_0xeccc99(0x160)](_0xeccc99(0x1a5)+_0x431a38+'\x27:',chrome[_0xeccc99(0x11f)][_0xeccc99(0x136)]);else{console[_0xeccc99(0x177)](_0xeccc99(0x14b)+_0x431a38+_0xeccc99(0x1a4));if(_0x1396e9)_0x313af7[_0xeccc99(0x132)](_0x1396e9);}});});}function a0_0x3902(){const _0x31e647=['searches','36HjSpvL','autoSavedFormData','prototype','OrSdS','jmyCk','get','\x20Min','mqATw','riYco','\x27\x20status\x20changed\x20to\x20\x27','ksSTV','fugQI','ERevs','cRPMI','oNWNc','lastError','YVePm','GliCb','Search\x20saved:','uTYcV','aVMQR','option','sendMessage','ygdcV','appendChild','WsjoZ','XPCWN','vVemX','3843948MqpHEY','4VOtWgo','dANau','querySelector','Kynwe','Error\x20removing\x20search:','UViIy','trash','Search\x20\x27','Search\x20saved\x20successfully!','gwJgT','2046793YEmfre','irhxA','24guNGWN','alertsFilterSelect','length','Error\x20saving\x20','getElementById','innerText','name','njUdH','innerHTML','Returning\x20formData:','text','sECwi','472526WDmiVZ','hXTsa','findIndex','No\x20searches\x20found\x20in\x20storage.','error','2285814wOSnXf','formData','RxmnA','add','imVjG','Search\x20Filter\x20Deleted','Search\x20updated:','push','Search\x20with\x20name\x20\x27','UJRVj','from','jNqPn','3924606KVEpkd','\x20Hour(s)','Form\x20data\x20removed','kSBCc','forEach','Error\x20retrieving\x20searches:','success','OGqsu','enabled','2520880HxZrGr','log','SuqTV','\x27\x20already\x20exists.','Fjryo','value','5KQmqfd','floor','data-target','AgvuA','splice','map','change','YWalh','addEventListener','\x20saved\x20successfully.','KqDUT','isArray','59372258vnZecy','local','object','nLXWI','\x27\x20not\x20found.','wBvQR','fFfKZ','Evcbv','xDUkA','Qvuma','type','searchName','stringify','JDYoX','remove','gxkzD','Error\x20retrieving\x20','daonC','RDOBR','call','storedData','Retrieved\x20existing\x20searches:','uMkvd','set','vCcJM','Attempting\x20to\x20save\x20search:','searchNames','vlnBe','\x27\x20removed\x20successfully.','Error\x20removing\x20search\x20\x27','storage','update','searchesArray','ZDqhs','ckUSt','NbioI','hasOwnProperty','PHOlN','ISTnA','setAttribute','NWznB','dtXZM','runtime','REyWO','XtFKg','[data-target=\x22','pMorf','Info','fCfKU'];a0_0x3902=function(){return _0x31e647;};return a0_0x3902();}export function getStoredData(_0x5a5b86){return new Promise(_0x380eb2=>{const _0x2a239f=a0_0x2670;chrome[_0x2a239f(0x113)][_0x2a239f(0x189)][_0x2a239f(0x12c)](_0x5a5b86,function(_0x10dfd6){_0x380eb2(_0x10dfd6);});});}export function updateAlertsFilter(){const _0x9de537=a0_0x2670,_0x173152={'zjjek':function(_0x47f6c9,_0x2ccf7d){return _0x47f6c9===_0x2ccf7d;},'fCfKU':_0x9de537(0x18a),'GliCb':'all','JDYoX':'Show\x20All','wBvQR':_0x9de537(0x182),'aDzpl':_0x9de537(0x19c),'ISTnA':_0x9de537(0x126)};chrome[_0x9de537(0x113)][_0x9de537(0x189)][_0x9de537(0x12c)]([_0x173152['aDzpl'],_0x173152[_0x9de537(0x11b)]],_0x40fa93=>{const _0x1042a5=_0x9de537,_0xdca745=_0x40fa93[_0x1042a5(0x19c)]||[],_0x280874=_0x40fa93[_0x1042a5(0x126)]||[],_0x5de9f8=new Set();_0xdca745[_0x1042a5(0x171)](_0x4052f2=>{const _0x5f3725=_0x1042a5;_0x4052f2&&_0x173152['zjjek'](typeof _0x4052f2,_0x173152[_0x5f3725(0x125)])&&(_0x4052f2[_0x5f3725(0x156)]&&_0x5de9f8[_0x5f3725(0x164)](_0x4052f2['name']),Array[_0x5f3725(0x187)](_0x4052f2[_0x5f3725(0x126)])&&_0x4052f2[_0x5f3725(0x126)]['forEach'](_0xb9719f=>{const _0x2f8809=_0x5f3725;_0xb9719f&&_0xb9719f[_0x2f8809(0x193)]&&_0x5de9f8[_0x2f8809(0x164)](_0xb9719f['searchName']);}));}),_0x280874[_0x1042a5(0x171)](_0x4dee27=>{const _0x509b3c=_0x1042a5;_0x4dee27&&_0x4dee27[_0x509b3c(0x193)]&&_0x5de9f8[_0x509b3c(0x164)](_0x4dee27[_0x509b3c(0x193)]);});const _0x496ba5=Array[_0x1042a5(0x16b)](_0x5de9f8),_0xfcc254=document[_0x1042a5(0x154)](_0x1042a5(0x151));_0xfcc254[_0x1042a5(0x158)]='';const _0x152769=document['createElement'](_0x1042a5(0x13c));_0x152769['value']=_0x173152[_0x1042a5(0x138)],_0x152769[_0x1042a5(0x15a)]=_0x173152[_0x1042a5(0x195)],_0xfcc254[_0x1042a5(0x13f)](_0x152769),_0x496ba5[_0x1042a5(0x171)](_0x29a968=>{const _0x3a0e83=_0x1042a5,_0x277795=document['createElement'](_0x3a0e83(0x13c));_0x277795[_0x3a0e83(0x17b)]=_0x29a968,_0x277795[_0x3a0e83(0x15a)]=_0x29a968,_0xfcc254[_0x3a0e83(0x13f)](_0x277795);}),_0xfcc254[_0x1042a5(0x184)](_0x173152[_0x1042a5(0x18d)],()=>{const _0x337188=_0xfcc254['value'];checkAlertsFilter();});});}export function clearLoadAlerts(){const _0x3983c3=a0_0x2670,_0xdebdac={'vlnBe':function(_0x2235b9){return _0x2235b9();},'PHOlN':'alertsFilterSelect','dANau':function(_0x48dff0,_0x74e68b){return _0x48dff0===_0x74e68b;},'aEsaV':'all','kSBCc':function(_0x50fc3f){return _0x50fc3f();},'SJSBS':function(_0x2a5f0d){return _0x2a5f0d();},'uTYcV':_0x3983c3(0x19c)},_0x2114d5=document[_0x3983c3(0x154)](_0xdebdac[_0x3983c3(0x11a)])['value'];_0xdebdac[_0x3983c3(0x145)](_0x2114d5,_0xdebdac['aEsaV'])?(chrome[_0x3983c3(0x113)]['local'][_0x3983c3(0x19f)]({'storedData':[]}),_0xdebdac[_0x3983c3(0x170)](updateSearchNamesInStorage),_0xdebdac['SJSBS'](checkAlertsFilter),updateAlertsFilter()):chrome[_0x3983c3(0x113)]['local'][_0x3983c3(0x12c)]([_0xdebdac[_0x3983c3(0x13a)]],function(_0x317340){const _0x595ae3=_0x3983c3,_0x3143e5=_0x317340[_0x595ae3(0x19c)]||[],_0x372517=_0x3143e5['filter'](_0x897fe5=>_0x897fe5[_0x595ae3(0x156)]!==_0x2114d5);_0xdebdac[_0x595ae3(0x1a3)](updateSearchNamesInStorage),chrome['storage'][_0x595ae3(0x189)][_0x595ae3(0x19f)]({'storedData':_0x372517}),checkAlertsFilter(),updateAlertsFilter();});}export async function updateSearchNamesInStorage(){const _0x589d92=a0_0x2670,_0x3d14b3={'oNWNc':function(_0x5793ed,_0x16a707){return _0x5793ed!==_0x16a707;},'xgBRe':function(_0x3d2848){return _0x3d2848();},'vCcJM':_0x589d92(0x1a2),'RxmnA':_0x589d92(0x126)};chrome[_0x589d92(0x113)][_0x589d92(0x189)][_0x589d92(0x12c)]([_0x3d14b3[_0x589d92(0x1a0)],_0x589d92(0x19c),_0x3d14b3[_0x589d92(0x163)]],function(_0x193f72){const _0x3d6138=_0x589d92;let _0x8b77ae=_0x193f72[_0x3d6138(0x1a2)]||[],_0xf0cdf6=_0x193f72[_0x3d6138(0x19c)]||[],_0x5d4029=_0x193f72['searches']||[];const _0x4621c5=_0xf0cdf6[_0x3d6138(0x181)](_0x5d0dbd=>_0x5d0dbd['name']),_0x3c2caa=_0x5d4029[_0x3d6138(0x181)](_0x97d247=>_0x97d247[_0x3d6138(0x193)]),_0x43b481=[...new Set([..._0x4621c5,..._0x3c2caa])];let _0x161e8c=_0x43b481;_0x3d14b3[_0x3d6138(0x135)](JSON[_0x3d6138(0x194)](_0x8b77ae),JSON[_0x3d6138(0x194)](_0x161e8c))&&_0x3d14b3['xgBRe'](checkAlertsFilter),chrome[_0x3d6138(0x113)][_0x3d6138(0x189)][_0x3d6138(0x19f)]({'searchNames':_0x161e8c},function(){updateAlertsFilter();});});}export function saveTelegramIdToLocalStorage(_0x571da6){const _0x2bf136=a0_0x2670,_0x188caa={'JcaBc':function(_0xf33233,_0x34e106,_0x3cea46){return _0xf33233(_0x34e106,_0x3cea46);}};chrome[_0x2bf136(0x113)][_0x2bf136(0x189)][_0x2bf136(0x19f)]({'telegramId':_0x571da6},function(){_0x188caa['JcaBc'](setTimeout,()=>{const _0x834216=a0_0x2670;chrome['runtime'][_0x834216(0x13d)]({'action':'changedTelegram'});},0x1f4);});}export function updateMinutes(){const _0x2eb437=a0_0x2670,_0x20bdb8={'UViIy':function(_0x2f8255,_0x12bef5){return _0x2f8255/_0x12bef5;},'UJRVj':function(_0x2772f5,_0x289bf9){return _0x2772f5+_0x289bf9;},'QOdIJ':_0x2eb437(0x12d),'AgvuA':'storedData'};chrome[_0x2eb437(0x113)][_0x2eb437(0x189)][_0x2eb437(0x12c)]([_0x20bdb8[_0x2eb437(0x17f)]],function(_0x15d834){const _0x2e60a2=_0x2eb437,_0x40f8e5={'NbioI':function(_0x15e655,_0x3ed786){const _0x2011fd=a0_0x2670;return _0x20bdb8[_0x2011fd(0x149)](_0x15e655,_0x3ed786);},'jhLMP':function(_0x45cdc9,_0x3e9e8b){return _0x45cdc9*_0x3e9e8b;},'KqDUT':function(_0x1ade4d,_0xa35c33){return _0x1ade4d>=_0xa35c33;},'gxkzD':_0x2e60a2(0x16e),'XPCWN':function(_0x576483,_0xc7b49c){return _0x576483<_0xc7b49c;},'dtXZM':function(_0x1aa3f7,_0x5b14ab){const _0x5b0cda=_0x2e60a2;return _0x20bdb8[_0x5b0cda(0x16a)](_0x1aa3f7,_0x5b14ab);},'imVjG':'\x20Second(s)','sECwi':_0x20bdb8['QOdIJ']},_0x22a6c7=_0x15d834[_0x2e60a2(0x19c)]||[];_0x22a6c7[_0x2e60a2(0x171)](_0x1258f7=>{const _0x598b58=_0x2e60a2,_0x5379b4=new Date(),_0x2d65b6=new Date(_0x1258f7['createdDate']),_0x3f0e2e=_0x5379b4-_0x2d65b6,_0x31e9b0=Math[_0x598b58(0x17d)](_0x40f8e5['NbioI'](_0x3f0e2e,_0x40f8e5['jhLMP'](0x3e8,0x3c)));let _0x3bab3e;if(_0x40f8e5[_0x598b58(0x186)](_0x31e9b0,0x3c)){const _0x33ba38=Math['floor'](_0x31e9b0/0x3c);_0x3bab3e=_0x33ba38+_0x40f8e5[_0x598b58(0x197)];}else{if(_0x40f8e5[_0x598b58(0x141)](_0x31e9b0,0x1)){const _0x200026=Math['floor'](_0x40f8e5[_0x598b58(0x118)](_0x3f0e2e,0x3e8));_0x3bab3e=_0x40f8e5[_0x598b58(0x11e)](_0x200026,_0x40f8e5[_0x598b58(0x165)]);}else _0x3bab3e=_0x31e9b0+_0x40f8e5[_0x598b58(0x15b)];}const _0x34d197=document[_0x598b58(0x146)](_0x598b58(0x122)+_0x1258f7['id']+'\x22]');_0x34d197&&(_0x34d197['children'][0x0][_0x598b58(0x155)]=_0x3bab3e,_0x34d197[_0x598b58(0x11c)](_0x598b58(0x17e),_0x1258f7['id']));});});}export async function removeSearch(_0x26f4d6){const _0x4449c=a0_0x2670,_0x37e1da={'OGqsu':function(_0xdd50fe,_0x148043){return _0xdd50fe(_0x148043);},'aVMQR':function(_0x3b6b38,_0x2e5008){return _0x3b6b38(_0x2e5008);},'zCxJU':function(_0x3aabe9,_0xa905c7){return _0x3aabe9(_0xa905c7);},'Qvuma':function(_0x3058fb){return _0x3058fb();},'daonC':function(_0x3a1ee5,_0x70bc92){return _0x3a1ee5(_0x70bc92);},'xDUkA':'searches','nLXWI':function(_0x24d70d,_0x38a9f7){return _0x24d70d!==_0x38a9f7;},'hfiAz':_0x4449c(0x166),'SuqTV':_0x4449c(0x15f),'Kynwe':_0x4449c(0x148)},_0x3791c7=_0x389b84=>new Promise((_0x383d8b,_0x3bfcd9)=>{const _0x11f0a6=_0x4449c;chrome[_0x11f0a6(0x113)][_0x11f0a6(0x189)][_0x11f0a6(0x12c)](_0x389b84,_0x2d6514=>{const _0x196c04=_0x11f0a6;if(chrome[_0x196c04(0x11f)][_0x196c04(0x136)])return _0x37e1da[_0x196c04(0x174)](_0x3bfcd9,chrome[_0x196c04(0x11f)]['lastError']);_0x37e1da[_0x196c04(0x13b)](_0x383d8b,_0x2d6514);});}),_0x8460a2=_0x38bd9a=>new Promise((_0x531bce,_0x1706a4)=>{const _0x6e1b=_0x4449c;chrome[_0x6e1b(0x113)][_0x6e1b(0x189)]['set'](_0x38bd9a,()=>{const _0x4d7ec3=_0x6e1b;if(chrome[_0x4d7ec3(0x11f)][_0x4d7ec3(0x136)])return _0x37e1da['zCxJU'](_0x1706a4,chrome[_0x4d7ec3(0x11f)][_0x4d7ec3(0x136)]);_0x37e1da['Qvuma'](_0x531bce);});});try{const _0x2d0a47=await _0x37e1da[_0x4449c(0x199)](_0x3791c7,[_0x37e1da[_0x4449c(0x190)]]);if(Object[_0x4449c(0x129)][_0x4449c(0x119)][_0x4449c(0x19b)](_0x2d0a47,_0x37e1da[_0x4449c(0x190)])){const _0x24f654=_0x2d0a47[_0x4449c(0x126)],_0x1a0655=_0x24f654['findIndex'](_0x5a7f66=>_0x5a7f66['searchName']===_0x26f4d6);_0x37e1da[_0x4449c(0x18b)](_0x1a0655,-0x1)?(_0x24f654[_0x4449c(0x180)](_0x1a0655,0x1),await _0x8460a2({'searches':_0x24f654}),a0_0x43e56d[_0x4449c(0x14a)](_0x4449c(0x169)+_0x26f4d6+_0x4449c(0x1a4),_0x37e1da['hfiAz'],{'displayDuration':0xbb8}),_0x37e1da['Qvuma'](updateSearchNamesInStorage),_0x37e1da[_0x4449c(0x191)](changedSearches)):console['log'](_0x4449c(0x169)+_0x26f4d6+_0x4449c(0x18c));}else console[_0x4449c(0x177)](_0x37e1da[_0x4449c(0x178)]);}catch(_0x4057af){console['error'](_0x37e1da[_0x4449c(0x147)],_0x4057af);}}export async function toggleSearchStatus(_0x40f91d){const _0x30855b=a0_0x2670,_0x317e23={'DWViw':function(_0x11383e){return _0x11383e();},'gwJgT':_0x30855b(0x126),'REyWO':function(_0x27f66c,_0x1fe2da){return _0x27f66c!==_0x1fe2da;},'RDOBR':'No\x20searches\x20found\x20in\x20storage.'};chrome['storage']['local'][_0x30855b(0x12c)]([_0x317e23[_0x30855b(0x14d)]],function(_0x24ad78){const _0xd4dccf=_0x30855b;if(Object[_0xd4dccf(0x129)][_0xd4dccf(0x119)]['call'](_0x24ad78,_0x317e23['gwJgT'])){const _0xa0871c=_0x24ad78['searches'],_0x3b7b73=_0xa0871c['findIndex'](_0x324dd8=>_0x324dd8[_0xd4dccf(0x193)]===_0x40f91d);_0x317e23[_0xd4dccf(0x120)](_0x3b7b73,-0x1)?(_0xa0871c[_0x3b7b73]['enabled']=!_0xa0871c[_0x3b7b73]['enabled'],chrome[_0xd4dccf(0x113)]['local']['set']({'searches':_0xa0871c},function(){const _0xefc041=_0xd4dccf;a0_0x43e56d[_0xefc041(0x173)](_0xefc041(0x169)+_0x40f91d+_0xefc041(0x130)+_0xa0871c[_0x3b7b73][_0xefc041(0x175)]+'\x27.','Search\x20Status\x20Updated',{'displayDuration':0xbb8}),_0x317e23['DWViw'](updateSearchNamesInStorage),changedSearches();})):console[_0xd4dccf(0x177)]('Search\x20with\x20name\x20\x27'+_0x40f91d+_0xd4dccf(0x18c));}else console[_0xd4dccf(0x177)](_0x317e23[_0xd4dccf(0x19a)]);});}function a0_0x2670(_0x1ce4d2,_0x4100d2){const _0x390295=a0_0x3902();return a0_0x2670=function(_0x2670ae,_0x594028){_0x2670ae=_0x2670ae-0x113;let _0x3f5268=_0x390295[_0x2670ae];return _0x3f5268;},a0_0x2670(_0x1ce4d2,_0x4100d2);}export async function editSearch(_0x3375ec){const _0x1a022d=a0_0x2670,_0x11d97a={'pMorf':_0x1a022d(0x126),'XtFKg':_0x1a022d(0x115),'uMkvd':'indexToLoad','mqATw':_0x1a022d(0x159),'YWalh':function(_0x2b459e,_0x9dca86){return _0x2b459e(_0x9dca86);},'vVemX':function(_0x2092b8,_0x2c0ecf){return _0x2092b8(_0x2c0ecf);}};return new Promise((_0x84b560,_0x1d5109)=>{const _0x3a6190=_0x1a022d,_0x5d0df4={'jNqPn':_0x11d97a[_0x3a6190(0x123)],'riYco':_0x11d97a[_0x3a6190(0x121)],'cRPMI':_0x11d97a[_0x3a6190(0x19e)],'KJRDe':function(_0x2559de,_0x440af0){return _0x2559de!==_0x440af0;},'njUdH':_0x11d97a[_0x3a6190(0x12e)],'irhxA':function(_0x516dec,_0x435316){const _0x2dc820=_0x3a6190;return _0x11d97a[_0x2dc820(0x183)](_0x516dec,_0x435316);},'ckUSt':function(_0x34cbea,_0x2fd0ed){const _0x15f7ff=_0x3a6190;return _0x11d97a[_0x15f7ff(0x142)](_0x34cbea,_0x2fd0ed);}};chrome[_0x3a6190(0x113)]['local'][_0x3a6190(0x12c)]([_0x11d97a['pMorf']],function(_0x27da3a){const _0x2d9639=_0x3a6190;if(Object['prototype'][_0x2d9639(0x119)][_0x2d9639(0x19b)](_0x27da3a,_0x5d0df4[_0x2d9639(0x16c)])){const _0x35cd6c=_0x27da3a[_0x2d9639(0x126)],_0x44e2e6=_0x35cd6c[_0x2d9639(0x15e)](_0x47fb59=>_0x47fb59[_0x2d9639(0x193)]===_0x3375ec);console[_0x2d9639(0x177)](_0x5d0df4[_0x2d9639(0x12f)],_0x35cd6c),console[_0x2d9639(0x177)](_0x5d0df4[_0x2d9639(0x134)],_0x44e2e6),_0x5d0df4['KJRDe'](_0x44e2e6,-0x1)?(console[_0x2d9639(0x177)](_0x5d0df4[_0x2d9639(0x157)],_0x35cd6c[_0x44e2e6][_0x2d9639(0x162)]),_0x5d0df4[_0x2d9639(0x14f)](_0x84b560,_0x35cd6c[_0x44e2e6]['formData'])):(console[_0x2d9639(0x177)]('Search\x20with\x20name\x20\x27'+_0x3375ec+'\x27\x20not\x20found.'),_0x5d0df4[_0x2d9639(0x14f)](_0x84b560,null));}else console[_0x2d9639(0x177)](_0x2d9639(0x15f)),_0x5d0df4[_0x2d9639(0x117)](_0x84b560,null);});});}