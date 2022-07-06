const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');
const BlogComment = require('./BlogComment');

Blog.belongsTo(User);
User.hasMany(Blog);

Comment.belongsTo(User);
User.hasMany(Comment);

Blog.belongsToMany(Comment, {
    through: BlogComment,
})    

Comment.belongsToMany(Blog, {
    through: BlogComment,
})    

module.exports = {
    User, Blog, Comment, BlogComment
};    



