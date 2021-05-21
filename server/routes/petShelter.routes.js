const PetShelterController = require('../controllers/petShelter.controller');

module.exports = function(app){
    app.get('/api/petShelter', PetShelterController.list);
    app.post('/api/petShelter', PetShelterController.create);
    app.get('/api/petShelter/:id', PetShelterController.detail);
    app.put('/api/petShelter/:id', PetShelterController.updatePet);
    app.delete('/api/petShelter/:id', PetShelterController.delete)
}