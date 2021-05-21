const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true, "Pet name is required"
        ],
        minLength: [3, "Pet name must be at least 3 characters"]
    },
    type: {
        type: String,
        required: [
            true, "Pet type is required"
        ],
        minLength: [3, "Pet type must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [
            true, "Pet description is required"
        ],
        minLength: [3, "Pet description must be at least 3 characters"]
    },
    skill1: {
        type: String,
        default: ""
    },
    skill2: {
        type: String,
        default: ""
    },
    skill3: {
        type: String,
        default: ""
    },
    likes: {
        type: Number,
        default: 0
    }
}, {timestamps:true})

module.exports.pet = mongoose.model('pet', PetSchema);