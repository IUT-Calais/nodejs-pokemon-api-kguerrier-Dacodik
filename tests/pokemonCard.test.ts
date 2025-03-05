import request from 'supertest';
import { app, stopServer } from '../src';
import { prismaMock } from './jest.setup';
import { getPokemonCards, getPokemonCardsId } from '../src/pokemonCards/pokemonCard.controller';

afterAll(() => {
  stopServer();
});

describe('PokemonCard API', () => {
  describe('GET /pokemon-cards', () => {
    it('should fetch all PokemonCards', async () => {
      const mockPokemonCards = [
        {truc: 7, id: 1, name: '', pokedexId: 1, type: 12, lifePoints: 3, size: 999999.0, weight: -1, imageUrl: 'https://mon.image.com'}
      ];

      prismaMock.pokemonCard.findMany.mockResolvedValue(mockPokemonCards);

      const response = await request(app).get('/pokemon-cards')

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockPokemonCards);
    });
  });

  describe('GET /pokemon-cards/:pokemonCardId', () => {
    it('should fetch a PokemonCard by ID', async () => {
      const mockPokemonCard = [
        {id: 1, name: 'Bathelemy', pokedexId: 120000, type: 12, lifePoints: 3, size: 999999.0, weight: -1, imageUrl: 'https://mon.image.com'}
      ];

      prismaMock.pokemonCard.findMany.mockResolvedValue(mockPokemonCard);

      const response = await request(app).get('/pokemon-cards/id')

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockPokemonCard);
    });

    it('should return 404 if PokemonCard is not found', async () => {
      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: 'PokemonCard not found' });
    });
  });

  describe('POST /pokemon-cards', () => {
    it('should create a new PokemonCard', async () => {
      const createdPokemonCard = [
        {id: 1, name: 'Bathelemy', pokedexId: 120000, type: 12, lifePoints: 3, size: 999999.0, weight: -1, imageUrl: 'https://mon.image.com'}
      ];

      expect(response.status).toBe(201);
      expect(response.body).toEqual(createdPokemonCard);
    });
  });

  describe('PATCH /pokemon-cards/:pokemonCardId', () => {
    it('should update an existing PokemonCard', async () => {
      const updatedPokemonCard = [
        {id: 1, name: 'Bathelemy', pokedexId: 120000, type: 12, lifePoints: 3, size: 999999.0, weight: -1, imageUrl: 'https://mon.image.com'}
      ];

      expect(response.status).toBe(200);
      expect(response.body).toEqual(updatedPokemonCard);
    });
  });

  describe('DELETE /pokemon-cards/:pokemonCardId', () => {
    it('should delete a PokemonCard', async () => {
      expect(response.status).toBe(204);
    });
  });
});
