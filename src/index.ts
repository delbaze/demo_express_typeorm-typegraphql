import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
import typeDefs from "./schemas";
import resolvers from "./resolvers";
import datasource from "./lib/datasource";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],

});

// The `listen` method launches a web server.
server.listen().then(async ({ url }) => {

  await datasource.initialize();
  console.log(`🚀  Server ready at ${url}`);
});
