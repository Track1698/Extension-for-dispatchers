const a0_0x523d99 = (function () {
    let _0x16be71 = !![];
    return function (_0x2f276a, _0x1fc4f9) {
        const _0x4453fd = _0x16be71 ? function () {
            if (_0x1fc4f9) {
                const _0x391cbe = _0x1fc4f9['apply'](_0x2f276a, arguments);
                _0x1fc4f9 = null;
                return _0x391cbe;
            }
        } : function () {
        };
        _0x16be71 = ![];
        return _0x4453fd;
    };
}());
const a0_0x6143aa = a0_0x523d99(this, function () {
    let _0x298259;
    try {
        const _0x582717 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
        _0x298259 = _0x582717();
    } catch (_0x479cd8) {
        _0x298259 = window;
    }
    const _0x3acc27 = _0x298259['console'] = _0x298259['console'] || {};
    const _0x581d91 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace'
    ];
    for (let _0x9e9a22 = 0x0; _0x9e9a22 < _0x581d91['length']; _0x9e9a22++) {
        const _0x157ab7 = a0_0x523d99['constructor']['prototype']['bind'](a0_0x523d99);
        const _0x448292 = _0x581d91[_0x9e9a22];
        const _0x34f1db = _0x3acc27[_0x448292] || _0x157ab7;
        _0x157ab7['__proto__'] = a0_0x523d99['bind'](a0_0x523d99);
        _0x157ab7['toString'] = _0x34f1db['toString']['bind'](_0x34f1db);
        _0x3acc27[_0x448292] = _0x157ab7;
    }
});
a0_0x6143aa();
function changedSearches() {
    console['log']('Changeeeeeeeeeed');
    chrome['runtime']['sendMessage']({ 'action': 'changedSearch' });
}
document['addEventListener']('DOMContentLoaded', function () {
    const _0x684569 = document['getElementById']('loginElement');
    const _0x1d2631 = document['getElementById']('hover');
    const _0x3c3002 = document['getElementById']('searchFormElement');
    const _0x5082e5 = document['getElementById']('controlElement');
    const _0x2f8247 = document['getElementById']('loadingElement');
    const _0x1ee58b = document['getElementById']('searchListElement');
    const _0x5ca831 = document['getElementById']('blacklistControlElement');
    let _0x2918d5;
    let _0x297af5;
    let _0x33c3ca;
    chrome['runtime']['onMessage']['addListener'](function (_0x1e4077, _0x218977, _0x4bdb70) {
        if (_0x1e4077['action'] === 'storedDataUpdated') {
            console['log']('Stored\x20data\x20has\x20been\x20updated.\x20Refreshing\x20UI...');
            _0x55ae5e();
        }
    });
    var _0x1e944c = undefined;
    (function (_0x44a7a8) {
        var _0x45a9fd, _0x583067, _0x24493c, _0x2b4e6a, _0x31abe7, _0x27e80d, _0x30a54d;
        _0x2b4e6a = function (_0x3c9db8, _0x555f25, _0xf3cb14) {
            return _0x45a9fd('info', _0x3c9db8, _0x555f25, 'info', _0xf3cb14);
        };
        _0x27e80d = function (_0x4df8dd, _0x3eee5a, _0x2132cd) {
            return _0x45a9fd('warning', _0x4df8dd, _0x3eee5a, 'warning', _0x2132cd);
        };
        _0x583067 = function (_0x43d449, _0xe6f6dc, _0x402896) {
            return _0x45a9fd('error', _0x43d449, _0xe6f6dc, 'error', _0x402896);
        };
        _0x24493c = function (_0x44731a, _0x2cd1a5, _0x9f2da7) {
            return _0x45a9fd('trash', _0x44731a, _0x2cd1a5, 'delete', _0x9f2da7);
        };
        _0x31abe7 = function (_0x1c944b, _0x161837, _0x4c7bff) {
            return _0x45a9fd('success', _0x1c944b, _0x161837, 'check_circle', _0x4c7bff);
        };
        _0x45a9fd = function (_0x37a861, _0x21d66f, _0x26387d, _0x316254, _0x5fe2fb) {
            var _0x33b994, _0x4ac42b, _0xbd6490, _0x59df0a, _0x176120, _0x23e44d;
            if (typeof _0x5fe2fb === 'undefined') {
                _0x5fe2fb = {};
            }
            _0x5fe2fb = Object['assign']({}, _0x44a7a8['defaults'], _0x5fe2fb);
            if (!_0x23e44d) {
                _0x23e44d = document['getElementById']('alerts');
                if (!_0x23e44d) {
                    _0x23e44d = document['createElement']('ul');
                    _0x23e44d['id'] = 'alerts';
                    document['body']['appendChild'](_0x23e44d);
                }
            }
            if (_0x5fe2fb['width']) {
                _0x23e44d['style']['width'] = _0x5fe2fb['width'];
            }
            _0x33b994 = document['createElement']('li');
            _0x33b994['className'] = 'alert\x20alert-' + _0x37a861;
            setTimeout(function () {
                _0x33b994['classList']['add']('open');
            }, 0x1);
            if (_0x316254) {
                _0x59df0a = document['createElement']('span');
                _0x59df0a['className'] = 'material-symbols-outlined';
                _0x59df0a['textContent'] = _0x316254;
                _0x33b994['appendChild'](_0x59df0a);
            }
            _0x176120 = document['createElement']('div');
            _0x176120['className'] = 'alert-block';
            _0x33b994['appendChild'](_0x176120);
            if (_0x26387d) {
                _0xbd6490 = document['createElement']('div');
                _0xbd6490['className'] = 'alert-title';
                _0xbd6490['innerHTML'] = _0x26387d;
                _0x176120['appendChild'](_0xbd6490);
            }
            if (_0x21d66f) {
                _0x4ac42b = document['createElement']('div');
                _0x4ac42b['className'] = 'alert-message';
                _0x4ac42b['innerHTML'] = _0x21d66f;
                _0x176120['appendChild'](_0x4ac42b);
            }
            if (_0x5fe2fb['displayDuration'] > 0x0) {
                setTimeout(function () {
                    _0x8300a5();
                }, _0x5fe2fb['displayDuration']);
            } else {
                _0x176120['innerHTML'] += '<em>Click\x20to\x20Dismiss</em>';
            }
            _0x33b994['addEventListener']('click', function () {
                _0x8300a5();
            });
            function _0x8300a5() {
                _0x33b994['classList']['remove']('open');
                _0x33b994['addEventListener']('transitionend', function () {
                    if (_0x33b994['parentNode']) {
                        _0x33b994['parentNode']['removeChild'](_0x33b994);
                    }
                });
            }
            _0x23e44d['prepend'](_0x33b994);
        };
        _0x44a7a8['defaults'] = {
            'width': '',
            'icon': '',
            'displayDuration': 0xbb8,
            'pos': ''
        };
        _0x44a7a8['info'] = _0x2b4e6a;
        _0x44a7a8['warning'] = _0x27e80d;
        _0x44a7a8['error'] = _0x583067;
        _0x44a7a8['trash'] = _0x24493c;
        _0x44a7a8['success'] = _0x31abe7;
        return _0x30a54d = void 0x0;
    }(_0x1e944c || (_0x1e944c = {})));
    this['Alert'] = _0x1e944c;
    chrome['storage']['local']['get']([
        'email',
        'loginKey',
        'companyId',
        'blacklist',
        'authToken'
    ], function (_0x3a2421) {
        console['log']('Storage\x20data\x20retrieved:', _0x3a2421);
        if (_0x3a2421 && _0x3a2421['authToken']) {
            _0x2918d5 = _0x3a2421['authToken'];
        } else {
            _0x1e944c['warning']('Please\x20open\x20CentralDispatch\x20and\x20log\x20in\x20to\x20your\x20account');
        }
        if (_0x3a2421 && _0x3a2421['email'] && _0x3a2421['loginKey'] && _0x3a2421['companyId']) {
            _0x297af5 = _0x3a2421['email'];
            _0x33c3ca = _0x3a2421['companyId'];
            fetch('https://dispatch-extension-2wrl4gpsga-uc.a.run.app/api/checklogin', {
                'method': 'POST',
                'headers': { 'Content-Type': 'application/json' },
                'body': JSON['stringify']({
                    'email': _0x3a2421['email'],
                    'loginKey': _0x3a2421['loginKey'],
                    'companyId': _0x3a2421['companyId']
                })
            })['then'](_0x3ce8cc => _0x3ce8cc['json']())['then'](_0x2c723f => {
                if (_0x2c723f['error']) {
                    _0x9fc866();
                } else {
                    _0x4727a9();
                }
            })['catch'](_0x2adc33 => {
                _0x1e944c['error']('Error\x20in\x20checklogin\x20fetch:', _0x2adc33);
            });
        } else {
            _0x9fc866();
        }
    });
    document['addEventListener']('click', _0x43e588 => {
        const _0x2aeef3 = document['getElementById']('origin-suggestion-list');
        const _0xce2b30 = document['getElementById']('destination');
        const _0x20591e = document['getElementById']('vehicleTypesCheckboxList');
        if (!_0x2aeef3['contains'](_0x43e588['target']) && _0x43e588['target']['id'] !== 'origin') {
            _0x2aeef3['innerHTML'] = '';
        }
        if (!_0xce2b30['contains'](_0x43e588['target']) && _0x43e588['target']['id'] !== 'destination') {
            _0x2aeef3['innerHTML'] = '';
        }
        if (!_0x20591e['contains'](_0x43e588['target']) && _0x43e588['target']['id'] !== 'vehiclesAnchor') {
            _0x20591e['parentElement']['classList']['remove']('visible');
        }
    });
    chrome['storage']['local']['get'](['storedData'], function (_0x2d5251) {
        storedData = _0x2d5251['storedData'] || [];
    });
    setTimeout(() => {
        if (storedData['length'] === 0x0) {
            const _0x46fb91 = document['getElementById']('loadsAlertContainer');
            _0x46fb91['innerHTML'] = '<h2>THERE\x20ARE\x20NO\x20ALERTS</h2>';
        } else {
            console['log']('populating');
            _0x15fdb8(storedData);
        }
    }, 0x12c);
    setInterval(() => {
        _0x1f7ab2();
    }, 0x3e8);
    var _0xeabd4c = document['getElementById']('dropdownChecklist');
    var _0x2c3188 = _0xeabd4c['querySelector']('.anchor');
    var _0x1fcc7c = _0xeabd4c['querySelectorAll']('.items\x20input[type=\x27checkbox\x27]');
    _0x2c3188['onclick'] = function (_0x4de495) {
        if (_0xeabd4c['classList']['contains']('visible'))
            _0xeabd4c['classList']['remove']('visible');
        else
            _0xeabd4c['classList']['add']('visible');
    };
    _0x1fcc7c['forEach'](function (_0x334660) {
        _0x334660['addEventListener']('change', function () {
            _0x4db352();
            _0x334660['parentNode']['classList']['toggle']('checked');
        });
    });
    function _0x4db352() {
        var _0x23fc8d = _0xeabd4c['querySelectorAll']('.items\x20input[type=\x27checkbox\x27]:checked');
        if (_0x23fc8d['length'] === _0x1fcc7c['length'] || !_0x23fc8d['length']) {
            _0x2c3188['textContent'] = 'All\x20(Default)';
        } else {
            _0x2c3188['textContent'] = 'Selected';
        }
    }
    document['getElementById']('addNewSearchFilter')['addEventListener']('click', function (_0x4ed56f) {
        _0x4ed56f['preventDefault']();
        let _0x57f03f = {
            'searchName': document['getElementById']('searchName')['value'],
            'origin': document['getElementById']('origin')['value'],
            'startRadius': document['getElementById']('startRadius')['value'],
            'destination': document['getElementById']('destination')['value'],
            'endRadius': document['getElementById']('endRadius')['value'],
            'searchAlongRoute': document['getElementById']('searchAlongRoute')['checked'],
            'vehicleType': _0x56137d(),
            'trailerType': document['getElementById']('trailerType')['value'],
            'vehicleStatus': document['getElementById']('vehicleStatus')['value'],
            'minNumVehicles': document['getElementById']('minNumVehicles')['value'],
            'maxNumVehicles': document['getElementById']('maxNumVehicles')['value'],
            'deliveryDate': document['getElementById']('deliveryDate')['value'],
            'readyToShipWithin': document['getElementById']('readyToShipWithin')['value'],
            'paymentType': document['getElementById']('paymentType')['value'],
            'minTotalPay': document['getElementById']('minTotalPay')['value'],
            'minRatePerMile': document['getElementById']('minRatePerMile')['value'],
            'blacklist': document['getElementById']('blacklist')['checked']
        };
        if (!_0x57f03f['searchName']) {
            return _0x1e944c['error']('You\x20must\x20specify\x20the\x20name', 'Name\x20required', { 'displayDuration': 0xbb8 });
        }
        let _0x15a545;
        let _0x15d835;
        if (_0x57f03f['origin']) {
            _0x15a545 = _0x2ca9a7(_0x57f03f['origin'], 'Pickup');
        }
        if (_0x57f03f['destination']) {
            _0x15d835 = _0x2ca9a7(_0x57f03f['destination'], 'Dropoff');
        }
        let _0x7d66e4;
        if (_0x57f03f['searchAlongRoute']) {
            delete _0x15a545['radius'];
            delete _0x15d835['radius'];
            if (_0x15a545 && _0x15d835) {
                _0x7d66e4 = [
                    _0x15a545,
                    {},
                    _0x15d835
                ];
            } else if (_0x15a545) {
                _0x7d66e4 = [
                    _0x15a545,
                    {},
                    {}
                ];
            } else if (_0x15d835) {
                _0x7d66e4 = [
                    {},
                    {},
                    _0x15d835
                ];
            } else {
                _0x7d66e4 = [
                    {},
                    {},
                    {}
                ];
            }
        } else {
            if (_0x57f03f['startRadius'] !== '') {
                _0x15a545['radius'] = _0x57f03f['startRadius'];
            }
            if (_0x57f03f['endRadius'] !== '') {
                _0x15d835['radius'] = _0x57f03f['endRadius'];
            }
            if (_0x15a545 && _0x15d835) {
                _0x7d66e4 = [
                    _0x15a545,
                    _0x15d835
                ];
            } else if (_0x15a545) {
                _0x7d66e4 = [_0x15a545];
            } else if (_0x15d835) {
                _0x7d66e4 = [_0x15d835];
            } else {
                _0x7d66e4 = [];
            }
        }
        const _0x573d90 = {
            'vehicleCount': {
                'min': _0x57f03f['minNumVehicles'],
                'max': _0x57f03f['maxNumVehicles'] === 'all' ? null : [_0x57f03f['maxNumVehicles']]
            },
            'postedWithinHours': null,
            'tagListingsPostedWithin': 0x2,
            'trailerTypes': _0x57f03f['trailerType'] === 'All' ? [] : [_0x57f03f['trailerType']],
            'paymentTypes': _0x57f03f['paymentType'] === 'all' ? [] : [_0x57f03f['paymentType']],
            'vehicleTypes': _0x57f03f['vehicleType'],
            'operability': _0x57f03f['vehicleStatus'],
            'minimumPaymentTotal': _0x57f03f['minTotalPay'] === '' ? null : _0x57f03f['minTotalPay'],
            'readyToShipWithinDays': _0x57f03f['readyToShipWithin'] === 'all' ? null : _0x57f03f['readyToShipWithin'],
            'minimumPricePerMile': _0x57f03f['minRatePerMile'] === '' ? null : _0x57f03f['minRatePerMile'],
            'offset': 0x0,
            'limit': 0x19,
            'sortFields': [
                {
                    'name': 'POSTDATE',
                    'direction': 'DESC'
                },
                {
                    'name': 'DELIVERYMETROAREA',
                    'direction': 'ASC'
                }
            ],
            'shipperIds': [],
            'desiredDeliveryDate': _0x57f03f['deliveryDate'] === '' ? null : _0x1c0b32(_0x57f03f['deliveryDate']),
            'displayBlockedShippers': ![],
            'showPreferredShippersOnly': ![],
            'showTaggedOnTop': ![],
            'marketplaceIds': [],
            'averageRating': 'All',
            'requestType': _0x57f03f['searchAlongRoute'] ? 'Route' : 'Open',
            'locations': _0x7d66e4
        };
        if (_0x57f03f['searchAlongRoute']) {
            _0x573d90['corridorWidth'] = _0x57f03f['startRadius'] === '' ? 0x32 : _0x57f03f['startRadius'];
        }
        const _0x2010fe = {
            'searchName': _0x57f03f['searchName'],
            'formData': _0x57f03f,
            'searchData': _0x573d90
        };
        _0x5001c0();
        _0x419566(_0x2010fe);
        changedSearches();
    });
    function _0x5001c0() {
        const _0x116f98 = [
            'searchName',
            'origin',
            'startRadius',
            'destination',
            'endRadius',
            'searchAlongRoute',
            'pickupCheckbox',
            'boatCheckbox',
            'rvCheckbox',
            'carCheckbox',
            'suvCheckbox',
            'heavyCheckbox',
            'travelCheckbox',
            'largeCheckbox',
            'vanCheckbox',
            'motorcycleCheckbox',
            'otherCheckbox',
            'trailerType',
            'vehicleStatus',
            'minNumVehicles',
            'maxNumVehicles',
            'deliveryDate',
            'readyToShipWithin',
            'paymentType',
            'minTotalPay',
            'minRatePerMile',
            'blacklist'
        ];
        _0x116f98['forEach'](_0x49c65a => {
            const _0x4809ea = document['getElementById'](_0x49c65a);
            if (_0x4809ea['tagName'] === 'INPUT' && _0x4809ea['type'] !== 'checkbox') {
                _0x4809ea['value'] = '';
            } else if (_0x4809ea['tagName'] === 'INPUT' && _0x4809ea['type'] === 'checkbox') {
                _0x4809ea['checked'] = ![];
            } else if (_0x4809ea['tagName'] === 'SELECT') {
                _0x4809ea['selectedIndex'] = 0x0;
            }
        });
        var _0x2a3c44 = _0xeabd4c['querySelectorAll']('.items\x20input[type=\x27checkbox\x27]');
        _0x2a3c44['forEach'](function (_0x788d58) {
            _0x788d58['parentNode']['classList']['remove']('checked');
            _0x4db352();
        });
    }
    const _0x76de0c = document['getElementById']('origin');
    const _0xa378f8 = document['getElementById']('origin-suggestion-list');
    _0x76de0c['addEventListener']('input', _0xb4f3b1(() => _0x546bee(_0x76de0c, _0xa378f8), 0x12c));
    const _0x1379cc = document['getElementById']('destination');
    const _0x55ad08 = document['getElementById']('destination-suggestion-list');
    _0x1379cc['addEventListener']('input', _0xb4f3b1(() => _0x546bee(_0x1379cc, _0x55ad08), 0x12c));
    document['getElementById']('searchAlongRoute')['addEventListener']('change', function () {
        document['getElementById']('endRadius')['disabled'] = !this['checked'];
    });
    var _0x84add8 = document['getElementById']('searchAlongRoute');
    var _0x8451ba = document['getElementById']('endRadius');
    var _0x444168 = document['getElementById']('startRadiusLabel');
    _0x84add8['addEventListener']('change', function () {
        _0x8451ba['disabled'] = this['checked'];
        _0x444168['textContent'] = this['checked'] ? 'Distance\x20off\x20Route' : 'Start\x20Radius\x20(Miles)';
    });
    document['getElementById']('sidebar-btn')['addEventListener']('click', function () {
        const _0x59c2f4 = document['getElementById']('sidebar');
        _0x59c2f4['classList']['toggle']('visible');
    });
    document['getElementById']('backSearchListButton')['addEventListener']('click', function () {
        _0x16f9ed(_0x1ee58b);
        _0x15e845();
        _0x10afde(_0x5082e5);
    });
    document['getElementById']('activeFiltersButton')['addEventListener']('click', function () {
        _0x16f9ed(_0x5082e5);
        const _0x223a6d = document['getElementById']('sidebar');
        _0x223a6d['classList']['remove']('visible');
        _0x10afde(_0x1ee58b);
        _0x2d95e8();
    });
    document['getElementById']('backArrowButton')['addEventListener']('click', function () {
        _0x16f9ed(_0x3c3002);
        _0x10afde(_0x5082e5);
    });
    document['getElementById']('backArrowButton2')['addEventListener']('click', function () {
        _0x16f9ed(_0x5ca831);
        _0x10afde(_0x5082e5);
    });
    document['getElementById']('blacklistControlButton')['addEventListener']('click', function () {
        _0x16f9ed(_0x5082e5);
        const _0x46aaf7 = document['getElementById']('sidebar');
        _0x46aaf7['classList']['remove']('visible');
        _0x10afde(_0x5ca831);
    });
    document['getElementById']('addRowButton')['addEventListener']('click', function () {
        const _0x1f76e8 = document['getElementById']('addBlacklistItemNameInput');
        const _0x1f14cd = document['getElementById']('addBlacklistItemAddressInput');
        const _0x51242e = {
            'name': _0x1f76e8['value'],
            'address': _0x1f14cd['value']
        };
        if (_0x1f76e8['value'] || _0x1f14cd['value']) {
            _0x1f76e8['value'] = '';
            _0x1f14cd['value'] = '';
            _0x4659d1(_0x51242e);
        }
    });
    document['getElementById']('addNewSearch')['addEventListener']('click', function () {
        _0x16f9ed(_0x5082e5);
        _0x10afde(_0x3c3002);
    });
    document['getElementById']('login-button')['addEventListener']('click', function () {
        const _0xb73dbd = document['getElementById']('emailInput')['value'];
        const _0x1abfbf = document['getElementById']('passwordInput')['value'];
        _0x3467cc();
        const _0x4c0ccf = {
            'email': _0xb73dbd,
            'password': _0x1abfbf
        };
        fetch('https://dispatch-extension-2wrl4gpsga-uc.a.run.app/api/login', {
            'method': 'POST',
            'headers': { 'Content-Type': 'application/json' },
            'body': JSON['stringify'](_0x4c0ccf)
        })['then'](_0x14a8b7 => {
            if (!_0x14a8b7['ok']) {
                _0x480b41('Error\x20in\x20login\x20request');
                _0x9af88e();
                throw new Error('Error\x20in\x20login\x20request');
            }
            _0x9af88e();
            return _0x14a8b7['json']();
        })['then'](_0x1d7511 => {
            _0x9af88e();
            _0x5b4294(_0x1d7511['email'], _0x1d7511['loginKey'], _0x1d7511['companyId'], _0x1d7511['blacklist']);
        })['catch'](_0x3fbb70 => {
            console['log']('Login\x20error:', _0x3fbb70);
            _0x9af88e();
            _0x480b41(_0x3fbb70['message'] || 'Error\x20during\x20login\x20process');
        });
    });
    function _0x9fc866() {
        _0x9af88e();
        _0x10afde(_0x684569);
    }
    function _0x4727a9() {
        _0x9af88e();
        _0x10afde(_0x5082e5);
    }
    function _0x19de63(_0x1d6e6e) {
        const _0x18d308 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return _0x18d308['test'](_0x1d6e6e);
    }
    function _0x5b4294(_0x1af5a1, _0x55c074, _0x5a764e, _0x2af927) {
        _0x16f9ed(_0x684569);
        _0x10afde(_0x5082e5);
        chrome['storage']['local']['set']({
            'email': _0x1af5a1,
            'loginKey': _0x55c074,
            'companyId': _0x5a764e,
            'blacklist': _0x2af927
        }, function () {
            console['log']('Login\x20data\x20saved\x20to\x20storage.');
        });
    }
    function _0x480b41(_0xd8a337) {
        const _0x5104c9 = document['getElementById']('loginMessage');
        _0x5104c9['innerText'] = _0xd8a337;
    }
    function _0x3467cc() {
        document['body']['style']['pointerEvents'] = 'none';
        _0x10afde(_0x1d2631);
        _0x10afde(_0x2f8247);
    }
    function _0x9af88e() {
        _0x16f9ed(_0x2f8247);
        _0x16f9ed(_0x1d2631);
        document['body']['style']['pointerEvents'] = 'auto';
    }
    function _0x10afde(_0x209922) {
        if (_0x209922['classList']['contains']('display-none')) {
            _0x209922['classList']['remove']('display-none');
        }
        setTimeout(function () {
            if (_0x209922['classList']['contains']('display-none-last')) {
                _0x209922['classList']['remove']('display-none-last');
            }
        }, 0x12c);
    }
    function _0x16f9ed(_0x5e4163) {
        _0x5e4163['classList']['add']('display-none');
        setTimeout(function () {
            _0x5e4163['classList']['add']('display-none-last');
        }, 0x12c);
    }
    async function _0x546bee(_0x1fd973, _0xfadd62) {
        const _0x3c08fb = _0x1fd973['value']['trim']();
        _0xfadd62['innerHTML'] = '';
        if (_0x3c08fb['length'] > 0x0) {
            const _0x1dbfd8 = await _0xa9ae41(_0x3c08fb);
            _0x575da7(_0x1dbfd8, _0x1fd973, _0xfadd62);
        }
    }
    async function _0xa9ae41(_0x27be7e) {
        try {
            const _0x263ed0 = 'https://dispatch-extension-2wrl4gpsga-uc.a.run.app/api/autocomplete';
            const _0x6339f3 = {
                'apiKey': _0x2918d5,
                'term': _0x27be7e
            };
            const _0x2b01ff = await fetch(_0x263ed0, {
                'method': 'POST',
                'headers': { 'Content-Type': 'application/json' },
                'body': JSON['stringify'](_0x6339f3)
            });
            const _0x1029cf = await _0x2b01ff['json']();
            return _0x1029cf['items'];
        } catch (_0x157b88) {
            console['error']('Error\x20fetching\x20suggestions:', _0x157b88);
            return [];
        }
    }
    function _0x575da7(_0x3fd407, _0x1c7647, _0x35fb70) {
        _0x3fd407['forEach'](_0x151533 => {
            const _0x1435be = document['createElement']('li');
            let _0x28f995 = '';
            if (_0x151533['zipCode']) {
                _0x28f995 = _0x151533['zipCode'] + '\x20' + _0x151533['city'] + ',\x20' + _0x151533['state'];
            } else if (_0x151533['city']) {
                _0x28f995 = _0x151533['city'] + ',\x20' + _0x151533['state'];
            } else if (_0x151533['state']) {
                _0x28f995 = _0x151533['state'] + '\x20<i>\x20-\x20State</i>';
            }
            if (_0x28f995) {
                _0x1435be['innerHTML'] = _0x28f995;
                _0x1435be['addEventListener']('click', () => {
                    if (_0x28f995['includes']('<i>')) {
                        _0x1c7647['value'] = _0x151533['state'] || '';
                    } else {
                        _0x1c7647['value'] = _0x28f995;
                    }
                    _0x35fb70['innerHTML'] = '';
                });
                _0x35fb70['appendChild'](_0x1435be);
            }
        });
    }
    function _0xb4f3b1(_0x4bef79, _0x290f0e) {
        let _0x49e1f7;
        return function (..._0xf7bf3c) {
            const _0x58a761 = this;
            clearTimeout(_0x49e1f7);
            _0x49e1f7 = setTimeout(() => {
                _0x4bef79['apply'](_0x58a761, _0xf7bf3c);
            }, _0x290f0e);
        };
    }
    async function _0x4659d1(_0x54a44a) {
        try {
            const _0x10de81 = 'https://dispatch-extension-2wrl4gpsga-uc.a.run.app/api/updateblacklist';
            const _0x4241ac = {
                'companyId': _0x33c3ca,
                'email': _0x297af5,
                'name': _0x54a44a['name'],
                'address': _0x54a44a['address']
            };
            const _0xf873fb = await fetch(_0x10de81, {
                'method': 'POST',
                'headers': { 'Content-Type': 'application/json' },
                'body': JSON['stringify'](_0x4241ac)
            });
            const _0x3045f5 = await _0xf873fb['json']();
            _0x2117e5(_0x4241ac, 'overwrite');
            return _0x3045f5['blacklist'];
        } catch (_0x146cf0) {
            console['error']('Error\x20fetching\x20suggestions:', _0x146cf0);
            return [];
        }
    }
    function _0x2117e5(_0x266322, _0x4aecfc) {
        var _0x4b7f6f = document['getElementById']('tableBody');
        if (_0x4aecfc === 'overwrite') {
            _0x38d5f8(_0x4b7f6f);
        }
        if (Array['isArray'](_0x266322)) {
            _0x266322['forEach'](function (_0x3c4f1d, _0x139d85) {
                _0x2698e5(_0x4b7f6f, _0x3c4f1d, _0x139d85);
            });
        } else {
            _0x2698e5(_0x4b7f6f, _0x266322, 0x0);
        }
    }
    function _0x2698e5(_0x2cf8a1, _0x3779bb, _0x22dbd0) {
        var _0x5ac326 = _0x22dbd0 + 0x1;
        var _0x287960 = document['createElement']('tr');
        var _0x42ed60 = {
            'numbering': _0x5ac326,
            ..._0x3779bb
        };
        Object['values'](_0x42ed60)['forEach'](function (_0x54862b) {
            var _0x480793 = document['createElement']('td');
            _0x480793['appendChild'](document['createTextNode'](_0x54862b));
            _0x287960['appendChild'](_0x480793);
        });
        _0x2cf8a1['insertBefore'](_0x287960, _0x2cf8a1['firstChild']);
    }
    function _0x38d5f8(_0x1d785a) {
        while (_0x1d785a['firstChild']) {
            _0x1d785a['removeChild'](_0x1d785a['firstChild']);
        }
    }
    function _0x56137d() {
        let _0x1714e9 = document['querySelectorAll']('.items\x20input[type=\x22checkbox\x22]:checked');
        if (_0x1714e9['length'] === document['querySelectorAll']('.items\x20input[type=\x22checkbox\x22]')['length']) {
            return [];
        }
        let _0x327a17 = Array['from'](_0x1714e9)['map'](_0x47630d => {
            return _0x47630d['parentNode']['textContent']['trim']()['toUpperCase']()['replace'](/\s+/g, '_');
        });
        return _0x327a17;
    }
    function _0x1c0b32(_0x42cdb1) {
        if (_0x42cdb1) {
            const _0x232253 = new Date(_0x42cdb1);
            const _0x14cfaa = _0x4b1ff2(_0x232253);
            return _0x14cfaa;
        }
        return '';
    }
    function _0x4b1ff2(_0x98c497) {
        const _0x311717 = (_0x98c497['getMonth']() + 0x1)['toString']()['padStart'](0x2, '0');
        const _0x4bba50 = _0x98c497['getDate']()['toString']()['padStart'](0x2, '0');
        const _0x570d4e = _0x98c497['getFullYear']();
        return _0x311717 + '/' + _0x4bba50 + '/' + _0x570d4e;
    }
    function _0x2ca9a7(_0x201c9a, _0x531876) {
        const _0xc8b0c6 = /^(\d{5}) (.+), (\w{2})$/;
        const _0x366f2 = /^(.+), (\w{2})$/;
        if (_0xc8b0c6['test'](_0x201c9a)) {
            const [, _0x516d08, _0x11176f, _0x4894fe] = _0x201c9a['match'](_0xc8b0c6);
            return {
                'city': _0x11176f,
                'state': _0x4894fe,
                'zipCode': _0x516d08['toString'](),
                'radius': 0x32,
                'scope': _0x531876,
                'id': _0x11176f['toLowerCase']() + ',\x20' + _0x4894fe['toLowerCase']() + '\x20' + _0x516d08
            };
        } else if (_0x366f2['test'](_0x201c9a)) {
            const [, _0x1dd95e, _0x418735] = _0x201c9a['match'](_0x366f2);
            return {
                'city': _0x1dd95e,
                'state': _0x418735,
                'radius': 0x32,
                'scope': _0x531876,
                'id': _0x1dd95e['toLowerCase']() + ',\x20' + _0x418735['toLowerCase']()
            };
        } else {
            return {
                'state': _0x201c9a,
                'scope': _0x531876,
                'radius': 0x32,
                'id': _0x201c9a
            };
        }
    }
    function _0x419566(_0x4768c5) {
        chrome['storage']['local']['get']({ 'searches': [] }, function (_0x3e7c6c) {
            const _0x5220f5 = _0x3e7c6c['searches'];
            if (_0x5220f5['length'] >= 0x5) {
                _0x1e944c['error']('Maximum\x20limit\x20of\x205\x20search\x20filters\x20reached.', 'Error', { 'displayDuration': 0xbb8 });
            } else {
                const _0x573fd8 = _0x5220f5['find'](_0x19ad6f => _0x19ad6f['searchName'] === _0x4768c5['searchName']);
                if (_0x573fd8) {
                    _0x1e944c['error']('Search\x20with\x20name\x20\x27' + _0x4768c5['searchName'] + '\x27\x20already\x20exists.', 'Error', { 'displayDuration': 0xbb8 });
                } else {
                    _0x5220f5['push'](_0x4768c5);
                    chrome['storage']['local']['set']({ 'searches': _0x5220f5 }, function () {
                        if (chrome['runtime']['lastError']) {
                            console['error'](chrome['runtime']['lastError']);
                        } else {
                            _0x1e944c['success']('Search\x20saved\x20successfully!', 'Info', { 'displayDuration': 0x7d0 });
                        }
                    });
                }
            }
        });
    }
    async function _0x2d95e8() {
        chrome['storage']['local']['get'](['searches'], function (_0x5c0e11) {
            if (_0x5c0e11['hasOwnProperty']('searches')) {
                var _0xebea2 = _0x5c0e11['searches'];
                var _0x59bf5b = document['getElementById']('fullActiveSearchListContainer');
                if (_0xebea2['length'] !== 0x0) {
                    _0x15e845();
                } else {
                    _0x59bf5b['innerHTML'] = '<h2>There\x20are\x20no\x20search\x20filters\x20set</h2>';
                }
                _0xebea2['forEach'](function (_0x51cfcf, _0x5e87fa) {
                    var _0x4106c1 = document['createElement']('div');
                    _0x4106c1['className'] = 'searches-grid-element-container';
                    _0x4106c1['id'] = 'searchesGridElementContainer' + (_0x5e87fa + 0x1);
                    _0x4106c1['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22searches-grid-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22close-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22close-button\x22\x20data-target=\x22' + _0x51cfcf['searchName'] + '\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22first-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Name:</strong>\x20<span>' + _0x51cfcf['searchName'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22second-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Origin:</strong>\x20<span>' + _0x51cfcf['formData']['origin'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22third-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Destination:</strong>\x20<span>' + _0x51cfcf['formData']['destination'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22fourth-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Min\x20total\x20pay:</strong>\x20<span>' + _0x51cfcf['formData']['minTotalPay'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22fifth-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Price\x20per\x20mile:</strong>\x20<span>' + _0x51cfcf['formData']['minRatePerMile'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22sixth-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Min\x20num\x20of\x20vehicles:</strong>\x20<span>' + _0x51cfcf['formData']['minNumVehicles'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22seventh-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Max\x20vehicles:</strong>\x20<span>' + _0x51cfcf['formData']['maxVehicles'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22down-arrow-container\x20eighth-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22arrow\x20down\x22\x20data-target=\x22searchesGridElementExpanded' + (_0x5e87fa + 0x1) + '\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20';
                    var _0x2b5eec = document['createElement']('div');
                    _0x2b5eec['classList']['add']('searches-grid-element-expanded', 'display-none', 'display-none-last');
                    _0x2b5eec['id'] = 'searchesGridElementExpanded' + (_0x5e87fa + 0x1);
                    _0x2b5eec['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22large-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Vehicle\x20type:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22vehicleTypeList\x22>' + _0x51cfcf['formData']['vehicleType'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22medium-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Start\x20radius:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22startRadiusList\x22>' + _0x51cfcf['formData']['startRadius'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22large-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Trailer\x20type:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22trailerTypeList\x22>' + _0x51cfcf['formData']['trailerType'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22medium-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>End\x20radius:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22endRadiusList\x22>' + _0x51cfcf['formData']['endRadius'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22small-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Along\x20route:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22searchAlongRouteList\x22>' + _0x51cfcf['formData']['searchAlongRoute'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22large-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Vehicle\x20status:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22vehicleStatusList\x22>' + _0x51cfcf['formData']['vehicleStatus'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22medium-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Delivery\x20date:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22deliveryDateList\x22>' + _0x51cfcf['formData']['deliveryDate'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22small-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Blacklist:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22blacklistList\x22>' + _0x51cfcf['formData']['blacklist'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22large-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Payment\x20type:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22paymentTypeList\x22>' + _0x51cfcf['formData']['paymentType'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22medium-element\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Ready\x20to\x20ship\x20in:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22readyToShipWithinList\x22>' + _0x51cfcf['formData']['readyToShipWithin'] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>';
                    _0x59bf5b['appendChild'](_0x4106c1);
                    _0x4106c1['appendChild'](_0x2b5eec);
                });
            } else {
                console['log']('No\x20searches\x20found\x20in\x20storage');
            }
            const _0x264504 = document['querySelectorAll']('.arrow');
            const _0x44647f = document['querySelectorAll']('.close-button');
            _0x264504['forEach'](function (_0xb1ee91) {
                _0xb1ee91['addEventListener']('click', function () {
                    const _0x42fc42 = _0xb1ee91['getAttribute']('data-target');
                    const _0x40ed12 = document['getElementById'](_0x42fc42);
                    const _0xab661c = document['getElementById']('searchesGridElementContainer' + _0x42fc42['charAt'](_0x42fc42['length'] - 0x1));
                    _0xb1ee91['classList']['toggle']('down');
                    _0xb1ee91['classList']['toggle']('up');
                    _0xab661c['classList']['toggle']('expanded');
                    if (_0xb1ee91['classList']['contains']('down')) {
                        _0x16f9ed(_0x40ed12);
                    } else {
                        _0x10afde(_0x40ed12);
                    }
                });
            });
            for (const _0x2c2a9d of _0x44647f) {
                _0x2c2a9d['addEventListener']('click', async function () {
                    const _0x10ccbd = _0x2c2a9d['getAttribute']('data-target');
                    _0x3467cc();
                    _0x16f9ed(_0x1ee58b);
                    await _0x5e4742(_0x10ccbd);
                    setTimeout(function () {
                        _0x15e845();
                        _0x10afde(_0x1ee58b);
                        _0x2d95e8();
                        _0x9af88e();
                    }, 0x190);
                });
            }
        });
    }
    function _0x15e845() {
        const _0x3ae4db = document['getElementById']('fullActiveSearchListContainer');
        _0x3ae4db['innerHTML'] = '';
    }
    async function _0x5e4742(_0x4c50f3) {
        chrome['storage']['local']['get'](['searches'], function (_0x5ecf81) {
            if (_0x5ecf81['hasOwnProperty']('searches')) {
                const _0x3df7df = _0x5ecf81['searches'];
                const _0x458acb = _0x3df7df['findIndex'](_0xd938fc => _0xd938fc['searchName'] === _0x4c50f3);
                if (_0x458acb !== -0x1) {
                    _0x3df7df['splice'](_0x458acb, 0x1);
                    chrome['storage']['local']['set']({ 'searches': _0x3df7df }, function () {
                        _0x1e944c['trash']('Search\x20with\x20name\x20\x27' + _0x4c50f3 + '\x27\x20removed\x20successfully.', 'Search\x20Filter\x20Deleted', { 'displayDuration': 0xbb8 });
                        changedSearches();
                    });
                } else {
                    console['log']('Search\x20with\x20name\x20\x27' + _0x4c50f3 + '\x27\x20not\x20found.');
                }
            } else {
                console['log']('No\x20searches\x20found\x20in\x20storage.');
            }
        });
    }
    function _0x3872f4(_0x151878, _0xfd13f, _0xa9c295, _0x4239b2, _0x4d6409 = null) {
        var _0x24d708 = document['createElement'](_0xfd13f);
        _0x24d708['className'] = _0xa9c295;
        _0x24d708['innerHTML'] = _0x4239b2;
        if (_0x4d6409) {
            _0x24d708['onclick'] = _0x4d6409;
        }
        _0x151878['appendChild'](_0x24d708);
    }
    function _0x15fdb8(_0x410b27) {
        var _0x2b26f4 = document['getElementById']('loadsAlertContainer');
        var _0x4a495b = {};
        var _0x202428 = _0x2b26f4['getElementsByClassName']('load-alert');
        for (var _0x3da321 = 0x0; _0x3da321 < _0x202428['length']; _0x3da321++) {
            var _0x353092 = _0x202428[_0x3da321]['getAttribute']('data-id');
            _0x4a495b[_0x353092] = !![];
        }
        for (var _0x3da321 = 0x0; _0x3da321 < _0x410b27['length']; _0x3da321++) {
            let _0x23ac30 = _0x410b27[_0x3da321];
            let _0x4b5912 = _0x23ac30['id'];
            if (!_0x4a495b[_0x4b5912]) {
                let _0x5ba2f0 = document['createElement']('div');
                _0x5ba2f0['className'] = 'load-alert';
                _0x5ba2f0['setAttribute']('data-id', _0x4b5912);
                let _0xa57377 = document['createElement']('div');
                _0xa57377['className'] = 'load-alert-first-element';
                _0xa57377['id'] = 'loadAlertFirstElement' + _0x4b5912;
                _0x3872f4(_0xa57377, 'div', 'main-load-alert-component\x20name', 'Name:\x20<span>' + _0x23ac30['name'] + '</span>');
                _0x3872f4(_0xa57377, 'div', 'main-load-alert-component\x20origin', 'O:\x20<span>' + _0x23ac30['origin']['city'] + ',\x20' + _0x23ac30['origin']['state'] + '\x20' + _0x23ac30['origin']['zip'] + '</span>');
                const _0x12b822 = new Date();
                const _0x208182 = new Date(_0x23ac30['createdDate']);
                const _0x5126ed = _0x12b822 - _0x208182;
                const _0x2762bb = Math['floor'](_0x5126ed / (0x3e8 * 0x3c));
                let _0x2f8d55;
                if (_0x2762bb >= 0x3c) {
                    const _0xba320a = Math['floor'](_0x2762bb / 0x3c);
                    _0x2f8d55 = 'Age:\x20<span>' + _0xba320a + '\x20Hour(s)</span>';
                } else {
                    if (_0x2762bb < 0x1) {
                        const _0x3debde = Math['floor'](_0x5126ed / 0x3e8);
                        _0x2f8d55 = 'Age:\x20<span>' + _0x3debde + '\x20Second(s)</span>';
                    } else {
                        _0x2f8d55 = 'Age:\x20<span>' + _0x2762bb + '\x20Min</span>';
                    }
                }
                const _0xd429f1 = document['createElement']('div');
                _0xd429f1['classList']['add']('main-load-alert-component', 'age');
                _0xd429f1['innerHTML'] = _0x2f8d55;
                _0xd429f1['setAttribute']('data-target', _0x4b5912);
                _0xa57377['appendChild'](_0xd429f1);
                _0x3872f4(_0xa57377, 'div', 'main-load-alert-component\x20order-id', 'Order\x20ID:\x20<span>' + _0x23ac30['shipperOrderId'] + '</span>');
                _0x3872f4(_0xa57377, 'div', 'main-load-alert-component\x20destination', 'D:\x20<span>' + _0x23ac30['destination']['city'] + ',\x20' + _0x23ac30['destination']['state'] + '\x20' + _0x23ac30['destination']['zip'] + '</span>');
                _0x3872f4(_0xa57377, 'div', 'main-load-alert-component\x20total-pay', 'Total\x20Pay:\x20<span>' + _0x23ac30['price']['total'] + '$</span>');
                _0x3872f4(_0xa57377, 'div', 'main-load-alert-component\x20mileage', 'Distance:\x20<span>' + _0x23ac30['distance'] + '\x20Mi</span>');
                _0x3872f4(_0xa57377, 'div', 'main-load-alert-component\x20shipper', 'Shipper:\x20<span>' + _0x23ac30['shipper']['companyName'] + '$</span>');
                _0x3872f4(_0xa57377, 'div', 'main-load-alert-component\x20rate-per-mile', 'Rate/mile:\x20<span>' + (_0x23ac30['price']['total'] / _0x23ac30['distance'])['toFixed'](0x2) + '$</span>');
                _0x3872f4(_0xa57377, 'div', 'maps-icon-container', '<a\x20href=\x22https://www.google.com/maps/dir/' + _0x23ac30['origin']['geoCode']['latitude'] + ',' + _0x23ac30['origin']['geoCode']['longitude'] + '/' + _0x23ac30['destination']['geoCode']['latitude'] + ',' + _0x23ac30['destination']['geoCode']['longitude'] + '/\x22\x20target=\x22_blank\x22\x20class=\x22map-link\x22><img\x20src=\x22./assets/icon.png\x22\x20class=\x22maps-icon\x22\x20/></a>');
                let _0x53c082 = document['createElement']('div');
                _0x53c082['className'] = 'expand-alert-container';
                let _0x803ef9 = document['createElement']('i');
                _0x803ef9['className'] = 'arrow-black\x20down';
                _0x803ef9['id'] = 'arrow' + _0x4b5912;
                _0x53c082['appendChild'](_0x803ef9);
                _0xa57377['appendChild'](_0x53c082);
                let _0x5808a6 = document['createElement']('div');
                _0x5808a6['className'] = 'load-alert-close-container';
                let _0x3f211a = document['createElement']('button');
                _0x3f211a['className'] = 'close-button\x20close-button-black';
                _0x3f211a['id'] = 'closeButton' + _0x4b5912;
                _0x5808a6['appendChild'](_0x3f211a);
                _0xa57377['appendChild'](_0x5808a6);
                let _0x5f31b9 = document['createElement']('div');
                _0x5f31b9['className'] = 'load-alert-tabs\x20display-none-last';
                _0x5f31b9['id'] = 'loadAlertTabs' + _0x4b5912;
                var _0x628aa1 = document['createElement']('div');
                _0x628aa1['className'] = 'tab-one';
                _0x628aa1['innerHTML'] = '<span>INFO</span>';
                _0x628aa1['id'] = 'tabOneElement' + _0x4b5912;
                _0x5f31b9['appendChild'](_0x628aa1);
                var _0x5b5fc1 = document['createElement']('div');
                _0x5b5fc1['className'] = 'tab-two';
                _0x5b5fc1['innerHTML'] = '<span>VEHICLES</span>';
                _0x5b5fc1['id'] = 'tabTwoElement' + _0x4b5912;
                _0x5f31b9['appendChild'](_0x5b5fc1);
                let _0xc951f7 = document['createElement']('div');
                _0xc951f7['className'] = 'load-alert-second-element\x20info-tab\x20display-none-last';
                _0xc951f7['id'] = 'loadAlertSecondElement' + _0x4b5912;
                _0x3872f4(_0xc951f7, 'div', 'secondary-load-alert-component\x20vehicle-count', 'Vehicle\x20Count:\x20<span>' + _0x23ac30['vehicles']['length'] + '</span>');
                let _0x4448cc = 0x0;
                let _0x3da093 = 0x0;
                let _0x47de10 = 0x0;
                let _0x4fb2c5 = 0x0;
                _0x23ac30['vehicles']['forEach'](_0x4965f7 => {
                    if (_0x4965f7['shippingSpecs']) {
                        _0x4448cc = Math['max'](_0x4448cc, _0x4965f7['shippingSpecs']['weight']);
                        _0x3da093 = Math['max'](_0x3da093, _0x4965f7['shippingSpecs']['length']);
                        _0x47de10 = Math['max'](_0x47de10, _0x4965f7['shippingSpecs']['width']);
                        _0x4fb2c5 = Math['max'](_0x4fb2c5, _0x4965f7['shippingSpecs']['height']);
                    }
                });
                _0x3872f4(_0xc951f7, 'div', 'secondary-load-alert-component\x20weight', 'Max\x20weight:\x20<span>' + _0x4448cc + '</span>');
                _0x3872f4(_0xc951f7, 'div', 'secondary-load-alert-component\x20phone', 'Phone:\x20<span><a\x20href=\x27tel:' + _0x23ac30['shipper']['phone'] + '\x27>' + _0x23ac30['shipper']['phone'] + '</a></span>');
                _0x3872f4(_0xc951f7, 'div', 'secondary-load-alert-component\x20pick-up-date', 'Pick-up\x20Date:\x20<span>' + _0x1c0b32(_0x23ac30['availableDate']) + '</span>');
                _0x3872f4(_0xc951f7, 'div', 'secondary-load-alert-component\x20delivery-date', 'Delivery\x20Date:\x20<span>' + (_0x1c0b32(_0x23ac30['desiredDeliveryDate']) || _0x1c0b32(_0x23ac30['availableDate'])) + '</span>');
                _0x3872f4(_0xc951f7, 'div', 'secondary-load-alert-component\x20tier-group', 'Tier\x20Group:\x20<span>' + (_0x23ac30['shipper']['tierGroup'] || '') + '</span>');
                _0x3872f4(_0xc951f7, 'div', 'secondary-load-alert-component\x20hours', 'Hours:\x20<span>' + (_0x23ac30['shipper']['hoursOfOperation'] || '') + '</span>');
                _0x3872f4(_0xc951f7, 'div', 'secondary-load-alert-component\x20rating', 'Rating:\x20<span>' + _0x23ac30['shipper']['overallRating']['averageRating'] + '\x20(' + _0x23ac30['shipper']['overallRating']['totalAmount'] + ')</span>');
                _0x3872f4(_0xc951f7, 'div', 'secondary-load-alert-component\x20old-rating', 'Old\x20Rating:\x20<span>' + (_0x23ac30['shipper']['rating'] + '\x20(' + _0x23ac30['shipper']['numberOfRatings'] + ')' || '') + '</span>');
                _0x3872f4(_0xc951f7, 'div', 'secondary-load-alert-component\x20payment-terms', 'Pay\x20Terms:\x20<span>' + (_0x23ac30['price']['balance']['balancePaymentTermsBeginOn'] || '') + '</span>');
                _0x3872f4(_0xc951f7, 'div', 'secondary-load-alert-component\x20payment-time', 'Pay\x20Time:\x20<span>' + (_0x23ac30['price']['balance']['paymentTime'] || '') + '</span>');
                _0x3872f4(_0xc951f7, 'div', 'secondary-load-alert-component\x20payment-method', 'Pay\x20Method:\x20<span>' + (_0x23ac30['price']['balance']['balancePaymentMethod'] || '') + '</span>');
                _0x3872f4(_0xc951f7, 'div', 'secondary-load-alert-component\x20additional-info', 'Additional\x20Info:\x20<span>' + (_0x23ac30['additionalInfo'] || '') + '</span>');
                let _0x5c7a3a = document['createElement']('div');
                _0x5c7a3a['className'] = 'load-alert-third-element\x20vehicles-tab\x20display-none-last';
                _0x5c7a3a['id'] = 'loadAlertThirdElement' + _0x4b5912;
                let _0x3f341a = document['createElement']('div');
                _0x3f341a['className'] = 'vehicles-list';
                let _0x2b8758 = document['createElement']('table');
                _0x2b8758['className'] = 'vehicles-list-table';
                let _0x436b4d = document['createElement']('thead');
                let _0x491baf = document['createElement']('tr');
                _0x3872f4(_0x491baf, 'th', '', 'Vehicle');
                _0x3872f4(_0x491baf, 'th', '', 'Weight');
                _0x3872f4(_0x491baf, 'th', '', 'Dimensions');
                _0x436b4d['appendChild'](_0x491baf);
                let _0xfc8206 = document['createElement']('tbody');
                _0x23ac30['vehicles']['forEach'](_0xbb708a => {
                    let _0x2f91d2 = document['createElement']('tr');
                    _0x3872f4(_0x2f91d2, 'td', '', _0xbb708a['year'] + '\x20' + _0xbb708a['make'] + '\x20' + _0xbb708a['model']);
                    _0x3872f4(_0x2f91d2, 'td', '', _0xbb708a['shippingSpecs']?.['weight'] || '');
                    _0x3872f4(_0x2f91d2, 'td', '', (_0xbb708a['shippingSpecs']?.['length'] || '') + '\x20L\x20x\x20' + (_0xbb708a['shippingSpecs']?.['width'] || '') + '\x20W\x20x\x20' + (_0xbb708a['shippingSpecs']?.['height'] || '') + '\x20H');
                    _0xfc8206['appendChild'](_0x2f91d2);
                });
                _0x2b8758['appendChild'](_0x436b4d);
                _0x2b8758['appendChild'](_0xfc8206);
                _0x3f341a['appendChild'](_0x2b8758);
                _0x5c7a3a['appendChild'](_0x3f341a);
                _0x5ba2f0['appendChild'](_0xa57377);
                _0x5ba2f0['appendChild'](_0x5f31b9);
                _0x5ba2f0['appendChild'](_0xc951f7);
                _0x5ba2f0['appendChild'](_0x5c7a3a);
                _0x2b26f4['insertAdjacentHTML']('afterbegin', _0x5ba2f0['outerHTML']);
                const _0x1249ef = document['getElementById']('arrow' + _0x4b5912);
                const _0xbc5653 = document['getElementById']('tabOneElement' + _0x4b5912);
                const _0x1219bf = document['getElementById']('tabTwoElement' + _0x4b5912);
                const _0x4c6b09 = document['getElementById']('closeButton' + _0x4b5912);
                _0x1249ef['addEventListener']('click', () => {
                    _0x722a3a('arrow', _0x4b5912);
                });
                _0xbc5653['addEventListener']('click', () => {
                    _0x722a3a('tab', _0x4b5912, 'second');
                });
                _0x1219bf['addEventListener']('click', () => {
                    _0x722a3a('tab', _0x4b5912, 'third');
                });
                _0x4c6b09['addEventListener']('click', () => {
                    _0x1e27c3(_0x4b5912);
                });
                const _0x5d3c71 = document['querySelector']('.map-link');
                _0x5d3c71['addEventListener']('click', function (_0x4de186) {
                    _0x4de186['preventDefault']();
                    const _0x3a966f = _0x5d3c71['getAttribute']('href');
                    chrome['tabs']['create']({
                        'url': _0x3a966f,
                        'active': ![]
                    });
                });
                _0x4a495b[_0x4b5912] = !![];
            }
        }
    }
    function _0x1e27c3(_0x465a12) {
        _0x4058bb();
        const _0x33ca7d = document['querySelector']('[data-id=\x22' + _0x465a12 + '\x22]');
        _0x33ca7d['remove']();
        chrome['storage']['local']['get'](['storedData'], function (_0xfe3973) {
            let _0x53f92a = _0xfe3973['storedData'] || [];
            const _0x1c94bf = _0x53f92a['findIndex'](_0xbd856d => _0xbd856d['id'] === _0x465a12);
            if (_0x1c94bf !== -0x1) {
                _0x53f92a['splice'](_0x1c94bf, 0x1);
                chrome['storage']['local']['set']({ 'storedData': _0x53f92a }, function () {
                    console['log']('Object\x20with\x20the\x20desired\x20ID\x20removed.');
                });
            } else {
                console['log']('Object\x20with\x20the\x20desired\x20ID\x20not\x20found.');
            }
        });
    }
    function _0x722a3a(_0x52af40, _0x337198, _0xd7d54e = null) {
        console['log']('handlecklick\x20called');
        _0x4058bb(0x12c);
        if (_0x52af40 === 'tab') {
            console['log']('It\x20is\x20tab\x20');
            const _0x4376a2 = document['getElementById']('loadAlertSecondElement' + _0x337198);
            const _0x238a44 = document['getElementById']('loadAlertThirdElement' + _0x337198);
            if (_0xd7d54e === 'second') {
                _0x16f9ed(_0x238a44);
                _0x10afde(_0x4376a2);
            } else if (_0xd7d54e === 'third') {
                _0x16f9ed(_0x4376a2);
                _0x10afde(_0x238a44);
            }
        } else if (_0x52af40 === 'arrow') {
            console['log']('It\x20is\x20arrow\x20');
            const _0x2c929d = document['getElementById']('arrow' + _0x337198);
            const _0x48468b = document['getElementById']('loadAlertTabs' + _0x337198);
            const _0x125a2a = document['getElementById']('loadAlertSecondElement' + _0x337198);
            const _0x3ee988 = document['getElementById']('loadAlertThirdElement' + _0x337198);
            _0x2c929d['classList']['toggle']('down');
            _0x2c929d['classList']['toggle']('up');
            if (_0x2c929d['classList']['contains']('down')) {
                _0x16f9ed(_0x48468b);
                _0x16f9ed(_0x125a2a);
                _0x16f9ed(_0x3ee988);
            } else {
                _0x10afde(_0x48468b);
                _0x10afde(_0x125a2a);
            }
        }
    }
    function _0x55ae5e() {
        chrome['storage']['local']['get'](['storedData'], function (_0x2c539e) {
            storedData = _0x2c539e['storedData'] || [];
            console['log']('Updated\x20stored\x20data\x20in\x20UI:', storedData);
        });
        setTimeout(() => {
            console['log']('populating');
            _0x15fdb8(storedData);
        }, 0x12c);
    }
    function _0x1f7ab2() {
        chrome['storage']['local']['get'](['storedData'], function (_0x2568d3) {
            const _0x252a8c = _0x2568d3['storedData'] || [];
            _0x252a8c['forEach'](_0xea6e4a => {
                const _0x318958 = new Date();
                const _0xd14b50 = new Date(_0xea6e4a['createdDate']);
                const _0x1afe3b = _0x318958 - _0xd14b50;
                const _0x49e800 = Math['floor'](_0x1afe3b / (0x3e8 * 0x3c));
                let _0x45cd22;
                if (_0x49e800 >= 0x3c) {
                    const _0x2b0904 = Math['floor'](_0x49e800 / 0x3c);
                    _0x45cd22 = _0x2b0904 + '\x20Hour(s)';
                } else {
                    if (_0x49e800 < 0x1) {
                        const _0x510d6e = Math['floor'](_0x1afe3b / 0x3e8);
                        _0x45cd22 = _0x510d6e + '\x20Second(s)';
                    } else {
                        _0x45cd22 = _0x49e800 + '\x20Min';
                    }
                }
                const _0x272ad9 = document['querySelector']('[data-target=\x22' + _0xea6e4a['id'] + '\x22]');
                if (_0x272ad9) {
                    _0x272ad9['children'][0x0]['innerText'] = _0x45cd22;
                    _0x272ad9['setAttribute']('data-target', _0xea6e4a['id']);
                }
            });
        });
    }
    function _0x4058bb(_0x16a78c = 0x1f4) {
        _0x3467cc();
        setTimeout(() => {
            _0x9af88e();
        }, _0x16a78c);
    }
});