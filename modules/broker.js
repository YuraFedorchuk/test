'use strict';

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
            console.log('\n\nBroker initialised\n\n');
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
