const a0_0x184557 = (function () {
    let _0x3a04f4 = !![];
    return function (_0x13892c, _0x38f614) {
        const _0x36794f = _0x3a04f4 ? function () {
            if (_0x38f614) {
                const _0x4d5b9e = _0x38f614['apply'](_0x13892c, arguments);
                _0x38f614 = null;
                return _0x4d5b9e;
            }
        } : function () {
        };
        _0x3a04f4 = ![];
        return _0x36794f;
    };
}());
const a0_0x37d0e3 = a0_0x184557(this, function () {
    let _0x29f320;
    try {
        const _0xc0f15b = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
        _0x29f320 = _0xc0f15b();
    } catch (_0x142a2d) {
        _0x29f320 = window;
    }
    const _0x399482 = _0x29f320['console'] = _0x29f320['console'] || {};
    const _0x5cd60e = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace'
    ];
    for (let _0x16a2c6 = 0x0; _0x16a2c6 < _0x5cd60e['length']; _0x16a2c6++) {
        const _0x2229ff = a0_0x184557['constructor']['prototype']['bind'](a0_0x184557);
        const _0x20a421 = _0x5cd60e[_0x16a2c6];
        const _0x20cc41 = _0x399482[_0x20a421] || _0x2229ff;
        _0x2229ff['__proto__'] = a0_0x184557['bind'](a0_0x184557);
        _0x2229ff['toString'] = _0x20cc41['toString']['bind'](_0x20cc41);
        _0x399482[_0x20a421] = _0x2229ff;
    }
});
a0_0x37d0e3();
let searches = [];
let authToken;
let searching = ![];
let intervalId;
let savedData = {};
let notificationCount = 0x0;
const lowerBoundInSeconds = 0x5;
const upperBoundInSeconds = 0xf;
const lowerBoundMilliseconds = lowerBoundInSeconds * 0x3e8;
const upperBoundMilliseconds = upperBoundInSeconds * 0x3e8;
chrome['webRequest']['onBeforeSendHeaders']['addListener'](function (_0x9d4d43) {
    if (_0x9d4d43['method'] === 'GET' && _0x9d4d43['initiator'] === 'https://app.centraldispatch.com') {
        let _0x164d85 = _0x9d4d43['requestHeaders']['find'](_0x5f0d60 => _0x5f0d60['name'] === 'Authorization');
        if (_0x164d85) {
            const _0x2e7b66 = _0x164d85['value'];
            if (authToken !== _0x2e7b66) {
                chrome['storage']['local']['set']({ 'authToken': _0x2e7b66 }, function () {
                    console['log']('Updated\x20auth\x20token:');
                });
                authToken = _0x2e7b66;
            }
        }
    }
}, { 'urls': ['<all_urls>'] }, ['requestHeaders']);
function cleanSavedData(_0x98db7, _0x1e240e) {
    const _0x108058 = _0x98db7['map'](_0x4111e8 => _0x4111e8['searchName']);
    const _0x15ab2d = Object['keys'](_0x1e240e);
    _0x15ab2d['forEach'](_0x296526 => {
        if (!_0x108058['includes'](_0x296526)) {
            delete _0x1e240e[_0x296526];
        }
    });
}
function search(_0x1b468c, _0x446047) {
    if (!authToken) {
        chrome['tabs']['create']({
            'url': 'https://app.centraldispatch.com/search',
            'active': ![]
        });
        return;
    }
    fetch('https://dispatch-extension-2wrl4gpsga-uc.a.run.app/api/search', {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': authToken
        },
        'body': JSON['stringify'](_0x446047)
    })['then'](_0x563d7f => _0x563d7f['json']())['then'](_0x278643 => {
        console['log'](_0x1b468c, _0x278643);
        handleDataFinal(_0x278643, _0x1b468c);
    })['catch'](_0x314d55 => {
        console['error']('Error\x20during\x20search\x20for\x20' + _0x1b468c + ':', _0x314d55);
    });
}
function doSearch() {
    if (searching) {
        searches['forEach'](function (_0xbcc509) {
            const {
                searchName: _0x3d7fdf,
                searchData: _0x4ba9ff
            } = _0xbcc509;
            search(_0x3d7fdf, _0x4ba9ff);
        });
    } else {
        clearInterval(intervalId);
        savedData = {};
        console['log']('Saved\x20data\x20cleared:\x20', savedData);
    }
}
function startRandomIntervalSearching() {
    const _0x4cb3f2 = Math['floor'](Math['random']() * (upperBoundMilliseconds - lowerBoundMilliseconds + 0x1)) + lowerBoundMilliseconds;
    intervalId = setInterval(doSearch, _0x4cb3f2);
}
function handleData(_0x42999a, _0x2dc486) {
    console['log']('Saved\x20data:\x20', savedData);
    if (savedData[_0x2dc486]) {
        const _0x130138 = savedData[_0x2dc486];
        const _0x3c6e45 = _0x42999a['items']['filter'](_0x2dfd9e => {
            const _0x21574c = _0x130138['items']['every'](_0x51584c => _0x51584c['id'] !== _0x2dfd9e['id']);
            return _0x21574c;
        });
        savedData[_0x2dc486] = {
            'items': _0x130138['items']['concat'](_0x3c6e45),
            'count': _0x42999a['count'],
            'totalRecords': _0x42999a['totalRecords']
        };
        console['log'](_0x3c6e45);
        return _0x3c6e45;
    } else {
        savedData[_0x2dc486] = {
            'items': _0x42999a['items'],
            'count': _0x42999a['count'],
            'totalRecords': _0x42999a['totalRecords']
        };
        console['log']('New\x20data\x20saved:\x20', savedData);
        return [];
    }
}
function handleDataFinal(_0x206a40, _0x55c7fd) {
    const _0x3438b2 = handleData(_0x206a40, _0x55c7fd);
    if (_0x3438b2['length'] > 0x0) {
        playSound('./assets/notification.wav', 0.5);
        showNotification('New\x20post\x20for\x20' + _0x55c7fd, 'There\x20is\x20a\x20new\x20posted\x20load\x20on\x20CentralDispatch');
        chrome['storage']['local']['get'](['storedData'], function (_0x18c87f) {
            let _0x5dbe03 = _0x18c87f['storedData'] || [];
            _0x3438b2['forEach'](_0x1a734d => {
                _0x1a734d['name'] = _0x55c7fd;
                _0x1a734d['sortingDate'] = new Date(_0x1a734d['createdDate']);
            });
            _0x5dbe03 = _0x5dbe03['concat'](_0x3438b2);
            _0x5dbe03['sort']((_0x4077f0, _0x9220f5) => _0x9220f5['sortingDate'] - _0x4077f0['sortingDate']);
            console['log']('Stored\x20Data:\x20', _0x5dbe03);
            chrome['storage']['local']['set']({ 'storedData': _0x5dbe03 }, function () {
                console['log']('Data\x20stored\x20in\x20local\x20storage');
                chrome['runtime']['sendMessage']({ 'action': 'storedDataUpdated' });
            });
        });
    }
}
function showNotification(_0x55cd46, _0x3d73d2) {
    chrome['notifications']['create']({
        'type': 'basic',
        'iconUrl': './assets/48.png',
        'title': _0x55cd46,
        'message': _0x3d73d2
    });
}
function updateSearchList() {
    chrome['storage']['local']['get'](['searches'], function (_0x3d065e) {
        if (_0x3d065e['hasOwnProperty']('searches')) {
            searches = _0x3d065e['searches'] || [];
            cleanSavedData(searches, savedData);
        } else {
            console['log']('No\x20searches\x20found\x20in\x20storage');
        }
    });
}
function stopSearching() {
    searching = ![];
}
function startSearching() {
    searching = !![];
    startRandomIntervalSearching();
}
chrome['runtime']['onMessage']['addListener'](function (_0x258ab1, _0x5399e6, _0x55e6d8) {
    if (_0x258ab1['action'] === 'changedSearch') {
        console['log']('Searches\x20changed');
        updateSearchList();
        if (!searching) {
            setTimeout(() => {
                startSearching();
            }, 0x12c);
        }
    }
});
async function playSound(_0x43f8c1 = 'default.wav', _0x46bd6b = 0x1) {
    await createOffscreen();
    await chrome['runtime']['sendMessage']({
        'play': {
            'source': _0x43f8c1,
            'volume': _0x46bd6b
        }
    });
}
async function createOffscreen() {
    if (await chrome['offscreen']['hasDocument']())
        return;
    await chrome['offscreen']['createDocument']({
        'url': 'offscreen.html',
        'reasons': ['AUDIO_PLAYBACK'],
        'justification': 'testing'
    });
}
function clearStoredData() {
    chrome['storage']['local']['remove']([
        'storedData',
        'authToken',
        'email',
        'loginKey',
        'companyId',
        'blacklist',
        'searches'
    ], function () {
        console['log']('Data\x20cleared\x20from\x20storage');
    });
}
chrome['runtime']['onInstalled']['addListener'](function (_0x3a40bf) {
    if (_0x3a40bf['reason'] === 'install') {
        console['log']('Extension\x20installed');
    } else if (_0x3a40bf['reason'] === 'update') {
        console['log']('Extension\x20updated');
    } else if (_0x3a40bf['reason'] === 'chrome_update' || _0x3a40bf['reason'] === 'shared_module_update') {
        console['log']('Chrome\x20or\x20shared\x20module\x20updated');
    } else if (_0x3a40bf['reason'] === 'install' || _0x3a40bf['reason'] === 'install_temporary') {
        console['log']('Extension\x20installed\x20or\x20temporarily\x20installed');
    }
    clearStoredData();
});
chrome['runtime']['onStartup']['addListener'](function () {
    console['log']('Extension\x20started');
    clearStoredData();
});