const User = require('../models/User');

const users = [
    {email: 'example@example.com', username: 'example', password: '12345678'},
    {email: 'example@example.com', username: 'example', password: '12345678'},
]

const seedUsers = () => {
    User.bulkCreate(users);
}

module.exports = seedUsers;
