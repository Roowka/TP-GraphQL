const postResolver = require("./resolvers/postResolver");
const commentResolver = require("./resolvers/commentResolver");

const resolvers = {
  Query: {
    ...postResolver.Query,
    ...commentResolver.Query
  },
  Mutation: {
    ...postResolver.Mutation,
    ...commentResolver.Mutation
  },
};

module.exports = { resolvers };
