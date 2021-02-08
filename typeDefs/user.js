const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    greeting: [String]
    users: [User!]
    user(id: ID): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    tasks: [Task!]
  }
`;
