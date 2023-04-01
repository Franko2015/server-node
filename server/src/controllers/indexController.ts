import { Request, Response } from "express";
import pool from "../database";

class IndexController {

    public index (req: Request, res: Response){
        res.json('Hola soy el indice')
    }
    public list (req: Request, res: Response){
        res.json('Index');
    }
}

export const indexController = new IndexController();