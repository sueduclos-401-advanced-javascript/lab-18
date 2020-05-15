'use strict';

// TCP Socket Connection connects to a central server

const net = require('net');
const socket = new net.Socket();
const faker = require('faker');

socket.connect({port:3000, host: 'localhost'}, () => {
  console.log('Connected to server');
});

socket.on('data', (payload) => {
  let parsed = JSON.parse(payload.toString());

  if(parsed.event === 'delivered') {
    console.log('Thank you for delivering', parsed.order.id);
  }
});

setInterval(() => {
  let order = {
    store: faker.company.companyName(),
    id: faker.random.uuid(),
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    address: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.stateAbbr() + ' ' + faker.address.zipCode(),
  };

  socket.write(JSON.stringify({event: 'pickup', order: order}));
}, 5000);