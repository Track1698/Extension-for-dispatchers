const a0_0x520c8d = (function () {
    let _0x59bc6e = !![];
    return function (_0x130516, _0x55f03d) {
        const _0x39d449 = _0x59bc6e ? function () {
            if (_0x55f03d) {
                const _0xa686b8 = _0x55f03d['apply'](_0x130516, arguments);
                _0x55f03d = null;
                return _0xa686b8;
            }
        } : function () {
        };
        _0x59bc6e = ![];
        return _0x39d449;
    };
}());
const a0_0xad7aa0 = a0_0x520c8d(this, function () {
    let _0x2b3096;
    try {
        const _0x553417 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
        _0x2b3096 = _0x553417();
    } catch (_0x12bed4) {
        _0x2b3096 = window;
    }
    const _0x15d151 = _0x2b3096['console'] = _0x2b3096['console'] || {};
    const _0x5e95dd = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace'
    ];
    for (let _0xafe2a9 = 0x0; _0xafe2a9 < _0x5e95dd['length']; _0xafe2a9++) {
        const _0x13aada = a0_0x520c8d['constructor']['prototype']['bind'](a0_0x520c8d);
        const _0x20d0a9 = _0x5e95dd[_0xafe2a9];
        const _0x193a78 = _0x15d151[_0x20d0a9] || _0x13aada;
        _0x13aada['__proto__'] = a0_0x520c8d['bind'](a0_0x520c8d);
        _0x13aada['toString'] = _0x193a78['toString']['bind'](_0x193a78);
        _0x15d151[_0x20d0a9] = _0x13aada;
    }
});
a0_0xad7aa0();
chrome['runtime']['onMessage']['addListener'](_0x275eff => {
    if ('play' in _0x275eff)
        playAudio(_0x275eff['play']);
});
function playAudio({
    source: _0x4de0e5,
    volume: _0x3d9cd7
}) {
    const _0x27b875 = new Audio(_0x4de0e5);
    _0x27b875['volume'] = _0x3d9cd7;
    _0x27b875['play']();
}