const User = require('../models/User');

const users = [
    {email: 'example1@example.com', username: 'example1', password: '12345678'},
    {email: 'example2@example.com', username: 'example2', password: '12345678'},
    {email: 'example3@example.com', username: 'example3', password: '12345678'},
]

const seedUsers = async () => {
    try {
        await User.bulkCreate(users);
        console.log('\n---------- USER HAS BEEN SEEDED SUCCESSFULLY ----------\n');
    } catch (err) {
        console.log(err.message);
    };
}

module.exports = seedUsers;
