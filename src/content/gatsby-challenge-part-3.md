---
title: "100 Days Of Gatsby: Days 15 - 22"
featuredImage: ../images/100DaysOfGatsby.png
date: "2020-01-22"
draft: true
path: "/blog/gatsby-challenge-part-3"
---

## An Code example with PrismJS
Gatsby-Starter-Julia uses the Atom Editor Theme.

```js
console.log("Hello World");
```

## Default NodeJS server

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```