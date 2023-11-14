import gql from "graphql-tag";
import graphqlClient from ".";

class QueryManager {
  async createPost(title, author, link) {
    const { data } = await graphqlClient.mutate({
      mutation: gql`
      mutation CreatePost{
        createPost(title: "${title}", author: "${author}", link: "${link}") {
          _id
          author
          createdAt
          link
          title
        }
      }
      `,
    });
    return { ...data };
  }
  async deletePost(postId) {
    const { data } = await graphqlClient.mutate({
      mutation: gql`
        mutation DeletePost {
            deletePost(id: "${postId}")
        }
      `,
    });
    return data.deletePost.id;
  }
  async createComment(content, author, postId) {
    const { data } = await graphqlClient.mutate({
      mutation: gql`
      mutation CreateComment {
        createComment(content: "${content}", author: "${author}", postId: "${postId}") {
          _id
          author
          content
          createdAt
          postId
        }
      }
      `,
    });
    return data;
  }
  async getPosts(order = "asc") {
    const { data } = await graphqlClient.query({
      query: gql`
      query Posts {
        posts(order: "${order}") {
          _id
          author
          createdAt
          link
          title
        }
      }
      `,
    });
    return data.posts;
  }
  async getPost(id) {
    const { data } = await graphqlClient.query({
      query: gql`
      query PostById {
        postById(id: "${id}") {
          _id
          author
          createdAt
          link
          title
        }
      }
      `,
    });
    return data.postById;
  }
  async getPostComments(postId) {
    const { data } = await graphqlClient.query({
      query: gql`
      query CommentByPostId {
        commentByPostId(postId: "${postId}") {
          _id
          author
          content
          createdAt
          postId
        }
      }
      `,
    });
    return data.commentByPostId;
  }
}

export default new QueryManager();
