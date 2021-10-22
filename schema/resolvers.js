const { UserList, MovieList } = require('../FakeData');
// not using DB, using lodash instead to query FakeData
const _ = require('lodash');

const resolvers = {
  Query: {
    // users() {} Was declared like this before, using arrow functions now
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id; //{id: id}
      const user = _.find(UserList, { id: Number(id) });
      return user;
      // fetch data from an API here! Fetch or Axios maybe?
    },
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name; //{ name: name }
      const movie = _.find(MovieList, { name });
      return movie;
    },
    /*
    ** First time I created this resolver, ran ok!
    friends() {
      return UserList;
    },*/
  },
  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        movie =>
          movie.yearOfPublication >= 2010 && movie.yearOfPublication <= 2020
      );
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      // Adding user after the last one on FakeData.js
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },
    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      let userUpdated;
      UserList.forEach(user => {
        if (user.id === Number(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });
      return userUpdated;
    },
  },
};

module.exports = { resolvers };
