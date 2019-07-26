const { ApolloServer } = require("apollo-server");

const neo4j = require("neo4j-driver").v1;

const schema = require("./schema/index.js");

const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("neo4j", "graph")
);

const server = new ApolloServer({
  schema,
  context: {
    driver
  }
});

server.listen(3000).then(({ url }) => {
  console.log(url);
});
