const a0_0x2267da=a0_0x54f8;(function(_0x212b07,_0x199bb4){const _0x486f3f=a0_0x54f8,_0x400612=_0x212b07();while(!![]){try{const _0x41e2cc=-parseInt(_0x486f3f(0x1c6))/0x1+-parseInt(_0x486f3f(0x215))/0x2+-parseInt(_0x486f3f(0x20f))/0x3+parseInt(_0x486f3f(0x1dd))/0x4+parseInt(_0x486f3f(0x1b9))/0x5*(parseInt(_0x486f3f(0x222))/0x6)+-parseInt(_0x486f3f(0x1d4))/0x7*(parseInt(_0x486f3f(0x20d))/0x8)+parseInt(_0x486f3f(0x21e))/0x9;if(_0x41e2cc===_0x199bb4)break;else _0x400612['push'](_0x400612['shift']());}catch(_0x59df21){_0x400612['push'](_0x400612['shift']());}}}(a0_0x1f3b,0xd98b9));import{goToLogin,goToControl,refreshAlertsUI,checkAlertsFilter,handleClick,removeLoadAlert,populateAlertsFromData,initializeDropdownChecklist,initializeWebsiteDropdownChecklist,saveAccountType,makeItDisappear}from'./utils.js';function a0_0x1f3b(){const _0xc6b392=['bkQxF','Subscription\x20expired','CwxYy','Your\x20subscription\x20has\x20expired,\x20please\x20renew\x20it','nSygZ','notification','EKcnG','MggUg','<h2>THERE\x20ARE\x20NO\x20ALERTS</h2>','zltIC','Success!','rRNgd','cpabW','0|1|4|5|3|2','tjQVt','local','key','VnIzj','ABqIc','kcvwV','kBzEy','Frijp','length','addListener','Backend\x20Address:','GHlWT','Please\x20reload\x20SuperDispatch\x20or\x20login\x20again','yDGlD','oVjWf','HavWN','application/json','email','runtime','Error\x20in\x20checklogin\x20fetch:','kueIt','then','daysBeforeExpire','qitpN','info','NRHIw','XbVKf','BiiPU','rUTik','rQLmi','Login\x20failed','6333208XZfjhl','BBrgV','4942053lqzqyR','storage','showSuccessAlert','tableBody','cXuFZ','telegramSwitch','1894040aviEEG','aJXxm','storedData','mrbGr','/api/checklogin','click','BoZqP','CmLvJ','telegramId','25327431PzeRLZ','sMbRt','accountType','GKnDa','204iXRNSy','dhwpy','evmgv','tpSWl','loadsAlertContainer','rEKSI','Error!','loginElement','authToken','oyzBs','loginKey','removeItem','close','innerHTML','MIOYo','stringify','split','popupOpened','searchNames','MxFDj','getElementById','storedDataUpdated','display-none','AzHNv','blacklist','KVeKf','xMmYe','AvKEK','companyId','POST','authTokenAcv','version','Please\x20reload\x20CentralDispatch\x20or\x20login\x20again','authTokenSuper','get','showRelogin','uuKtH','deleteRow','error','240885ZwrNwX','Kzrud','HJkxv','showReloginAcv','Error','warning','content','subscription','Please\x20update\x20to\x20the\x20latest\x20version','onMessage','values','Popup\x20loaded.','rebnk','222658iZuIzK','rows','keydown','WsFka','update','sendMessage','SMFMM','aDAvh','classList','Please\x20reload\x20Acv\x20website\x20or\x20login\x20again','Login\x20successful','uwheB','axJDN','WLokA','7VGunEB','DOMContentLoaded','isArray','RERaq','log','action','Enter','environment','Please\x20update\x20to\x20the\x20latest\x20version\x20to\x20continue\x20using\x20this\x20extension','190272hpfUst','forEach','CLevJ'];a0_0x1f3b=function(){return _0xc6b392;};return a0_0x1f3b();}import{initEventListeners}from'./eventListeners.js';import{logout}from'./api.js';import{clearLoadAlerts,updateSearchNamesInStorage,updateAlertsFilter,saveTelegramIdToLocalStorage,updateMinutes,updateBlacklistInStorage}from'./storage.js';import a0_0x376307 from'./alerts.js';import{setAuthToken,getAuthToken,setEmail,getEmail,setCompanyId,setLoginKey,getLoginKey,getCompanyId,getSubscription,setSubscription,setDaysBeforeExpire,setAccountType}from'./state.js';let a0_0x1a1dba,a0_0x52d753;chrome[a0_0x2267da(0x210)]['local'][a0_0x2267da(0x1b4)](['environment',a0_0x2267da(0x1b1)],_0x556bcb=>{const _0x29507e=a0_0x2267da,_0x374324={'eMJmD':_0x29507e(0x1ed),'HJkxv':function(_0x534a2b,_0x8c0536){return _0x534a2b===_0x8c0536;},'GKnDa':'production','evmgv':'https://dispatchtracker1-194311938076.us-central1.run.app','WsFka':'http://localhost:8443','sduvd':_0x29507e(0x1f8),'tpSWl':_0x29507e(0x1c4)},_0x324184=_0x374324['eMJmD'][_0x29507e(0x1a2)]('|');let _0x5e1623=0x0;while(!![]){switch(_0x324184[_0x5e1623++]){case'0':a0_0x1a1dba=_0x374324[_0x29507e(0x1bb)](_0x556bcb['environment'],_0x374324['GKnDa'])?_0x374324[_0x29507e(0x224)]:_0x374324[_0x29507e(0x1c9)];continue;case'1':a0_0x52d753=_0x556bcb[_0x29507e(0x1b1)];continue;case'2':console[_0x29507e(0x1d8)]('Version:',a0_0x52d753);continue;case'3':console[_0x29507e(0x1d8)](_0x374324['sduvd'],a0_0x1a1dba);continue;case'4':_0x556bcb[_0x29507e(0x1db)]===_0x374324[_0x29507e(0x221)]&&(console[_0x29507e(0x1d8)]=()=>{});continue;case'5':console[_0x29507e(0x1d8)](_0x374324[_0x29507e(0x225)]);continue;}break;}});function a0_0x54f8(_0x4d19f5,_0x5c69f2){const _0x1f3b5f=a0_0x1f3b();return a0_0x54f8=function(_0x54f8e6,_0x2a8af1){_0x54f8e6=_0x54f8e6-0x19a;let _0x5649b8=_0x1f3b5f[_0x54f8e6];return _0x5649b8;},a0_0x54f8(_0x4d19f5,_0x5c69f2);}export{a0_0x1a1dba as backendAddress};function a0_0x223b2b(){const _0x20232f=a0_0x2267da,_0x589562={'CwxYy':function(_0x2bf350,_0x5b02cd){return _0x2bf350===_0x5b02cd;},'GHlWT':function(_0x4aaa1e){return _0x4aaa1e();},'zrucL':_0x20232f(0x1b5),'BBrgV':_0x20232f(0x1b2),'Frijp':_0x20232f(0x1bd),'rQLmi':_0x20232f(0x19a),'mrbGr':function(_0x57d30f,_0x4a375c){return _0x57d30f===_0x4a375c;},'dhwpy':_0x20232f(0x1bc),'MIOYo':_0x20232f(0x1cf),'qitpN':_0x20232f(0x1b0),'nSygZ':'showReloginSuper','CLevJ':_0x20232f(0x1fa),'MxFDj':_0x20232f(0x1b3),'MggUg':function(_0xf8a738,_0x5aa219){return _0xf8a738===_0x5aa219;},'tjQVt':_0x20232f(0x211),'kcvwV':_0x20232f(0x1ea),'BoZqP':function(_0x519b21,_0x1ce6ec){return _0x519b21===_0x1ce6ec;},'Kzrud':_0x20232f(0x1c1),'SMFMM':'Update\x20is\x20available','kBzEy':function(_0xd27c8a,_0x426ba1,_0x2e9cad){return _0xd27c8a(_0x426ba1,_0x2e9cad);},'sMbRt':'Account\x20expired','AzHNv':_0x20232f(0x1e1),'EENUR':function(_0x2b1f67,_0x523d90){return _0x2b1f67===_0x523d90;},'oXNIG':_0x20232f(0x20c),'EKcnG':_0x20232f(0x1d0),'aJXxm':function(_0x38a829,_0x4d3191){return _0x38a829!=_0x4d3191;},'ogfut':'manager','ABqIc':'adminPanelLiElement','AvKEK':function(_0xa5f5ed,_0x5c4018){return _0xa5f5ed(_0x5c4018);},'TaqyT':_0x20232f(0x1e3),'WLokA':_0x20232f(0x1e5),'cXuFZ':_0x20232f(0x1dc),'rUTik':_0x20232f(0x214),'uuKtH':'Please\x20open\x20CentralDispatch\x20and\x20log\x20in\x20to\x20your\x20account','BiiPU':_0x20232f(0x1fe),'cCDHA':function(_0x1ce9ac){return _0x1ce9ac();},'xMmYe':function(_0x3b9f60,_0x5dbb93){return _0x3b9f60===_0x5dbb93;},'AFYXp':_0x20232f(0x226),'axJDN':function(_0x470887){return _0x470887();},'rEKSI':function(_0x1bf286,_0x4047a5){return _0x1bf286===_0x4047a5;},'CmLvJ':function(_0x3e394c,_0xb0ffbd){return _0x3e394c>_0xb0ffbd;},'rebnk':function(_0x116304,_0x50d093,_0x216cbb,_0x490c88){return _0x116304(_0x50d093,_0x216cbb,_0x490c88);},'oyzBs':_0x20232f(0x1aa),'KVeKf':'remove','RERaq':function(_0x558ede,_0x1ac92a){return _0x558ede(_0x1ac92a);},'cpabW':function(_0x3277f6,_0x19689b){return _0x3277f6===_0x19689b;},'NRHIw':_0x20232f(0x1da),'rRNgd':_0x20232f(0x229),'aDAvh':_0x20232f(0x1a8),'djhif':'login-button','VnIzj':_0x20232f(0x1a3),'MQDYG':'email','CiUym':_0x20232f(0x19c),'yDGlD':_0x20232f(0x1ae),'HavWN':_0x20232f(0x21d),'zltIC':_0x20232f(0x1a4),'oovAW':'version','kueIt':_0x20232f(0x217),'oVjWf':function(_0x193693,_0x136458,_0x3031e0){return _0x193693(_0x136458,_0x3031e0);},'uwheB':function(_0x43eb78){return _0x43eb78();},'XbVKf':_0x20232f(0x1c8)};chrome['runtime'][_0x20232f(0x1cb)]({'action':_0x589562[_0x20232f(0x1f1)]}),_0x589562[_0x20232f(0x1d2)](initEventListeners),chrome[_0x20232f(0x200)][_0x20232f(0x1c2)][_0x20232f(0x1f7)](function(_0x4b8a82,_0x177ba4,_0x587c53){const _0x29dae0=_0x20232f;if(_0x589562[_0x29dae0(0x1e2)](_0x4b8a82[_0x29dae0(0x1d9)],_0x29dae0(0x1a7)))_0x589562[_0x29dae0(0x1f9)](checkAlertsFilter);else{if(_0x589562['CwxYy'](_0x4b8a82[_0x29dae0(0x1d9)],_0x589562['zrucL']))a0_0x376307[_0x29dae0(0x1b8)](_0x589562[_0x29dae0(0x20e)],_0x589562[_0x29dae0(0x1f5)]),localStorage[_0x29dae0(0x19d)](_0x589562[_0x29dae0(0x20b)]);else{if(_0x589562[_0x29dae0(0x218)](_0x4b8a82[_0x29dae0(0x1d9)],_0x589562[_0x29dae0(0x223)]))a0_0x376307[_0x29dae0(0x1b8)](_0x589562[_0x29dae0(0x1a0)],_0x589562[_0x29dae0(0x1f5)]),localStorage['removeItem'](_0x589562[_0x29dae0(0x205)]);else{if(_0x589562[_0x29dae0(0x218)](_0x4b8a82[_0x29dae0(0x1d9)],_0x589562[_0x29dae0(0x1e4)]))a0_0x376307['error'](_0x589562[_0x29dae0(0x1df)],_0x589562[_0x29dae0(0x1f5)]),localStorage[_0x29dae0(0x19d)](_0x589562[_0x29dae0(0x1a5)]);else{if(_0x589562[_0x29dae0(0x1e7)](_0x4b8a82[_0x29dae0(0x1d9)],_0x589562[_0x29dae0(0x1ee)]))a0_0x376307['success'](_0x589562[_0x29dae0(0x1f3)],_0x4b8a82['content']);else _0x589562[_0x29dae0(0x21b)](_0x4b8a82['action'],'showErrorAlert')&&a0_0x376307['error'](_0x29dae0(0x228),_0x4b8a82[_0x29dae0(0x1bf)],{'timeOut':0x1388});}}}}}),chrome[_0x20232f(0x210)][_0x20232f(0x1ef)][_0x20232f(0x1b4)]([_0x589562['MQDYG'],_0x589562['CiUym'],_0x589562[_0x20232f(0x1fb)],_0x589562['rQLmi'],_0x589562[_0x20232f(0x1fd)],_0x589562[_0x20232f(0x1e9)],_0x20232f(0x1c0),_0x589562['oovAW']],function(_0x505382){const _0x5d420a=_0x20232f,_0x220bf2={'bkQxF':_0x5d420a(0x201),'yVyYH':function(_0x5b3e30){const _0x5a5cc5=_0x5d420a;return _0x589562[_0x5a5cc5(0x1f9)](_0x5b3e30);}};_0x505382&&_0x505382[_0x5d420a(0x21d)]&&(document[_0x5d420a(0x1a6)](_0x589562[_0x5d420a(0x20a)])['checked']=!![]),_0x505382&&_0x505382['searchNames']&&_0x589562['GHlWT'](updateAlertsFilter),_0x505382&&_0x505382['companyId']&&_0x589562[_0x5d420a(0x1ad)](setCompanyId,_0x505382['companyId']),_0x505382&&_0x505382[_0x5d420a(0x19c)]&&_0x589562[_0x5d420a(0x1ad)](setLoginKey,_0x505382[_0x5d420a(0x19c)]),_0x505382&&_0x505382[_0x5d420a(0x1c0)]&&setSubscription(_0x505382[_0x5d420a(0x1c0)]),_0x505382&&_0x505382['version']&&(a0_0x52d753=_0x505382[_0x5d420a(0x1b1)]),_0x505382&&_0x505382['authToken']?setAuthToken(_0x505382[_0x5d420a(0x19a)]):a0_0x376307[_0x5d420a(0x1be)](_0x589562[_0x5d420a(0x1b6)]),_0x505382&&_0x505382['email']&&_0x505382[_0x5d420a(0x19c)]?(setEmail(_0x505382[_0x5d420a(0x1ff)]),_0x589562[_0x5d420a(0x1f4)](fetch,a0_0x1a1dba+_0x5d420a(0x219),{'method':_0x5d420a(0x1af),'headers':{'Content-Type':_0x589562[_0x5d420a(0x209)]},'body':JSON[_0x5d420a(0x1a1)]({'email':_0x505382[_0x5d420a(0x1ff)],'loginKey':_0x505382['loginKey'],'version':a0_0x52d753})})[_0x5d420a(0x203)](_0x15c7c2=>_0x15c7c2['json']())[_0x5d420a(0x203)](_0x47c31e=>{const _0x48b284=_0x5d420a;if(_0x47c31e[_0x48b284(0x1b8)])_0x589562[_0x48b284(0x1f9)](goToLogin),_0x47c31e[_0x48b284(0x1ca)]&&(a0_0x376307[_0x48b284(0x206)](_0x589562[_0x48b284(0x1ba)],_0x589562['SMFMM']),chrome[_0x48b284(0x200)][_0x48b284(0x1cb)]({'message':_0x48b284(0x1e5),'title':_0x589562[_0x48b284(0x1cc)],'messageBody':_0x48b284(0x1dc)}),_0x589562[_0x48b284(0x1f4)](setTimeout,()=>{const _0x106846=_0x48b284;window[_0x106846(0x19e)]();},0x3e8)),_0x589562[_0x48b284(0x1e2)](_0x47c31e[_0x48b284(0x1b8)],_0x589562[_0x48b284(0x21f)])&&a0_0x376307[_0x48b284(0x1be)](_0x48b284(0x1e3),_0x589562[_0x48b284(0x1a9)]),_0x589562['EENUR'](_0x47c31e[_0x48b284(0x1b8)],_0x589562['oXNIG'])&&a0_0x376307[_0x48b284(0x1be)]('Concurrent\x20login\x20detected',_0x589562['oXNIG']);else{console['log'](_0x589562[_0x48b284(0x1e6)],_0x47c31e);if(_0x47c31e[_0x48b284(0x220)]){saveAccountType(_0x47c31e[_0x48b284(0x220)]);if(_0x589562[_0x48b284(0x216)](_0x47c31e[_0x48b284(0x220)],_0x589562['ogfut'])){let _0x35eb8a=document[_0x48b284(0x1a6)](_0x589562[_0x48b284(0x1f2)]);_0x589562['AvKEK'](makeItDisappear,_0x35eb8a);}}_0x47c31e[_0x48b284(0x1aa)]&&_0x589562[_0x48b284(0x1ad)](updateBlacklistInStorage,_0x47c31e[_0x48b284(0x1aa)]),_0x47c31e[_0x48b284(0x1c0)]&&_0x589562['AvKEK'](setSubscription,_0x47c31e[_0x48b284(0x1c0)]),_0x47c31e[_0x48b284(0x204)]&&(setDaysBeforeExpire(_0x47c31e['daysBeforeExpire']),_0x47c31e['daysBeforeExpire']<0x0?(a0_0x376307[_0x48b284(0x1be)](_0x589562['TaqyT'],_0x589562[_0x48b284(0x1a9)]),_0x589562[_0x48b284(0x1f9)](logout)):_0x589562['GHlWT'](goToControl)),_0x47c31e[_0x48b284(0x1ca)]&&(a0_0x376307[_0x48b284(0x206)](_0x589562['Kzrud'],_0x589562['SMFMM']),chrome[_0x48b284(0x200)]['sendMessage']({'message':_0x589562[_0x48b284(0x1d3)],'title':_0x589562['SMFMM'],'messageBody':_0x589562[_0x48b284(0x213)]}),_0x589562[_0x48b284(0x1f4)](setTimeout,()=>{const _0x3fb7a5=_0x48b284;window[_0x3fb7a5(0x19e)]();},0x3e8));}})['catch'](_0x32a5c7=>{const _0x1458c7=_0x5d420a;a0_0x376307[_0x1458c7(0x1b8)](_0x220bf2[_0x1458c7(0x1e0)],_0x32a5c7),_0x220bf2['yVyYH'](goToLogin);})):_0x589562['cCDHA'](goToLogin);});let _0x8b14af;chrome['storage'][_0x20232f(0x1ef)][_0x20232f(0x1b4)]([_0x589562[_0x20232f(0x202)]],function(_0x3b1f60){const _0x323aa6=_0x20232f;_0x8b14af=_0x3b1f60[_0x323aa6(0x217)]||[];}),_0x589562[_0x20232f(0x1fc)](setTimeout,()=>{const _0x5bcddc=_0x20232f;if(_0x589562[_0x5bcddc(0x1ac)](_0x8b14af['length'],0x0)){const _0xd31d00=document['getElementById'](_0x589562['AFYXp']);_0xd31d00[_0x5bcddc(0x19f)]=_0x5bcddc(0x1e8);}else _0x589562[_0x5bcddc(0x1ad)](populateAlertsFromData,_0x8b14af);},0x12c),setInterval(()=>{_0x589562['axJDN'](updateMinutes);},0x3e8),initializeDropdownChecklist(),_0x589562[_0x20232f(0x1d1)](initializeWebsiteDropdownChecklist);function _0x3a37d8(_0x179729){const _0x168608=_0x20232f;var _0x273fe0=document['getElementById'](_0x168608(0x212));while(_0x589562[_0x168608(0x21c)](_0x273fe0[_0x168608(0x1c7)][_0x168608(0x1f6)],0x1)){_0x273fe0[_0x168608(0x1b7)](0x1);}Array[_0x168608(0x1d6)](_0x179729)?_0x179729[_0x168608(0x1de)](function(_0xdcc5a2,_0x377b69){const _0x53f886=_0x168608;_0x589562[_0x53f886(0x227)](_0x377b69,0x0)?addRowToTable(_0x273fe0,_0xdcc5a2,_0x377b69):addRowToTable(_0x273fe0,_0xdcc5a2,_0x377b69);}):_0x589562[_0x168608(0x1c5)](addRowToTable,_0x273fe0,_0x179729,0x0);}function _0x5f13c6(){const _0x4ddfca=_0x20232f;chrome['storage'][_0x4ddfca(0x1ef)][_0x4ddfca(0x1b4)](_0x589562[_0x4ddfca(0x19b)],function(_0xc572be){const _0x3671c6=_0x4ddfca;let _0x1e9134=Object[_0x3671c6(0x1c3)](_0xc572be[_0x3671c6(0x1aa)]);_0x3a37d8(_0x1e9134);});}async function _0x3576fe(_0x41d6a5,_0x392893){const _0x3a6025=_0x20232f,_0x2ac0b1={'name':_0x41d6a5,'address':_0x392893},_0x202e88=await updateBlacklistInDatabase(_0x2ac0b1,_0x589562[_0x3a6025(0x1ab)]);_0x589562[_0x3a6025(0x1d7)](updateBlacklistInStorage,_0x202e88);}document['addEventListener'](_0x589562[_0x20232f(0x208)],function(_0x1ae759){const _0x35ad8d=_0x20232f;if(_0x589562[_0x35ad8d(0x1ec)](_0x1ae759[_0x35ad8d(0x1f0)],_0x589562[_0x35ad8d(0x207)])){const _0x50f7ae=document[_0x35ad8d(0x1a6)](_0x589562[_0x35ad8d(0x1eb)]);if(_0x50f7ae&&!_0x50f7ae[_0x35ad8d(0x1ce)]['contains'](_0x589562[_0x35ad8d(0x1cd)])){const _0x2287d2=document[_0x35ad8d(0x1a6)](_0x589562['djhif']);_0x2287d2&&_0x2287d2[_0x35ad8d(0x21a)]();}}});}document['addEventListener'](a0_0x2267da(0x1d5),a0_0x223b2b);