const gql = require("graphql-tag");

const typeDefs = gql`
  scalar Date

  type Query {
    posts: [Post]!
    comments: [Comment]!
  }
  type Post {
    title: String!
    author: String!
    link: String
    createdAt: Date!
  }
  type Comment {
    content: String!
    author: String!
    postId: String!
    createdAt: Date!
  }
  type Mutation {
    createPost(title: String!, author: String!, link: String): Post
    updatePost(id: String): Post
    deletePost(id: String): Boolean

    createComment(content: String!, author: String!, postId: String!): Comment
  }
`;

module.exports = { typeDefs };
