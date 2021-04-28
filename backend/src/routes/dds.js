const {Router}= require('express');
const router= Router();

const{createNewDds,renderDds }= require('../controllers/dds.controller');


router.route('/')
.get(renderDds)
.post(createNewDds)


//router.route('/:id')



module.exports= router;