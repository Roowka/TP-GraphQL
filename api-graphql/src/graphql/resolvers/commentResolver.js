const { Comment } = require("../../models/Comment.js");

module.exports = {
    Query: {
        comments: async (parent, args) => {
            return await Comment.find();
        }
    },
    Mutation: {
        createComment: async (parent, args) => {
            try {
                const { content, author, postId } = args;
                const comment = new Comment({ content, author, postId });
                await comment.save();
                return comment;
            } catch (error) {
                return error;
            }
        },
    },
};