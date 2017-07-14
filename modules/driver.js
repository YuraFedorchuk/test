'use strict';

var _ = require('lodash');
var uuid = require('node-uuid');

var broker = require('./broker');

var Driver = {
    broker: {},
    foo: function(callback) {
        var sessionid = uuid.v4();

        getBroker(function(broker) {
            broker.foo();
            callback(null, 'ok');
        });
    },
    changeFoo: function(callback) {
        getBroker(function(broker) {
            broker.foo = function() {
                console.log('Method foo rewritten');
            };

            callback(null, 'ok');
        });
    }
};

var getBroker = function(sessionId, callback) {
    broker.process(function(client) {
        Driver.broker[sessionId] = _.clone(client);
    });
};

module.exports = Driver;
