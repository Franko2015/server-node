import { Request, Response } from "express";
import pool from "../database";


class ProgramasController {

    public async list (req: Request, res: Response){
        const [rows] = await pool.query('SELECT * FROM programas');
        res.json(rows);
    }

    public async getOne (req: Request, res: Response){
        const {id} = req.params;
        const [rows] = await pool.query('SELECT * FROM programas WHERE id = ?', [id]);
        res.json(rows);
    }

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO programas set ?', [req.body]);
        res.json({text: 'Sistema guardado'});
    }
    
    public delete (req: Request, res: Response){
        const {id} = req.params;
        pool.query('DELETE FROM programas WHERE id = ?', [id]);
        res.json({text: 'Eliminando un sistema: '+ req.params.id});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE programas set ? WHERE id = ?', [req.body, id]);
        res.json({text: 'Sistema editado: '+ id});
    }
}

const programasController = new ProgramasController();
export default programasController;