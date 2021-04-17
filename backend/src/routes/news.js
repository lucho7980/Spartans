const {Router} = require('express');
const router = Router();
const { createNews, getNews, updateNews, deleteNews } = require('../controllers/news.controller');

router.route('/')
.get(getNews)
.post(createNews)

router.route('/:id')
    .get(getNews)
    .put(updateNews)
    .delete(deleteNews)

module.exports = router;
