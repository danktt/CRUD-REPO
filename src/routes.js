import { Router } from 'express';

import auth from "./middlewares/auth";


import UsersController from './controllers/UsersController';
import RepositoriesController from './controllers/RepositoriesController';
import SessionsController from './controllers/SessionsController';

const routes = new Router();

routes.post("/sessions", SessionsController.create);

routes.use(auth);

routes.get("/users", UsersController.index );
routes.get("/users/:id", UsersController.show );
routes.post("/users", UsersController.create );
routes.put("/users/:id", UsersController.update );
routes.delete("/users/:id", UsersController.destroy );


routes.get("/users/:user_id/repositores", RepositoriesController.index )
routes.post("/users/:user_id/repositores", RepositoriesController.create )
routes.delete("/users/:user_id/repositores", RepositoriesController.destroy )


export default routes;