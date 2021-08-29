import express from 'express';
import UserController from '../db/controllers/UserController';

var router = express.Router();

router.get('/', UserController.findAllUsers);
router.post('/', UserController.createUser);

export default router;
