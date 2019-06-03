const express = require('express');
const router = express.Router();
const { items }  = require('./cart-items');

router.get('/items', (req, res) => {
    console.log(req.body);
    res.json({ data: items});
});

router.post('/', (req, res) => {
    // const newItem = req.body.name.toUpperCase();
    console.log(req.body); 
    res.json({ data: items });
});

// router.put('/:id', (req, res) => {
//     console.log(req.param.id);
//     res.json({ data:newItem });
// });

// router.delete('/:id', (req, res) => {
//     console.log(req.param.id);
// });

module.exports = router;
