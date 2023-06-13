import { Router } from "express";
import { backend_language_id_controller, 
        backend_languages_controller, 
        frontend_language_id_controller, 
        frontend_languages_controller, 
        root_language_controller, 
        root_language_id_controller } from "../controllers/GetLanguages.controller.js";
import { post_backend_language_controller, post_frontend_language_controller, post_root_language_controller } from "../controllers/PostLanguages.controller.js";
import { delete_backend_language_controller, delete_frontend_language_controller, delete_root_language_controller } from "../controllers/DeleteLanguages.controller.js";
import { put_backend_language_controller, put_frontend_language_controller, put_root_language_controller } from "../controllers/PutLanguages.controller.js";


const router = Router();

// GET
router.get('/root', root_language_controller);
router.get('/frontend', frontend_languages_controller);
router.get('/backend', backend_languages_controller);


// GET BY ID
router.get('/root/:id', root_language_id_controller);
router.get('/frontend/:id', frontend_language_id_controller);
router.get('/backend/:id', backend_language_id_controller);


// POST
router.post('/root', post_root_language_controller );
router.post('/frontend', post_frontend_language_controller);
router.post('/backend', post_backend_language_controller);


// PATCH
router.patch('/root/:id', put_root_language_controller);
router.patch('/frontend/:id', put_frontend_language_controller);
router.patch('/backend/:id', put_backend_language_controller);


// DELETE
router.delete('/root/:id', delete_root_language_controller);
router.delete('/frontend/:id', delete_frontend_language_controller);
router.delete('/backend/:id', delete_backend_language_controller);



export default router;