(function(_0x1c8422,_0x5b227d){const _0x394ed8=a0_0x2b7f,_0x222b9b=_0x1c8422();while(!![]){try{const _0x9893d6=-parseInt(_0x394ed8(0xdb))/0x1*(parseInt(_0x394ed8(0xf1))/0x2)+-parseInt(_0x394ed8(0xb1))/0x3+parseInt(_0x394ed8(0xc3))/0x4+parseInt(_0x394ed8(0xbf))/0x5*(-parseInt(_0x394ed8(0xa8))/0x6)+parseInt(_0x394ed8(0xe4))/0x7*(-parseInt(_0x394ed8(0xe5))/0x8)+parseInt(_0x394ed8(0xec))/0x9+parseInt(_0x394ed8(0xd7))/0xa;if(_0x9893d6===_0x5b227d)break;else _0x222b9b['push'](_0x222b9b['shift']());}catch(_0x448c53){_0x222b9b['push'](_0x222b9b['shift']());}}}(a0_0x50e4,0x96886));import a0_0x5b5012 from'./alerts.js';import{backendAddress}from'./main.js';function a0_0x2b7f(_0x483653,_0x3e437b){const _0x50e46d=a0_0x50e4();return a0_0x2b7f=function(_0x2b7fd4,_0x393f84){_0x2b7fd4=_0x2b7fd4-0xa0;let _0x840c3e=_0x50e46d[_0x2b7fd4];return _0x840c3e;},a0_0x2b7f(_0x483653,_0x3e437b);}import{getEmail,getCompanyId,getLoginKey,getAccountType}from'./state.js';export function populateBlacklistTable(_0x55962b){const _0x48fcf6=a0_0x2b7f,_0x54a2f5={'QYeLr':function(_0x3fdc03,_0x117e9d){return _0x3fdc03===_0x117e9d;},'clVRE':_0x48fcf6(0xcd),'tuwyF':function(_0x317adf,_0x323fe9){return _0x317adf!==_0x323fe9;},'gLtsN':_0x48fcf6(0xd1),'uiaaY':function(_0x5c243,_0x56b2a1){return _0x5c243>_0x56b2a1;},'CLImO':function(_0x447db2,_0x169918,_0xd4802a,_0x44706f){return _0x447db2(_0x169918,_0xd4802a,_0x44706f);}},_0x256bf8=document[_0x48fcf6(0xb6)](_0x54a2f5[_0x48fcf6(0xea)]);while(_0x54a2f5[_0x48fcf6(0xf4)](_0x256bf8[_0x48fcf6(0xdc)][_0x48fcf6(0xc4)],0x1)){_0x256bf8[_0x48fcf6(0xaa)](0x1);}Array[_0x48fcf6(0xe0)](_0x55962b)?(_0x55962b[_0x48fcf6(0xf3)]((_0x484738,_0x3934a7)=>{const _0xf526be=_0x48fcf6;if(_0x54a2f5[_0xf526be(0xe1)](_0x484738['scope'],_0x54a2f5[_0xf526be(0xa2)])&&_0x54a2f5[_0xf526be(0xb8)](_0x3934a7[_0xf526be(0xd9)],'personal'))return-0x1;if(_0x484738[_0xf526be(0xd9)]!==_0x54a2f5[_0xf526be(0xa2)]&&_0x54a2f5[_0xf526be(0xe1)](_0x3934a7[_0xf526be(0xd9)],_0x54a2f5[_0xf526be(0xa2)]))return 0x1;return 0x0;}),_0x55962b[_0x48fcf6(0xaf)]((_0xcb6ec8,_0x56c586)=>{addRowToTable(_0x256bf8,_0xcb6ec8,_0x56c586);})):_0x54a2f5[_0x48fcf6(0xed)](addRowToTable,_0x256bf8,_0x55962b,0x0);}export function loadBlacklist(){const _0x51662b=a0_0x2b7f,_0x20477a={'ATwfU':'Error\x20retrieving\x20blacklist\x20data\x20from\x20storage','LmccB':_0x51662b(0xc8),'PVHMP':function(_0x518bdc,_0x2090de){return _0x518bdc(_0x2090de);},'erEia':function(_0x45da09,_0x102d38){return _0x45da09!==_0x102d38;},'xciFp':_0x51662b(0xa0),'IVVKT':_0x51662b(0xba),'iQTVt':_0x51662b(0xa5),'mFeHo':_0x51662b(0xad)},_0x2c9d26=getAccountType();_0x20477a[_0x51662b(0xc5)](_0x2c9d26,_0x20477a[_0x51662b(0xbe)])&&(document[_0x51662b(0xb6)](_0x51662b(0xee))[_0x51662b(0xb0)]=!![]);try{chrome['storage'][_0x51662b(0xd2)][_0x51662b(0xb2)](_0x20477a['IVVKT'],_0x2d981d=>{const _0x540820=_0x51662b;if(chrome[_0x540820(0xeb)][_0x540820(0xbd)]){a0_0x5b5012[_0x540820(0xd8)](_0x20477a[_0x540820(0xf0)],_0x20477a['LmccB']);return;}const _0x30ed0a=_0x2d981d['blacklist']||{},_0x3d2724=Object['values'](_0x30ed0a);_0x20477a[_0x540820(0xae)](populateBlacklistTable,_0x3d2724);});}catch(_0x1b17aa){console[_0x51662b(0xd8)](_0x20477a['iQTVt'],_0x1b17aa),a0_0x5b5012[_0x51662b(0xd8)](_0x20477a['mFeHo'],_0x51662b(0xa7));}}export async function removeBlacklistEntry(_0x3e1949,_0x256610,_0x1c8a98){const _0x1c8ab4=a0_0x2b7f,_0x328543={'InnrB':function(_0x37b889,_0xc85fb3,_0x111de1){return _0x37b889(_0xc85fb3,_0x111de1);},'zuKpG':_0x1c8ab4(0xe9),'iWOmN':function(_0x4efb39,_0x5b97ea){return _0x4efb39===_0x5b97ea;},'HJxOO':_0x1c8ab4(0xb7)},_0x1da35a={'type':_0x3e1949,'value':_0x256610,'scope':_0x1c8a98},_0x1a7d57=await _0x328543[_0x1c8ab4(0xce)](updateBlacklistInDatabase,_0x1da35a,_0x328543['zuKpG']);if(!_0x1a7d57||_0x328543[_0x1c8ab4(0xdd)](_0x1a7d57[_0x1c8ab4(0xc4)],0x0))return a0_0x5b5012[_0x1c8ab4(0xd8)](_0x328543['HJxOO'],'Error'),![];return updateBlacklistInStorage(_0x1a7d57),!![];}export async function updateBlacklistInDatabase(_0x451250,_0x190e9b){const _0x324a8c=a0_0x2b7f,_0x465718={'BTEyU':function(_0x4f19c3){return _0x4f19c3();},'qOXWp':function(_0x4ae63f,_0x47181d,_0x556e0b){return _0x4ae63f(_0x47181d,_0x556e0b);},'FaiUv':_0x324a8c(0xac),'XHeNd':_0x324a8c(0xa4),'IIBtG':_0x324a8c(0xbc),'zWZyV':'Error'};try{const _0x31ce3c=_0x465718['BTEyU'](getEmail),_0xfecce8=_0x465718[_0x324a8c(0xa6)](getCompanyId),_0x39a76c=_0x465718[_0x324a8c(0xa6)](getLoginKey),_0x585c9e=backendAddress+_0x324a8c(0xe8),_0x5079ff={'companyId':_0xfecce8,'email':_0x31ce3c,'loginKey':_0x39a76c,'type':_0x451250[_0x324a8c(0xb9)],'value':_0x451250[_0x324a8c(0xdf)],'scope':_0x451250[_0x324a8c(0xd9)],'action':_0x190e9b},_0x1d6be4=await _0x465718[_0x324a8c(0xe2)](fetch,_0x585c9e,{'method':_0x465718[_0x324a8c(0xe3)],'headers':{'Content-Type':'application/json'},'body':JSON[_0x324a8c(0xc0)](_0x5079ff)});if(!_0x1d6be4['ok']){const _0x4ab9ee=_0x324a8c(0xf5)+_0x1d6be4[_0x324a8c(0xde)];throw new Error(_0x4ab9ee);}const _0xe0f632=await _0x1d6be4['json']();return _0xe0f632[_0x324a8c(0xba)];}catch(_0x129e50){return console[_0x324a8c(0xd8)](_0x465718[_0x324a8c(0xa9)],_0x129e50),a0_0x5b5012[_0x324a8c(0xd8)](_0x465718[_0x324a8c(0xc7)],_0x465718[_0x324a8c(0xb3)]),[];}}function a0_0x50e4(){const _0xb29e52=['2813565wrZRrx','get','zWZyV','Error\x20updating\x20storage','AMUPA','getElementById','Could\x20not\x20remove\x20entry\x20from\x20database','tuwyF','type','blacklist','WJguM','Error\x20updating\x20item\x20in\x20blacklist','lastError','xciFp','3790Ulxqoe','stringify','csDVE','ipIqx','3473628nEPvbH','length','erEia','oyPcH','IIBtG','Storage\x20Error','removeChild','nmuPW','Error\x20saving\x20blacklist\x20to\x20storage','click','personal','InnrB','IcjpM','delete-table-row-button','tableBody','local','createElement','addEventListener','NMwXL','appendChild','17639310xjWIka','error','scope','button','132865QzNBRb','rows','iWOmN','status','value','isArray','QYeLr','qOXWp','FaiUv','56bLngSO','766984pRGqyS','jCfUx','Could\x20not\x20add\x20entry\x20to\x20database','/api/updateblacklist','remove','gLtsN','runtime','6029316IIzhZU','CLImO','addBlacklistItemScopeInput','jStIj','ATwfU','14jxlFgy','createTextNode','sort','uiaaY','Server\x20responded\x20with\x20status\x20','DfvXv','manager','aZWJf','clVRE','iiQbn','Error\x20updating\x20blacklist:','Error\x20in\x20loadBlacklist:','BTEyU','Error','402FAONor','XHeNd','deleteRow','add','POST','Error\x20loading\x20blacklist','PVHMP','forEach','disabled'];a0_0x50e4=function(){return _0xb29e52;};return a0_0x50e4();}export function updateBlacklistInStorage(_0x31a59b){const _0x33dfad=a0_0x2b7f,_0x1c696f={'weyED':_0x33dfad(0xcb),'jCfUx':_0x33dfad(0xc8),'DfvXv':'Error\x20in\x20updateBlacklistInStorage:','oyPcH':_0x33dfad(0xb4)};try{chrome['storage']['local']['set']({'blacklist':_0x31a59b},function(){const _0x274fa8=_0x33dfad;chrome[_0x274fa8(0xeb)]['lastError']&&a0_0x5b5012[_0x274fa8(0xd8)](_0x1c696f['weyED'],_0x1c696f[_0x274fa8(0xe6)]);});}catch(_0x5c0e40){console[_0x33dfad(0xd8)](_0x1c696f[_0x33dfad(0xf6)],_0x5c0e40),a0_0x5b5012[_0x33dfad(0xd8)](_0x1c696f[_0x33dfad(0xc6)],'Storage\x20Error');}}export function addRowToTable(_0x5e87a1,_0x193f86,_0x38ed02){const _0x1854a0=a0_0x2b7f,_0xbb293e={'fgvut':function(_0x4b9a8a,_0x92a37f){return _0x4b9a8a+_0x92a37f;},'SHIhp':function(_0x3d9644){return _0x3d9644();},'nmuPW':function(_0x4fa240,_0x1abddd){return _0x4fa240===_0x1abddd;},'tbFLH':_0x1854a0(0xa0),'pHeAo':function(_0x37f08e,_0x335154){return _0x37f08e!==_0x335154;},'IcjpM':'company','jStIj':_0x1854a0(0xda),'NMwXL':_0x1854a0(0xd0),'paafE':_0x1854a0(0xcc)},_0x3e4629=_0xbb293e['fgvut'](_0x38ed02,0x1),_0x517ebb=document[_0x1854a0(0xd3)]('tr'),_0x58171e={'numbering':_0x3e4629,..._0x193f86},_0x29bb0c=document['createElement']('td');_0x29bb0c[_0x1854a0(0xd6)](document['createTextNode'](_0x3e4629)),_0x517ebb[_0x1854a0(0xd6)](_0x29bb0c);const _0x4c2830=document['createElement']('td');_0x4c2830[_0x1854a0(0xd6)](document[_0x1854a0(0xf2)](_0x58171e[_0x1854a0(0xb9)])),_0x517ebb['appendChild'](_0x4c2830);const _0x67801a=document[_0x1854a0(0xd3)]('td');_0x67801a[_0x1854a0(0xd6)](document[_0x1854a0(0xf2)](_0x58171e[_0x1854a0(0xdf)])),_0x517ebb[_0x1854a0(0xd6)](_0x67801a);const _0x33948e=document[_0x1854a0(0xd3)]('td');_0x33948e[_0x1854a0(0xd6)](document[_0x1854a0(0xf2)](_0x58171e[_0x1854a0(0xd9)])),_0x517ebb['appendChild'](_0x33948e);const _0x59cad1=document[_0x1854a0(0xd3)]('td'),_0x4a3d6a=_0xbb293e['SHIhp'](getAccountType);if(_0xbb293e[_0x1854a0(0xca)](_0x4a3d6a,_0xbb293e['tbFLH'])||_0xbb293e['pHeAo'](_0x58171e[_0x1854a0(0xd9)],_0xbb293e[_0x1854a0(0xcf)])){const _0x90c5cb=document[_0x1854a0(0xd3)](_0xbb293e[_0x1854a0(0xef)]);_0x90c5cb['className']=_0xbb293e[_0x1854a0(0xd5)],_0x90c5cb[_0x1854a0(0xd4)](_0xbb293e['paafE'],async function(){const _0x2b5b76=_0x1854a0,_0x2f2df6=await removeBlacklistEntry(_0x58171e[_0x2b5b76(0xb9)],_0x58171e[_0x2b5b76(0xdf)],_0x58171e[_0x2b5b76(0xd9)]);_0x2f2df6&&_0x5e87a1[_0x2b5b76(0xc9)](_0x517ebb);}),_0x59cad1[_0x1854a0(0xd6)](_0x90c5cb);}_0x517ebb[_0x1854a0(0xd6)](_0x59cad1),_0x5e87a1[_0x1854a0(0xd6)](_0x517ebb);}export async function addBlacklistEntry(_0x350387,_0x5228a5,_0x4e6aff){const _0x5cd32b=a0_0x2b7f,_0x3e6999={'WJguM':function(_0x3884d8,_0x28cc23,_0x251840){return _0x3884d8(_0x28cc23,_0x251840);},'AMUPA':_0x5cd32b(0xab),'ipIqx':function(_0x134b1a,_0x409739){return _0x134b1a===_0x409739;},'JLyUZ':_0x5cd32b(0xe7),'csDVE':function(_0xb69fcb,_0x1d3632){return _0xb69fcb(_0x1d3632);},'iiQbn':_0x5cd32b(0xd1),'aZWJf':function(_0x4aea3f,_0x105d57,_0xb2a694,_0x7c2cc7){return _0x4aea3f(_0x105d57,_0xb2a694,_0x7c2cc7);}},_0x41d1b9={'type':_0x350387,'value':_0x5228a5,'scope':_0x4e6aff},_0x3e5679=await _0x3e6999[_0x5cd32b(0xbb)](updateBlacklistInDatabase,_0x41d1b9,_0x3e6999[_0x5cd32b(0xb5)]);if(!_0x3e5679||_0x3e6999[_0x5cd32b(0xc2)](_0x3e5679[_0x5cd32b(0xc4)],0x0)){a0_0x5b5012[_0x5cd32b(0xd8)](_0x3e6999['JLyUZ'],_0x5cd32b(0xa7));return;}_0x3e6999[_0x5cd32b(0xc1)](updateBlacklistInStorage,_0x3e5679);const _0x41276a=document[_0x5cd32b(0xb6)](_0x3e6999[_0x5cd32b(0xa3)]),_0x218b8d=_0x41276a[_0x5cd32b(0xdc)][_0x5cd32b(0xc4)]-0x1;_0x3e6999[_0x5cd32b(0xa1)](addRowToTable,_0x41276a,_0x41d1b9,_0x218b8d);}