const a0_0x17ecd7=a0_0x2667;(function(_0x3a5a06,_0x4b1393){const _0x260c7a=a0_0x2667,_0x204063=_0x3a5a06();while(!![]){try{const _0x5f59b4=-parseInt(_0x260c7a(0x1b8))/0x1*(-parseInt(_0x260c7a(0x1c7))/0x2)+parseInt(_0x260c7a(0x1d7))/0x3+-parseInt(_0x260c7a(0x1ec))/0x4+parseInt(_0x260c7a(0x205))/0x5*(-parseInt(_0x260c7a(0x1b7))/0x6)+-parseInt(_0x260c7a(0x194))/0x7+parseInt(_0x260c7a(0x1eb))/0x8*(parseInt(_0x260c7a(0x1ce))/0x9)+parseInt(_0x260c7a(0x1f4))/0xa;if(_0x5f59b4===_0x4b1393)break;else _0x204063['push'](_0x204063['shift']());}catch(_0x44c443){_0x204063['push'](_0x204063['shift']());}}}(a0_0x570a,0x48130));function a0_0x2667(_0x570f8b,_0xd278e){const _0x570a6b=a0_0x570a();return a0_0x2667=function(_0x26676e,_0x2893dc){_0x26676e=_0x26676e-0x18c;let _0x4f0cfb=_0x570a6b[_0x26676e];return _0x4f0cfb;},a0_0x2667(_0x570f8b,_0xd278e);}import{goToLogin,goToControl,refreshAlertsUI,checkAlertsFilter,handleClick,removeLoadAlert,populateAlertsFromData,initializeDropdownChecklist,initializeWebsiteDropdownChecklist,saveAccountType,makeItDisappear}from'./utils.js';import{initEventListeners}from'./eventListeners.js';import{logout}from'./api.js';import{clearLoadAlerts,updateSearchNamesInStorage,updateAlertsFilter,saveTelegramIdToLocalStorage,updateMinutes,updateBlacklistInStorage}from'./storage.js';import a0_0xb08cf6 from'./alerts.js';function a0_0x570a(){const _0x24f7a7=['length','email','local','split','showRelogin','rYVya','QANCb','Subscription\x20expired','Rpctq','loginElement','LtmnC','isArray','WsVGz','showReloginAcv','Your\x20subscription\x20has\x20expired,\x20please\x20renew\x20it','sNibC','ZTXVP','loadsAlertContainer','subscription','production','zSwKF','adminPanelLiElement','Please\x20update\x20to\x20the\x20latest\x20version','close','daysBeforeExpire','vukWs','Error!','telegramSwitch','dVZyu','environment','Error','360nMVzGh','2ihfTbc','ZIxIv','uKMyo','display-none','version','notification','accountType','miHir','authTokenAcv','remove','blacklist','IRoqW','catch','tableBody','forEach','247666tZXJfF','deleteRow','get','bRzjW','manager','action','login-button','8676qhnvZW','Popup\x20loaded.','getElementById','AJeLv','storedDataUpdated','Kiwzf','EWOqI','Please\x20reload\x20Acv\x20website\x20or\x20login\x20again','content','438774YHZpcm','DOMContentLoaded','IcMyS','yLhhm','GpHRW','Update\x20is\x20available','kVFIp','removeItem','Error\x20in\x20checklogin\x20fetch:','popupOpened','storage','classList','authTokenSuper','warning','key','authToken','json','checked','zHHZr','mrkDi','536qkCZnb','103788ELyXYV','FvRWK','showSuccessAlert','onMessage','nbpDC','Login\x20failed','aLhjj','pjEDP','1466990Mydxag','sendMessage','showErrorAlert','success','WfADS','showReloginSuper','Please\x20open\x20CentralDispatch\x20and\x20log\x20in\x20to\x20your\x20account','telegramId','VdWrE','sVorX','Please\x20reload\x20CentralDispatch\x20or\x20login\x20again','/api/checklogin','XncCB','ACQjM','jVLhY','error','evDDW','22565mdTtNO','runtime','http://localhost:8443','innerHTML','info','Login\x20successful','searchNames','3|1|0|4|2|5','KFYvO','yrJmQ','update','qvRnd','NbnMA','https://dispatchtracker1-194311938076.us-central1.run.app','akOYt','Please\x20reload\x20SuperDispatch\x20or\x20login\x20again','ALHNm','companyId','Version:','HhYLH','then','VFzFb','POST','dXcJW','loginKey','DhmjN','storedData','Please\x20update\x20to\x20the\x20latest\x20version\x20to\x20continue\x20using\x20this\x20extension','qhYPT','BzGbp','log','development','92876iycnMM','application/json','lUJSr','<h2>THERE\x20ARE\x20NO\x20ALERTS</h2>'];a0_0x570a=function(){return _0x24f7a7;};return a0_0x570a();}import{setAuthToken,getAuthToken,setEmail,getEmail,setCompanyId,setLoginKey,getLoginKey,getCompanyId,getSubscription,setSubscription,setDaysBeforeExpire,setAccountType}from'./state.js';let a0_0x21461e,a0_0x17276d;chrome[a0_0x17ecd7(0x1e1)][a0_0x17ecd7(0x19a)][a0_0x17ecd7(0x1c9)]([a0_0x17ecd7(0x1b5),'version'],_0x1eddee=>{const _0x5569b0=a0_0x17ecd7,_0x56d6fc={'IRoqW':_0x5569b0(0x20c),'EWOqI':_0x5569b0(0x1ab),'DhmjN':function(_0x11d75a,_0x46092c){return _0x11d75a===_0x46092c;},'uKMyo':_0x5569b0(0x212),'akOYt':_0x5569b0(0x217)},_0x295c73=_0x56d6fc[_0x5569b0(0x1c3)][_0x5569b0(0x19b)]('|');let _0x1c98dc=0x0;while(!![]){switch(_0x295c73[_0x1c98dc++]){case'0':_0x1eddee[_0x5569b0(0x1b5)]===_0x56d6fc[_0x5569b0(0x1d4)]&&(console[_0x5569b0(0x192)]=()=>{});continue;case'1':a0_0x17276d=_0x1eddee[_0x5569b0(0x1bc)];continue;case'2':console['log']('Backend\x20Address:',a0_0x21461e);continue;case'3':a0_0x21461e=_0x56d6fc[_0x5569b0(0x18d)](_0x1eddee[_0x5569b0(0x1b5)],_0x5569b0(0x193))?_0x5569b0(0x207):_0x56d6fc[_0x5569b0(0x1ba)];continue;case'4':console[_0x5569b0(0x192)](_0x5569b0(0x1cf));continue;case'5':console[_0x5569b0(0x192)](_0x56d6fc[_0x5569b0(0x213)],a0_0x17276d);continue;}break;}});export{a0_0x21461e as backendAddress};function a0_0x33559a(){const _0x15a211=a0_0x17ecd7,_0x1db8fa={'lUJSr':function(_0x5add2f,_0x423a66){return _0x5add2f===_0x423a66;},'VFzFb':_0x15a211(0x1d2),'ALHNm':function(_0x154791){return _0x154791();},'hXylf':_0x15a211(0x19c),'HqZAP':_0x15a211(0x1fe),'mVWAn':_0x15a211(0x1e6),'Kiwzf':function(_0x46cae9,_0x40486b){return _0x46cae9===_0x40486b;},'dXcJW':_0x15a211(0x1d5),'lLbYl':_0x15a211(0x1b6),'KFYvO':function(_0x121c16,_0x4615a9){return _0x121c16===_0x4615a9;},'pjEDP':_0x15a211(0x214),'AJeLv':function(_0x564591,_0x45fff8){return _0x564591===_0x45fff8;},'mrkDi':_0x15a211(0x1ee),'HhYLH':'Success!','Xfifq':_0x15a211(0x1f6),'XncCB':_0x15a211(0x1b2),'vukWs':function(_0x598397){return _0x598397();},'Rpctq':'Please\x20update\x20to\x20the\x20latest\x20version','NbnMA':_0x15a211(0x1dc),'yrJmQ':_0x15a211(0x18f),'rYVya':function(_0x926012,_0x5b453a,_0x36fa8c){return _0x926012(_0x5b453a,_0x36fa8c);},'iGELH':'Account\x20expired','rtROk':_0x15a211(0x1a6),'qhYPT':_0x15a211(0x1f1),'mnqBj':'Concurrent\x20login\x20detected','pwKge':_0x15a211(0x20a),'evDDW':function(_0x643ac0,_0x42a6c1){return _0x643ac0(_0x42a6c1);},'kVFIp':function(_0x5819a3,_0x1c934c){return _0x5819a3!=_0x1c934c;},'JMxEG':_0x15a211(0x1cb),'IpGtU':_0x15a211(0x1ad),'bRzjW':function(_0x4c16a6,_0x4bf3b9){return _0x4c16a6(_0x4bf3b9);},'miHir':function(_0x40cbe3,_0x1bcf8c){return _0x40cbe3(_0x1bcf8c);},'GpHRW':function(_0x1a3202,_0x3ed3d9){return _0x1a3202(_0x3ed3d9);},'sFiHo':function(_0x38c11c,_0x56ae4f){return _0x38c11c<_0x56ae4f;},'LtmnC':_0x15a211(0x19f),'dVZyu':function(_0x242d33,_0x489332,_0x23cab6){return _0x242d33(_0x489332,_0x23cab6);},'WsVGz':_0x15a211(0x1df),'ZTXVP':_0x15a211(0x1b3),'BzGbp':function(_0xc002c6){return _0xc002c6();},'FvRWK':_0x15a211(0x1fa),'nbpDC':function(_0x473e40,_0x113404){return _0x473e40(_0x113404);},'zKBon':_0x15a211(0x21b),'qvRnd':_0x15a211(0x195),'VdWrE':function(_0xe6f769,_0x169958){return _0xe6f769(_0x169958);},'cDneT':function(_0x1fdc51,_0x5d7c54){return _0x1fdc51===_0x5d7c54;},'sVorX':function(_0x4d3e6b,_0x246b98,_0x297df0,_0x51c1ab){return _0x4d3e6b(_0x246b98,_0x297df0,_0x51c1ab);},'IcMyS':function(_0x145740,_0x5816c1){return _0x145740>_0x5816c1;},'ACQjM':_0x15a211(0x1c2),'zSwKF':_0x15a211(0x1c1),'aLhjj':function(_0x4fdba4,_0x4f6393){return _0x4fdba4(_0x4f6393);},'zHHZr':'Enter','CwhSL':_0x15a211(0x1a1),'WfADS':_0x15a211(0x1bb),'mZzxq':'loginKey','ZOFWN':_0x15a211(0x216),'tuXNm':'telegramId','ZIxIv':_0x15a211(0x20b),'jVLhY':_0x15a211(0x18e),'QANCb':function(_0x2b4caa,_0x43cfe2,_0x98e0b){return _0x2b4caa(_0x43cfe2,_0x98e0b);},'sNibC':function(_0x225be0){return _0x225be0();}};chrome[_0x15a211(0x206)]['sendMessage']({'action':_0x15a211(0x1e0)}),initEventListeners(),chrome[_0x15a211(0x206)][_0x15a211(0x1ef)]['addListener'](function(_0x560326,_0x5e1822,_0x509030){const _0x1af69c=_0x15a211;if(_0x1db8fa[_0x1af69c(0x196)](_0x560326[_0x1af69c(0x1cc)],_0x1db8fa[_0x1af69c(0x21a)]))_0x1db8fa[_0x1af69c(0x215)](checkAlertsFilter);else{if(_0x560326[_0x1af69c(0x1cc)]===_0x1db8fa['hXylf'])a0_0xb08cf6[_0x1af69c(0x203)](_0x1db8fa['HqZAP'],_0x1af69c(0x1b6)),localStorage[_0x1af69c(0x1de)](_0x1db8fa['mVWAn']);else{if(_0x1db8fa['Kiwzf'](_0x560326[_0x1af69c(0x1cc)],_0x1af69c(0x1a5)))a0_0xb08cf6[_0x1af69c(0x203)](_0x1db8fa[_0x1af69c(0x21c)],_0x1db8fa['lLbYl']),localStorage['removeItem'](_0x1af69c(0x1c0));else{if(_0x1db8fa[_0x1af69c(0x20d)](_0x560326[_0x1af69c(0x1cc)],_0x1af69c(0x1f9)))a0_0xb08cf6['error'](_0x1db8fa[_0x1af69c(0x1f3)],_0x1db8fa['lLbYl']),localStorage['removeItem'](_0x1af69c(0x1e3));else{if(_0x1db8fa[_0x1af69c(0x1d1)](_0x560326['action'],_0x1db8fa[_0x1af69c(0x1ea)]))a0_0xb08cf6[_0x1af69c(0x1f7)](_0x1db8fa[_0x1af69c(0x218)],_0x560326[_0x1af69c(0x1d6)]);else _0x560326[_0x1af69c(0x1cc)]===_0x1db8fa['Xfifq']&&a0_0xb08cf6[_0x1af69c(0x203)](_0x1db8fa[_0x1af69c(0x200)],_0x560326['content'],{'timeOut':0x1388});}}}}}),chrome['storage'][_0x15a211(0x19a)][_0x15a211(0x1c9)](['email',_0x1db8fa['mZzxq'],_0x1db8fa['ZOFWN'],_0x1db8fa['mVWAn'],_0x1db8fa['tuXNm'],_0x1db8fa[_0x15a211(0x1b9)],_0x15a211(0x1aa),_0x15a211(0x1bc)],function(_0xb30659){const _0x27664a=_0x15a211;_0xb30659&&_0xb30659[_0x27664a(0x1fb)]&&(document['getElementById'](_0x1db8fa[_0x27664a(0x1a8)])[_0x27664a(0x1e8)]=!![]),_0xb30659&&_0xb30659['searchNames']&&_0x1db8fa[_0x27664a(0x191)](updateAlertsFilter),_0xb30659&&_0xb30659[_0x27664a(0x216)]&&_0x1db8fa[_0x27664a(0x1bf)](setCompanyId,_0xb30659['companyId']),_0xb30659&&_0xb30659[_0x27664a(0x18c)]&&_0x1db8fa[_0x27664a(0x1db)](setLoginKey,_0xb30659[_0x27664a(0x18c)]),_0xb30659&&_0xb30659[_0x27664a(0x1aa)]&&_0x1db8fa[_0x27664a(0x1ca)](setSubscription,_0xb30659[_0x27664a(0x1aa)]),_0xb30659&&_0xb30659[_0x27664a(0x1bc)]&&(a0_0x17276d=_0xb30659[_0x27664a(0x1bc)]),_0xb30659&&_0xb30659['authToken']?_0x1db8fa['evDDW'](setAuthToken,_0xb30659[_0x27664a(0x1e6)]):a0_0xb08cf6[_0x27664a(0x1e4)](_0x1db8fa[_0x27664a(0x1ed)]),_0xb30659&&_0xb30659[_0x27664a(0x199)]&&_0xb30659[_0x27664a(0x18c)]?(_0x1db8fa[_0x27664a(0x1f0)](setEmail,_0xb30659[_0x27664a(0x199)]),fetch(a0_0x21461e+_0x27664a(0x1ff),{'method':_0x1db8fa['zKBon'],'headers':{'Content-Type':_0x1db8fa[_0x27664a(0x210)]},'body':JSON['stringify']({'email':_0xb30659[_0x27664a(0x199)],'loginKey':_0xb30659[_0x27664a(0x18c)],'version':a0_0x17276d})})[_0x27664a(0x219)](_0x664dec=>_0x664dec[_0x27664a(0x1e7)]())[_0x27664a(0x219)](_0x4f70c6=>{const _0x412632=_0x27664a;if(_0x4f70c6['error'])_0x1db8fa['vukWs'](goToLogin),_0x4f70c6['update']&&(a0_0xb08cf6[_0x412632(0x209)](_0x1db8fa[_0x412632(0x1a0)],_0x1db8fa[_0x412632(0x211)]),chrome[_0x412632(0x206)][_0x412632(0x1f5)]({'message':'notification','title':_0x1db8fa[_0x412632(0x211)],'messageBody':_0x1db8fa[_0x412632(0x20e)]}),_0x1db8fa[_0x412632(0x19d)](setTimeout,()=>{const _0x508b54=_0x412632;window[_0x508b54(0x1af)]();},0x3e8)),_0x1db8fa[_0x412632(0x20d)](_0x4f70c6[_0x412632(0x203)],_0x1db8fa['iGELH'])&&a0_0xb08cf6[_0x412632(0x1e4)](_0x1db8fa['rtROk'],_0x412632(0x19f)),_0x1db8fa[_0x412632(0x1d3)](_0x4f70c6['error'],_0x1db8fa[_0x412632(0x190)])&&a0_0xb08cf6['warning'](_0x1db8fa['mnqBj'],_0x412632(0x1f1));else{console['log'](_0x1db8fa['pwKge'],_0x4f70c6);if(_0x4f70c6[_0x412632(0x1be)]){_0x1db8fa[_0x412632(0x204)](saveAccountType,_0x4f70c6[_0x412632(0x1be)]);if(_0x1db8fa[_0x412632(0x1dd)](_0x4f70c6[_0x412632(0x1be)],_0x1db8fa['JMxEG'])){let _0x472346=document['getElementById'](_0x1db8fa['IpGtU']);_0x1db8fa['bRzjW'](makeItDisappear,_0x472346);}}_0x4f70c6[_0x412632(0x1c2)]&&_0x1db8fa[_0x412632(0x1bf)](updateBlacklistInStorage,_0x4f70c6[_0x412632(0x1c2)]),_0x4f70c6[_0x412632(0x1aa)]&&_0x1db8fa[_0x412632(0x204)](setSubscription,_0x4f70c6[_0x412632(0x1aa)]),_0x4f70c6[_0x412632(0x1b0)]&&(_0x1db8fa[_0x412632(0x1db)](setDaysBeforeExpire,_0x4f70c6[_0x412632(0x1b0)]),_0x1db8fa['sFiHo'](_0x4f70c6['daysBeforeExpire'],0x0)?(a0_0xb08cf6[_0x412632(0x1e4)](_0x412632(0x1a6),_0x1db8fa[_0x412632(0x1a2)]),_0x1db8fa[_0x412632(0x215)](logout)):_0x1db8fa[_0x412632(0x1b1)](goToControl)),_0x4f70c6[_0x412632(0x20f)]&&(a0_0xb08cf6[_0x412632(0x209)](_0x412632(0x1ae),_0x1db8fa[_0x412632(0x211)]),chrome[_0x412632(0x206)]['sendMessage']({'message':_0x412632(0x1bd),'title':_0x1db8fa[_0x412632(0x211)],'messageBody':_0x1db8fa[_0x412632(0x20e)]}),_0x1db8fa[_0x412632(0x1b4)](setTimeout,()=>{const _0x3507ae=_0x412632;window[_0x3507ae(0x1af)]();},0x3e8));}})[_0x27664a(0x1c4)](_0x49f2c0=>{const _0x512b07=_0x27664a;a0_0xb08cf6[_0x512b07(0x203)](_0x1db8fa[_0x512b07(0x1a4)],_0x49f2c0),_0x1db8fa['ALHNm'](goToLogin);})):_0x1db8fa['vukWs'](goToLogin);});let _0x2796e1;chrome['storage'][_0x15a211(0x19a)][_0x15a211(0x1c9)]([_0x1db8fa[_0x15a211(0x202)]],function(_0x4795be){_0x2796e1=_0x4795be['storedData']||[];}),_0x1db8fa[_0x15a211(0x1b4)](setTimeout,()=>{const _0x566a8d=_0x15a211;if(_0x1db8fa[_0x566a8d(0x1d1)](_0x2796e1[_0x566a8d(0x198)],0x0)){const _0x2ad6bc=document[_0x566a8d(0x1d0)](_0x566a8d(0x1a9));_0x2ad6bc[_0x566a8d(0x208)]=_0x566a8d(0x197);}else _0x1db8fa[_0x566a8d(0x1fc)](populateAlertsFromData,_0x2796e1);},0x12c),_0x1db8fa[_0x15a211(0x19e)](setInterval,()=>{updateMinutes();},0x3e8),_0x1db8fa[_0x15a211(0x1a7)](initializeDropdownChecklist),_0x1db8fa['vukWs'](initializeWebsiteDropdownChecklist);function _0x53a5eb(_0x4e4a2d){const _0x50be17=_0x15a211;var _0x345027=document['getElementById'](_0x50be17(0x1c5));while(_0x1db8fa[_0x50be17(0x1d9)](_0x345027['rows'][_0x50be17(0x198)],0x1)){_0x345027[_0x50be17(0x1c8)](0x1);}Array[_0x50be17(0x1a3)](_0x4e4a2d)?_0x4e4a2d[_0x50be17(0x1c6)](function(_0x62250b,_0x3d8a79){const _0x591978=_0x50be17;_0x1db8fa['cDneT'](_0x3d8a79,0x0)?addRowToTable(_0x345027,_0x62250b,_0x3d8a79):_0x1db8fa[_0x591978(0x1fd)](addRowToTable,_0x345027,_0x62250b,_0x3d8a79);}):addRowToTable(_0x345027,_0x4e4a2d,0x0);}function _0x49e056(){const _0x47dfa6=_0x15a211,_0x29a362={'yLhhm':function(_0x389328,_0x1deb6a){return _0x389328(_0x1deb6a);}};chrome[_0x47dfa6(0x1e1)][_0x47dfa6(0x19a)][_0x47dfa6(0x1c9)](_0x1db8fa[_0x47dfa6(0x201)],function(_0x3f2184){const _0x1ce1dc=_0x47dfa6;let _0x581396=Object['values'](_0x3f2184['blacklist']);_0x29a362[_0x1ce1dc(0x1da)](_0x53a5eb,_0x581396);});}async function _0x3f854e(_0x21b3d5,_0x2dbfbc){const _0x5ed350=_0x15a211,_0x9bf83a={'name':_0x21b3d5,'address':_0x2dbfbc},_0x4dd902=await updateBlacklistInDatabase(_0x9bf83a,_0x1db8fa[_0x5ed350(0x1ac)]);_0x1db8fa[_0x5ed350(0x1f2)](updateBlacklistInStorage,_0x4dd902);}document['addEventListener']('keydown',function(_0x19fb2b){const _0x3ea69d=_0x15a211;if(_0x19fb2b[_0x3ea69d(0x1e5)]===_0x1db8fa[_0x3ea69d(0x1e9)]){const _0x4066e6=document[_0x3ea69d(0x1d0)](_0x1db8fa['CwhSL']);if(_0x4066e6&&!_0x4066e6[_0x3ea69d(0x1e2)]['contains'](_0x1db8fa[_0x3ea69d(0x1f8)])){const _0x2ec0c1=document[_0x3ea69d(0x1d0)](_0x3ea69d(0x1cd));_0x2ec0c1&&_0x2ec0c1['click']();}}});}document['addEventListener'](a0_0x17ecd7(0x1d8),a0_0x33559a);