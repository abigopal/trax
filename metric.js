var EventEmitter = require('events').EventEmitter;
var ejdb = require('ejdb');
var Metric = function(){};

Metric.prototype = {
  interval: 1000,
  initialData: {},
  data: {},
  name: '',
  
  start: function(){
    this.resetData();
    this.job = setInterval(this.logData.bind(this), this.interval);
  },
  stop: function(){
    clearInterval(this.job);
  },
  logData: function(){
    this.writeDataToLog();
  },
  resetData: function() {
    this.data = this.prepareInitialData();
   },
  prepareInitialData: function() {
    return JSON.parse(JSON.stringify(this.initialData));
  },
  writeDataToLog: null,
  update: null, 
};

module.exports = Metric;