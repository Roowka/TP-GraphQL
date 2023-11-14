const { Comment } = require("../../models/Comment.js");

module.exports = {
    Query: {
        comments: async (parent, args) => {
            return await Comment.find();
        },
        commentByPostId: async (parent, args) => {
            return await Comment.find({ postId: args.postId });
        }
    },
    Mutation: {
        createComment: async (parent, args) => {
            try {
                const { content, author, postId } = args;
                if (content && author && postId) {
                    const comment = new Comment({ content, author, postId });
                    await comment.save();
                    return comment;
                } else {
                    throw new Error("All fields are required");
                }
            } catch (error) {
                return error;
            }
        },
    },
};