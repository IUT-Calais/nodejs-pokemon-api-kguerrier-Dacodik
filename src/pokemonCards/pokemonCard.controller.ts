import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const getPokemonCards = async (_req: Request, res: Response) => {
    //res.status(200).send('Liste de pokemons')
    const pokemons = await prisma.pokemonCard.findMany();
    res.status(200).json(pokemons);
}

export const getPokemonCardsId = async (_req: Request, res: Response) => {
    const pokemons = await prisma.pokemonCard.findMany();
    res.status(200).json(pokemons);
}

