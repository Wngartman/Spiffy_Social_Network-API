const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');


  // Drop existing Users
  await User.deleteMany({});
  await Thought.deleteMany({});
  // Create empty array to hold the Users
  const Users = [];

  // Get some random thought objects using a helper function that we imported from ./data
  // const thoughts = getRandomThought(20);
  // Loop 20 times -- add Users to the Users array
  for (let i = 0; i < 20; i++) {
    const username = getRandomName();
    const email = `${username}@mail.com`;
    const friends = [];

    Users.push({
      username,
      email,
      friends,
    });
  }

  // Add Users to the collection and await the results
  await User.collection.insertMany(Users);
  // Add Reactions to the collection and await the results
  const thoughts = []
	for (let i = 0; i < 20; i++) {
		thoughts.push(getRandomThought());
	}
	await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(Users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
