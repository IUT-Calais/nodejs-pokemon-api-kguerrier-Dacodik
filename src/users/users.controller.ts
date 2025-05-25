import { request, Response } from 'express';
import prisma from '../client';
import { userRouter } from './users.router';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const postUser = async (req: Request, res: Response) => {
    if(req.body.email == await prisma.user.findUnique()){
        res.status(400).send("Error 400 Bad Request - l'email renseigné est déjà enregistrée");
        return 0;
    };

    if(req.body.password == await prisma.user.findMany()){
        res.status(400).send("Error 400 Bad Request - Le mot de passe ne correspond pas");
        return 0;
    }

    if(!req.body.email){
        res.status(400).send("Error 400 Bad Request - Veuillez renseigner un email.");
        return 0;
    };

    if(!req.body.password){
        res.status(400).send("Error 400 Bad Request - Veuillez renseigner un mot de passe.");
        return 0;
    };

    await prisma.user.create({
        data:{
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10)
        },
    });
    res.status(201).send("Code 201 Completed - Utilisateur créé!");
    return 0;
};

export const postUserLogin = async (req: Request, res: Response) => {
    if(!req.body.email){
        res.status(400).send("Error 400 Bad Request - Veuillez renseigner un email.");
        return 0;
    };

    if(!req.body.password){
        res.status(400).send("Error 400 Bad Request - Veuillez renseigner un mot de passe.");
        return 0;
    };

    if(!req.body.email == await prisma.user.findUnique()){
        res.status(404).send("Error 404 - Utilisateur Non Trouvé");
        return 0;
    }

    if(!await bcrypt.compare(password, req.body.password)){
        res.status(400).send("Error 400 bad Request - Mot de passe incorrect");
    }

    const token = jwt.sign(
        {id:req.body.id, email: req.body.email},
        {password: 1234},
        {expiresIn: 5}
    );

    return res.status(201).json({token});

};