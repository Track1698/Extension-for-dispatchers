(function(_0x34f2a9,_0x56d4e2){const _0x40ff6d=a0_0x3acf,_0x33f032=_0x34f2a9();while(!![]){try{const _0x20e70e=parseInt(_0x40ff6d(0x96))/0x1+-parseInt(_0x40ff6d(0x6d))/0x2+-parseInt(_0x40ff6d(0x86))/0x3*(parseInt(_0x40ff6d(0xa4))/0x4)+parseInt(_0x40ff6d(0x9a))/0x5*(-parseInt(_0x40ff6d(0x79))/0x6)+-parseInt(_0x40ff6d(0x74))/0x7*(parseInt(_0x40ff6d(0x89))/0x8)+-parseInt(_0x40ff6d(0x7a))/0x9*(parseInt(_0x40ff6d(0x77))/0xa)+parseInt(_0x40ff6d(0xae))/0xb;if(_0x20e70e===_0x56d4e2)break;else _0x33f032['push'](_0x33f032['shift']());}catch(_0x30a1d9){_0x33f032['push'](_0x33f032['shift']());}}}(a0_0x22a5,0x6a021));import a0_0x16b1d0 from'./alerts.js';import{backendAddress}from'./main.js';import{getEmail,getCompanyId,getLoginKey,getAccountType}from'./state.js';function a0_0x22a5(){const _0x5910d8=['IrCte','qCrlJ','createTextNode','Error\x20saving\x20blacklist\x20to\x20storage','delete-table-row-button','type','runtime','NwHQc','status','PPuKb','126555uQOnUJ','IXRim','Storage\x20Error','idjTF','244175yUPnAh','storage','cSHrB','className','company','cjMUk','json','remove','lqPYh','nhgmD','64unNWsp','tableBody','isArray','click','DFUmf','application/json','CkLrc','rows','CABiK','Error\x20updating\x20blacklist:','18338309dSaOgP','length','addEventListener','DNaiV','robFx','ljMga','/api/updateblacklist','createElement','Server\x20responded\x20with\x20status\x20','VdCVM','EwsnO','Error\x20retrieving\x20blacklist\x20data\x20from\x20storage','personal','Could\x20not\x20add\x20entry\x20to\x20database','248852LtdkZo','blacklist','JsjCe','getElementById','JKTZp','Error','VQoSq','59038wANTee','lastError','yuSrA','801530EHUOIo','value','42TtFvdU','18FMiaed','appendChild','addBlacklistItemScopeInput','removeChild','deleteRow','ZnzDZ','Error\x20in\x20updateBlacklistInStorage:','DnGBe','scope','Could\x20not\x20remove\x20entry\x20from\x20database','tnyZd','Error\x20in\x20loadBlacklist:','131091LyVZdY','OaHwr','forEach','32IGPdXI','manager','error'];a0_0x22a5=function(){return _0x5910d8;};return a0_0x22a5();}function a0_0x3acf(_0x35ee97,_0x3d6bef){const _0x22a5ec=a0_0x22a5();return a0_0x3acf=function(_0x3acf3d,_0x5e85dd){_0x3acf3d=_0x3acf3d-0x66;let _0x525c9c=_0x22a5ec[_0x3acf3d];return _0x525c9c;},a0_0x3acf(_0x35ee97,_0x3d6bef);}export function populateBlacklistTable(_0x4751dc){const _0x149ed4=a0_0x3acf,_0x3f517b={'DnGBe':function(_0x5e1ea0,_0x39fe0e){return _0x5e1ea0===_0x39fe0e;},'DNaiV':_0x149ed4(0x6b),'ljMga':function(_0x56ffd9,_0x4ddfcf){return _0x56ffd9!==_0x4ddfcf;},'NSKXd':function(_0x429a31,_0xb65835,_0x593338,_0x542305){return _0x429a31(_0xb65835,_0x593338,_0x542305);},'VdCVM':function(_0x22b2e0,_0x3142a6){return _0x22b2e0>_0x3142a6;}},_0x3c34e0=document[_0x149ed4(0x70)](_0x149ed4(0xa5));while(_0x3f517b[_0x149ed4(0x68)](_0x3c34e0['rows']['length'],0x1)){_0x3c34e0[_0x149ed4(0x7e)](0x1);}Array[_0x149ed4(0xa6)](_0x4751dc)?(_0x4751dc['sort']((_0x35ccc7,_0x2c6da4)=>{const _0x330904=_0x149ed4;if(_0x3f517b[_0x330904(0x81)](_0x35ccc7[_0x330904(0x82)],_0x3f517b[_0x330904(0xb1)])&&_0x3f517b[_0x330904(0xb3)](_0x2c6da4[_0x330904(0x82)],_0x3f517b[_0x330904(0xb1)]))return-0x1;if(_0x35ccc7['scope']!==_0x330904(0x6b)&&_0x3f517b['DnGBe'](_0x2c6da4[_0x330904(0x82)],_0x3f517b[_0x330904(0xb1)]))return 0x1;return 0x0;}),_0x4751dc[_0x149ed4(0x88)]((_0x436f5a,_0x394587)=>{_0x3f517b['NSKXd'](addRowToTable,_0x3c34e0,_0x436f5a,_0x394587);})):_0x3f517b['NSKXd'](addRowToTable,_0x3c34e0,_0x4751dc,0x0);}export function loadBlacklist(){const _0x47f041=a0_0x3acf,_0x35a175={'MzjqK':_0x47f041(0x6a),'QiwPb':_0x47f041(0x7c),'igtMb':_0x47f041(0x85),'PPuKb':'Error\x20loading\x20blacklist','FVUvo':'Error'},_0x508c69=getAccountType();_0x508c69!==_0x47f041(0x8a)&&(document[_0x47f041(0x70)](_0x35a175['QiwPb'])['disabled']=!![]);try{chrome[_0x47f041(0x9b)]['local']['get']('blacklist',_0x40da3d=>{const _0x598572=_0x47f041;if(chrome[_0x598572(0x92)][_0x598572(0x75)]){a0_0x16b1d0['error'](_0x35a175['MzjqK'],_0x598572(0x98));return;}const _0x3ba8fe=_0x40da3d['blacklist']||{},_0x3a53bb=Object['values'](_0x3ba8fe);populateBlacklistTable(_0x3a53bb);});}catch(_0x2f6bee){console[_0x47f041(0x8b)](_0x35a175['igtMb'],_0x2f6bee),a0_0x16b1d0[_0x47f041(0x8b)](_0x35a175[_0x47f041(0x95)],_0x35a175['FVUvo']);}}export async function removeBlacklistEntry(_0x69561f,_0x10a874,_0x22e572){const _0x2aa72f=a0_0x3acf,_0x27ce7a={'kRCvv':function(_0x45bb6,_0x37f159,_0x546a68){return _0x45bb6(_0x37f159,_0x546a68);},'lqPYh':_0x2aa72f(0xa1),'idjTF':function(_0x106c31,_0x512e15){return _0x106c31===_0x512e15;},'JKTZp':_0x2aa72f(0x83),'OaHwr':'Error','EGiVy':function(_0x190c08,_0x2d3ca2){return _0x190c08(_0x2d3ca2);}},_0x5c0092={'type':_0x69561f,'value':_0x10a874,'scope':_0x22e572},_0x159f89=await _0x27ce7a['kRCvv'](updateBlacklistInDatabase,_0x5c0092,_0x27ce7a[_0x2aa72f(0xa2)]);if(!_0x159f89||_0x27ce7a[_0x2aa72f(0x99)](_0x159f89[_0x2aa72f(0xaf)],0x0))return a0_0x16b1d0[_0x2aa72f(0x8b)](_0x27ce7a[_0x2aa72f(0x71)],_0x27ce7a[_0x2aa72f(0x87)]),![];return _0x27ce7a['EGiVy'](updateBlacklistInStorage,_0x159f89),!![];}export async function updateBlacklistInDatabase(_0x2fdd1e,_0xa48433){const _0x3339b5=a0_0x3acf,_0x52c393={'IXRim':'POST','tnyZd':_0x3339b5(0xad),'CABiK':'Error\x20updating\x20item\x20in\x20blacklist'};try{const _0x45537c=getEmail(),_0x90fb61=getCompanyId(),_0x32b88c=getLoginKey(),_0x41b5dc=backendAddress+_0x3339b5(0xb4),_0x40662d={'companyId':_0x90fb61,'email':_0x45537c,'loginKey':_0x32b88c,'type':_0x2fdd1e['type'],'value':_0x2fdd1e[_0x3339b5(0x78)],'scope':_0x2fdd1e['scope'],'action':_0xa48433},_0xa0378d=await fetch(_0x41b5dc,{'method':_0x52c393[_0x3339b5(0x97)],'headers':{'Content-Type':_0x3339b5(0xa9)},'body':JSON['stringify'](_0x40662d)});if(!_0xa0378d['ok']){const _0x5f4517=_0x3339b5(0x67)+_0xa0378d[_0x3339b5(0x94)];throw new Error(_0x5f4517);}const _0x239ce9=await _0xa0378d[_0x3339b5(0xa0)]();return _0x239ce9[_0x3339b5(0x6e)];}catch(_0x54ef56){return console[_0x3339b5(0x8b)](_0x52c393[_0x3339b5(0x84)],_0x54ef56),a0_0x16b1d0[_0x3339b5(0x8b)](_0x52c393[_0x3339b5(0xac)],_0x3339b5(0x72)),[];}}export function updateBlacklistInStorage(_0x4ba3bf){const _0x368a79=a0_0x3acf,_0x5e0c46={'ZnzDZ':_0x368a79(0x8f),'NwHQc':_0x368a79(0x98),'JsjCe':_0x368a79(0x80),'EwsnO':'Error\x20updating\x20storage'};try{chrome[_0x368a79(0x9b)]['local']['set']({'blacklist':_0x4ba3bf},function(){const _0x184ed8=_0x368a79;chrome[_0x184ed8(0x92)][_0x184ed8(0x75)]&&a0_0x16b1d0[_0x184ed8(0x8b)](_0x5e0c46[_0x184ed8(0x7f)],_0x5e0c46[_0x184ed8(0x93)]);});}catch(_0x17a0c0){console[_0x368a79(0x8b)](_0x5e0c46[_0x368a79(0x6f)],_0x17a0c0),a0_0x16b1d0['error'](_0x5e0c46[_0x368a79(0x69)],_0x5e0c46[_0x368a79(0x93)]);}}export function addRowToTable(_0x1154e3,_0x13902a,_0x43112b){const _0x5303c9=a0_0x3acf,_0x1eb181={'IrCte':function(_0x52a8f9,_0x344546,_0x27de13,_0x1966a9){return _0x52a8f9(_0x344546,_0x27de13,_0x1966a9);},'kURVh':function(_0x3ddf57,_0x3f359e){return _0x3ddf57+_0x3f359e;},'DFUmf':function(_0x12e75a){return _0x12e75a();},'eWTFS':function(_0x22ced1,_0x2e9ebf){return _0x22ced1===_0x2e9ebf;},'uWGkK':_0x5303c9(0x8a),'cSHrB':function(_0x30ce9d,_0x4cf736){return _0x30ce9d!==_0x4cf736;},'yuSrA':_0x5303c9(0x9e),'qCrlJ':'button','fogWM':_0x5303c9(0xa7)},_0x31bcfe=_0x1eb181['kURVh'](_0x43112b,0x1),_0x230a07=document['createElement']('tr'),_0x176480={'numbering':_0x31bcfe,..._0x13902a},_0x568c55=document[_0x5303c9(0x66)]('td');_0x568c55[_0x5303c9(0x7b)](document[_0x5303c9(0x8e)](_0x31bcfe)),_0x230a07[_0x5303c9(0x7b)](_0x568c55);const _0x153dff=document[_0x5303c9(0x66)]('td');_0x153dff[_0x5303c9(0x7b)](document['createTextNode'](_0x176480[_0x5303c9(0x91)])),_0x230a07[_0x5303c9(0x7b)](_0x153dff);const _0x225888=document[_0x5303c9(0x66)]('td');_0x225888[_0x5303c9(0x7b)](document['createTextNode'](_0x176480[_0x5303c9(0x78)])),_0x230a07[_0x5303c9(0x7b)](_0x225888);const _0x425b39=document[_0x5303c9(0x66)]('td');_0x425b39[_0x5303c9(0x7b)](document[_0x5303c9(0x8e)](_0x176480[_0x5303c9(0x82)])),_0x230a07[_0x5303c9(0x7b)](_0x425b39);const _0x57a5f9=document[_0x5303c9(0x66)]('td'),_0x5b739e=_0x1eb181[_0x5303c9(0xa8)](getAccountType);if(_0x1eb181['eWTFS'](_0x5b739e,_0x1eb181['uWGkK'])||_0x1eb181[_0x5303c9(0x9c)](_0x176480[_0x5303c9(0x82)],_0x1eb181[_0x5303c9(0x76)])){const _0x3e6812=document['createElement'](_0x1eb181[_0x5303c9(0x8d)]);_0x3e6812[_0x5303c9(0x9d)]=_0x5303c9(0x90),_0x3e6812[_0x5303c9(0xb0)](_0x1eb181['fogWM'],async function(){const _0x9436a0=_0x5303c9,_0x528ad9=await _0x1eb181[_0x9436a0(0x8c)](removeBlacklistEntry,_0x176480[_0x9436a0(0x91)],_0x176480[_0x9436a0(0x78)],_0x176480[_0x9436a0(0x82)]);_0x528ad9&&_0x1154e3[_0x9436a0(0x7d)](_0x230a07);}),_0x57a5f9['appendChild'](_0x3e6812);}_0x230a07['appendChild'](_0x57a5f9),_0x1154e3[_0x5303c9(0x7b)](_0x230a07);}export async function addBlacklistEntry(_0x4ec4c6,_0x3a5278,_0x31161e){const _0x44a5e0=a0_0x3acf,_0x2bf153={'CkLrc':'add','robFx':_0x44a5e0(0x6c),'wXuno':_0x44a5e0(0x72),'VQoSq':function(_0x43c7bb,_0x2d8e53){return _0x43c7bb(_0x2d8e53);},'nhgmD':_0x44a5e0(0xa5),'cjMUk':function(_0x1e4787,_0x40db32,_0xd0b66,_0x7ef98b){return _0x1e4787(_0x40db32,_0xd0b66,_0x7ef98b);}},_0x10505e={'type':_0x4ec4c6,'value':_0x3a5278,'scope':_0x31161e},_0x380272=await updateBlacklistInDatabase(_0x10505e,_0x2bf153[_0x44a5e0(0xaa)]);if(!_0x380272||_0x380272['length']===0x0){a0_0x16b1d0[_0x44a5e0(0x8b)](_0x2bf153[_0x44a5e0(0xb2)],_0x2bf153['wXuno']);return;}_0x2bf153[_0x44a5e0(0x73)](updateBlacklistInStorage,_0x380272);const _0x35f0f1=document['getElementById'](_0x2bf153[_0x44a5e0(0xa3)]),_0x2babef=_0x35f0f1[_0x44a5e0(0xab)]['length']-0x1;_0x2bf153[_0x44a5e0(0x9f)](addRowToTable,_0x35f0f1,_0x10505e,_0x2babef);}