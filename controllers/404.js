const router = require('express').Router();

router.get('*', (req, res) => {
    res.status(404).render('404', { title: 'Not Found!' });
});

module.exports = router;
