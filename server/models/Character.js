const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
    characterId: { 
        type: Schema.Types.ObjectId, 
        default: Schema.Types.ObjectId },
    characterName: { 
        type: String, 
        required: true },
    campaignId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Campaign', 
        required: true },
    playerId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true },
    class: { 
        type: String, 
        required: true },
    race: { 
        type: String, 
        required: true },
    stats: {
        strength: { type: Number },
        dexterity: { type: Number },
        constitution: { type: Number },
        intelligence: { type: Number },
        wisdom: { type: Number },
        charisma: { type: Number },
    },
    // inventory: [{
    //   name: { type: String },
    //   quantity: { type: Number }
    // }],
    // spells: [{
    //   name: { type: String },
    //   description: { type: String }
    // }]
  });
  
  const Character = model('Character', characterSchema);
  
  module.exports = Character;