import express from 'express';
import { pokemonCardRouter } from './pokemonCards/pokemonCard.router';

export const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

export const server = app.listen(port);

export function stopServer() {
  server.close();
}

app.use('/pokemonCard', pokemonCardRouter);
app.use('/pokemonCardId', pokemonCardRouter);