import { Router } from "express";
import programasController from "../controllers/programasController";


class ProgramsRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/programas", programasController.list);
    this.router.post("/programas", programasController.create);
    this.router.get("/programas/:id", programasController.getOne);
    this.router.delete("/programas/:id", programasController.delete);
    this.router.put("/programas/:id", programasController.update); 
  }
}

const indexRoutes = new ProgramsRoutes();
export default indexRoutes.router;
