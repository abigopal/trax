var ejdb = require('ejdb');
var Metric = require('../metric');
var db = require('../db');

var viewCounter = Object.create(Metric.prototype);

viewCounter.type = 'view_count';
viewCounter.interval = 10000;
viewCounter.initialData = {
  visitors: [],
  count: 0,
  date: null,
};
viewCounter.resetData = function(){
  this.data = this.prepareInitialData();
  this.data.date = new Date();
};
viewCounter.update = function(req){
  this.data.visitors.push(req.ip);
  this.data.count++;
};
viewCounter.writeDataToLog = function(){
  var _this = this;
  db.save('view_count', _this.data, function(err, oid){
    if(err) console.log('WRITE FAILED: ', err);
    _this.resetData();
  });
};
module.exports = viewCounter;