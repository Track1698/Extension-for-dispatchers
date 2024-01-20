(function () {
    const _0xfaa98e = (function () {
        let _0x485fa0 = !![];
        return function (_0x304254, _0x196c15) {
            const _0x17fdc7 = _0x485fa0 ? function () {
                if (_0x196c15) {
                    const _0x3a1b93 = _0x196c15['apply'](_0x304254, arguments);
                    _0x196c15 = null;
                    return _0x3a1b93;
                }
            } : function () {
            };
            _0x485fa0 = ![];
            return _0x17fdc7;
        };
    }());
    const _0x417bd3 = _0xfaa98e(this, function () {
        let _0xfda62d;
        try {
            const _0x1c3d3a = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
            _0xfda62d = _0x1c3d3a();
        } catch (_0x412922) {
            _0xfda62d = window;
        }
        const _0x4ee99e = _0xfda62d['console'] = _0xfda62d['console'] || {};
        const _0x1e67b8 = [
            'log',
            'warn',
            'info',
            'error',
            'exception',
            'table',
            'trace'
        ];
        for (let _0x549289 = 0x0; _0x549289 < _0x1e67b8['length']; _0x549289++) {
            const _0x1779ee = _0xfaa98e['constructor']['prototype']['bind'](_0xfaa98e);
            const _0x2eae4c = _0x1e67b8[_0x549289];
            const _0x47cfa6 = _0x4ee99e[_0x2eae4c] || _0x1779ee;
            _0x1779ee['__proto__'] = _0xfaa98e['bind'](_0xfaa98e);
            _0x1779ee['toString'] = _0x47cfa6['toString']['bind'](_0x47cfa6);
            _0x4ee99e[_0x2eae4c] = _0x1779ee;
        }
    });
    _0x417bd3();
    const _0x3254ef = window['XMLHttpRequest']['prototype']['open'];
    window['XMLHttpRequest']['prototype']['open'] = function (_0x1a787e, _0x10ace0) {
        this['_method'] = _0x1a787e;
        this['_url'] = _0x10ace0;
        return _0x3254ef['apply'](this, arguments);
    };
    const _0x500851 = window['XMLHttpRequest']['prototype']['send'];
    window['XMLHttpRequest']['prototype']['send'] = function () {
        const _0x2df1bf = this;
        this['addEventListener']('loadstart', function () {
            console['log']('XHR\x20Headers\x20for', _0x2df1bf['_url']);
            console['log']('Method:', _0x2df1bf['_method']);
            console['log']('Headers:', _0x2df1bf['getAllResponseHeaders']());
        });
        return _0x500851['apply'](this, arguments);
    };
}());