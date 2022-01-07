import { Router } from 'express';
import HelloController from './controllers/HelloController';

import UsersController from './controllers/UsersController';
import RepositoriesController from './controllers/RepositoriesController';

const routes = new Router();


routes.get("/hello", HelloController.index );  


//RESTful routes
routes.get("/users", UsersController.index );
routes.get("/users/:id", UsersController.show );
routes.post("/users", UsersController.create );
routes.put("/users/:id", UsersController.update );
routes.delete("/users/:id", UsersController.destroy );


routes.get("/users/:user_id/repositores", RepositoriesController.index )
routes.post("/users/:user_id/repositores", RepositoriesController.create )
routes.delete("/users/:user_id/repositores", RepositoriesController.destroy )


export default routes;