'use strict';

var broker = require('./broker');

module.exports = {
    foo: function(callback) {
        broker.process(function(client) {
            client.foo();
            callback(null, 'ok');
        });
    },
    changeFoo: function(callback) {
        broker.process(function(client) {
            client.foo = function() {
                console.log('Method foo rewritten');
            };
            
            callback(null, 'ok');
        });
    }
};
