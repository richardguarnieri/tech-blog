const { Blog } = require('../models');

const blogs = [
    {title: 'Title One', content: 'Content Example', userId: 1},
    {title: 'Title Two', content: 'Content Example', userId: 2},
    {title: 'Title Three', content: 'Content Example', userId: 3},
    {title: 'Title Four', content: 'Content Example', userId: 2},
]

const seedBlogs = async () => {
    try {
        await Blog.bulkCreate(blogs);
        console.log('\n---------- BLOG HAS BEEN SEEDED SUCCESSFULLY ----------\n');
    } catch (err) {
        console.log(err.message);
    };
}

module.exports = seedBlogs;
