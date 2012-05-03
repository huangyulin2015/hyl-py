var py = require('../lib/py'), dao = require('../lib/dao'), utils = require('util');
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title:'Express' })
};

exports.py = function (req, res) {
    var _key = req.params.key;
    dao.findPy({key:_key}, function (items) {
        var _words = [];
        for (var i = 0, len = items.length; i < len; i++) {
            _words.push(items[i].word);
        }
        _words.length > 0 ? res.render('py', {result:_words.join(','), title:"按拼音查找"}) : res.render('py', {result:py.findPy(_key), title:"按拼音查找"});
    });
    res.render('py',{result:py.splitPY(_key),title:'按拼音查询'})

}