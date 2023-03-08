const path = require("node:path");

module.exports = {
  src: path.resolve(__dirname, "src"),
  schema: path.resolve(__dirname, "..", "schema.graphql"),
  language: "typescript",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  eagerEsModules: true
};
