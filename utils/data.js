const usernames = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const reactions = [
  'I’m happy to hear about that.',
  'That’s great!',
  'That sounds bad.',
  'Really? That’s amazing!',
  'I agree.',
  'That’s true.',
  'You’re right.',
  'Absolutely!',
  'You could be right.',
  'I’ll go along with that.',
  'You took the words right out of my mouth',
  'You could be on to something there.'
]

const thoughts = [
  'Decision Trackers are cool',
  'I wish I could find my phone',
  'Maybe I should learn piano',
  'Have you heard of the game Starbase Defender?',
  'Bloons Tower Defense 6 is a great game!',
  'Monopoly Money Manager is more my style',
  'Movie trailers always give away too much about the movie!',
  'Hello world is a classic example of most developers first line of code!',
  'Stupid Social Media appsteal too much information!',
  'Taking notes is a great way to remember information',
  'I love sending messages to my mom!'
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(usernames)}`;

// Function to generate random Thoughts that we can add to user object.
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughts),
      username: getRandomArrItem(usernames),
      reactions: {
        reactionBody: randomItem(reactions),
        username: randomItem(usernames),
      }
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts };
