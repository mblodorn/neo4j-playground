const { makeAugmentedSchema, neo4jgraphql } = require("neo4j-graphql-js");

const typeDefs = /* GraphQL */ `
  type Person {
    uuid: ID!
    name: String!
    email: String!
    relationships: [Person] @relation(name: "RELATIONSHIP", direction: IN)
  }
`;

const resolvers = {
  Mutation: {
    CreatePerson(object, params, ctx, resolveInfo) {
      return neo4jgraphql(object, params, ctx, resolveInfo);
    }
  }
};

const schema = makeAugmentedSchema({ typeDefs });

module.exports = schema;
