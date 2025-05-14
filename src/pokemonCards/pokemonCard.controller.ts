import { Request, Response } from 'express'
import prisma from '../client';
import { pokemonCardRouter } from './pokemonCard.router';

export const getPokemonCards = async (_req: Request, res: Response) => {
    //res.status(200).send('Liste de pokemons')
    const pokemons = await prisma.pokemonCard.findMany();
    res.status(200).send(pokemons);
}

export const getPokemonCardsId = async (req: Request, res: Response) => {
    const{ pokemonCardId } = req.params;
    const pokemons = await prisma.pokemonCard.findUnique({where: {id : pokemonCardId},});
    if(!pokemons){
        res.status(404).send("Error 404 - Not Found")
        return 0;
    }
    res.status(200).send(pokemons);
}
export const postPokemonCards = async (req: Request, res: Response) => {
    if(req.body.name == prisma.pokemonCard.findMany()){
        res.status(400).send("Error 400 Bad Request - Le nom du pokemon est déjà inscrit")
        return 0;
    }
    if(getPokemonCardsId == prisma.pokemonCard.findMany()){
        res.status(400).send("Error 400 Bad Request - L'ID du pokemon est déjà inscrit")
        return 0;
    }
    res.status(200).send(`pokemonCard-POST ${req.body.name}`);
}
export const patchPokemonCards = async (req: Request, res: Response) => {
    if(req.body.name == prisma.pokemonCard.findMany()){
        res.status(400).send("Error 400 Bad Request - Le nom du pokemon est déjà inscrit")
        return 0;
    }
    if(getPokemonCardsId == prisma.pokemonCard.findMany()){
        res.status(400).send("Error 400 Bad Request - L'ID du pokemon est déjà inscrit")
        return 0;
    }
    res.status(200).send(`pokemonCard-PATCH ${req.body.name}`);
}
export const deletePokemonCards = async (req: Request, res: Response) => {
    res.status(200).send(`Pokemon ${req.body.name} supprimé`);
}