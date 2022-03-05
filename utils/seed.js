const connection = require('../config/connection');
const { Reaction, Thought, User } = require('../models');
const { getRandomName, getRandomthoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing Reactions
  await Reaction.deleteMany({});

  // Drop existing Users
  await User.deleteMany({});

  // Create empty array to hold the Users
  const Users = [];

  // Get some random thought objects using a helper function that we imported from ./data
  const thoughts = getRandomthoughts(20);

  // Loop 20 times -- add Users to the Users array
  for (let i = 0; i < 20; i++) {
    const username = getRandomName();
    const email = `${username}@mail.com`;
    const friends = getRandomName();

    Users.push({
      username,
      email,
      friends,
    });
  }

  // Add Users to the collection and await the results
  await User.collection.insertMany(Users);

  // Add Reactions to the collection and await the results
  await Reaction.collection.insertOne({
    ReactionName: 'UCLA',
    inPerson: false,
    Users: [...Users],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(Users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
