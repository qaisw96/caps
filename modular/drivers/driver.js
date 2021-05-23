'use strict';

const myEvent = require('../../events')


function transitHandler(payload) {
    console.log(`DRIVER: picked up ${payload.orderId}`);
}

function deliverHandler(payload) {
    console.log('delivered');
}

myEvent.on('in-transit', transitHandler)
myEvent.on('delivered', deliverHandler)

