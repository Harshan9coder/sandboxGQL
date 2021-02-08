const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const dotEnv = require("dotenv");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

dotEnv.config();

const app = express();
app.use(cors());
app.use(express.json());

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

apolloServer.applyMiddleware({ app, path: "/graphql" });

const PORT = process.env.PORT || 3000;
app.use("/", (req, res, next) => {
  res.send({ message: "hashan hello how r u " });
});
app.listen(PORT, () => {
  console.log(`server listing the port:${apolloServer.graphqlPath}`);
});
