const { UserList, MovieList } = require('../FakeData');

const resolvers = {
  Query: {
    // users() {} It was declared like this before
    users: () => {
      return UserList;
    },
    friends() {
      return UserList;
    },
  },
};

module.exports = { resolvers };
