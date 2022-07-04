const sequelize = require('./../config/connection');
const seedUsers = require('./user.seeds');

const seedDatabase = async () => {
    await sequelize.sync({ force: true, match: /_test$/ })
    await seedUsers();

}

seedDatabase();

