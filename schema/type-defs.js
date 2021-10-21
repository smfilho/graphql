const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
  }

  type Query {
    users: [User!]!
    #creating query to retrieve info of one single user. Arguments!
    user(id: ID!): User!

    # First time creating a query, worked!
    #friends: [User]
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
