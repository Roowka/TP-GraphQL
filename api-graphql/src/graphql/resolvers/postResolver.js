const { Post } = require("../../models/Post.js");

module.exports = {
    Query: {
        posts: async (parent, args) => {
            return await Post.find();
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
        updatePost: async (parent, args) => {
            try {
                const { id, title, author, link } = args;
                await Post.findByIdAndUpdate(id, { title, author, link });
            } catch (error) {
                return error;
            }
        },
        deletePost: async (parent, id) => {
            try {
                await Post.findByIdAndDelete(id);
                return true;
            } catch (error) {
                return error;
            }
        }
    },
};