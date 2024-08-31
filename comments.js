// Create web server
// Run node comments.js
// Open web browser and go to http://localhost:3000
// Check the console to see the comments

import { createServer } from 'http';

const comments = [
  { username: 'John Doe', comment: 'Hello everyone!' },
  { username: 'Jane Doe', comment: 'Hi John Doe!' }
]

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(comments));
});