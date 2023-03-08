const fs = require("node:fs");
const cors = require("cors");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typeDefs = fs.readFileSync("../schema.graphql", "utf-8");

const withType = (type) => (obj) => ({ ...obj, __type: type });

const factions = [
  { id: 1, name: 'some-faction' },
].map(withType('Faction'));

const ships = [
  { id: 1, name: 'Titanic' },
  { id: 2, name: 'Millennium Falcon' },
  { id: 3, name: 'Cutty Sark' },
  { id: 4, name: 'HMS Belfast' },
].map(withType('Ship'));

const paginatedShips = (_source, { search = null, first = null }) => {
  const encodeShipCursor = (ship) => `${ship.id}`;

  const allNodes = search === null
    ? ships
    : ships.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));

  const nodes = first === null
    ? allNodes
    : allNodes.slice(0, first);

  const edges = nodes.map((node) => ({
    node,
    cursor: encodeShipCursor(node),
  }));

  return {
    edges,
    pageInfo: {
      hasNextPage: nodes.length !== allNodes.length,
      hasPreviousPage: false,
      startCursor: edges.at(0)?.cursor,
      endCursor: edges.at(-1)?.cursor,
    },
  };
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Ship: {
      id: ({ id }) => `ship-${id}`,
    },
    Faction: {
      id: ({ id }) => `faction-${id}`,
      ships: paginatedShips,
    },
    Node: {
      __resolveType: (source) => {
        return source.__type;
      },
    },
    Query: {
      hello: () => "world",
      faction: () => factions[0],
      node: (_, { id: idArg }) => {
        const [type, id] = idArg.split('-');
        switch (type) {
          case 'faction':
            return factions.find(faction => faction.id.toString() === id);
          case 'ship':
            return ships.find(faction => faction.id.toString() === id);
          default:
            return null;
        }
      },
      ships: paginatedShips,
    },
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
