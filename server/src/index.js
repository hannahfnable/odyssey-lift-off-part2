const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const resolvers = require("./resolvers");
const TrackAPI = require("./track-api");
const typeDefs = require('./schema');


async function startApolloServer() {
  const server = new ApolloServer({typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      // this object becomes our resolver's contextValue, the third positional argument
      return {
        dataSources: {
        trackAPI: new TrackAPI({cache}),
        },
      };
    },
  });

  console.log(`
      🚀  Server is running
      📭  Query at ${url}
    `);
}

startApolloServer();
