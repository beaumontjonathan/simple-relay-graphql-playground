const fs = require("node:fs");
const cors = require("cors");
const express = require("express");
const { makeExecutableSchema } = require("graphql-tools");
const { graphqlHTTP } = require("express-graphql");

const typeDefs = fs.readFileSync("./schema.graphql", "utf-8");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      hello: () => "world"
    },
    Mutation: {
      newUser: (_, { input: { name, age } }) => ({
        id: "user-id",
        name,
        age
      })
    }
  }
});

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(5000);

console.log("Running a GraphQL API server at http://localhost:5000/graphql");
