const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.put('/:id', userController.updateUser);
router.patch('/soft-delete/:id', userController.softDeleteUser);
router.get('/deleted/list', userController.getDeletedUsers);

module.exports = router;
