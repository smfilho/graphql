const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    #creating query to retrieve info of one single user. Arguments!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!

    # First time creating a query, worked!
    #friends: [User]
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = USA
  }
  
  type Mutation {
    createUser(input: CreateUserInput!): User!
  }

  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
  }
`;

module.exports = { typeDefs };
