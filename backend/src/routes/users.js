const {Router} = require('express');
const router = Router();
const { signUp, getUsers,createUser} = require('../controllers/users.controller');

router.route('/')
.get(getUsers)
.post(createUser)

module.exports = router;
