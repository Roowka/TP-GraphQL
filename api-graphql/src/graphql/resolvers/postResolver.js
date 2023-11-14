const { Post } = require("../../models/Post.js");
const { Comment } = require("../../models/Comment.js");

module.exports = {
    Query: {
        posts: async (parent, args) => {
            const sortBy = {
                createdAt: args.order === 'asc' ? 1 : -1
            };
            return await Post.find().sort(sortBy);
        },
        postById: async (parent, args) => {
            return await Post.findById(args.id);
        }
    },
    Mutation: {
        createPost: async (parent, args) => {
            try {
                const { title, author, link } = args;
                if (title && author && link) {
                    const post = new Post({ title, author, link });
                    await post.save();
                    return post;
                } else {
                    throw new Error("All fields are required");
                }
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