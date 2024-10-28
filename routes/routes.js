import express from 'express'
const route = express.Router();
import { homeController, createController } from '../controllers/homeController.js';
import { readController } from '../controllers/readController.js';
import { editController, updateController, deleteController } from '../controllers/editContrroller.js';


route.get('/', homeController);

route.post("/", createController);

route.get("/read", readController);

route.get('/edit/:id', editController)

route.post('/update/:id', updateController)

route.post('/delete/:id', deleteController)


export default route;