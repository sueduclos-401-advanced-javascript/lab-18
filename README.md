# LAB 18 - Class 18 Socket.io

## Project Name - Code Academy Parcel Service

Code 401 Lab 18 - Socket IO

Create an event driven application that “distributes” logging commands to separate modules. Application will be called *CAPS*, the Code Academy Parcel Service. CAPS will simulate a delivery service where sellers will ship products and be notified when customer receives those products.

Your application must be able to support multiple users on different machines communicating with one another. Because of this, we’re going to be making three distinct applications, and have them all communicate over the internet. These applications will together simulate the order and delivery of an item, from seller to customer. The seller (or vendor) should alert the system that a package needs to be delivered, and a delivery driver should alert the system when a package is picked up for delivery. The driver should also alert the system when the package has been delivered. Thus, you should have three major events being communicated:

- `pickup` - Tells the system when a new order needs to be delivered
- `in-transit` - Tells the system which order is in the process of being delivered
- `delivered` - Tells the system when the order has been delivered

Your client applications should belong to the namespace `csps`.

Your application should automatically generate random orders every 5 seconds. These random orders should have a store, id, customer, and address as the order data. Your vendor should also join a `room` on your server, so that the vendor only listens to deliveries of their own orders. This room can be identical to the store name, so that two stores of the same name share a room.

### Author: Sue Duclos

### Links and Resources

- [submission PR](https://github.com/sueduclos-401-advanced-javascript/lab-18/pull/1)

### Setup

- `npm install`

#### How to initialize/run your application

- `nodemon server.js`
- `nodemon driver.js`
- `nodemon vendor.js`

#### Tests

- N/A

#### UML

- ![UML18]()