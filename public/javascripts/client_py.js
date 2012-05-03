Array.prototype.uniq = function () {
    var temp = {}, len = this.length;

    for (var i = 0; i < len; i++) {
        (typeof temp[this[i]] == "undefined") && (temp[this[i]] = 1);
    }
    this.length = 0;
    len = 0;
    for (var i in temp) {
        this[len++] = i;
    }
    return this;
}

var yw = {b:['ba', 'bo', 'bai', 'bei', 'bao', 'ban', 'ben', 'bang', 'beng', 'bi', 'bie', 'biao', 'bian', 'bin', 'bing', 'bu'],
    p:['pa', 'po', 'pai', 'pei', 'pao', 'pou', 'pan', 'pen', 'pang', 'peng', 'pi', 'pie', 'piao', 'pian', 'pin', 'ping', 'pu'],
    m:['ma', 'mo', 'mai', 'mei', 'mao', 'mou', 'man', 'men', 'mang', 'meng', 'mi', 'mie', 'miao', 'miu', 'mian', 'min', 'ming', 'mu'],
    f:['fa', 'fo', 'me', 'fei', 'fou', 'fan', 'fen', 'fang', 'feng', 'fu'],
    d:['da', 'de', 'dai', 'dei', 'dao', 'dou', 'dan', 'den', 'dang', 'deng', 'dong', 'di', 'dia', 'die', 'diao', 'diu', 'dian', 'ding', 'du', 'duo', 'dui', 'duan', 'dun'],
    t:['ta', 'te', 'tai', 'tei', 'tao', 'tou', 'tan', 'tang', 'teng', 'tong', 'ti', 'tie', 'tiao', 'tian', 'ting', 'tu', 'tuo', 'tui', 'tuan', 'tun'],
    n:['na', 'ne', 'nai', 'nei', 'nao', 'nou', 'nan', 'nen', 'nang', 'neng', 'nong', 'ni', 'nie', 'niao', 'niu', 'nian', 'nin', 'niang', 'ning', 'nu', 'nuo', 'nuan', 'nv', 'nve'],
    l:['la', 'le', 'lai', 'lei', 'lao', 'lou', 'lan', 'lang', 'leng', 'long', 'li', 'lia', 'lie', 'liao', 'liu', 'lian', 'lin', 'liang', 'ling', 'lu', 'luo', 'luan', 'lun', 'ln', 'lve'],
    g:['ga', 'ge', 'gai', 'gei', 'gao', 'gou', 'gan', 'gen', 'gang', 'geng', 'gong', 'gu', 'gua', 'guo', 'guai', 'gui', 'guan', 'gun', 'guang'],
    k:['ka', 'ke', 'kai', 'kao', 'kou', 'kan', 'ken', 'kang', 'keng', 'kong', 'ku', 'kua', 'kuo', 'kuai', 'kui', 'kuan', 'kun', 'kuang'],
    h:['ha', 'he', 'hai', 'hei', 'hao', 'hou', 'han', 'hen', 'hang', 'heng', 'hong', 'hu', 'hua', 'huo', 'huai', 'hui', 'huan', 'hun', 'huang'],
    j:['ji', 'jia', 'jie', 'jiao', 'jiu', 'jian', 'jin', 'jiang', 'jing', 'jiong', 'ju', 'jue', 'juan', 'jun'],
    q:['qi', 'qia', 'qie', 'qiao', 'qiu', 'qian', 'qin', 'qiang', 'qing', 'qiong', 'qu', 'que', 'quan', 'qun'],
    x:['xi', 'xia', 'xie', 'xiao', 'xiu', 'xian', 'xin', 'xiang', 'xing', 'xiong', 'xu', 'xue', 'xuan', 'xun'],
    zh:['zha', 'zhe', 'zhi', 'zhai', 'zhei', 'zhao', 'zhou', 'zhan', 'zhen', 'zhang', 'zheng', 'zhong', 'zhu', 'zhua', 'zhuo', 'zhuai', 'zhui', 'zhuan', 'zhun', 'zhuang'],
    ch:['cha', 'che', 'chi', 'chai', 'chao', 'chou', 'chan', 'chen', 'chang', 'cheng', 'chong', 'chu', 'chuo', 'chuai', 'chui', 'chuan', 'chun', 'chuang'],
    sh:['sha', 'she', 'shi', 'shai', 'shei', 'shao', 'shou', 'shan', 'shen', 'shang', 'sheng', 'shu', 'shua', 'shuo', 'shuai', 'shui', 'shuan', 'shun', 'shuang'],
    r:['re', 'ri', 'rao', 'rou', 'ran', 'ren', 'rang', 'reng', 'rong', 'ru', 'ruo', 'rui', 'ruan', 'run'],
    z:['za', 'ze', 'zi', 'zai', 'zei', 'zao', 'zou', 'zan', 'zen', 'zang', 'zeng', 'zong', 'zu', 'zuo', 'zui', 'zuan', 'zun'],
    c:['ca', 'ce', 'ci', 'cai', 'cao', 'cou', 'can', 'cen', 'cang', 'ceng', 'cong', 'cu', 'cuo', 'cui', 'cuan', 'cun'],
    s:['sa', 'se', 'si', 'sai', 'sao', 'sou', 'san', 'sen', 'sang', 'seng', 'song', 'su', 'suo', 'sui', 'suan', 'sun'],
    a:['ai', 'an', 'ang'],
    o:['ou'],
    e:['er', 'ei', 'en'],
    y:['yi', 'ya', 'ye', 'yao', 'you', 'yan', 'yin', 'yang', 'ying', 'yong', 'yu', 'yue', 'yuan', 'yun'],
    w:['wu', 'wa', 'wo', 'wai', 'wei', 'wan', 'wen', 'wang', 'weng']
}
//给定字母，查询该字母后面是否还存在字母
function _splitPy(key) {
    var i = 0, _ret = [], _flog = false;
    for (var _okey in yw) {
        yw.hasOwnProperty(_okey) && key !== _okey ? void function (item) {
            var _ke_p = null;
            for (var len = key.length - 1; len >= 0; len--) {
                if ((_ke_p = key.substr(0, len)) === _okey) {
                    for (var j = 0, len = item.length; j < len; j++) {
                        var _t1 = item[j].length > key.length && item[j].indexOf(key) >= 0 ? item[j].substr(key.length, 1) : (item[j].length === key.length && item[j] === key ?
                            (_flog = true, undefined) : undefined);
//                        if (_flog)    break;
                        _t1 && _ret.push(_t1);
                    }
                    break;
                }
            }
        }(yw[_okey]) : void function (item) {
            for (var j = 0, len = item.length; j < len; j++) {
                var _t1 = item[j].length > key.length ? item[j].substr(key.length, 1) : (item[j].length === key.length && item[j] === key ? (_flog = true, undefined) : undefined);
//                if (_flog)    return {flog:_flog, ret:_ret.uniq()};
                _t1 && _ret.push(_t1);
            }
        }(yw[_okey]);
        if (_flog)return {flog:_flog, ret:_ret.uniq()};
    }

    return {flog:_flog, ret:_ret.uniq()};
}
//分隔拼音
function separatedPY(key) {
    var _tmpStr = null, _tmpArr = key.split(''), _keyArr = [], _tmpArr2 = [], _in = -1;
    _tmpArr.forEach(function (item, _index, _arr) {
//        _index === 0 ? _tmpStr = item : ((_tmpArr2 = _splitPy(_tmpStr), _tmpArr2.length > 0 ) ? _tmpStr += item : _keyArr.push(_tmpStr));
            if (_index === 0 || _index === _in) {
                _tmpStr = item;
                if(_arr.length===1){
                    _keyArr.push(item);
                }
            } else {
                var _obj = _splitPy(_tmpStr), _tmpAdd = _tmpStr + item;
                _tmpArr2 = _obj.ret;
                if (_tmpArr2.length > 0) {
                    _obj = _splitPy(_tmpAdd);
                    if (_obj.ret.length > 0 || _obj.flog) {
                        if (_index == _arr.length - 1) {
                            _keyArr.push(_tmpAdd);
                            return _keyArr.join('\'');
                        }
                        if (_obj.flog && _obj.ret.length <= 0) {
                            _keyArr.push(_tmpAdd);
                            _in = _index + 1;
                        } else {
                            _tmpStr += item;
                        }
                    } else {
                        _keyArr.push(_tmpStr);
                        _tmpStr = item;
                        if (_index == _arr.length - 1) {
                            _keyArr.push(item);
                            return _keyArr.join('\'');
                        }
                    }
                }
                else {
                    _keyArr.push(_tmpStr);
                    _tmpStr = item;
                }
            }
        }
    );
    _keyArr = _keyArr.map(function (_item) {
        return fuzzyPY(_item);
    });
    return _keyArr.join('\'');
}
//模糊音
function fuzzyPY(_key) {
    if (/a|e|o/ig.test(_key)) {
        return _key;
    }
    var _tmpr = [];//记录相似的拼音r
    for (var _k in yw) {
        if (yw.hasOwnProperty(_k)) {
            var _kArr = yw[_k];
            for (var i = 0; i < _kArr.length; i++) {
                if (_kArr[i].indexOf(_key) == 0) {
                    _tmpr.push(_kArr[i]);
                }
            }
        }
    }
    var _j = _tmpr.indexOf(_key);
    if (_j >= 0) {
        return _tmpr[_j];
    }
    if (_tmpr.length > 0)return _tmpr[0];
    else return _key;

}

function log(msg) {
    console.log('log:\t' + msg);
}
//log(separatedPY("aaba"));

var req = {
    _req:new XMLHttpRequest(),
    send:function (_url, _type, _data, _callback) {
        this._req.onreadystatechange = function () {
            this.readyState === XMLHttpRequest.DONE && this.status === 200 && _callback(this.responseText);
        };
        this._req.open(_type, _url, true);
        this._req.send(_data);
    }
}

window.onload = function () {
    var _input = document.getElementById('key'), _div = document.getElementById('show');
    _input.addEventListener('input', function () {
        setTimeout(function () {
            var _value = separatedPY(_input.value);
            if (_value)
                req.send('/py/' + _value, "GET", null, function (_respText) {
                    var _arr = eval('(' + _respText + ')');
                    _div.innerHTML = _arr.join('  ');
                });
            else
                _div.innerHTML = '';
        }, 500);

    });
};

