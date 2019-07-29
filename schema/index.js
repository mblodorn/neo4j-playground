const { makeAugmentedSchema } = require("neo4j-graphql-js");

const typeDefs = /* GraphQL */ `
  type Person {
    name: String!
    email: String!
    relationships: [Person] @relation(name: "RELATIONSHIP", direction: IN)
  }
`;

const schema = makeAugmentedSchema({ typeDefs });

module.exports = schema;
