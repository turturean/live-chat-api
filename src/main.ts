import express from 'express';
import { initSocketIoMiddleware } from './io';
import http from 'http';

// Add these lines above any route / mounting

const port = process.env.PORT ? Number(process.env.PORT) : 3001;
const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

const server = http.createServer(app);

initSocketIoMiddleware(server);

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
