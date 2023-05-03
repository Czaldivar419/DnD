const db = require('../config/connection');
const { User, Campaign } = require('../models');
const bcrypt = require('bcrypt');
const userData = require('./userData.json');
const campaignData = require('./campaignData.json')

db.once('open', async () => {
  await User.deleteMany({});
  await Campaign.deleteMany({});

  const users = [];
  const campaigns = [];

  for (let i = 0; i < userData.length; i++) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData[i].password, saltRounds);
    userData[i].password = hashedPassword;
    users.push(userData[i]);
  }

  await User.insertMany(users);

  for (let i = 0; i < campaignData.length; i++) {
    campaigns.push({
      campaignId: campaignData[i].campaignId,
      campaignName: campaignData[i].campaignName,
      dungeonMasterId: campaignData[i].dungeonMasterId,
      playerIds: campaignData[i].playerIds
    });
  }

  await Campaign.insertMany(campaigns);

  console.log('Users and campaigns seeded!');
  process.exit(0);
});