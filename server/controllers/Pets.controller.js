const Pet = require('../models/Pet.model');

class PetsController {
    getAll(req, res) {
        Pet.find().sort("type").exec()
            .then(pets => res.json(pets))
            .catch(err => res.json(err));
    }
    create(req, res) {
        let newPet = new Pet(req.body);
        newPet.save()
            .then(() => res.json({msg: "pet added to shelter"}))
            .catch(err => res.json(err));
    }
    getOne(req, res) {
        Pet.findOne({_id: req.params._id})
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    }
    update(req, res) {
        Pet.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true, context: 'query'})
            .then(() => res.json({msg: "updated"}))
            .catch(err => res.json(err));
    }
    
    remove(req,res) {
        Pet.findByIdAndDelete({_id: req.params._id})
            .then(() => res.json({msg: "pet deleted"}))
            .catch(err => res.json(err));

    }
    adopt(req,res) {
        Pet.findByIdAndDelete({_id: req.params._id})
            .then(() => res.json({msg: "pet adopted"}))
            .catch(err => res.json(err));

    }
    showOne(req,res) {
        Pet.findOneAndDisplay({_id: req.params._id})
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    }
}

module.exports = new PetsController();


