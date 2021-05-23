'use strict';

require('dotenv').config()
const STORE_NAME = process.env.STORE_NAME  

const myEvent = require('../../events');
const faker = require('faker')

const order = {
    store: STORE_NAME,
    orderId: faker.datatype.number() ,
    costumer: faker.name.findName(),
    address: faker.address.cityName(),
    time:  faker.date.recent()
}

function thankYou(payload) {
    console.log('THANK YOU');
    console.log('Your Order : ', order);
}

myEvent.on('pickup', thankYou)


module.exports = order;
