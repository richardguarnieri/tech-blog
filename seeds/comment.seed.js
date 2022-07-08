const { Comment } = require('../models');

const comments = [
    {content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aperiam libero dolore itaque obcaecati voluptates ratione nisi, voluptas veniam ducimus! Magni praesentium quod ut fugiat? Numquam praesentium voluptas earum reiciendis.', userId: 1},
    {content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aperiam libero dolore itaque obcaecati voluptates ratione nisi, voluptas veniam ducimus! Magni praesentium quod ut fugiat? Numquam praesentium voluptas earum reiciendis.', userId: 2},
    {content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aperiam libero dolore itaque obcaecati voluptates ratione nisi, voluptas veniam ducimus! Magni praesentium quod ut fugiat? Numquam praesentium voluptas earum reiciendis.', userId: 3},
    {content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aperiam libero dolore itaque obcaecati voluptates ratione nisi, voluptas veniam ducimus! Magni praesentium quod ut fugiat? Numquam praesentium voluptas earum reiciendis.', userId: 1},
]

const seedComments = async () => {
    await Comment.bulkCreate(comments, {
        validate: true,
    });
    console.log('\n---------- COMMENT HAS BEEN SEEDED SUCCESSFULLY ----------\n');
}

module.exports = seedComments;
