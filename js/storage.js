(function(_0x29308a,_0x3c9289){const _0x136278=a0_0x118f,_0x3f7561=_0x29308a();while(!![]){try{const _0x7cf4bf=-parseInt(_0x136278(0x13c))/0x1+parseInt(_0x136278(0x15c))/0x2*(-parseInt(_0x136278(0x145))/0x3)+-parseInt(_0x136278(0x190))/0x4+parseInt(_0x136278(0x17b))/0x5*(parseInt(_0x136278(0x16b))/0x6)+-parseInt(_0x136278(0x18c))/0x7+-parseInt(_0x136278(0x1aa))/0x8*(-parseInt(_0x136278(0x17e))/0x9)+parseInt(_0x136278(0x15d))/0xa;if(_0x7cf4bf===_0x3c9289)break;else _0x3f7561['push'](_0x3f7561['shift']());}catch(_0x3f7c68){_0x3f7561['push'](_0x3f7561['shift']());}}}(a0_0x4de9,0xb4d36));import a0_0x23c860 from'./alerts.js';import{changedSearches,refreshAlertsUI}from'./utils.js';export function saveToLocal(_0x3c9cea,_0x4d472a){const _0x54a83c=a0_0x118f;chrome[_0x54a83c(0x1a8)][_0x54a83c(0x189)][_0x54a83c(0x157)]({[_0x3c9cea]:_0x4d472a},()=>{const _0x24ae82=_0x54a83c;chrome['runtime'][_0x24ae82(0x141)]?console[_0x24ae82(0x196)](_0x24ae82(0x14e)+_0x3c9cea+':',chrome['runtime'][_0x24ae82(0x141)]):console[_0x24ae82(0x183)](_0x3c9cea+_0x24ae82(0x174));});}export function getFromLocal(_0x4e8888,_0x35aaee){const _0x3dcc0f=a0_0x118f,_0x38368d={'NCXJH':function(_0x55cd37,_0x5ce89d){return _0x55cd37(_0x5ce89d);}};chrome[_0x3dcc0f(0x1a8)][_0x3dcc0f(0x189)][_0x3dcc0f(0x143)]([_0x4e8888],_0xed24fc=>{const _0x2b4b37=_0x3dcc0f;chrome[_0x2b4b37(0x14d)][_0x2b4b37(0x141)]?console['error'](_0x2b4b37(0x185)+_0x4e8888+':',chrome['runtime'][_0x2b4b37(0x141)]):_0x38368d[_0x2b4b37(0x173)](_0x35aaee,_0xed24fc[_0x4e8888]);});}export function removeFromLocal(_0x1e87ee,_0x5defba){const _0x20bd21=a0_0x118f;chrome[_0x20bd21(0x1a8)][_0x20bd21(0x189)][_0x20bd21(0x140)]([_0x1e87ee],()=>{const _0x3825fd=_0x20bd21;if(chrome[_0x3825fd(0x14d)][_0x3825fd(0x141)])console[_0x3825fd(0x196)](_0x3825fd(0x198)+_0x1e87ee+':',chrome['runtime'][_0x3825fd(0x141)]);else{console[_0x3825fd(0x183)](_0x1e87ee+_0x3825fd(0x167));if(_0x5defba)_0x5defba();}});}export async function saveSearchInStorage(_0x1be976){const _0x4c05c0=a0_0x118f,_0x245939={'JHSoX':_0x4c05c0(0x169),'YJdOj':function(_0x1817b2,_0x36edce){return _0x1817b2>=_0x36edce;},'TMZgA':'Maximum\x20limit\x20of\x205\x20search\x20filters\x20reached.','VGbiy':_0x4c05c0(0x19f),'KXGJN':_0x4c05c0(0x142),'LaZdA':_0x4c05c0(0x16a)};console['log'](_0x245939[_0x4c05c0(0x18a)],_0x1be976),chrome['storage'][_0x4c05c0(0x189)][_0x4c05c0(0x143)]({'searches':[]},function(_0x1172af){const _0x5d69c0=_0x4c05c0,_0x8eb947={'CLRtC':_0x245939['JHSoX']},_0x5f1f20=_0x1172af[_0x5d69c0(0x171)];console[_0x5d69c0(0x183)](_0x5d69c0(0x1a7),_0x5f1f20);if(_0x245939[_0x5d69c0(0x1a4)](_0x5f1f20['length'],0x5))a0_0x23c860[_0x5d69c0(0x196)](_0x245939[_0x5d69c0(0x160)],_0x245939[_0x5d69c0(0x15a)],{'displayDuration':0xbb8});else{const _0x4e6bff=_0x5f1f20[_0x5d69c0(0x14b)](_0xa2d0fe=>_0xa2d0fe[_0x5d69c0(0x18d)]===_0x1be976['searchName']);_0x4e6bff?a0_0x23c860[_0x5d69c0(0x196)](_0x5d69c0(0x19d)+_0x1be976[_0x5d69c0(0x18d)]+'\x27\x20already\x20exists.',_0x245939[_0x5d69c0(0x15a)],{'displayDuration':0xbb8}):(_0x5f1f20[_0x5d69c0(0x163)](_0x1be976),console['log'](_0x245939[_0x5d69c0(0x16c)],_0x5f1f20),chrome[_0x5d69c0(0x1a8)][_0x5d69c0(0x189)][_0x5d69c0(0x157)]({'searches':_0x5f1f20},function(){const _0x1126e2=_0x5d69c0;chrome[_0x1126e2(0x14d)]['lastError']?console[_0x1126e2(0x196)](chrome[_0x1126e2(0x14d)][_0x1126e2(0x141)]):(a0_0x23c860['success'](_0x8eb947[_0x1126e2(0x14a)],_0x1126e2(0x1a5),{'displayDuration':0x7d0}),console['log'](_0x1126e2(0x1a9),_0x1be976[_0x1126e2(0x18d)]));}));}});}export function getSearchesFromStorage(_0x446258){const _0x2cb6c5=a0_0x118f,_0x1acab3={'ooOBI':function(_0xf527aa,_0x1472cd){return _0xf527aa(_0x1472cd);}};chrome[_0x2cb6c5(0x1a8)]['local'][_0x2cb6c5(0x143)]({'searches':[]},function(_0xde1241){const _0x201c0b=_0x2cb6c5;chrome[_0x201c0b(0x14d)][_0x201c0b(0x141)]?console['error'](_0x201c0b(0x146),chrome[_0x201c0b(0x14d)]['lastError']):_0x1acab3['ooOBI'](_0x446258,_0xde1241[_0x201c0b(0x171)]);});}export function removeSearchFromStorage(_0x415757,_0x477537){const _0x29f43b=a0_0x118f,_0x390eed={'KMinV':function(_0x45ef4d){return _0x45ef4d();}};chrome['storage']['local'][_0x29f43b(0x143)]({'searches':[]},function(_0x3c908f){const _0x5a4122=_0x29f43b,_0x5ec525={'NRYnT':function(_0x4af4fb){return _0x390eed['KMinV'](_0x4af4fb);}};let _0x51125e=_0x3c908f['searches']||[];_0x51125e=_0x51125e[_0x5a4122(0x16f)](_0x327fad=>_0x327fad[_0x5a4122(0x18d)]!==_0x415757),chrome[_0x5a4122(0x1a8)][_0x5a4122(0x189)][_0x5a4122(0x157)]({'searches':_0x51125e},function(){const _0x465544=_0x5a4122;if(chrome[_0x465544(0x14d)][_0x465544(0x141)])console['error'](_0x465544(0x180)+_0x415757+'\x27:',chrome[_0x465544(0x14d)][_0x465544(0x141)]);else{console[_0x465544(0x183)](_0x465544(0x19b)+_0x415757+_0x465544(0x179));if(_0x477537)_0x5ec525[_0x465544(0x182)](_0x477537);}});});}export function getStoredData(_0x2ff2ca){const _0x3889a8={'xqNYq':function(_0x917a60,_0xf74813){return _0x917a60(_0xf74813);}};return new Promise(_0x51cfbe=>{const _0x3341fa=a0_0x118f;chrome[_0x3341fa(0x1a8)][_0x3341fa(0x189)]['get'](_0x2ff2ca,function(_0x48448d){const _0xb91c92=_0x3341fa;_0x3889a8[_0xb91c92(0x150)](_0x51cfbe,_0x48448d);});});}export function updateAlertsFilter(_0x21955e){const _0x3a2c74=a0_0x118f,_0x1bb607={'EkIlJ':function(_0x275cfa,_0x433722){return _0x275cfa(_0x433722);},'jzSNB':_0x3a2c74(0x17f),'FTPyO':_0x3a2c74(0x13d),'svZxu':_0x3a2c74(0x13e)},_0x1d1b60=document[_0x3a2c74(0x13f)](_0x1bb607[_0x3a2c74(0x187)]);_0x1d1b60[_0x3a2c74(0x168)]='';const _0x551e1a=document['createElement']('option');_0x551e1a[_0x3a2c74(0x175)]=_0x1bb607[_0x3a2c74(0x197)],_0x551e1a[_0x3a2c74(0x18f)]=_0x1bb607[_0x3a2c74(0x148)],_0x1d1b60[_0x3a2c74(0x15b)](_0x551e1a),_0x21955e['forEach'](_0x41ec7e=>{const _0x272dd9=_0x3a2c74,_0x263437=document['createElement'](_0x272dd9(0x186));_0x263437[_0x272dd9(0x175)]=_0x41ec7e,_0x263437[_0x272dd9(0x18f)]=_0x41ec7e,_0x1d1b60[_0x272dd9(0x15b)](_0x263437);}),_0x1d1b60[_0x3a2c74(0x193)](_0x3a2c74(0x147),()=>{const _0xf9d25e=_0x3a2c74,_0x5c4653=_0x1d1b60[_0xf9d25e(0x175)];_0x1bb607[_0xf9d25e(0x144)](refreshAlertsUI,_0x5c4653);});}function a0_0x118f(_0x57025e,_0x577bd1){const _0x4de9a9=a0_0x4de9();return a0_0x118f=function(_0x118fcf,_0x17e83d){_0x118fcf=_0x118fcf-0x13b;let _0x7739f3=_0x4de9a9[_0x118fcf];return _0x7739f3;},a0_0x118f(_0x57025e,_0x577bd1);}export function clearLoadAlerts(){const _0x418a42=a0_0x118f,_0x45dedb={'pLfZc':function(_0x47af53){return _0x47af53();},'rqEpb':_0x418a42(0x17f),'ddUZP':function(_0x558ea0,_0x2dce12){return _0x558ea0===_0x2dce12;},'yHqsi':'all'},_0x4f39f4=document['getElementById'](_0x45dedb['rqEpb'])[_0x418a42(0x175)];_0x45dedb[_0x418a42(0x15e)](_0x4f39f4,_0x45dedb[_0x418a42(0x194)])?(chrome[_0x418a42(0x1a8)][_0x418a42(0x189)][_0x418a42(0x157)]({'storedData':[]}),_0x45dedb['pLfZc'](updateSearchNamesInStorage)):chrome[_0x418a42(0x1a8)][_0x418a42(0x189)][_0x418a42(0x143)]([_0x418a42(0x149)],function(_0xc056e5){const _0x4858c8=_0x418a42,_0x4f8be8=_0xc056e5[_0x4858c8(0x149)]||[],_0x4d3bac=_0x4f8be8[_0x4858c8(0x16f)](_0x528da4=>_0x528da4['name']!==_0x4f39f4);_0x45dedb[_0x4858c8(0x184)](updateSearchNamesInStorage),chrome['storage'][_0x4858c8(0x189)][_0x4858c8(0x157)]({'storedData':_0x4d3bac});});}export async function updateSearchNamesInStorage(){const _0x54b7d0=a0_0x118f,_0x49e4e6={'ZTmSK':_0x54b7d0(0x158),'bQSZn':function(_0x372bf4,_0xa1efd8){return _0x372bf4!==_0xa1efd8;},'tuawQ':function(_0x13f703,_0x4d431d){return _0x13f703(_0x4d431d);},'XTtOE':function(_0x2a62d4,_0x158040){return _0x2a62d4(_0x158040);},'LpKNz':_0x54b7d0(0x13d),'yWHAm':'storedData','PcAPL':_0x54b7d0(0x171)};chrome['storage']['local'][_0x54b7d0(0x143)]([_0x54b7d0(0x13b),_0x49e4e6[_0x54b7d0(0x176)],_0x49e4e6[_0x54b7d0(0x19a)]],function(_0x1c618b){const _0x577343=_0x54b7d0;console[_0x577343(0x183)](_0x1c618b);let _0x24eb5e=_0x1c618b[_0x577343(0x13b)]||[],_0x1f4e60=_0x1c618b[_0x577343(0x149)]||[],_0x1f5605=_0x1c618b[_0x577343(0x171)]||[];const _0x4fc963=_0x1f4e60['map'](_0x10893c=>_0x10893c['name']),_0x5e85d7=_0x1f5605[_0x577343(0x14f)](_0x26eb4b=>_0x26eb4b[_0x577343(0x18d)]),_0x285121=[...new Set([..._0x4fc963,..._0x5e85d7])];let _0x2e9f7f=_0x285121;console['log'](_0x49e4e6[_0x577343(0x15f)],_0x2e9f7f),_0x49e4e6[_0x577343(0x181)](JSON[_0x577343(0x178)](_0x24eb5e),JSON[_0x577343(0x178)](_0x2e9f7f))&&(_0x49e4e6[_0x577343(0x16e)](updateAlertsFilter,_0x2e9f7f),_0x49e4e6[_0x577343(0x19e)](refreshAlertsUI,_0x49e4e6[_0x577343(0x17d)])),chrome[_0x577343(0x1a8)][_0x577343(0x189)][_0x577343(0x157)]({'searchNames':_0x2e9f7f});});}export function saveTelegramIdToLocalStorage(_0x52ebef){const _0x32803e=a0_0x118f;chrome['storage'][_0x32803e(0x189)][_0x32803e(0x157)]({'telegramId':_0x52ebef},function(){setTimeout(()=>{const _0x276b6e=a0_0x118f;chrome['runtime'][_0x276b6e(0x1a3)]({'action':_0x276b6e(0x199)});},0x1f4);});}export function updateMinutes(){const _0x207a1e=a0_0x118f,_0x4351e1={'lMnnb':function(_0x2acde7,_0xd407f5){return _0x2acde7/_0xd407f5;},'UCzNK':_0x207a1e(0x153),'zaTsB':_0x207a1e(0x188),'dcziK':_0x207a1e(0x170),'SYYZM':_0x207a1e(0x1a0),'TbTzz':_0x207a1e(0x149)};chrome['storage'][_0x207a1e(0x189)]['get']([_0x4351e1[_0x207a1e(0x159)]],function(_0x2305a6){const _0x583a66=_0x207a1e,_0x4221de={'Thjlq':function(_0x59bdfa,_0x18d3b2){return _0x4351e1['lMnnb'](_0x59bdfa,_0x18d3b2);},'pxwoW':function(_0x52c94e,_0x37b2f7){return _0x52c94e>=_0x37b2f7;},'Lzyno':_0x4351e1[_0x583a66(0x191)],'ufBfc':function(_0x44f885,_0x5bf2f8){return _0x44f885+_0x5bf2f8;},'IhQuf':_0x4351e1['zaTsB'],'kQabO':_0x4351e1[_0x583a66(0x151)],'zlpxe':_0x4351e1[_0x583a66(0x192)]},_0x1f03a1=_0x2305a6['storedData']||[];_0x1f03a1[_0x583a66(0x161)](_0x4b7f3a=>{const _0x315c05=_0x583a66,_0x5a9667=new Date(),_0x3250df=new Date(_0x4b7f3a['createdDate']),_0x58bb45=_0x5a9667-_0x3250df,_0x3657b3=Math['floor'](_0x4221de[_0x315c05(0x19c)](_0x58bb45,0x3e8*0x3c));let _0x123931;if(_0x4221de[_0x315c05(0x17c)](_0x3657b3,0x3c)){const _0x327a89=Math['floor'](_0x4221de[_0x315c05(0x19c)](_0x3657b3,0x3c));_0x123931=_0x327a89+_0x4221de[_0x315c05(0x152)];}else{if(_0x3657b3<0x1){const _0x4bdd25=Math['floor'](_0x4221de['Thjlq'](_0x58bb45,0x3e8));_0x123931=_0x4221de[_0x315c05(0x195)](_0x4bdd25,_0x4221de[_0x315c05(0x17a)]);}else _0x123931=_0x4221de['ufBfc'](_0x3657b3,_0x4221de[_0x315c05(0x156)]);}const _0x3e6732=document[_0x315c05(0x172)](_0x315c05(0x1a2)+_0x4b7f3a['id']+'\x22]');_0x3e6732&&(_0x3e6732['children'][0x0][_0x315c05(0x16d)]=_0x123931,_0x3e6732[_0x315c05(0x166)](_0x4221de[_0x315c05(0x18b)],_0x4b7f3a['id']));});});}export async function removeSearch(_0x4cd69f){const _0x201e99=a0_0x118f,_0xf89237={'qQovs':_0x201e99(0x18e),'gvjWI':function(_0x4f6ff4){return _0x4f6ff4();},'rVXak':_0x201e99(0x162),'MUWxU':_0x201e99(0x171)};chrome[_0x201e99(0x1a8)]['local'][_0x201e99(0x143)]([_0xf89237[_0x201e99(0x1a6)]],function(_0x50f9){const _0x58a059=_0x201e99;if(_0x50f9[_0x58a059(0x177)](_0x58a059(0x171))){const _0x450a02=_0x50f9['searches'],_0x48da4e=_0x450a02[_0x58a059(0x155)](_0x558e59=>_0x558e59['searchName']===_0x4cd69f);_0x48da4e!==-0x1?(_0x450a02['splice'](_0x48da4e,0x1),chrome['storage'][_0x58a059(0x189)]['set']({'searches':_0x450a02},function(){const _0x1cf710=_0x58a059;a0_0x23c860[_0x1cf710(0x164)](_0x1cf710(0x19d)+_0x4cd69f+_0x1cf710(0x179),_0xf89237[_0x1cf710(0x154)],{'displayDuration':0xbb8}),_0xf89237[_0x1cf710(0x1a1)](updateSearchNamesInStorage),changedSearches();})):console[_0x58a059(0x183)](_0x58a059(0x19d)+_0x4cd69f+_0x58a059(0x14c));}else console[_0x58a059(0x183)](_0xf89237[_0x58a059(0x165)]);});}function a0_0x4de9(){const _0x49993c=['Search\x20with\x20name\x20\x27','XTtOE','Error','data-target','gvjWI','[data-target=\x22','sendMessage','YJdOj','Info','MUWxU','Retrieved\x20existing\x20searches:','storage','Search\x20saved:','457208paGRfX','searchNames','675677DLfoIm','all','Show\x20All','getElementById','remove','lastError','Adding\x20new\x20search\x20to\x20existing\x20searches:','get','EkIlJ','14541oQWRRB','Error\x20retrieving\x20searches:','change','svZxu','storedData','CLRtC','find','\x27\x20not\x20found.','runtime','Error\x20saving\x20','map','xqNYq','dcziK','Lzyno','\x20Hour(s)','qQovs','findIndex','kQabO','set','updated:\x20','TbTzz','VGbiy','appendChild','202AlhuuB','18709550UElrjz','ddUZP','ZTmSK','TMZgA','forEach','No\x20searches\x20found\x20in\x20storage.','push','trash','rVXak','setAttribute','\x20removed\x20successfully.','innerHTML','Search\x20saved\x20successfully!','Attempting\x20to\x20save\x20search:','264oihaRc','KXGJN','innerText','tuawQ','filter','\x20Min','searches','querySelector','NCXJH','\x20saved\x20successfully.','value','yWHAm','hasOwnProperty','stringify','\x27\x20removed\x20successfully.','IhQuf','27865iYPfmv','pxwoW','LpKNz','207DQtnmX','alertsFilterSelect','Error\x20removing\x20search\x20\x27','bQSZn','NRYnT','log','pLfZc','Error\x20retrieving\x20','option','jzSNB','\x20Second(s)','local','LaZdA','zlpxe','7628824RaKlzD','searchName','Search\x20Filter\x20Deleted','text','1739688dpVuvn','UCzNK','SYYZM','addEventListener','yHqsi','ufBfc','error','FTPyO','Error\x20removing\x20','changedTelegram','PcAPL','Search\x20\x27','Thjlq'];a0_0x4de9=function(){return _0x49993c;};return a0_0x4de9();}export function updateBlacklistInStorage(_0x33186a){const _0x341230=a0_0x118f;chrome['storage'][_0x341230(0x189)][_0x341230(0x157)]({'blacklist':_0x33186a},function(){});}