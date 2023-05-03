const { Schema, model } = require('mongoose');

const campaignSchema = new Schema({
    campaignId: { 
        type: String, 
        required: true, 
        unique: true },
    campaignName: { 
        type: String, 
        required: true },
    dungeonMasterId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true },
    playerIds: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'User' }]
  });
  
  const Campaign = model('Campaign', campaignSchema);
  
  module.exports = Campaign;