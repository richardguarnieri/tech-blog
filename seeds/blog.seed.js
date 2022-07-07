const { Blog } = require('../models');

const blogs = [
    {title: 'Blog One', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aperiam libero dolore itaque obcaecati voluptates ratione nisi, voluptas veniam ducimus! Magni praesentium quod ut fugiat? Numquam praesentium voluptas earum reiciendis.', userId: 1},
    {title: 'Blog Two', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aperiam libero dolore itaque obcaecati voluptates ratione nisi, voluptas veniam ducimus! Magni praesentium quod ut fugiat? Numquam praesentium voluptas earum reiciendis.', userId: 2},
    {title: 'Blog Three', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aperiam libero dolore itaque obcaecati voluptates ratione nisi, voluptas veniam ducimus! Magni praesentium quod ut fugiat? Numquam praesentium voluptas earum reiciendis.', userId: 3},
    {title: 'Blog Four', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aperiam libero dolore itaque obcaecati voluptates ratione nisi, voluptas veniam ducimus! Magni praesentium quod ut fugiat? Numquam praesentium voluptas earum reiciendis.', userId: 2},
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
