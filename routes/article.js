const express = require('express');
// get using express router
const router = express.Router();
// define article controller and export it for this file
const articleController = require('../controllers/article');

// use controller functions according to the route
router.get('/', articleController.getAllArtticles);
router.get('/article/:slug', articleController.getArticleBySlug);
router.get('/author/:id', articleController.getAuthorPage);

// export article router for using in default application file
module.exports = router;