'use strict';

require('./modular/drivers/driver')
require('./modular/drivers/driver')

const myEvent = require('./events')
const order = require('./modular/vendors/vendor')

// Pick up the order  
function pickUp() { 
   setInterval(() => {
    myEvent.emit('pickup', order)
   },5000)
}
// In Transit
function transit() {
    setInterval(() => {
       myEvent.emit('in-transit', order)
   }, 1000)

}

// The Order Delivered  
function delivered() {
    setInterval(() => {
        myEvent.emit('delivered', order)
    }, 3000)
} 

console.log(myEvent._events.delivered);
module.exports = {
    pickUp,
    transit,
    delivered
}
