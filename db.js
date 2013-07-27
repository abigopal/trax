var ejdb = require('ejdb');
var db = module.exports = ejdb.open(__dirname + '/data/logger', ejdb.DEFAULT_OPEN_MODE);
