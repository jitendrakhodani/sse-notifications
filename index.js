const express = require('express');
const SSEChannel = require('sse-pubsub');

const app = express();
const channel = new SSEChannel();
var notifications = {
    notifications:[{
    id:1,
    title:'Walmart Discounts',
    timestamp:1537253371261,
    description:'Hey there is a great discount going on in Walmart near you. Hurry Up!',
    type:'information',
    domain:'Finance'
  },
  {
    id:2,
    title:'Thanks Giving Walmart Discounts',
    timestamp:1537253371261,
    description:'Thanks Giving this year is even more fun with great Walmart Discounts ',
    type:'information',
    domain:'Merchandise'
  },
  {
    id:3,
    title:'Traffic snarls enroute to Walmart near you',
    timestamp:1537253371261,
    description:'This Thanks Giving beaware of huge Traffic on the way to Walmart near you.',
    type:'Critical',
    domain:'Finance'
  },
  {
    id:4,
    title:'Raining Great Discounts in Walmart',
    timestamp:1537253371261,
    description:'Hey this Black Friday its raining great discounts in Walmart Near You.',
    type:'information',
    domain:'Finance'
  },
  {
    id:5,
    title:'New arrivals in Walmart for your wardrobe update.',
    timestamp:1537253371261,
    description:'Hey visit Walmart near you for new inventory fashion section.',
    type:'information',
    domain:'Merchandise'
  },
  {
    id:6,
    title:"New inventory in Walmart's Garden section",
    timestamp:1537253371261,
    description:'This spring give your garden much needed makeover with our latest inventory in Garden section.',
    type:'information',
    domain:'Merchandise'
  },
  {
    id:7,
    title:'Summer fun inventory',
    timestamp:1537253371261,
    description:"Beat the heat this summer with Walmart's summer fun inventory",
    type:'information',
    domain:'Merchandise'
  }
]};

setInterval(() => channel.publish(notifications,'notification-event'), 2000);

app.get('/notifications', (req, res) => channel.subscribe(req, res));


app.listen(3000);