const { Post } = require("../../models/Post.js");
const { Comment } = require("../../models/Comment.js");

module.exports = {
    Query: {
        posts: async (parent, args) => {
            return await Post.find();
        },
        postById: async (parent, args) => {
            return await Post.findById(args.id);
        }
    },
    Mutation: {
        createPost: async (parent, args) => {
            try {
                const { title, author, link } = args;
                const post = new Post({ title, author, link });
                await post.save();
                return post;
            } catch (error) {
                return error;
            }
        },
        deletePost: async (parent, args) => {
            try {
                const deletedPost = await Post.findByIdAndDelete(args.id);
                await Comment.deleteMany({ postId: args.id });
                return deletedPost.id;
            } catch (error) {
                return error;
            }
        }
    },
};