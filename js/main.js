const a0_0x21294a=a0_0x58cc;function a0_0xa3d2(){const _0x3b53bc=['action','rvrUD','telegramSwitch','xiwqy','5192Ypwlda','qdxbf','companyId','loadsAlertContainer','environment','runtime','adminPanelLiElement','authToken','searchNames','TgFtZ','authTokenAcv','http://localhost:8443','get','split','OORRW','showReloginAcv','2DMDXJt','Please\x20reload\x20Acv\x20website\x20or\x20login\x20again','Fmncy','log','tableBody','loginKey','NnUuS','EGaPu','nvWnG','rjGKz','blacklist','popupOpened','Popup\x20loaded.','addListener','gEBTE','ZQQwI','rTEqH','eOJez','Login\x20failed','https://dispatchtracker1-194311938076.us-central1.run.app','display-none','kHDZk','czsjf','RRtxI','mgYKc','login-button','Login\x20successful','lZfLy','WlVRh','accountType','Backend\x20Address:','Please\x20update\x20to\x20the\x20latest\x20version\x20to\x20continue\x20using\x20this\x20extension','WzTMh','QDTHa','stringify','storedData','57679AuoKnn','10SjCOSd','removeItem','15Wjrtqn','innerHTML','<h2>THERE\x20ARE\x20NO\x20ALERTS</h2>','classList','email','application/json','Concurrent\x20login\x20detected','notification','EYGoS','/api/checklogin','info','JgUOL','jkToh','storage','MdGeT','UNSkr','Error','values','env:\x20','error','Error!','ZcSZY','739212KNUKAt','Please\x20update\x20to\x20the\x20latest\x20version','xXHEO','tqlQU','848001sgGpLH','DwPYl','contains','AckAf','addEventListener','Subscription\x20expired','Error\x20in\x20checklogin\x20fetch:','sendMessage','wohbS','rows','lposx','Please\x20reload\x20CentralDispatch\x20or\x20login\x20again','rzFrU','version','WYwmu','1209635piReis','TCblZ','tCmcL','JdzNH','json','HEnoR','click','then','ZFecL','update','production','development','giuXp','telegramId','Please\x20reload\x20SuperDispatch\x20or\x20login\x20again','cFEdl','success','1|5|4|6|3|2|0','hVbkt','zLlcG','getElementById','Your\x20subscription\x20has\x20expired,\x20please\x20renew\x20it','warning','dHYCr','YeEEP','Please\x20open\x20CentralDispatch\x20and\x20log\x20in\x20to\x20your\x20account','392949XPzxwe','Update\x20is\x20available','RrEAk','showReloginSuper','daysBeforeExpire','RxXWl','NreCt','WnfRN','vODfH','remove','DMlIq','Success!','17142ZbPPRo','TLdQL','content','QvARt','oMtSq','close','local','DefDg','1503iJmoxw','showErrorAlert','subscription'];a0_0xa3d2=function(){return _0x3b53bc;};return a0_0xa3d2();}(function(_0x4db155,_0x415756){const _0x27f4c7=a0_0x58cc,_0x54222a=_0x4db155();while(!![]){try{const _0x1f4ebc=-parseInt(_0x27f4c7(0x109))/0x1*(-parseInt(_0x27f4c7(0xe5))/0x2)+-parseInt(_0x27f4c7(0xba))/0x3+parseInt(_0x27f4c7(0x8d))/0x4+parseInt(_0x27f4c7(0x10c))/0x5*(-parseInt(_0x27f4c7(0xc6))/0x6)+-parseInt(_0x27f4c7(0xa0))/0x7+parseInt(_0x27f4c7(0xd5))/0x8*(parseInt(_0x27f4c7(0xce))/0x9)+-parseInt(_0x27f4c7(0x10a))/0xa*(-parseInt(_0x27f4c7(0x91))/0xb);if(_0x1f4ebc===_0x415756)break;else _0x54222a['push'](_0x54222a['shift']());}catch(_0x301afe){_0x54222a['push'](_0x54222a['shift']());}}}(a0_0xa3d2,0x1c38d));import{goToLogin,goToControl,refreshAlertsUI,checkAlertsFilter,handleClick,removeLoadAlert,populateAlertsFromData,initializeDropdownChecklist,initializeWebsiteDropdownChecklist,saveAccountType,makeItDisappear}from'./utils.js';import{initEventListeners}from'./eventListeners.js';import{logout}from'./api.js';import{clearLoadAlerts,updateSearchNamesInStorage,updateAlertsFilter,saveTelegramIdToLocalStorage,updateMinutes,updateBlacklistInStorage}from'./storage.js';import a0_0x3307b1 from'./alerts.js';import{setAuthToken,getAuthToken,setEmail,getEmail,setCompanyId,setLoginKey,getLoginKey,getCompanyId,getSubscription,setSubscription,setDaysBeforeExpire,setAccountType}from'./state.js';let a0_0x50f728,a0_0x2d4fbf;chrome[a0_0x21294a(0x84)]['local'][a0_0x21294a(0xe1)]([a0_0x21294a(0xd9),a0_0x21294a(0x9e)],_0x51f171=>{const _0x368f3f=a0_0x21294a,_0x1bdbec={'WXCTS':_0x368f3f(0xb1),'WzTMh':function(_0x26e04a,_0x3a069f){return _0x26e04a===_0x3a069f;},'FzkNg':_0x368f3f(0xab),'kHDZk':_0x368f3f(0xe0),'qdxbf':_0x368f3f(0xf8),'TLdQL':_0x368f3f(0x103),'WnfRN':_0x368f3f(0x89),'jkToh':_0x368f3f(0xf1)},_0x1637cf=_0x1bdbec['WXCTS'][_0x368f3f(0xe2)]('|');let _0x29168f=0x0;while(!![]){switch(_0x1637cf[_0x29168f++]){case'0':console['log']('Version:',a0_0x2d4fbf);continue;case'1':a0_0x50f728=_0x1bdbec[_0x368f3f(0x105)](_0x51f171[_0x368f3f(0xd9)],_0x1bdbec['FzkNg'])?_0x1bdbec[_0x368f3f(0xfa)]:_0x1bdbec[_0x368f3f(0xd6)];continue;case'2':console['log'](_0x1bdbec[_0x368f3f(0xc7)],a0_0x50f728);continue;case'3':console[_0x368f3f(0xe8)](_0x1bdbec[_0x368f3f(0xc1)],_0x51f171[_0x368f3f(0xd9)]);continue;case'4':_0x51f171[_0x368f3f(0xd9)]===_0x368f3f(0xaa)&&(console['log']=()=>{});continue;case'5':a0_0x2d4fbf=_0x51f171[_0x368f3f(0x9e)];continue;case'6':console[_0x368f3f(0xe8)](_0x1bdbec[_0x368f3f(0x83)]);continue;}break;}});export{a0_0x50f728 as backendAddress};function a0_0x58cc(_0x2d9ecc,_0x1c1e54){const _0xa3d227=a0_0xa3d2();return a0_0x58cc=function(_0x58cc58,_0xb51942){_0x58cc58=_0x58cc58-0x7f;let _0x3877a0=_0xa3d227[_0x58cc58];return _0x3877a0;},a0_0x58cc(_0x2d9ecc,_0x1c1e54);}function a0_0x496040(){const _0x5746a5=a0_0x21294a,_0x4e534a={'xiwqy':function(_0x40339f,_0x3f5bc4){return _0x40339f===_0x3f5bc4;},'Fmncy':'storedDataUpdated','EYGoS':function(_0x516668){return _0x516668();},'lposx':function(_0x3bdc08,_0x32f41d){return _0x3bdc08===_0x32f41d;},'MdGeT':_0x5746a5(0x9c),'RxXWl':_0x5746a5(0xdc),'RrEAk':function(_0x2530e1,_0x2df21b){return _0x2530e1===_0x2df21b;},'lZfLy':_0x5746a5(0xe4),'RRtxI':_0x5746a5(0xe6),'HEnoR':_0x5746a5(0x87),'VSpbR':_0x5746a5(0xdf),'DefDg':'authTokenSuper','QDTHa':'showSuccessAlert','YsgsF':_0x5746a5(0xc5),'AckAf':_0x5746a5(0xcf),'xXHEO':_0x5746a5(0x8e),'czsjf':_0x5746a5(0x113),'TCblZ':'Update\x20is\x20available','DwPYl':_0x5746a5(0x104),'TgFtZ':function(_0x120144,_0xcfd1f,_0x4af845){return _0x120144(_0xcfd1f,_0x4af845);},'giuXp':'Account\x20expired','DMlIq':_0x5746a5(0xb5),'rvrUD':'Subscription\x20expired','HulHu':function(_0x4f2633,_0x47775f){return _0x4f2633===_0x47775f;},'WlVRh':_0x5746a5(0xf7),'OORRW':function(_0x39e8a0,_0x2c5801){return _0x39e8a0!=_0x2c5801;},'dHYCr':function(_0x67f80a,_0x4b515a){return _0x67f80a(_0x4b515a);},'WYwmu':function(_0x127be2,_0xc84523){return _0x127be2(_0xc84523);},'nvWnG':function(_0x469ace){return _0x469ace();},'wohbS':_0x5746a5(0xd3),'cFEdl':function(_0x29c54f,_0x25e418){return _0x29c54f(_0x25e418);},'JdzNH':function(_0x2bae33,_0x463f06){return _0x2bae33(_0x463f06);},'tCmcL':function(_0x3d433a,_0x178933){return _0x3d433a(_0x178933);},'rjGKz':function(_0x46a26b,_0x5a4f26){return _0x46a26b(_0x5a4f26);},'NnUuS':'POST','EGaPu':_0x5746a5(0x111),'zLlcG':_0x5746a5(0xd8),'gEBTE':_0x5746a5(0x10e),'eOJez':function(_0x2dd1a5,_0xf8e536){return _0x2dd1a5===_0xf8e536;},'YeEEP':function(_0x30c310,_0x995690,_0xb58370,_0x36d46b){return _0x30c310(_0x995690,_0xb58370,_0x36d46b);},'UNSkr':_0x5746a5(0xe9),'QvARt':function(_0xef95eb,_0x432dcc){return _0xef95eb>_0x432dcc;},'uzyqU':function(_0x21a82a,_0x56e135,_0x47ed4d,_0x5b1baf){return _0x21a82a(_0x56e135,_0x47ed4d,_0x5b1baf);},'JgUOL':_0x5746a5(0xef),'NreCt':function(_0x58b1b9,_0x58a2e6,_0x4333e7){return _0x58b1b9(_0x58a2e6,_0x4333e7);},'rTEqH':_0x5746a5(0xc3),'rzFrU':function(_0x46fdef,_0x1eb3db){return _0x46fdef(_0x1eb3db);},'PUXCr':'Enter','ZcSZY':'loginElement','QSRSP':_0x5746a5(0xf0),'ZFecL':_0x5746a5(0xea),'vMNcc':_0x5746a5(0xd7),'oMtSq':_0x5746a5(0xad),'tqlQU':'subscription','mgYKc':_0x5746a5(0x9e),'ZQQwI':function(_0x47c623,_0x25e302,_0x4866a4){return _0x47c623(_0x25e302,_0x4866a4);},'jjArQ':function(_0x4b6b90){return _0x4b6b90();},'vODfH':'keydown'};chrome['runtime']['sendMessage']({'action':_0x4e534a['QSRSP']}),_0x4e534a[_0x5746a5(0xed)](initEventListeners),chrome[_0x5746a5(0xda)]['onMessage'][_0x5746a5(0xf2)](function(_0x1559ba,_0x2e4a9e,_0x216a4c){const _0x159d03=_0x5746a5;if(_0x4e534a[_0x159d03(0xd4)](_0x1559ba[_0x159d03(0xd1)],_0x4e534a[_0x159d03(0xe7)]))_0x4e534a[_0x159d03(0x7f)](checkAlertsFilter);else{if(_0x4e534a[_0x159d03(0x9b)](_0x1559ba[_0x159d03(0xd1)],'showRelogin'))a0_0x3307b1[_0x159d03(0x8a)](_0x4e534a[_0x159d03(0x85)],_0x159d03(0x87)),localStorage[_0x159d03(0x10b)](_0x4e534a['RxXWl']);else{if(_0x4e534a[_0x159d03(0xbc)](_0x1559ba[_0x159d03(0xd1)],_0x4e534a[_0x159d03(0x100)]))a0_0x3307b1[_0x159d03(0x8a)](_0x4e534a[_0x159d03(0xfc)],_0x4e534a[_0x159d03(0xa5)]),localStorage[_0x159d03(0x10b)](_0x4e534a['VSpbR']);else{if(_0x1559ba[_0x159d03(0xd1)]===_0x159d03(0xbd))a0_0x3307b1['error'](_0x159d03(0xae),_0x4e534a[_0x159d03(0xa5)]),localStorage[_0x159d03(0x10b)](_0x4e534a[_0x159d03(0xcd)]);else{if(_0x1559ba[_0x159d03(0xd1)]===_0x4e534a[_0x159d03(0x106)])a0_0x3307b1[_0x159d03(0xb0)](_0x4e534a['YsgsF'],_0x1559ba[_0x159d03(0xc8)]);else _0x4e534a[_0x159d03(0x9b)](_0x1559ba['action'],_0x4e534a[_0x159d03(0x94)])&&a0_0x3307b1['error'](_0x159d03(0x8b),_0x1559ba[_0x159d03(0xc8)],{'timeOut':0x1388});}}}}}),chrome[_0x5746a5(0x84)][_0x5746a5(0xcc)][_0x5746a5(0xe1)](['email',_0x4e534a[_0x5746a5(0xa8)],_0x4e534a['vMNcc'],_0x4e534a[_0x5746a5(0xbf)],_0x4e534a[_0x5746a5(0xca)],'searchNames',_0x4e534a[_0x5746a5(0x90)],_0x4e534a[_0x5746a5(0xfd)]],function(_0x47072a){const _0x26fc75=_0x5746a5,_0x190c08={'hVbkt':function(_0x1bfe7a){const _0x342092=a0_0x58cc;return _0x4e534a[_0x342092(0x7f)](_0x1bfe7a);}};_0x47072a&&_0x47072a[_0x26fc75(0xad)]&&(document[_0x26fc75(0xb4)](_0x4e534a[_0x26fc75(0x99)])['checked']=!![]),_0x47072a&&_0x47072a[_0x26fc75(0xdd)]&&_0x4e534a[_0x26fc75(0x7f)](updateAlertsFilter),_0x47072a&&_0x47072a[_0x26fc75(0xd7)]&&_0x4e534a[_0x26fc75(0xaf)](setCompanyId,_0x47072a[_0x26fc75(0xd7)]),_0x47072a&&_0x47072a[_0x26fc75(0xea)]&&_0x4e534a[_0x26fc75(0xa3)](setLoginKey,_0x47072a['loginKey']),_0x47072a&&_0x47072a[_0x26fc75(0xd0)]&&_0x4e534a[_0x26fc75(0xa2)](setSubscription,_0x47072a[_0x26fc75(0xd0)]),_0x47072a&&_0x47072a[_0x26fc75(0x9e)]&&(a0_0x2d4fbf=_0x47072a[_0x26fc75(0x9e)]),_0x47072a&&_0x47072a[_0x26fc75(0xdc)]?setAuthToken(_0x47072a[_0x26fc75(0xdc)]):a0_0x3307b1[_0x26fc75(0xb6)](_0x26fc75(0xb9)),_0x47072a&&_0x47072a[_0x26fc75(0x110)]&&_0x47072a[_0x26fc75(0xea)]?(_0x4e534a[_0x26fc75(0xee)](setEmail,_0x47072a['email']),fetch(a0_0x50f728+_0x26fc75(0x80),{'method':_0x4e534a[_0x26fc75(0xeb)],'headers':{'Content-Type':_0x4e534a[_0x26fc75(0xec)]},'body':JSON[_0x26fc75(0x107)]({'email':_0x47072a['email'],'loginKey':_0x47072a['loginKey'],'version':a0_0x2d4fbf})})[_0x26fc75(0xa7)](_0x1719fc=>_0x1719fc[_0x26fc75(0xa4)]())[_0x26fc75(0xa7)](_0xb8a1ac=>{const _0x12440b=_0x26fc75;if(_0xb8a1ac[_0x12440b(0x8a)])goToLogin(),_0xb8a1ac['update']&&(a0_0x3307b1['info'](_0x4e534a[_0x12440b(0x8f)],_0x12440b(0xbb)),chrome[_0x12440b(0xda)][_0x12440b(0x98)]({'message':_0x4e534a['czsjf'],'title':_0x4e534a[_0x12440b(0xa1)],'messageBody':_0x4e534a[_0x12440b(0x92)]}),_0x4e534a[_0x12440b(0xde)](setTimeout,()=>{window['close']();},0x3e8)),_0x4e534a[_0x12440b(0x9b)](_0xb8a1ac[_0x12440b(0x8a)],_0x4e534a[_0x12440b(0xac)])&&a0_0x3307b1[_0x12440b(0xb6)](_0x4e534a[_0x12440b(0xc4)],_0x4e534a[_0x12440b(0xd2)]),_0x4e534a['HulHu'](_0xb8a1ac[_0x12440b(0x8a)],_0x4e534a[_0x12440b(0x101)])&&a0_0x3307b1[_0x12440b(0xb6)](_0x12440b(0x112),_0x12440b(0xf7));else{console[_0x12440b(0xe8)](_0x12440b(0xff),_0xb8a1ac);if(_0xb8a1ac[_0x12440b(0x102)]){saveAccountType(_0xb8a1ac[_0x12440b(0x102)]);if(_0x4e534a[_0x12440b(0xe3)](_0xb8a1ac[_0x12440b(0x102)],'manager')){let _0x3a0c81=document[_0x12440b(0xb4)](_0x12440b(0xdb));_0x4e534a[_0x12440b(0xb7)](makeItDisappear,_0x3a0c81);}}_0xb8a1ac[_0x12440b(0xef)]&&updateBlacklistInStorage(_0xb8a1ac['blacklist']),_0xb8a1ac[_0x12440b(0xd0)]&&_0x4e534a[_0x12440b(0x9f)](setSubscription,_0xb8a1ac['subscription']),_0xb8a1ac[_0x12440b(0xbe)]&&(setDaysBeforeExpire(_0xb8a1ac[_0x12440b(0xbe)]),_0xb8a1ac[_0x12440b(0xbe)]<0x0?(a0_0x3307b1[_0x12440b(0xb6)](_0x4e534a['DMlIq'],_0x12440b(0x96)),_0x4e534a['nvWnG'](logout)):goToControl()),_0xb8a1ac[_0x12440b(0xa9)]&&(a0_0x3307b1[_0x12440b(0x81)](_0x4e534a[_0x12440b(0x8f)],_0x4e534a[_0x12440b(0xa1)]),chrome['runtime'][_0x12440b(0x98)]({'message':_0x4e534a[_0x12440b(0xfb)],'title':_0x4e534a[_0x12440b(0xa1)],'messageBody':_0x4e534a[_0x12440b(0x92)]}),setTimeout(()=>{const _0x5042fe=_0x12440b;window[_0x5042fe(0xcb)]();},0x3e8));}})['catch'](_0x2a19a9=>{const _0x375c4a=_0x26fc75;a0_0x3307b1[_0x375c4a(0x8a)](_0x375c4a(0x97),_0x2a19a9),_0x190c08[_0x375c4a(0xb2)](goToLogin);})):goToLogin();});let _0x536f9b;chrome[_0x5746a5(0x84)][_0x5746a5(0xcc)][_0x5746a5(0xe1)]([_0x5746a5(0x108)],function(_0x39a7da){const _0x11fb97=_0x5746a5;_0x536f9b=_0x39a7da[_0x11fb97(0x108)]||[];}),_0x4e534a[_0x5746a5(0xf4)](setTimeout,()=>{const _0x110bb0=_0x5746a5;if(_0x4e534a[_0x110bb0(0xbc)](_0x536f9b['length'],0x0)){const _0x79ef77=document[_0x110bb0(0xb4)](_0x4e534a[_0x110bb0(0xb3)]);_0x79ef77[_0x110bb0(0x10d)]=_0x4e534a[_0x110bb0(0xf3)];}else _0x4e534a['rjGKz'](populateAlertsFromData,_0x536f9b);},0x12c),_0x4e534a['NreCt'](setInterval,()=>{const _0x50e1d5=_0x5746a5;_0x4e534a[_0x50e1d5(0x7f)](updateMinutes);},0x3e8),_0x4e534a['nvWnG'](initializeDropdownChecklist),_0x4e534a['jjArQ'](initializeWebsiteDropdownChecklist);function _0x4be481(_0x1315d5){const _0x54322a=_0x5746a5;var _0x346b39=document[_0x54322a(0xb4)](_0x4e534a[_0x54322a(0x86)]);while(_0x4e534a[_0x54322a(0xc9)](_0x346b39[_0x54322a(0x9a)]['length'],0x1)){_0x346b39['deleteRow'](0x1);}Array['isArray'](_0x1315d5)?_0x1315d5['forEach'](function(_0x17f776,_0x450d2a){const _0x537134=_0x54322a;_0x4e534a[_0x537134(0xf6)](_0x450d2a,0x0)?_0x4e534a[_0x537134(0xb8)](addRowToTable,_0x346b39,_0x17f776,_0x450d2a):addRowToTable(_0x346b39,_0x17f776,_0x450d2a);}):_0x4e534a['uzyqU'](addRowToTable,_0x346b39,_0x1315d5,0x0);}function _0x4385a1(){const _0x97dbd0=_0x5746a5,_0x5ed8c7={'yXiAI':function(_0x36e881,_0x46e7aa){return _0x4e534a['tCmcL'](_0x36e881,_0x46e7aa);}};chrome[_0x97dbd0(0x84)][_0x97dbd0(0xcc)][_0x97dbd0(0xe1)](_0x4e534a[_0x97dbd0(0x82)],function(_0x14b519){const _0x568b75=_0x97dbd0;let _0x328a1b=Object[_0x568b75(0x88)](_0x14b519['blacklist']);_0x5ed8c7['yXiAI'](_0x4be481,_0x328a1b);});}async function _0x20e80f(_0x4c5755,_0x960130){const _0x4c02dd=_0x5746a5,_0x36068e={'name':_0x4c5755,'address':_0x960130},_0x27dbb5=await _0x4e534a[_0x4c02dd(0xc0)](updateBlacklistInDatabase,_0x36068e,_0x4e534a[_0x4c02dd(0xf5)]);_0x4e534a[_0x4c02dd(0x9d)](updateBlacklistInStorage,_0x27dbb5);}document[_0x5746a5(0x95)](_0x4e534a[_0x5746a5(0xc2)],function(_0x5e8496){const _0x99400c=_0x5746a5;if(_0x4e534a['lposx'](_0x5e8496['key'],_0x4e534a['PUXCr'])){const _0xb4cf6e=document[_0x99400c(0xb4)](_0x4e534a[_0x99400c(0x8c)]);if(_0xb4cf6e&&!_0xb4cf6e[_0x99400c(0x10f)][_0x99400c(0x93)](_0x99400c(0xf9))){const _0x3dde2a=document[_0x99400c(0xb4)](_0x99400c(0xfe));_0x3dde2a&&_0x3dde2a[_0x99400c(0xa6)]();}}});}document[a0_0x21294a(0x95)]('DOMContentLoaded',a0_0x496040);