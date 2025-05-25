import express from 'express';
import { pokemonCardRouter } from './pokemonCards/pokemonCard.router';
import { userRouter } from './user/user.router';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

export const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log(`Mon serveur démarre sur le port ${port}`);
});

const swaggerDocument = YAML.load(path.join(__dirname, './swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

export const server = app.listen(port);

export function stopServer() {
  server.close();
}

app.use('/pokemon-cards', pokemonCardRouter);
app.use('/pokemon-cards/:pokemonCardId', pokemonCardRouter);