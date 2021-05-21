const { pet } = require('../models/pet.model');


module.exports =  {

    list : (req, res) => {
        pet.find().sort({type:1})
            .then(pet => {
                res.json(pet);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    },

    create : (req, res) => {
        pet.create(req.body)
        .then(data => {res.json({results: data})})
        .catch(err => {res.json(err.errors)})
    },

    updatePet : (req, res) => {
        const { id } = req.params;
        pet.findOneAndUpdate({_id: id}, req.body, {runValidators:true, useFindAndModify: true})
            .then(data => {res.json({results: data})})
            .catch(err => {res.json(err.errors)})
    },

    detail : (req, res) => {
    const { id } = req.params;
    pet.findOne({ _id: id })
        .then(pet => {
            res.json(pet)
        })
        .catch(err => {
            res.json(err.errors)
        } )
    },

    delete : (req, res) => {
    const { id } = req.params;
    pet.deleteOne({_id:id})
        .then(deleteConfirmation => {
            res.json(deleteConfirmation);
        })
        .catch(err => {
            res.status(400).json(err);
        })
    }
}