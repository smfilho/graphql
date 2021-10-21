const { UserList, MovieList } = require('../FakeData');

const resolvers = {
  Query: {
    // users() {} Was declared like this before, using arrow functions now
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      // fetch data from an API here! Fetch or Axios maybe?
    },
    /*
    ** First time I created this resolver, ran ok!
    friends() {
      return UserList;
    },*/
  },
};

module.exports = { resolvers };
