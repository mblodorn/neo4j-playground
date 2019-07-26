const { makeAugmentedSchema } = require("neo4j-graphql-js");

const typeDefs = /* GraphQL */ `
  type Person {
    name: String!
  }
`;

const schema = makeAugmentedSchema({ typeDefs });

module.exports = schema;
