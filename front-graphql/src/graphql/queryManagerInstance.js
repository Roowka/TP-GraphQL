import gql from "graphql-tag";
import graphqlClient from ".";

class QueryManager {
  async createPost(title, author, link) {
    /* const { data } = await graphqlClient.mutate({
      mutation: gql`
        mutation Mutation {
          
        }
      `,
    }); */

    return {
      id: 1,
      title,
      author,
      link,
      createdAt: "10-06-2023",
    };
  }
  async deletePost(postId) {
    /* const {data} = await graphqlClient.mutate({
      mutation: gql`
        mutation Mutation {
          
        }
      `,
    }); */
    return postId;
  }
  async createComment(content, author, postId) {
    /* const {data} = await graphqlClient.mutate({
      mutation: gql`
        mutation Mutation {
          
        }
      `,
    }); */
    return {
      id: 5,
      content,
      author,
      postId,
    };
  }
  async getPosts(order = "asc") {
    /* const { data } = await graphqlClient.query({
      query: gql`
        query {
          
        }
      `,
    }); */

    return [
      {
        id: 1,
        title: "post 1",
        author: "author 1",
        link: "https://google.com",
        createdAt: "10-11-2023",
      },
      {
        id: 2,
        title: "post 2",
        author: "author 2",
        link: "https://google.com",
        createdAt: "05-06-2023",
      },
      {
        id: 3,
        title: "post 3",
        author: "author 3",
        link: "https://google.com",
        createdAt: "02-06-2023",
      },
      {
        id: 4,
        title: "post 4",
        author: "author 4",
        link: "https://google.com",
        createdAt: "10-06-2023",
      },
    ];
  }
  async getPost(id) {
    /* const { data } = await graphqlClient.query({
      query: gql`
        query {
          
        }
      `,
    }); */

    return {
      id: id,
      title: "post " + id,
      author: "author " + id,
      link: "https://google.com",
      createdAt: "10-06-2023",
    };
  }
  async getPostComments(postId) {
    /* const { data } = await graphqlClient.query({
      query: gql`
        query {
          
        }
      `,
    }); */
    return [
      {
        id: 5,
        content: "commentaire",
        author: "bob",
        postId: 4,
        createdAt: "10-05-2023",
      },
      {
        id: 6,
        content: "commentaire 2",
        author: "bob 2",
        postId: 4,
        createdAt: "10-11-2023",
      },
    ];
  }
}

export default new QueryManager();
