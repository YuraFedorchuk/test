'use strict';

var _ = require('lodash');

var Broker = {
    ready: false,
    client: null,

    init: function() {
        setTimeout(function() {
            Broker.client = {
                foo: function() {
                    console.log('Method foo called.');
                }
            };

            Broker.ready = true;
        }, 500);

        return Broker;
    },

    process: function(callback) {
        if (Broker.ready && Broker.client) {
            return callback(Broker.client);
        } else {
            setTimeout(function() {
                Broker.process(callback);
            }, 200);
        }
    }
};

module.exports = Broker.init();
