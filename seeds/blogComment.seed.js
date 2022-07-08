const { BlogComment } = require('../models');

const blogComments = [
    {blogId: 1, commentId: 1},
    {blogId: 2, commentId: 2},
    {blogId: 3, commentId: 3},
    {blogId: 2, commentId: 4},
]

const seedBlogComments = () => {
    BlogComment.bulkCreate(blogComments, {
        validate: true,
    });
    console.log('\n---------- BLOG COMMENT HAS BEEN SEEDED SUCCESSFULLY ----------\n');
}

module.exports = seedBlogComments;
