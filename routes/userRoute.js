const express = require('express');
const { createUser, getUsers, getUserById, deleteUser, updateUser } = require('../controller/userController');

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

module.exports = router;
