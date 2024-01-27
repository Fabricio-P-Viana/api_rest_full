import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index); rotas desativadas usadas so para testes
// router.get('/:id', userController.show);

router.post('/', loginRequired, userController.store); // criar |||||| remover o login required caso ainda não tenha login
router.put('/', loginRequired, userController.update); // atualizar
router.delete('/', loginRequired, userController.delete); // deletar

export default router;
