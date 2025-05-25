
import { Router } from 'express';
import { Request, Response, NextFunction } from 'express';
import { getPokemonCards, postPokemonCards, patchPokemonCards, deletePokemonCards } from './pokemonCard.controller';

import { authenticateToken } from '../auth.middleware';

export const pokemonCardRouter = Router();

pokemonCardRouter.get('/', getPokemonCards);

pokemonCardRouter.get('/:pokemonCardId');

pokemonCardRouter.post('/', authenticateToken, postPokemonCards);

pokemonCardRouter.patch('/:pokemonCardId', authenticateToken, patchPokemonCards);

pokemonCardRouter.delete('/:pokemonCardId', authenticateToken, deletePokemonCards);

/*
pokemonCardRouter.post('/', (req: Request, res: Response) => {
    res.send(`pokemonCard-POST ${req.body.name}`);
});
  
pokemonCardRouter.patch('/:pokemonCardId', (_req: Request, res: Response, next: NextFunction) => { 
    res.send(`pokemonCard-PATCH ${_req.params.pokemonCardId}`);
});
  
pokemonCardRouter.delete('/:pokemonCardId', (_req: Request, res: Response) => {
    res.status(204).send('pokemonCard-DELETE');
});*/