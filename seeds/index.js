const sequelize = require('./../config/connection');
const seedUsers = require('./user.seed');
const seedBlogs = require('./blog.seed');
const seedComments = require('./comment.seed');
const seedBlogComments = require('./blogComment.seed');

const seedDatabase = async () => {
    await sequelize.sync({ force: true, match: /_test$/ })
    await seedUsers();
    await seedBlogs();
    await seedComments();
    await seedBlogComments();
    process.exit()
}

seedDatabase();

