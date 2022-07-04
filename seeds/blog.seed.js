const Blog = require('../models/Blog');

const blogs = [
    {title: 'Title One', content: 'Content Example', userId: 1},
    {title: 'Title Two', content: 'Content Example', userId: 2},
    {title: 'Title Three', content: 'Content Example', userId: 3},
    {title: 'Title Four', content: 'Content Example', userId: 2},
]

const seedBlogs = async () => {
    try {
        await Blog.bulkCreate(blogs);
        console.log('\n---------- Blog has been seeded successfully ----------');
    } catch (err) {
        console.log(err.message);
    };
}

module.exports = seedBlogs;
