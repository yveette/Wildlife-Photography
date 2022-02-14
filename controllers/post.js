const router = require('express').Router();
const { isUser } = require('../middleware/guards');

router.get('/create', isUser() ,(req, res) => {
    res.render('create', { title: 'Create Post' });
})

module.exports = router;