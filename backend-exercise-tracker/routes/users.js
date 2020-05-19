//diferente el ruteo y el salvado sin async para ver si entiendo cuál es mejor.
const router = require('express').Router();
let Person = require('../models/Person');

router.route('/').get((req,res) => {
    Person.find()
    .then(users=>res.json(users))
    .catch(err=> res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res) => {
    const {username} = req.body;
    const newUser = new Person({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;