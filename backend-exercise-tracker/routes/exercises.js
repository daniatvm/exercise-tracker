const router = require('express').Router();
let Exercise = require('../models/Exercise');
const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler(async (req,res) => {
    const exercises = await Exercise.find();
    res.send(exercises);
}));

router.post('/add', asyncHandler(async (req,res)=>{
    const {username, description, duration, date} = req.body;

    const newExercise = new Exercise({username,description,duration, date});
    await newExercise.save();
    res.send('Exercise added');
}));

router.get('/:id', asyncHandler(async (req,res)=>{
    const exercise = await Exercise.findById(req.params.id);
    res.send(exercise);
}));

router.delete('/:id', asyncHandler(async(req,res)=>{
    await Exercise.findByIdAndDelete(req.params.id);
    res.send('Exercise deleted');
}));

router.put('/:id', asyncHandler(async (req,res)=>{
    const {username, description, duration, date} = req.body;
    await Exercise.findByIdAndUpdate(req.params.id,{username, description, duration, date});
    res.send('Exercise updated');
}));

module.exports = router;