import request from 'supertest';
import { app } from '../src';
import { prismaMock } from './jest.setup';

describe('User API', () => {
  describe('POST /users', () => {
    it('should create a new user', async () => {
      prismaMock.user.findUnique.mockResolvedValue(null); // pas d'utilisateur existant

      prismaMock.user.create.mockResolvedValue({
        id: 1,
        email: 'test@example.com',
        password: 'hashedPassword',
        name: 'Test User',
        authorId: 1,
      });

      const response = await request(app)
        .post('/users')
        .send({
          email: 'test@example.com',
          password: 'truePassword',
          name: 'Test User',
        });

      expect(response.status).toBe(201);
      expect(response.text).toContain('Utilisateur créé');
    });
  });

  describe('POST /users/login', () => {
    it('should login a user and return a token', async () => {
      prismaMock.user.findUnique.mockResolvedValue({
        id: 1,
        email: 'test@example.com',
        password: 'hashedPassword',
        name: 'Test User',
        authorId: 1,
      });

      const response = await request(app)
        .post('/users/login')
        .send({
          email: 'test@example.com',
          password: 'truePassword',
        });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        token: 'mockedToken',
        message: 'Connexion réussie',
      });
    });
  });
});
