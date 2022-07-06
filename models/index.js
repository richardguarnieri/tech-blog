const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.belongsToMany(Blog, {
    through: Comment,
})

Blog.belongsToMany(User, {
    through: Comment,
})

module.exports = {
    User, Blog, Comment
};

// Blog.belongsToMany(User);
// User.hasMany(Blog);



