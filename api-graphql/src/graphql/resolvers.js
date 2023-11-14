const { User } = require("../models/User.js");

const resolvers = {
  Query: {
    /* users: async (parent, args) => {
      return await User.find();
    }, */
  },
  Mutation: {
    /* createUser: async (parent, args) => {
      const { email, name } = args;
      const user = new User({ email, name });
      await user.save();
      return user;
    }, */
  },
};

module.exports = { resolvers };
