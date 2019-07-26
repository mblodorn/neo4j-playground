const { makeAugmentedSchema } = require("neo4j-graphql-js");

const gql = require("graphql-tag");

const typeDefs = `
  type Person {
    name: String!
  }
`;

const schema = makeAugmentedSchema({ typeDefs });

module.exports = schema;
