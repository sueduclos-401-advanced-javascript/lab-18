'use strict';

const net = require('net');
const server = net.createServer();

let port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('Server is up and running on port', port);
});

let socketPool = [];

const logger = (payload) => {
  let parsed = JSON.parse(payload.toString());

  for(let i = 0; i < socketPool.length; i++) {
    let socket = socketPool[i];
    socket.write(payload);
  }

  if (parsed.event === 'pickup') {
    console.log('pickup');
    console.log('-Time:', new Date());
    console.log('-Store:', parsed.order.store);
    console.log('-OrderID:', parsed.order.id);
    console.log('-Customer:', parsed.order.name);
    console.log('-Address:', parsed.order.address);
  }

  if (parsed.event === 'in-transit') 
    console.log('in-transit order', parsed.order.id);
  
  if (parsed.event === 'delivered') 
    console.log('delivered order', parsed.order.id); 
};

server.on('connection', (socket) => {
  console.log('Socket connected to server');
  socketPool.push(socket);
  socket.on('data', logger);
});
