const {users,tasks}=require("../data/index")
module.exports = {
  Query: {
    greeting: () => ["harshan","deepthi"],

    // (obj level has only arfs)

    users: () => users,
    // (obj level has only arfs)
    user: (_, { id }) => users.find((user) => user.id === id),
  },
  Mutation: {

  },
  // field level has only parent (one to many rel)

  // field level has only parent (many to one rel)
  User: {
    tasks: ({ id }) => tasks.filter((task) => task.userId === id),
  },
};
