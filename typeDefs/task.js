const { gql } = require("apollo-server-express");
module.exports = gql`
  extend type Query {
    
    tasks: [Task!]

    task(id: ID!): Task
  }

  extend type Mutation {
    createTasklist(input: createTasklist): Task!
  }
  input createTasklist {
    userId: ID!
    name: String!
    completed: Boolean!
  }

  type Task {
    id: ID!
    name: String!
    completed: Boolean!
    user: User!
  }
`;
