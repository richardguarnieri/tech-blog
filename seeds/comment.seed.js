const { Comment } = require('../models');

const comments = [
    {content: 'Comment Example', userId: 1},
    {content: 'Comment Example', userId: 2},
    {content: 'Comment Example', userId: 3},
    {content: 'Comment Example', userId: 2},
]

const seedComments = async () => {
    try {
        await Comment.bulkCreate(comments);
        console.log('\n---------- COMMENT HAS BEEN SEEDED SUCCESSFULLY ----------\n');
    } catch (err) {
        console.log(err.message);
    };
}

module.exports = seedComments;
