(function(_0x301c43,_0x1ae30c){const _0x4aca46=a0_0x9226,_0x15ab0=_0x301c43();while(!![]){try{const _0x422c42=-parseInt(_0x4aca46(0x225))/0x1+parseInt(_0x4aca46(0x1b3))/0x2+parseInt(_0x4aca46(0x1e8))/0x3+-parseInt(_0x4aca46(0x1d6))/0x4+-parseInt(_0x4aca46(0x1ef))/0x5*(parseInt(_0x4aca46(0x1e4))/0x6)+parseInt(_0x4aca46(0x20e))/0x7+parseInt(_0x4aca46(0x20b))/0x8*(parseInt(_0x4aca46(0x210))/0x9);if(_0x422c42===_0x1ae30c)break;else _0x15ab0['push'](_0x15ab0['shift']());}catch(_0x527080){_0x15ab0['push'](_0x15ab0['shift']());}}}(a0_0x1259,0xcce52));import a0_0x4f90f1 from'./alerts.js';import{changedSearches,checkAlertsFilter,makeItDisappear,resetForm}from'./utils.js';export function saveToLocal(_0xa5c101,_0x192e50){const _0x34575e=a0_0x9226;chrome[_0x34575e(0x1b2)]['local']['set']({[_0xa5c101]:_0x192e50},()=>{const _0x459463=_0x34575e;chrome[_0x459463(0x1a7)][_0x459463(0x198)]?console[_0x459463(0x20f)]('Error\x20saving\x20'+_0xa5c101+':',chrome[_0x459463(0x1a7)]['lastError']):console['log'](_0xa5c101+'\x20saved\x20successfully.');});}export function getFromLocal(_0x328e89,_0x1838b0){const _0x5dee6d=a0_0x9226,_0x50d4d4={'lFazm':function(_0x5006c4,_0x5ae216){return _0x5006c4(_0x5ae216);}};chrome[_0x5dee6d(0x1b2)][_0x5dee6d(0x1c9)]['get']([_0x328e89],_0x389473=>{const _0x378daa=_0x5dee6d;chrome[_0x378daa(0x1a7)][_0x378daa(0x198)]?console[_0x378daa(0x20f)](_0x378daa(0x200)+_0x328e89+':',chrome['runtime'][_0x378daa(0x198)]):_0x50d4d4[_0x378daa(0x1b5)](_0x1838b0,_0x389473[_0x328e89]);});}export function removeFromLocal(_0x8e7015,_0x2f411c){const _0x17d072=a0_0x9226,_0x1e7fcf={'eAlcY':function(_0xb9dbef){return _0xb9dbef();}};chrome[_0x17d072(0x1b2)][_0x17d072(0x1c9)][_0x17d072(0x19d)]([_0x8e7015],()=>{const _0x47c5e5=_0x17d072;if(chrome[_0x47c5e5(0x1a7)]['lastError'])console[_0x47c5e5(0x20f)](_0x47c5e5(0x1ba)+_0x8e7015+':',chrome[_0x47c5e5(0x1a7)][_0x47c5e5(0x198)]);else{console[_0x47c5e5(0x21a)](_0x8e7015+_0x47c5e5(0x1aa));if(_0x2f411c)_0x1e7fcf[_0x47c5e5(0x212)](_0x2f411c);}});}function a0_0x9226(_0x6efe42,_0x3c7b18){const _0x1259f4=a0_0x1259();return a0_0x9226=function(_0x922646,_0x51ffba){_0x922646=_0x922646-0x197;let _0x597a89=_0x1259f4[_0x922646];return _0x597a89;},a0_0x9226(_0x6efe42,_0x3c7b18);}export async function saveSearchInStorage(_0x5aca49){const _0x3b7d01=a0_0x9226,_0x54064a={'WYuPC':_0x3b7d01(0x20a),'kZOWH':function(_0x39587f){return _0x39587f();},'XOHwz':'Search\x20saved\x20successfully!','SMfGm':_0x3b7d01(0x1ad),'USqtv':_0x3b7d01(0x205),'IdCRu':_0x3b7d01(0x1cb),'HYgLS':function(_0x233f0c,_0x254c82){return _0x233f0c>=_0x254c82;},'djPwh':'Maximum\x20limit\x20of\x203\x20search\x20filters\x20reached.','AqpxZ':'Error','bLujM':_0x3b7d01(0x1a2),'RRMCJ':'saveSearchInStorage\x20Updating\x20existing\x20search\x20in\x20searches\x20array:','IaGZt':_0x3b7d01(0x19a)};console[_0x3b7d01(0x21a)](_0x3b7d01(0x1de),_0x5aca49),chrome['storage'][_0x3b7d01(0x1c9)][_0x3b7d01(0x19f)]({'searches':[]},function(_0x2c13c6){const _0x1467c3=_0x3b7d01,_0x4cdee5={'SHHqz':'Form\x20data\x20removed'},_0x35cdf2=_0x2c13c6['searches'];console['log'](_0x54064a[_0x1467c3(0x1d7)],_0x35cdf2);if(_0x54064a[_0x1467c3(0x1d1)](_0x35cdf2['length'],0x3))a0_0x4f90f1[_0x1467c3(0x20f)](_0x54064a['djPwh'],_0x54064a[_0x1467c3(0x207)],{'displayDuration':0xbb8});else{const _0xc0aac6=_0x35cdf2[_0x1467c3(0x1c2)](_0xf97fa8=>_0xf97fa8[_0x1467c3(0x1c6)]===_0x5aca49['searchName']);if(_0xc0aac6&&_0x5aca49[_0x1467c3(0x1d8)][_0x1467c3(0x1f6)]===_0x54064a[_0x1467c3(0x1f2)])a0_0x4f90f1['error'](_0x1467c3(0x20d)+_0x5aca49[_0x1467c3(0x1c6)]+_0x1467c3(0x1fc),_0x54064a['AqpxZ'],{'displayDuration':0xbb8});else{if(_0xc0aac6&&_0x5aca49[_0x1467c3(0x1d8)]['type']===_0x1467c3(0x1c5)){const _0x16882d=_0x35cdf2[_0x1467c3(0x1a6)](_0x296268=>_0x296268[_0x1467c3(0x1c6)]===_0x5aca49['searchName']);_0x35cdf2[_0x16882d]=_0x5aca49,console[_0x1467c3(0x21a)](_0x54064a['RRMCJ'],_0x35cdf2),chrome[_0x1467c3(0x1b2)][_0x1467c3(0x1c9)][_0x1467c3(0x214)]({'searches':_0x35cdf2},function(){const _0x327246=_0x1467c3;chrome[_0x327246(0x1a7)]['lastError']?console[_0x327246(0x20f)](chrome[_0x327246(0x1a7)]['lastError']):(a0_0x4f90f1['success'](_0x54064a[_0x327246(0x211)],_0x327246(0x1ad),{'displayDuration':0x7d0}),_0x54064a[_0x327246(0x202)](resetForm),chrome[_0x327246(0x1b2)][_0x327246(0x1c9)][_0x327246(0x19d)](_0x327246(0x205),function(){const _0x25ef99=_0x327246;console[_0x25ef99(0x21a)](_0x4cdee5['SHHqz']);}),console[_0x327246(0x21a)](_0x327246(0x1ed),_0x5aca49[_0x327246(0x1c6)]));});}else _0x35cdf2['push'](_0x5aca49),console[_0x1467c3(0x21a)](_0x54064a[_0x1467c3(0x220)],_0x35cdf2),chrome['storage'][_0x1467c3(0x1c9)][_0x1467c3(0x214)]({'searches':_0x35cdf2},function(){const _0x4352a2=_0x1467c3;chrome[_0x4352a2(0x1a7)]['lastError']?console[_0x4352a2(0x20f)](chrome[_0x4352a2(0x1a7)][_0x4352a2(0x198)]):(a0_0x4f90f1[_0x4352a2(0x1c7)](_0x54064a[_0x4352a2(0x208)],_0x54064a[_0x4352a2(0x19e)],{'displayDuration':0x7d0}),_0x54064a[_0x4352a2(0x202)](resetForm),chrome['storage'][_0x4352a2(0x1c9)][_0x4352a2(0x19d)](_0x54064a[_0x4352a2(0x1d5)],function(){const _0x5b74ec=_0x4352a2;console[_0x5b74ec(0x21a)](_0x4cdee5[_0x5b74ec(0x1c3)]);}),console['log']('Search\x20saved:',_0x5aca49[_0x4352a2(0x1c6)]));});}}});}export function getSearchesFromStorage(_0x124b10){const _0x1ba40e=a0_0x9226,_0x588751={'FgLri':'Error\x20retrieving\x20searches:','Jtcqg':function(_0x28a133,_0x59b1df){return _0x28a133(_0x59b1df);}};chrome[_0x1ba40e(0x1b2)][_0x1ba40e(0x1c9)][_0x1ba40e(0x19f)]({'searches':[]},function(_0x64edef){const _0x5ad2bb=_0x1ba40e;chrome['runtime'][_0x5ad2bb(0x198)]?console[_0x5ad2bb(0x20f)](_0x588751[_0x5ad2bb(0x1f9)],chrome[_0x5ad2bb(0x1a7)][_0x5ad2bb(0x198)]):_0x588751[_0x5ad2bb(0x1fe)](_0x124b10,_0x64edef[_0x5ad2bb(0x1ea)]);});}export function removeSearchFromStorage(_0x5aee9d,_0x1ec26d){const _0x3a85f0=a0_0x9226;chrome['storage'][_0x3a85f0(0x1c9)]['get']({'searches':[]},function(_0x51dd3d){const _0x5a2347=_0x3a85f0;let _0x15c394=_0x51dd3d[_0x5a2347(0x1ea)]||[];_0x15c394=_0x15c394[_0x5a2347(0x1dd)](_0xf33dd1=>_0xf33dd1['searchName']!==_0x5aee9d),chrome['storage']['local']['set']({'searches':_0x15c394},function(){const _0x9865b8=_0x5a2347;if(chrome['runtime']['lastError'])console['error']('Error\x20removing\x20search\x20\x27'+_0x5aee9d+'\x27:',chrome[_0x9865b8(0x1a7)][_0x9865b8(0x198)]);else{console[_0x9865b8(0x21a)](_0x9865b8(0x1f0)+_0x5aee9d+_0x9865b8(0x1df));if(_0x1ec26d)_0x1ec26d();}});});}export function getStoredData(_0x3ea5d4){return new Promise(_0x5ad1ee=>{const _0x5ddcd9=a0_0x9226,_0xa2e1f4={'hMkap':function(_0xa8e184,_0x55057e){return _0xa8e184(_0x55057e);}};chrome[_0x5ddcd9(0x1b2)][_0x5ddcd9(0x1c9)][_0x5ddcd9(0x19f)](_0x3ea5d4,function(_0x27669){_0xa2e1f4['hMkap'](_0x5ad1ee,_0x27669);});});}export function updateAlertsFilter(){const _0x9fd68b=a0_0x9226,_0x2debde={'fmYYh':_0x9fd68b(0x1f5),'RueKZ':'option','nIPWf':_0x9fd68b(0x1bf),'oHdJM':_0x9fd68b(0x1b4),'fHagP':'Show\x20All','RbUdl':_0x9fd68b(0x1a3)};chrome[_0x9fd68b(0x1b2)][_0x9fd68b(0x1c9)][_0x9fd68b(0x19f)]([_0x9fd68b(0x1f8),_0x9fd68b(0x1ea)],_0x849b76=>{const _0x176e02=_0x9fd68b,_0x5c73d3={'fTrHh':_0x2debde[_0x176e02(0x1ac)],'luYmM':_0x2debde[_0x176e02(0x1c8)]},_0x565d20=_0x849b76[_0x176e02(0x1f8)]||[],_0x165ea0=_0x849b76[_0x176e02(0x1ea)]||[],_0x3ed74d=new Set();_0x565d20[_0x176e02(0x1d4)](_0x1cf930=>{const _0x1dcce5=_0x176e02;_0x1cf930&&typeof _0x1cf930===_0x5c73d3[_0x1dcce5(0x1eb)]&&(_0x1cf930['name']&&_0x3ed74d[_0x1dcce5(0x1a2)](_0x1cf930['name']),Array[_0x1dcce5(0x1e7)](_0x1cf930[_0x1dcce5(0x1ea)])&&_0x1cf930['searches'][_0x1dcce5(0x1d4)](_0x23fb24=>{const _0x23f0fd=_0x1dcce5;_0x23fb24&&_0x23fb24[_0x23f0fd(0x1c6)]&&_0x3ed74d['add'](_0x23fb24[_0x23f0fd(0x1c6)]);}));}),_0x165ea0[_0x176e02(0x1d4)](_0x3acd06=>{const _0x17d470=_0x176e02;_0x3acd06&&_0x3acd06[_0x17d470(0x1c6)]&&_0x3ed74d[_0x17d470(0x1a2)](_0x3acd06[_0x17d470(0x1c6)]);});const _0x354908=Array['from'](_0x3ed74d),_0x8b8312=document[_0x176e02(0x206)](_0x2debde[_0x176e02(0x1e6)]);_0x8b8312[_0x176e02(0x1e3)]='';const _0x42c54e=document[_0x176e02(0x1fa)](_0x2debde[_0x176e02(0x1c8)]);_0x42c54e[_0x176e02(0x223)]=_0x2debde[_0x176e02(0x219)],_0x42c54e[_0x176e02(0x1af)]=_0x2debde[_0x176e02(0x1d9)],_0x8b8312['appendChild'](_0x42c54e),_0x354908[_0x176e02(0x1d4)](_0x33f949=>{const _0x28813d=_0x176e02,_0x1838c1=document[_0x28813d(0x1fa)](_0x5c73d3['luYmM']);_0x1838c1[_0x28813d(0x223)]=_0x33f949,_0x1838c1[_0x28813d(0x1af)]=_0x33f949,_0x8b8312[_0x28813d(0x1ab)](_0x1838c1);}),_0x8b8312[_0x176e02(0x1ec)](_0x2debde[_0x176e02(0x1e9)],()=>{const _0x22418a=_0x176e02,_0x2b5705=_0x8b8312[_0x22418a(0x223)];checkAlertsFilter();});});}export function clearLoadAlerts(){const _0x2f9958=a0_0x9226,_0x1cf5dd={'wYyIK':function(_0x15efd9){return _0x15efd9();},'hlHuD':function(_0x198793){return _0x198793();},'yIsAr':_0x2f9958(0x1bf),'mIFQO':function(_0x5e77b2,_0x548863){return _0x5e77b2===_0x548863;},'Gswmn':_0x2f9958(0x1b4),'ppJAj':function(_0x207464){return _0x207464();},'ztTRV':function(_0x3136ae){return _0x3136ae();}},_0x55fab1=document[_0x2f9958(0x206)](_0x1cf5dd[_0x2f9958(0x19b)])[_0x2f9958(0x223)];_0x1cf5dd['mIFQO'](_0x55fab1,_0x1cf5dd['Gswmn'])?(chrome[_0x2f9958(0x1b2)][_0x2f9958(0x1c9)][_0x2f9958(0x214)]({'storedData':[]}),_0x1cf5dd[_0x2f9958(0x1b7)](updateSearchNamesInStorage),_0x1cf5dd['hlHuD'](checkAlertsFilter),_0x1cf5dd[_0x2f9958(0x1f3)](updateAlertsFilter)):chrome[_0x2f9958(0x1b2)][_0x2f9958(0x1c9)][_0x2f9958(0x19f)]([_0x2f9958(0x1f8)],function(_0x5e376d){const _0x39d624=_0x2f9958,_0x576223=_0x5e376d[_0x39d624(0x1f8)]||[],_0x161152=_0x576223[_0x39d624(0x1dd)](_0x12a2da=>_0x12a2da[_0x39d624(0x1dc)]!==_0x55fab1);_0x1cf5dd[_0x39d624(0x221)](updateSearchNamesInStorage),chrome[_0x39d624(0x1b2)][_0x39d624(0x1c9)]['set']({'storedData':_0x161152}),_0x1cf5dd['hlHuD'](checkAlertsFilter),_0x1cf5dd[_0x39d624(0x1ce)](updateAlertsFilter);});}export async function updateSearchNamesInStorage(){const _0x3033c3=a0_0x9226,_0x27a26d={'IVZZb':function(_0x4544e7){return _0x4544e7();},'wnWSH':function(_0x571dab,_0x1d7681){return _0x571dab!==_0x1d7681;},'guMZR':_0x3033c3(0x1ea)};chrome['storage'][_0x3033c3(0x1c9)]['get']([_0x3033c3(0x201),_0x3033c3(0x1f8),_0x27a26d[_0x3033c3(0x1a4)]],function(_0x2f00bd){const _0x5ce104=_0x3033c3;let _0x23cd35=_0x2f00bd[_0x5ce104(0x201)]||[],_0x2298c6=_0x2f00bd['storedData']||[],_0x25ce98=_0x2f00bd[_0x5ce104(0x1ea)]||[];const _0x50eb42=_0x2298c6[_0x5ce104(0x1c0)](_0x7ceb33=>_0x7ceb33[_0x5ce104(0x1dc)]),_0x4d9bef=_0x25ce98[_0x5ce104(0x1c0)](_0x4e95bf=>_0x4e95bf['searchName']),_0x327df5=[...new Set([..._0x50eb42,..._0x4d9bef])];let _0x7fc708=_0x327df5;_0x27a26d['wnWSH'](JSON[_0x5ce104(0x1e1)](_0x23cd35),JSON[_0x5ce104(0x1e1)](_0x7fc708))&&checkAlertsFilter(),chrome['storage'][_0x5ce104(0x1c9)][_0x5ce104(0x214)]({'searchNames':_0x7fc708},function(){const _0x4cbb0f=_0x5ce104;_0x27a26d[_0x4cbb0f(0x1bb)](updateAlertsFilter);});});}export function saveTelegramIdToLocalStorage(_0x2ad5e2){const _0x1ee42b=a0_0x9226,_0x52713d={'fiARE':_0x1ee42b(0x1a8),'vsrob':function(_0x1c5c30,_0x584294,_0x2cf79b){return _0x1c5c30(_0x584294,_0x2cf79b);}};chrome[_0x1ee42b(0x1b2)][_0x1ee42b(0x1c9)][_0x1ee42b(0x214)]({'telegramId':_0x2ad5e2},function(){const _0xcc7ba8=_0x1ee42b;_0x52713d[_0xcc7ba8(0x1fb)](setTimeout,()=>{const _0x2c9772=_0xcc7ba8;chrome['runtime'][_0x2c9772(0x1d0)]({'action':_0x52713d['fiARE']});},0x1f4);});}export function updateMinutes(){const _0x4fb1c4=a0_0x9226,_0x119352={'gkOmo':function(_0x260623,_0x3ddcef){return _0x260623-_0x3ddcef;},'dHrRm':function(_0x2a0297,_0xd93020){return _0x2a0297*_0xd93020;},'IyEhk':function(_0x24588e,_0x1c7658){return _0x24588e/_0x1c7658;},'vyecH':function(_0x1950f1,_0x1b03b7){return _0x1950f1<_0x1b03b7;},'uxuVH':_0x4fb1c4(0x224),'XLVdm':_0x4fb1c4(0x1f8)};chrome[_0x4fb1c4(0x1b2)]['local']['get']([_0x119352[_0x4fb1c4(0x1ae)]],function(_0x43dec4){const _0x207b19=_0x4fb1c4,_0x4de928={'hWrwR':function(_0x3091fb,_0x5dbb9c){const _0xa8c5d4=a0_0x9226;return _0x119352[_0xa8c5d4(0x218)](_0x3091fb,_0x5dbb9c);},'HYwFE':function(_0x439410,_0x5db0dc){return _0x119352['dHrRm'](_0x439410,_0x5db0dc);},'WKGkK':function(_0x37e50f,_0x14bdd5){const _0x21a512=a0_0x9226;return _0x119352[_0x21a512(0x204)](_0x37e50f,_0x14bdd5);},'YBRJa':_0x207b19(0x215),'Bwgnv':function(_0x20977f,_0x2317f3){const _0x32b98c=_0x207b19;return _0x119352[_0x32b98c(0x1e0)](_0x20977f,_0x2317f3);},'qbiJh':function(_0x1ec53b,_0x68fce6){return _0x1ec53b+_0x68fce6;},'TiKGh':'\x20Min','PKCgv':_0x119352[_0x207b19(0x1bc)]},_0x23d002=_0x43dec4['storedData']||[];_0x23d002[_0x207b19(0x1d4)](_0x308efb=>{const _0x525736=_0x207b19,_0x518f77=new Date(),_0x676498=new Date(_0x308efb[_0x525736(0x1ca)]),_0x1c54e1=_0x4de928[_0x525736(0x1ff)](_0x518f77,_0x676498),_0x36c098=Math['floor'](_0x1c54e1/_0x4de928['HYwFE'](0x3e8,0x3c));let _0x52fe66;if(_0x36c098>=0x3c){const _0x1f9d26=Math[_0x525736(0x19c)](_0x4de928[_0x525736(0x1d3)](_0x36c098,0x3c));_0x52fe66=_0x1f9d26+_0x4de928[_0x525736(0x227)];}else{if(_0x4de928[_0x525736(0x1bd)](_0x36c098,0x1)){const _0x5097e2=Math['floor'](_0x1c54e1/0x3e8);_0x52fe66=_0x4de928[_0x525736(0x1f1)](_0x5097e2,'\x20Second(s)');}else _0x52fe66=_0x36c098+_0x4de928['TiKGh'];}const _0x384c27=document[_0x525736(0x1cc)](_0x525736(0x1b0)+_0x308efb['id']+'\x22]');_0x384c27&&(_0x384c27[_0x525736(0x1d2)][0x0]['innerText']=_0x52fe66,_0x384c27[_0x525736(0x1c4)](_0x4de928[_0x525736(0x203)],_0x308efb['id']));});});}function a0_0x1259(){const _0x5bffee=['\x27\x20removed\x20successfully.','vyecH','stringify','indexToLoad','innerHTML','18czxznv','XexkK','nIPWf','isArray','2366238ZGnmhI','RbUdl','searches','fTrHh','addEventListener','Search\x20updated:','hJNgw','2415815FQsJbN','Search\x20\x27','qbiJh','bLujM','ztTRV','bWhqO','object','type','4|1|2|0|3','storedData','FgLri','createElement','vsrob','\x27\x20already\x20exists.','QBvIe','Jtcqg','hWrwR','Error\x20retrieving\x20','searchNames','kZOWH','PKCgv','IyEhk','autoSavedFormData','getElementById','AqpxZ','XOHwz','searchesArray','Search\x20updated\x20successfully!','244856vlKTRQ','cKBdF','Search\x20with\x20name\x20\x27','1057224BTGjFP','error','441JwtlvS','WYuPC','eAlcY','WYPti','set','\x20Hour(s)','bDhjg','OIiPy','gkOmo','oHdJM','log','No\x20searches\x20found\x20in\x20storage.','trash','kWBlb','ycWdi','fHVqD','IaGZt','wYyIK','aIErF','value','data-target','25472tDjRwH','DSVJK','YBRJa','enabled','sDDyN','lastError','Wdhwf','Adding\x20new\x20search\x20to\x20existing\x20searches:','yIsAr','floor','remove','SMfGm','get','mCCVU','call','add','change','guMZR','vopmc','findIndex','runtime','changedTelegram','\x27\x20not\x20found.','\x20removed\x20successfully.','appendChild','fmYYh','Info','XLVdm','text','[data-target=\x22','hasOwnProperty','storage','840096lQiSeM','all','lFazm','hstDM','ppJAj','prototype','split','Error\x20removing\x20','IVZZb','uxuVH','Bwgnv','Search\x20Status\x20Updated','alertsFilterSelect','map','LLokF','find','SHHqz','setAttribute','update','searchName','success','RueKZ','local','createdDate','Retrieved\x20existing\x20searches:','querySelector','Search\x20Filter\x20Deleted','hlHuD','Error\x20removing\x20search:','sendMessage','HYgLS','children','WKGkK','forEach','USqtv','2181432DqLKwB','IdCRu','formData','fHagP','splice','zcIDv','name','filter','saveSearchInStorage\x20Attempting\x20to\x20save\x20search:'];a0_0x1259=function(){return _0x5bffee;};return a0_0x1259();}export async function removeSearch(_0x30dbe2){const _0x381289=a0_0x9226,_0x31c924={'fHVqD':function(_0x303dac){return _0x303dac();},'aIErF':function(_0x410719,_0x2a96aa){return _0x410719(_0x2a96aa);},'kWBlb':_0x381289(0x1ea),'oeyEf':function(_0x3bb083,_0x901d36){return _0x3bb083!==_0x901d36;},'DSVJK':_0x381289(0x1f7),'fXZZV':function(_0xf23b19){return _0xf23b19();},'cKBdF':function(_0x2f41e6,_0x271711){return _0x2f41e6(_0x271711);},'QBvIe':_0x381289(0x1cd),'pxDDb':_0x381289(0x21b),'sDDyN':_0x381289(0x1cf)},_0x4a7b9e=_0x52ae1c=>new Promise((_0x29c2b0,_0x2eb3ee)=>{const _0x3034b8=_0x381289;chrome[_0x3034b8(0x1b2)][_0x3034b8(0x1c9)][_0x3034b8(0x19f)](_0x52ae1c,_0x5a8079=>{const _0x1f3f81=_0x3034b8;if(chrome['runtime'][_0x1f3f81(0x198)])return _0x2eb3ee(chrome[_0x1f3f81(0x1a7)][_0x1f3f81(0x198)]);_0x29c2b0(_0x5a8079);});}),_0x1d96e7=_0x40fa59=>new Promise((_0x3aef68,_0x5f2718)=>{const _0x21b3f4=_0x381289,_0x6de707={'hJNgw':function(_0x3b6b1e){const _0x5d05ce=a0_0x9226;return _0x31c924[_0x5d05ce(0x21f)](_0x3b6b1e);}};chrome[_0x21b3f4(0x1b2)][_0x21b3f4(0x1c9)][_0x21b3f4(0x214)](_0x40fa59,()=>{const _0x877679=_0x21b3f4;if(chrome[_0x877679(0x1a7)][_0x877679(0x198)])return _0x5f2718(chrome['runtime']['lastError']);_0x6de707[_0x877679(0x1ee)](_0x3aef68);});});try{const _0x48c678=await _0x31c924[_0x381289(0x222)](_0x4a7b9e,[_0x31c924['kWBlb']]);if(Object[_0x381289(0x1b8)][_0x381289(0x1b1)]['call'](_0x48c678,_0x31c924[_0x381289(0x21d)])){const _0x1e8063=_0x48c678[_0x381289(0x1ea)],_0x244b97=_0x1e8063[_0x381289(0x1a6)](_0x56582c=>_0x56582c['searchName']===_0x30dbe2);if(_0x31c924['oeyEf'](_0x244b97,-0x1)){const _0x42c96d=_0x31c924[_0x381289(0x226)][_0x381289(0x1b9)]('|');let _0x61cceb=0x0;while(!![]){switch(_0x42c96d[_0x61cceb++]){case'0':_0x31c924['fXZZV'](updateSearchNamesInStorage);continue;case'1':await _0x31c924[_0x381289(0x20c)](_0x1d96e7,{'searches':_0x1e8063});continue;case'2':a0_0x4f90f1[_0x381289(0x21c)](_0x381289(0x20d)+_0x30dbe2+_0x381289(0x1df),_0x31c924[_0x381289(0x1fd)],{'displayDuration':0xbb8});continue;case'3':changedSearches();continue;case'4':_0x1e8063[_0x381289(0x1da)](_0x244b97,0x1);continue;}break;}}else console['log'](_0x381289(0x20d)+_0x30dbe2+'\x27\x20not\x20found.');}else console[_0x381289(0x21a)](_0x31c924['pxDDb']);}catch(_0x18e0a5){console[_0x381289(0x20f)](_0x31c924[_0x381289(0x197)],_0x18e0a5);}}export async function toggleSearchStatus(_0x5e270c){const _0x464a01=a0_0x9226,_0x6750d2={'Wdhwf':function(_0x293601){return _0x293601();},'LLokF':'searches','zcIDv':function(_0x293927,_0x20130f){return _0x293927!==_0x20130f;},'XexkK':_0x464a01(0x21b)};chrome[_0x464a01(0x1b2)]['local'][_0x464a01(0x19f)]([_0x6750d2[_0x464a01(0x1c1)]],function(_0x346d12){const _0x26e956=_0x464a01,_0x5a41f3={'SsaOV':function(_0x4246fd){const _0x5572e6=a0_0x9226;return _0x6750d2[_0x5572e6(0x199)](_0x4246fd);},'bDhjg':function(_0x1b4991){const _0x5f390f=a0_0x9226;return _0x6750d2[_0x5f390f(0x199)](_0x1b4991);}};if(Object[_0x26e956(0x1b8)]['hasOwnProperty']['call'](_0x346d12,_0x6750d2['LLokF'])){const _0x9431de=_0x346d12[_0x26e956(0x1ea)],_0x1e1605=_0x9431de[_0x26e956(0x1a6)](_0x55190a=>_0x55190a[_0x26e956(0x1c6)]===_0x5e270c);_0x6750d2[_0x26e956(0x1db)](_0x1e1605,-0x1)?(_0x9431de[_0x1e1605]['enabled']=!_0x9431de[_0x1e1605][_0x26e956(0x228)],chrome[_0x26e956(0x1b2)]['local']['set']({'searches':_0x9431de},function(){const _0x9f648a=_0x26e956;a0_0x4f90f1[_0x9f648a(0x1c7)](_0x9f648a(0x20d)+_0x5e270c+'\x27\x20status\x20changed\x20to\x20\x27'+_0x9431de[_0x1e1605][_0x9f648a(0x228)]+'\x27.',_0x9f648a(0x1be),{'displayDuration':0xbb8}),_0x5a41f3['SsaOV'](updateSearchNamesInStorage),_0x5a41f3[_0x9f648a(0x216)](changedSearches);})):console[_0x26e956(0x21a)](_0x26e956(0x20d)+_0x5e270c+_0x26e956(0x1a9));}else console['log'](_0x6750d2[_0x26e956(0x1e5)]);});}export async function editSearch(_0x34a979){const _0x599c83=a0_0x9226,_0x4a9bdd={'ycWdi':'searches','vopmc':_0x599c83(0x209),'mCCVU':_0x599c83(0x1e2),'WYPti':function(_0x565a2a,_0x20a3d7){return _0x565a2a!==_0x20a3d7;},'OIiPy':'Returning\x20formData:','vuPKw':function(_0x23e93a,_0x2c8264){return _0x23e93a(_0x2c8264);},'bWhqO':_0x599c83(0x21b),'hstDM':function(_0x31d3e8,_0x246365){return _0x31d3e8(_0x246365);}};return new Promise((_0x3a5706,_0x30c429)=>{const _0x5d344e=_0x599c83;chrome[_0x5d344e(0x1b2)][_0x5d344e(0x1c9)]['get']([_0x5d344e(0x1ea)],function(_0xd2299e){const _0x19d073=_0x5d344e;if(Object[_0x19d073(0x1b8)]['hasOwnProperty'][_0x19d073(0x1a1)](_0xd2299e,_0x4a9bdd[_0x19d073(0x21e)])){const _0xd7dbc0=_0xd2299e[_0x19d073(0x1ea)],_0x5e5e06=_0xd7dbc0[_0x19d073(0x1a6)](_0x1710e5=>_0x1710e5[_0x19d073(0x1c6)]===_0x34a979);console[_0x19d073(0x21a)](_0x4a9bdd[_0x19d073(0x1a5)],_0xd7dbc0),console[_0x19d073(0x21a)](_0x4a9bdd[_0x19d073(0x1a0)],_0x5e5e06),_0x4a9bdd[_0x19d073(0x213)](_0x5e5e06,-0x1)?(console[_0x19d073(0x21a)](_0x4a9bdd[_0x19d073(0x217)],_0xd7dbc0[_0x5e5e06][_0x19d073(0x1d8)]),_0x4a9bdd['vuPKw'](_0x3a5706,_0xd7dbc0[_0x5e5e06][_0x19d073(0x1d8)])):(console[_0x19d073(0x21a)](_0x19d073(0x20d)+_0x34a979+_0x19d073(0x1a9)),_0x3a5706(null));}else console[_0x19d073(0x21a)](_0x4a9bdd[_0x19d073(0x1f4)]),_0x4a9bdd[_0x19d073(0x1b6)](_0x3a5706,null);});});}