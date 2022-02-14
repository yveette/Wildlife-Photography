const { getPosts } = require('../services/post');
const { postViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

router.get('/catalog', async (req, res) => {
    // or .lean();
    const posts = (await getPosts()).map(postViewModel);
    res.render('catalog', { title: 'Catalog Page', posts });
});

module.exports = router;