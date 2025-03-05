import { Request, Response } from 'express'
import prisma from '../client';

export const getPokemonCards = async (_req: Request, res: Response) => {
    //res.status(200).send('Liste de pokemons')
    const pokemons = await prisma.pokemonCard.findMany();
    res.status(200).send(pokemons);
}

export const getPokemonCardsId = async (_req: Request, res: Response) => {
    const pokemons = await prisma.pokemonCard.findMany();
    res.status(200).send(pokemons);
}

export const getPokemonCardsId = async (_req: Request, res: Response) => {
    const pokemons = await prisma.pokemonCard.findMany();
    res.status(200).send(pokemons);
}